// generate-markdown.mjs — post-build hook for China Filter Hub (Astro → Cloudflare Pages).
//
// Phase Three/Eight of the Markdown content-negotiation implementation:
//   1. Walk the final `dist/` HTML output.
//   2. Identify public, indexable, canonical HTML pages.
//   3. Convert each to a clean Markdown sidecar (dist/{path}/index.md).
//   4. Emit dist/_md/manifest.json mapping public URLs → Markdown assets.
//   5. Validate every file and the manifest (fail the build on critical errors).
//
// Deliberate decisions:
//   - HTML is parsed with `parse5` (already a transitive dependency of Astro via
//     @astrojs/markdown-remark → hast-util-from-html → parse5). No new dependency.
//   - The Markdown serializer is written in-repo so we can strip navigation,
//     headers, footers, scripts, styles and decorative chrome deterministically —
//     exactly what a generic HTML→Markdown library cannot know about this site.
//   - Conversion happens at build time only; the runtime middleware never converts.
//   - Output is deterministic (sorted manifest, stable serialization).

import { parse } from 'parse5';
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const MANIFEST_DIR = join(DIST, '_md');
const MANIFEST_PATH = join(MANIFEST_DIR, 'manifest.json');

// ---------------------------------------------------------------------------
// Eligibility (Phase Two)
// ---------------------------------------------------------------------------

// Error pages are never eligible for Markdown negotiation.
const EXCLUDED_BASENAMES = new Set(['404.html']);

// ---------------------------------------------------------------------------
// parse5 helpers
// ---------------------------------------------------------------------------

function attr(node, name) {
  const a = (node.attrs || []).find((a) => a.name === name);
  return a ? a.value : '';
}

function childElements(node) {
  return (node.childNodes || []).filter((c) => c.tagName);
}

function* walk(node) {
  yield node;
  for (const c of node.childNodes || []) yield* walk(c);
}

function findByTag(root, tagName) {
  for (const n of walk(root)) {
    if (n.tagName === tagName) return n;
  }
  return null;
}

function findMetaDescription(root) {
  for (const n of walk(root)) {
    if (n.tagName === 'meta' && attr(n, 'name').toLowerCase() === 'description') {
      const v = attr(n, 'content');
      if (v) return v;
    }
  }
  return '';
}

// A page is a duplicate canonical variant when its <link rel="canonical"> points
// to a *different* URL than its own pathname. None exist today (all self-ref),
// but the check keeps the eligibility decision metadata-driven, not filename-driven.
function hasNoindex(root) {
  for (const n of walk(root)) {
    if (n.tagName === 'meta') {
      const name = attr(n, 'name').toLowerCase();
      const content = attr(n, 'content').toLowerCase();
      if (name === 'robots' && content.includes('noindex')) return true;
    }
  }
  return false;
}

function canonicalHref(root) {
  for (const n of walk(root)) {
    if (n.tagName === 'link' && attr(n, 'rel').toLowerCase().includes('canonical')) {
      return attr(n, 'href');
    }
  }
  return '';
}

// ---------------------------------------------------------------------------
// Inline serialization
// ---------------------------------------------------------------------------

const SKIP_TAGS = new Set([
  'script', 'style', 'head', 'header', 'footer', 'nav', 'svg', 'noscript', 'link',
  'meta', 'title', 'base', 'iframe', 'template', 'canvas', 'input', 'select',
  'textarea', 'button', 'option', 'object', 'embed', 'track', 'source', 'path',
]);

const INLINE_TAGS = new Set([
  'a', 'strong', 'b', 'em', 'i', 'code', 'del', 's', 'sub', 'sup', 'small',
  'span', 'mark', 'u', 'abbr', 'time', 'img', 'br',
]);

function textContent(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value ?? '';
  return (node.childNodes || []).map(textContent).join('');
}

function inlineCodeSpan(text) {
  if (!text.includes('`')) return `\`${text}\``;
  if (!text.includes('``')) return `\`\` ${text} \`\``;
  return `\`\`\`${text}\`\`\``;
}

function imageMarkdown(node) {
  const src = attr(node, 'src') || attr(node, 'data-src') || '';
  if (!src) return '';
  const alt = attr(node, 'alt') || '';
  return `![${alt}](${src})`;
}

function inline(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value ?? '';
  if (node.nodeName === '#comment') return '';
  const tag = node.tagName;
  if (!tag) return (node.childNodes || []).map(inline).join('');
  if (SKIP_TAGS.has(tag)) return '';

  const children = (node.childNodes || []).map(inline).join('');

  switch (tag) {
    case 'a': {
      const href = attr(node, 'href');
      if (!href || /^javascript:/i.test(href) || href === '#') return children;
      const text = children.trim() || href;
      return `[${text}](${href})`;
    }
    case 'strong':
    case 'b':
      return children ? `**${children}**` : '';
    case 'em':
    case 'i':
      return children ? `*${children}*` : '';
    case 'code':
      return inlineCodeSpan(children);
    case 'del':
    case 's':
      return children ? `~~${children}~~` : '';
    case 'br':
      return '\n';
    case 'img':
      return imageMarkdown(node);
    default:
      return children;
  }
}

function inlineText(node) {
  return inline(node).replace(/[ \t]+/g, ' ').replace(/ *\n */g, ' ').trim();
}

// ---------------------------------------------------------------------------
// Block serialization
// ---------------------------------------------------------------------------

function listMarkdown(node, ordered, depth = 0) {
  const indent = '  '.repeat(depth);
  let out = '';
  let n = 1;
  for (const li of childElements(node)) {
    if (li.tagName !== 'li') continue;
    const marker = ordered ? `${n}.` : '-';
    n += 1;
    let text = '';
    let nested = '';
    for (const c of li.childNodes || []) {
      if (c.tagName === 'ul' || c.tagName === 'ol') {
        nested += listMarkdown(c, c.tagName === 'ol', depth + 1);
      } else if (c.tagName === 'p') {
        text += `${inlineText(c)} `;
      } else if (INLINE_TAGS.has(c.tagName) || c.nodeName === '#text') {
        text += `${inline(c)} `;
      } else {
        nested += `\n${block(c)}\n`;
      }
    }
    out += `${indent}${marker} ${text.replace(/\s+/g, ' ').trim()}\n`;
    if (nested) out += nested;
  }
  return out;
}

function tableMarkdown(node) {
  const headRows = [];
  const bodyRows = [];

  const collectRows = (el, arr) => {
    for (const c of el.childNodes || []) {
      if (c.tagName === 'tr') arr.push(c);
      else if (c.childNodes) collectRows(c, arr);
    }
  };

  const collect = (el) => {
    for (const c of el.childNodes || []) {
      if (c.tagName === 'thead') collectRows(c, headRows);
      else if (c.tagName === 'tbody' || c.tagName === 'tfoot') collectRows(c, bodyRows);
      else if (c.tagName === 'tr') bodyRows.push(c);
      else if (c.childNodes) collect(c);
    }
  };
  collect(node);

  const allRows = [...headRows, ...bodyRows];
  if (allRows.length === 0) return '';

  const cellsOf = (row) =>
    (row.childNodes || [])
      .filter((c) => c.tagName === 'th' || c.tagName === 'td')
      .map((c) =>
        inlineText(c).replace(/\|/g, '\\|').replace(/\n/g, ' '),
      );

  const hasHeader = headRows.length > 0;
  const headerRow = hasHeader ? headRows[0] : allRows[0];
  const dataRows = hasHeader ? bodyRows : allRows.slice(1);
  const headerCells = cellsOf(headerRow);
  if (headerCells.length === 0) return '';

  const lines = [];
  lines.push(`| ${headerCells.join(' | ')} |`);
  lines.push(`| ${headerCells.map(() => '---').join(' | ')} |`);
  for (const r of dataRows) lines.push(`| ${cellsOf(r).join(' | ')} |`);
  return `${lines.join('\n')}\n`;
}

function preMarkdown(node) {
  const codeNode = (node.childNodes || []).find((c) => c.tagName === 'code');
  const text = textContent(codeNode || node);
  const classAttr = codeNode ? attr(codeNode, 'class') : '';
  const lang = (classAttr.match(/language-([\w+-]+)/) || [])[1] || '';
  return `\`\`\`${lang}\n${text.replace(/\n$/, '')}\n\`\`\`\n`;
}

let skipNodeRef = null;

function block(node) {
  if (!node) return '';
  if (node === skipNodeRef) return '';
  if (node.nodeName === '#text') {
    const t = (node.value || '').replace(/[ \t]+/g, ' ').trim();
    return t ? `${t}\n` : '';
  }
  if (node.nodeName === '#comment') return '';

  const tag = node.tagName;
  if (!tag) return (node.childNodes || []).map(block).join('');
  if (SKIP_TAGS.has(tag)) return '';

  // Inline content at block level (e.g. a bare <a> button or card link) → one
  // Markdown line rendered inline, so links/code/emphasis are preserved.
  if (INLINE_TAGS.has(tag) && tag !== 'br' && tag !== 'img') {
    const t = inline(node).trim();
    return t ? `${t}\n` : '';
  }

  switch (tag) {
    case 'h1': return `# ${inlineText(node)}\n`;
    case 'h2': return `## ${inlineText(node)}\n`;
    case 'h3': return `### ${inlineText(node)}\n`;
    case 'h4': return `#### ${inlineText(node)}\n`;
    case 'h5': return `##### ${inlineText(node)}\n`;
    case 'h6': return `###### ${inlineText(node)}\n`;
    case 'p': {
      const t = inlineText(node);
      return t ? `${t}\n` : '';
    }
    case 'br':
      return '\n';
    case 'hr':
      return '---\n';
    case 'ul':
    case 'ol':
      return listMarkdown(node, tag === 'ol');
    case 'table':
      return tableMarkdown(node);
    case 'pre':
      return preMarkdown(node);
    case 'blockquote': {
      const inner = (node.childNodes || [])
        .map((c) => block(c))
        .join('\n')
        .trim();
      return inner
        .split('\n')
        .map((l) => (l ? `> ${l}` : '>'))
        .join('\n') + '\n';
    }
    case 'figure': {
      const md = (node.childNodes || []).map(block).join('\n').trim();
      return md ? `${md}\n` : '';
    }
    case 'figcaption': {
      const t = inlineText(node);
      return t ? `*${t}*\n` : '';
    }
    case 'img':
      return `${imageMarkdown(node)}\n`;
    case 'label': {
      const t = inlineText(node);
      return t ? `- ${t}\n` : '';
    }
    default:
      return (node.childNodes || []).map(block).join('');
  }
}

// ---------------------------------------------------------------------------
// Document conversion
// ---------------------------------------------------------------------------

function htmlToMarkdown(html) {
  const doc = parse(html);
  const body = findByTag(doc, 'body') || doc;
  const description = findMetaDescription(doc);

  // Promote the page's single H1 to the document title, then skip it in the body
  // render so it is not duplicated. The meta description follows as a summary.
  const h1 = findByTag(body, 'h1');
  const h1Text = h1 ? inlineText(h1) : '';

  skipNodeRef = h1 || null;
  let bodyMd = (body.childNodes || []).map(block).join('').trim();
  skipNodeRef = null;

  let out = '';
  if (h1Text) out += `# ${h1Text}\n\n`;
  if (description) out += `> ${description.trim()}\n\n`;
  out += bodyMd;

  // Normalise blank runs and trailing whitespace; single trailing newline.
  return `${out.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const FATAL_PATTERNS = [
  { re: /<script/i, label: 'script leakage' },
  { re: /<style/i, label: 'style leakage' },
  { re: /<nav\b/i, label: 'navigation leakage' },
  { re: /<header\b/i, label: 'header leakage' },
  { re: /<footer\b/i, label: 'footer leakage' },
  { re: /<!doctype/i, label: 'doctype leakage' },
  { re: /<html\b/i, label: 'html tag leakage' },
];

function validateMarkdown(url, md) {
  const problems = [];
  for (const { re, label } of FATAL_PATTERNS) {
    if (re.test(md)) problems.push(label);
  }
  if (!/^#+\s/m.test(md)) problems.push('missing heading');
  if (md.trim().length < 40) problems.push('insufficient content');
  // Generic leftover HTML tag (warning-level; surfaced but not fatal).
  // Only match tag-shaped tokens: `<` + ASCII letter. A less-than sign followed
  // by a digit (e.g. a spec value like "<110 Pa") is literal content, not a tag.
  const leftoverTags = md.match(/<[a-zA-Z]/g) || [];
  return { problems, leftoverTags };
}

// ---------------------------------------------------------------------------
// File walking
// ---------------------------------------------------------------------------

function walkFiles(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, out);
    else out.push(full);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (!existsSync(DIST)) {
    console.error('✗ dist/ not found — run `astro build` first.');
    process.exit(1);
  }

  // Idempotent: clear any previously generated Markdown sidecars and manifest.
  rmSync(MANIFEST_DIR, { recursive: true, force: true });
  for (const f of walkFiles(DIST)) {
    if (f.endsWith('.md')) rmSync(f, { force: true });
  }

  const htmlFiles = walkFiles(DIST).filter((f) => f.endsWith('.html'));

  let scanned = 0;
  let generated = 0;
  const excluded = [];
  const manifest = {};
  const warnings = [];

  for (const htmlPath of htmlFiles) {
    const rel = relative(DIST, htmlPath);
    const base = rel.split('/').pop();
    if (EXCLUDED_BASENAMES.has(base)) {
      excluded.push({ url: rel, reason: 'error page (404)' });
      continue;
    }

    const html = readFileSync(htmlPath, 'utf8');
    const doc = parse(html);

    scanned += 1;

    if (hasNoindex(doc)) {
      excluded.push({ url: rel, reason: 'noindex' });
      continue;
    }

    // Duplicate canonical variant detection (none today, but metadata-driven).
    const canon = canonicalHref(doc);
    if (canon) {
      try {
        const own = new URL(rel.replace(/index\.html$/, ''), 'https://x/').pathname;
        const canonPath = new URL(canon).pathname;
        if (canonPath && canonPath !== '/' && canonPath !== own && !canonPath.endsWith(own)) {
          excluded.push({ url: rel, reason: `duplicate canonical (${canon})` });
          continue;
        }
      } catch {
        // unparseable canonical — ignore
      }
    }

    const md = htmlToMarkdown(html);
    const { problems, leftoverTags } = validateMarkdown(rel, md);

    if (problems.length > 0) {
      console.error(`✗ FAIL ${rel}: ${problems.join(', ')}`);
      process.exit(1);
    }
    if (leftoverTags.length > 0) {
      warnings.push(`${rel}: leftover tag(s) ${[...new Set(leftoverTags)].join(', ')}`);
    }

    const mdRel = rel.replace(/\.html$/, '.md');
    const mdPath = join(DIST, mdRel);
    mkdirSync(dirname(mdPath), { recursive: true });
    writeFileSync(mdPath, md);
    generated += 1;

    // URL mapping: dist/index.html → "/"; dist/a/b/index.html → "/a/b/".
    const dir = dirname(rel);
    const url = dir === '.' ? '/' : `/${dir}/`;
    manifest[url] = `/${mdRel}`;
  }

  // Manifest validation: every value must exist on disk; keys are normalised URLs.
  for (const [url, asset] of Object.entries(manifest)) {
    if (!url.startsWith('/')) {
      console.error(`✗ FAIL manifest: key not absolute URL: ${url}`);
      process.exit(1);
    }
    const target = join(DIST, asset.replace(/^\//, ''));
    if (!existsSync(target)) {
      console.error(`✗ FAIL manifest: ${url} → ${asset} does not exist`);
      process.exit(1);
    }
  }

  mkdirSync(MANIFEST_DIR, { recursive: true });
  writeFileSync(
    MANIFEST_PATH,
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  // Validate the manifest is parseable JSON.
  JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));

  for (const w of warnings) console.warn(`⚠ ${w}`);

  console.log(
    `✓ Markdown negotiation assets generated: ${generated} pages, ` +
    `${excluded.length} excluded, manifest → ${relative(ROOT, MANIFEST_PATH)}`,
  );
}

main();
