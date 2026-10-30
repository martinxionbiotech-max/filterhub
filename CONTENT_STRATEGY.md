# CONTENT_STRATEGY.md — 品牌与五支柱架构（终版 · Phase 2–4）

> **范围**：`filterhub`（Astro · 150 页）· 兄弟仓 `data.filterhub`
> **日期**：2026-10-30
> **性质**：品牌定位 + 信息架构（IA）终版。批 1 出架构设计，批 2 落地五支柱页 + 首页 + 导航，批 3 落地商业转化页，批 4 落地 SEO/AIO 技术层与工具。
> **纪律**：不虚构公司事实/产能/认证/测试结果；平台 vs 制造商边界全站显式化。

---

## 1. 品牌定位（已落地）

### 1.1 主站品牌 — China Filter Hub（平台）

- **定位句**：A filtration knowledge and product sourcing platform connecting product selection, technical understanding, and manufacturing supply.
- **落地**：首页 hero H1 + 定位段；`site.positioning` 字段。

### 1.2 制造供应实体 — Qinghe Huiying（汽车滤清制造）

- **定位句**：Core automotive filter manufacturing and supply partner featured on China Filter Hub.
- **法律实体**：Qinghe County Huiying Automotive Parts Co., Ltd.（信用代码 `91130534MA0958NT84`），与 `carfilterspro.com` 同一法律实体、两个店面。
- **落地**：`/company/` 法务披露 + Organization schema + footer disclosure。

### 1.3 边界（全站显式化）

| 断言 | 是否可发 | 落地 |
|---|---|---|
| Huiying 制造汽车滤清 | ✅ | P1 品类 + /factory/ + /oem/ |
| Huiying 制造工业/HVAC/HEPA/ULPA/液体滤 | ❌ 不暗示 | 每个支柱页 `boundary` 字段 + 首页 scope boundary notice |
| 平台覆盖工业/HVAC/HEPA/ULPA/液体内容与数据 | ✅ | P3 支柱（platform content）|

- `site.manufacturerScope` 边界在 `pillars.ts` 各支柱 `boundary` + 首页 notice + footer disclosure 三处落地。
- 工业/HVAC/HEPA/ULPA/液体品类页不写 Huiying 制造声明；OEM/私牌能力描述限定汽车滤清 + 滤材。

---

## 2. 五支柱架构（P1–P5，已落地为 `/pillars/{slug}/`）

| 支柱 | 名称 | 落地 URL | 现有内容映射 |
|---|---|---|---|
| P1 | Automotive Filters | `/pillars/automotive-filters/` | 6 品类 · 50 SKU · 3 指南 |
| P2 | Filter Technology | `/pillars/filter-technology/` | 1 品类 · 6 SKU · 3 指南 |
| P3 | Industrial & HVAC Filtration | `/pillars/industrial-hvac/` | 6 品类 · 48 SKU · 3 指南 |
| P4 | OEM & Wholesale Sourcing | `/pillars/oem-wholesale/` | 2 指南 · /oem/ /private-label/ /wholesale/ /rfq/ /contact/ |
| P5 | Qinghe Huiying Manufacturing | `/pillars/qinghe-huiying/` | /factory/ /company/ + 汽车品类 |
| — | 跨支柱枢纽页 | `/` `/products/` `/guides/` `/pillars/` | 4 页 |

**覆盖核对**：131/131 内容页映射到支柱（100%）；合规/系统页按设计不入支柱。

### 2.1 品类 → 支柱映射（13 品类）

| 品类 | 支柱 | SKU |
|---|---|---|
| air-filters | P1 | 12 |
| cabin-filters | P1 | 8 |
| oil-filters | P1 | 7 |
| fuel-filters | P1 | 8 |
| hydraulic-filters | P1 | 7 |
| transmission-filters | P1 | 8 |
| filter-media | P2 | 6 |
| hvac-filters | P3 | 14 |
| hepa-filters | P3 | 15 |
| activated-carbon | P3 | 6 |
| pocket-filters | P3 | 5 |
| liquid-cartridges | P3 | 2 |
| cleanroom-equipment | P3 | 6 |

### 2.2 指南 → 支柱映射（11 指南）

| 指南 | 五支柱 |
|---|---|
| air-filter-selection | P1 |
| cabin-vs-engine-air-filter | P1 |
| oil-filter-types | P1 |
| filter-efficiency-grades | P2 |
| filter-media-selection | P2 |
| efficiency-vs-pressure-drop | P2 |
| hepa-cleanroom-sourcing | P3 |
| hepa-vs-ulpa | P3 |
| cleanroom-filtration-solutions | P3 |
| oem-procurement-process | P4 |
| filter-moq-lead-time | P4 |

> `guides.ts` 的 `pillar` 字段保留旧 4 值（Selection/Standards/Cleanroom/OEM）作为「集群标签」用于 `/guides/` 索引分组；五支柱归属由 `pillars.ts` 的 `pillarForGuide()` 解析，两者并存。`/guides/` 索引按 `pillar` 字段分组渲染（批 2 已接 `pillarKey` 思路，见 INTERNAL_LINK_MAP）。

---

## 3. 每支柱主题清单（执行书 vs 现有内容对照，终版）

> 标注：**REUSE** 复用 · **IMPROVE** 增强 · **CREATE** 已新建（批 2–4）· **BACKLOG** 未建（进 FUTURE_CONTENT_BACKLOG）。

### 3.1 P1 · 汽车滤清（35%）

| 主题 | 状态 |
|---|---|
| Engine Air Filter: Types, Materials and Selection | REUSE（air-filter-selection）|
| Cabin Air Filter vs Engine Air Filter | **CREATE ✅**（cabin-vs-engine-air-filter）|
| Oil Filter Types and Filtration Performance | **CREATE ✅**（oil-filter-types）|
| How to Choose the Right Automotive Air Filter | REUSE |
| Automotive Filter Media: Paper, Nonwoven, Synthetic | MERGE（P2 filter-media-selection 复用）|
| Automotive Filter Dimensions and OE Cross-Reference | REUSE / IMPROVE |
| Pleated vs Non-Pleated Automotive Filters | **BACKLOG** |
| Heavy-Duty Truck Air Filters | **BACKLOG**（复用 air-filters heavy-duty 子类）|

### 3.2 P2 · 滤清技术（20%）

| 主题 | 状态 |
|---|---|
| Filter Media Types and Their Applications | REUSE |
| Filtration Efficiency vs Pressure Drop | **CREATE ✅**（efficiency-vs-pressure-drop）|
| Initial vs Final Pressure Drop | **BACKLOG** |
| Dust Holding Capacity Explained | **BACKLOG** |
| Filter Micron Rating | **BACKLOG** |
| Synthetic vs Cellulose Filter Media | REUSE / IMPROVE |
| How Humidity Affects Filter Performance | **BACKLOG** |
| Filter Efficiency Test Methods Explained | REUSE / IMPROVE |

### 3.3 P3 · 工业与 HVAC（15%）

| 主题 | 状态 |
|---|---|
| Industrial Air Filter Types and Applications | **BACKLOG**（复用 hvac-filters）|
| HVAC Filter Grades and Selection | REUSE |
| HEPA vs ULPA Filters | REUSE |
| Bag Filters vs Panel Filters | **BACKLOG** |
| Cartridge Filter Types and Applications | REUSE |
| Liquid Filtration: Cartridge Selection | REUSE |
| Pre-Filters vs Fine Filters | **BACKLOG** |

### 3.4 P4 · OEM 与批发（25%）

| 主题 | 状态 |
|---|---|
| Automotive Filter OEM Manufacturing Guide | REUSE（oem-procurement-process）|
| How to Find a Filter Manufacturer in China | **BACKLOG** |
| Private Label Automotive Filters | **CREATE ✅**（/private-label/ 专页）|
| Automotive Filter Wholesale Buying Guide | **CREATE ✅**（/wholesale/ 专页）|
| Custom Automotive Air Filter Development | REUSE（/oem/ 定制节）|
| OEM vs ODM Automotive Filters | **BACKLOG** |
| How to Evaluate an Automotive Filter Supplier | **BACKLOG** |
| MOQ, Lead Time and Pricing Factors | **CREATE ✅**（filter-moq-lead-time）|
| How to Prepare an Automotive Filter RFQ | **CREATE ✅**（/rfq/ 表单 + oem-procurement-process）|

### 3.5 P5 · Huiying 制造（5%）

| 主题 | 状态 |
|---|---|
| Company profile | REUSE（/company/）|
| Automotive filter products | REUSE（P1 6 品类）|
| Air filter manufacturing and supply | REUSE / IMPROVE（/factory/）|
| Cabin / Oil filter solutions | REUSE |
| OEM and ODM | REUSE（/oem/）|
| Private label supply | REUSE（/private-label/）|
| Wholesale and distributor cooperation | **CREATE ✅**（/wholesale/）|
| Quotation and contact | **CREATE ✅**（/rfq/ 表单）|

---

## 4. CREATE 缺口清单（已实施 vs 未实施）

**批 2–4 已新建（11 页）**：cabin-vs-engine-air-filter · oil-filter-types · efficiency-vs-pressure-drop · filter-moq-lead-time（4 指南）；5 支柱页 + 1 支柱索引；/private-label/ /wholesale/ /rfq/（3 商业页）；/tools/oe-lookup/（1 工具）。

**未实施（BACKLOG，进 FUTURE_CONTENT_BACKLOG.md）**：Pleated vs Non-Pleated · Heavy-Duty Truck · Initial vs Final Pressure Drop · Dust Holding Capacity · Micron Rating · Humidity · Industrial Air Filter Types · Bag vs Panel · Pre-Filters vs Fine · Find Manufacturer in China · OEM vs ODM · Evaluate Supplier（12 主题）。

---

## 5. 数据骨架（终版落地）

1. `src/data/site.ts`：`brand / entity / positioning / disclosure / nav / organizationSchema` 全部落地，边界经 `pillars.ts` `boundary` 显式化。
2. `src/data/pillars.ts`：五支柱 `Pillar` 接口（`key/slug/name/positioning/intent/topics/conclusions/categories/guides/cta/boundary`）+ `pillarForCategory/pillarForGuide/isAutomotiveCategory` 辅助函数（批 2 落地）。
3. `src/data/link-map.ts`：`categoryGuides / guideCategories / guideSkus / guideCommercialLinks`（批 2/3 落地，接线修复）。
4. `src/data/products.json`：不改 SKU/URL/canonical（批 1–4 零改动）。
5. `src/data/sku-depth.ts`：20 条 top SKU fitment/conclusion，按 `url_slug` 归一化键（批 3 修复）。

---

## 6. 与现有文档关系

- 承接 `docs/site-architecture.md` + `docs/eeat-plan.md`，把「平台 China Filter Hub + 制造实体 Qinghe Huiying + 五支柱」落实为正式架构并全部渲染落地。
- `CONTENT_AUDIT.md`（终版逐页清册）· `INTERNAL_LINK_MAP.md`（终版内链图谱）· `IMPLEMENTATION_REPORT.md`（批 1–4 实施）· `FUTURE_CONTENT_BACKLOG.md`（未实施主题）。
