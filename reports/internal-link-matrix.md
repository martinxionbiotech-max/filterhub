# FilterHub 内链矩阵（optim3 · Pillar/Cluster）

> 范围：`filterhub`（Astro · 136 页）· 7 指南 · 13 品类 · 104 SKU
> 日期：2026-10-30 · 纪律：保留 URL/架构 · 单一来源表双向推导不漂移（`src/data/link-map.ts`）

## 1. 支柱归属确认（7 指南）

| 支柱 | 指南数 | 指南 |
|---|---|---|
| Selection（选型） | 2 | air-filter-selection · hepa-cleanroom-sourcing |
| Standards（质量测试/标准） | 3 | filter-efficiency-grades · hepa-vs-ulpa · filter-media-selection |
| Cleanroom（洁净室） | 1 | cleanroom-filtration-solutions |
| OEM | 1 | oem-procurement-process |

## 2. 矩阵规模

| 方向 | 链接数 | 覆盖 |
|---|---|---|
| 指南 → 指南（related[] 双向/交叉） | 26 | 7 指南全部 ≥2 入链 |
| 品类 → 指南（categoryGuides） | 21 | 13 品类页 + 104 SKU 页 |
| 指南 → 品类（guideCategories 反向） | 21 | 7 指南全部 ≥1 品类 |
| 指南 → 重要 SKU（guideSkus） | 19 | 7 指南全部 2–3 top SKU |
| **合计（源→目标边）** | **87** | 136 页全接入 |

## 3. 指南 → 指南双向矩阵（related[]）

| 源指南（支柱） | 出链（related →） |
|---|---|
| air-filter-selection（Selection） | filter-efficiency-grades · filter-media-selection · hepa-cleanroom-sourcing · oem-procurement-process |
| hepa-cleanroom-sourcing（Selection） | hepa-vs-ulpa · cleanroom-filtration-solutions · air-filter-selection · filter-media-selection |
| filter-efficiency-grades（Standards） | hepa-vs-ulpa · air-filter-selection · filter-media-selection |
| hepa-vs-ulpa（Standards） | filter-efficiency-grades · hepa-cleanroom-sourcing · cleanroom-filtration-solutions |
| filter-media-selection（Standards） | filter-efficiency-grades · air-filter-selection · hepa-cleanroom-sourcing · oem-procurement-process |
| cleanroom-filtration-solutions（Cleanroom） | hepa-cleanroom-sourcing · hepa-vs-ulpa · filter-efficiency-grades · oem-procurement-process |
| oem-procurement-process（OEM） | air-filter-selection · hepa-cleanroom-sourcing · filter-media-selection · cleanroom-filtration-solutions |

孤立节点复查：0（此前 filter-media-selection / oem-procurement-process 零入链，现已 ≥3 入链）。

## 4. 指南 → 品类（guideCategories，指南页「Shop the category」区块）

| 指南 | 品类（出链） |
|---|---|
| air-filter-selection | air-filters · filter-media |
| filter-efficiency-grades | air-filters · cabin-filters · hvac-filters · hepa-filters · pocket-filters |
| oem-procurement-process | cabin-filters · oil-filters · fuel-filters · hydraulic-filters · transmission-filters · liquid-cartridges |
| hepa-cleanroom-sourcing | hepa-filters · cleanroom-equipment |
| hepa-vs-ulpa | hepa-filters · cleanroom-equipment |
| cleanroom-filtration-solutions | hepa-filters · cleanroom-equipment |
| filter-media-selection | activated-carbon · filter-media |

## 5. 品类 → 指南（categoryGuides，品类页「Related buyer guides」+ SKU 页「Related resources」）

| 品类 | 指南（出链） |
|---|---|
| air-filters | air-filter-selection · filter-efficiency-grades |
| cabin-filters | filter-efficiency-grades · oem-procurement-process |
| oil-filters | oem-procurement-process |
| fuel-filters | oem-procurement-process |
| hydraulic-filters | oem-procurement-process |
| transmission-filters | oem-procurement-process |
| hvac-filters | filter-efficiency-grades |
| hepa-filters | hepa-cleanroom-sourcing · hepa-vs-ulpa · filter-efficiency-grades · cleanroom-filtration-solutions |
| activated-carbon | filter-media-selection |
| pocket-filters | filter-efficiency-grades |
| filter-media | filter-media-selection · air-filter-selection |
| liquid-cartridges | oem-procurement-process |
| cleanroom-equipment | cleanroom-filtration-solutions · hepa-cleanroom-sourcing · hepa-vs-ulpa |

## 6. 指南 → 重要 SKU（guideSkus，指南页「Featured SKUs」区块）

| 指南 | top SKU（出链） |
|---|---|
| air-filter-selection | 42N-62-15470 · 1542743 · P822768 |
| hepa-cleanroom-sourcing | AIRY-GEL-HEPA · EAWAY-HEPA-61061070 |
| filter-efficiency-grades | AIRY-GEL-HEPA · KLC-HT-SEPARATOR · EAWAY-HEPA-61061070 |
| hepa-vs-ulpa | AIRY-GEL-HEPA · EAWAY-HEPA-61061070 |
| filter-media-selection | AIRY-NEEDLE-COTTON · AIRY-HT-FIBERGLASS · AIRY-AC-MEDIA |
| cleanroom-filtration-solutions | EAWAY-FFU-4848 · KLC-CLEAN-BENCH · KLC-BIOSAFETY |
| oem-procurement-process | 15208-AD200 · 23401-1441 · SH66279 |

## 7. 意图层级（8 组关键词三层分工，title/desc/H1 差异化核验）

| 关键词组 | 品类页（hub） | 指南页（流程） | SKU 页（落地） |
|---|---|---|---|
| HEPA | hepa-filters「HEPA / ULPA Filters」 | hepa-cleanroom-sourcing「Sourcing…」 | AIRY-GEL-HEPA 等 |
| ULPA | hepa-filters | hepa-vs-ulpa「HEPA vs ULPA…」 | YT-ULPA-U15 等 |
| cleanroom | cleanroom-equipment「Cleanroom Equipment」 | cleanroom-filtration-solutions | KLC-FFU / EAWAY-FFU-4848 |
| air filter | air-filters「Air Filters (Engine Intake)」 | air-filter-selection「Selecting…」 | 42N-62-15470 等 |
| activated carbon | activated-carbon「Activated Carbon Filters」 | filter-media-selection | AIRY-AC-PANEL |
| filter media | filter-media「Filter Media」 | filter-media-selection | AIRY-NEEDLE-COTTON |
| efficiency class | hvac-filters「HVAC Filters」 | filter-efficiency-grades | AIRY-FB-PANEL |
| OE number | oil-filters「Oil Filters」 | oem-procurement-process | 15208-AD200 |

核验结果：8 组三层 title/H1 全部差异化，无同词同位竞争（脚本抽验 dist 全站）。

## 8. 断链核验

- `dist` 站内 href 全解析：3204 条内部链接，**0 断链**。
- 指南页新增「Key takeaway」「Featured SKUs」「Shop the category」「Related pages」区块已渲染（抽验 air-filter-selection 页）。
- Article schema 增补 `articleSection` + `about`（标准实体 EN 1822/ISO 16890 等）；Product schema 增补 `material` + `additionalProperty`。
