#!/usr/bin/env node
/**
 * check-lock-registry.mjs — guard against a non-portable package-lock.json.
 *
 * Why this exists: installing from a regional npm mirror (e.g. a Tencent Cloud
 * internal mirror) writes that mirror's host into `resolved` URLs. The lock then
 * only works on machines that can reach that host — a green local build can be
 * followed by a failing Cloudflare Pages deploy, with no obvious cause.
 *
 * The build fails here instead, naming the offending entries.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const ALLOWED = /^https:\/\/registry\.npmjs\.org\//;

let lock;
try {
  lock = JSON.parse(readFileSync(`${ROOT}package-lock.json`, 'utf8'));
} catch (error) {
  console.error(`[lock-registry] cannot read package-lock.json: ${error.message}`);
  process.exit(1);
}

const offenders = [];
for (const [path, meta] of Object.entries(lock.packages ?? {})) {
  const resolved = meta?.resolved;
  if (!resolved) continue;
  if (!ALLOWED.test(resolved)) offenders.push({ path: path.replace(/^node_modules\//, '') || '(root)', resolved });
}

if (offenders.length > 0) {
  console.error(`[lock-registry] ${offenders.length} package(s) resolve outside registry.npmjs.org:`);
  for (const { path, resolved } of offenders.slice(0, 20)) {
    console.error(`  - ${path}: ${resolved}`);
  }
  if (offenders.length > 20) console.error(`  … and ${offenders.length - 20} more`);
  console.error('');
  console.error('[lock-registry] Cloudflare Pages cannot reach these hosts, so the deploy would fail.');
  console.error('[lock-registry] Fix: rewrite the resolved URLs to https://registry.npmjs.org/ and re-run the build.');
  process.exit(1);
}

console.log(`[lock-registry] ok — ${Object.keys(lock.packages ?? {}).length} entries, all on registry.npmjs.org`);
