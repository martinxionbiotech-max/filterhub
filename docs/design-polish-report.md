# Design Polish Report — FilterHub

Batch: `design-polish` · 2026-10-30
Scope: B2B industrial design system · H-tag discipline · table-isation · card-isation · responsive polish.
Discipline: no content or URL changes; incremental design; verified with `npm run build`.

## 1. Design system

Adopted the deep-navy × industrial-orange B2B industrial palette, deepened from the existing skeleton.

| Token | Value |
|---|---|
| Primary navy | `#0F2A43` (scale `--navy-900…--navy-50`) |
| Industrial orange | `#E8622C` (scale `--orange-600…--orange-50`) |
| Ink / muted / line | `#122236` / `#55677A` / `#E2E8F0` |
| Data-status badges | verified `#0B6E4F` · catalog-confirmed `#0E7490` · reference `#B45309` · pending `#64748B` |

Typography & spacing token system introduced (8pt-ish spacing scale, clamp-based heading
scale `--fs-h1/h2/h3`, `--lh-tight/body`, radius + shadow tiers).

Component classes unified in `BaseLayout.astro` global stylesheet:
- **Hero** (`.hero`) — navy gradient, orange bottom rule, on-dark eyebrow/buttons.
- **Sections** (`.section`, `.section-head`) — consistent vertical rhythm and header rows.
- **Cards** (`.card`, `.card--link`, `.grid--cards`, `.grid--stats`) — hover lift + border accent.
- **Tables** (`.table-wrap` + `table.data`) — captioned, striped-hover, scrollable wrapper.
- **Buttons** (`.btn-primary`, `.btn-navy`, `.btn-ghost`).
- **Badges** (`.badge--verified/catalog-confirmed/reference/pending`) via `StatusBadge.astro`.
- **TOC** (`.toc`) for guide pages.
- **Callouts** (`.notice`, `.notice--navy`).

New shared components: `Header.astro` (sticky, active-nav, brand mark), `Footer.astro`
(3-column legal/data grid), `CategoryIcon.astro` (13 inline line icons), `StatusBadge.astro`.
Added `favicon.svg` and recoloured `og-default.svg` to the navy/orange brand.

## 2. H-tag fixes

Pre-existing structure was already single-H1 with no level skips (verified: 135 pages,
0 multi-H1, 0 level skips). Hardening applied:

- **Guides** (`guides/[slug].astro`): added an in-page **table of contents** (`.toc`) with
  stable anchor IDs (`#section`, `#sourcing-perspective`, `#related-guides`, `#sources`),
  giving long-form guides a clear heading hierarchy / directory feel.
- **Homepage** "Five questions": upgraded pseudo-heading `<strong>` items to real `<h3>`
  headings (correct `h2 → h3` descent).
- All headings carry `scope`/semantic `h1→h2→h3` with no skipped levels (re-scanned post-build).

## 3. Table-isation

Pages now using semantic data tables (previously bullet lists / prose):

| Page(s) | Table |
|---|---|
| Homepage | Strength → Capability/benefit table |
| 13 category pages | New "Category at a glance" table (efficiency framework, sub-categories, SKU count, grades seen, materials, application medium) + SKU list table (SKU / name / efficiency / status) |
| 104 SKU pages | Core-parameters table + OE cross-reference table (restyled to `table.data`, confirmed-only fields, status badges) |
| Company | Data-status legend table + contact table |
| Factory | Production-capability table |
| OEM | Customisation-options table |
| Contact | Contact-channel table |

All tables are wrapped in `.table-wrap` (`overflow-x: auto`) for mobile horizontal scroll.

## 4. Card-isation

- **Category cards** (homepage + product centre): icon + name + summary + SKU-count pill;
  4→2→1 responsive collapse via `grid--cards`.
- **Guide cards** (guides index): grouped by pillar (Selection / Standards / Cleanroom / OEM)
  with eyebrow + title + description.
- **Homepage hero + strength data cards**: 4 stat cards (total SKUs, categories covered,
  efficiency framework, data discipline) overlapping the hero.
- Hover states: border accent, shadow lift, translate; icon/count recolour on hover.

## 5. Responsive & detail

- Mobile breakpoint `720px`: header stacks, footer grid 3→1, hero padding tightens, table
  min-width drops to `420px` inside scroll wrapper.
- Card grids: `repeat(auto-fill, minmax(260px, 1fr))` → 4/3/2/1 column degradation.
- No `<img>` tags in source (all glyphs are inline SVG with `aria-hidden`); OG image and
  favicon are SVG. No alt-text gaps to fix.
- Sticky header with `aria-current` active state; breadcrumbs with BreadcrumbList JSON-LD.

## 6. Verification

- `npm run build`: **136 pages, 0 errors**.
- H-level re-scan: **single H1 on all pages, 0 level skips**.
- Broken-link scan: **0 broken internal page links** (asset paths excluded).
- Table/card render spot-checks: hero, stat cards, category cards, at-a-glance tables,
  SKU tables, badges, guide TOC all present in `dist/`.
