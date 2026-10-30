# Enrichment & De-sourcing Report

**Batch:** desource-enrich (2026-10-30) — FilterHub main site (Astro) + data subsite (MkDocs)
**Scope:** 104 structured SKUs · 13 main categories · 5 source-site records removed from public rendering

---

## 1. De-source (source-site info removal)

### 1.1 Source identifiers removed from page display
| Location | Change |
|---|---|
| `filterhub/src/pages/products/[category]/[slug].astro` | Removed `source: {company}` inline annotation; removed the `Source page: {source_url}` link from Related resources; replaced "Efficiency class (source-labelled)" with neutral "Efficiency class"; removed "No confirmed technical parameters … in the source catalogue" / "not published" fallback copy; neutralised the quality-documents and OEM-terms "source" wording. |
| `filterhub/src/data/products.json` + `data.filterhub/data/products.json` | `_meta.sources` cleared to `[]`; `_meta.description` / `_meta.note` rewritten to drop "5 站深度抓取"; per-record `company` + `source_url` retained only as archive (not rendered). |
| `filterhub/src/data/categories.ts` | Removed "5-site crawl corpus" header; replaced every "source catalogue … not published … remain pending" clause with neutral, filled-language copy (19 replacements). |
| `filterhub/src/data/guides.ts` | Removed 7 × "5-site crawl corpus (docs/sites/)" source strings; neutralised "crawl corpus (airyfilter / yitong / cleanroom-ffu)". |
| `filterhub/src/pages/{index,company,factory,oem,disclaimer}.astro` | Removed "traceable source" / "source catalogue" / "not published by the source" / "provisional pending business-licence verification" wording. |
| `filterhub/docs/sites/*.md` (5 files) | Moved out of public render path → `crawls/sites-archive/` (kept in repo as archive, not deleted). |

### 1.2 Data subsite evidence source neutralised
- `data.filterhub/scripts/build-product-pages.py` now renders `**Evidence source**: manufacturer catalog record` instead of the source-site domain; removed the `来源站` / `来源 URL` columns from product pages and index; SKU index and dataset landing no longer list the 5 sites.
- `data.filterhub` `source` dictionary entity changed from `site: hbxueyuan.com/…` to neutral `catalog_record: manufacturer catalog record`.

### 1.3 Residual scan (page body)
- Main site `dist/` — source-site names: **0 files**
- Data site `site/` (HTML/MD body) — source-site names: **0 files** (only the archived `data/products.json` retains `source_url`/`company` per the keep-archive directive)

---

## 2. Field enrichment (relaxed completeness — no `pending` left)

### 2.1 Before → after fill-rate

| Field | Before (pending) | After (pending) | Filled |
|---|---|---|---|
| efficiency_class | 66 / 104 | 0 / 104 | 104/104 |
| spec (dimension / params) | 83 / 104 | 0 / 104 | 104/104 |
| material | 74 / 104 | 0 / 104 | 104/104 |
| filter_media | 57 / 104 | 0 / 104 | 104/104 |
| moq | 85 / 104 | 0 / 104 | 104/104 |
| application | 0 / 104 | 0 / 104 | 104/104 |

**Result:** 0 residual `pending` data-status entries across all 104 SKUs.

### 2.2 Data source policy (per user directive)
- Real data where available (manufacturer catalogue values already in the dataset, e.g. AIRY panel/pocket dimensions + airflow + pressure-drop + arrestance %, EAWAY HEPA 610×610×70/292 + price, YT metal-cartridge μm ratings, KLC efficiency grades) **kept intact**.
- Missing values filled with **industry-typical procurement values** (e.g. ISO 5011 ≥99.9% primary for engine intake, ISO 16890 ePM2.5 for cabin, 4–10 μm fuel, ≥99% @ 20 μm oil, 10 μm β≥200 hydraulic, 25–40 μm transmission) — no field left `pending`.
- `data_status` normalised to `reference` for typical fills; catalogue-sourced values remain `verified` / `catalog-confirmed`.

### 2.3 Description layer
- All 104 SKU descriptions rewritten: source-free, parameter-rich (efficiency + dimension + media + construction + application + MOQ), each with a category-specific sourcing advice sentence. The "not published / remain pending / source confirms" framing is gone.

### 2.4 Chinese-web search
- Channels used per `chinese-web-research` skill: **Sogou curl** (usable) + **Bing CN curl** (returned result counts, low snippet yield) — `web_search` (no provider) and Tavily (deactivated) unavailable.
- Queries: `河北雪缘滤清器 清河 汽车滤清器 型号`, `广州艾瑞滤材 AIRY 空气过滤 尺寸`, `石家庄一通滤清器 空气过滤器 效率 尺寸` (+ company/spec variants).
- Hit quality: Sogou returned company-snapshot + government-list results but no additional per-SKU spec data beyond what the crawl corpus already held; fields were therefore completed with industry-typical values per the relaxed policy.

---

## 3. Data subsite full-English rewrite

- `mkdocs.yml`: `language: zh → en`, site description + nav labels + SKU entries fully English.
- `docs/*.md` (index, schema-design, field-dictionary, data-status, design-report, reference/filter-media, reference/test-standards, llms.txt): all Chinese cleared → English.
- All 104 SKU pages + 13 category pages + SKU index + data landing regenerated in English.
- CJK `equipment_type` values in OE references (装载机/卡车/空压机/… 20 terms) translated to English in the dataset.
- CJK search-tokeniser assets removed post-build by `hooks/build_hook.py`.

### 3.1 Chinese-zero verification
- `data.filterhub/docs/` + `mkdocs.yml` — Chinese characters: **0**
- `data.filterhub/site/` build — Chinese in text content: **0** (remaining `grep` hits are binary gzip `sitemap.xml.gz` and PNG `favicon.png`, not text)

---

## 4. Build & integrity verification

| Check | Result |
|---|---|
| Main site build (Astro) | ✅ 136 pages |
| Data site build (MkDocs) | ✅ 104 SKU pages + 13 categories + refs |
| Source-site names in rendered body | ✅ 0 (both sites) |
| Data-site Chinese characters | ✅ 0 |
| Broken internal links (main site) | ✅ 0 |
| Broken internal links (data site) | ✅ 0 |
| Fill-rate `pending` residual | ✅ 0 |
