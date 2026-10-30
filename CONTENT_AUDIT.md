# CONTENT_AUDIT.md — chinafilterhub.com 全站内容清册（批 1 · Phase 1）

> **范围**：`filterhub`（Astro · 136 页 · 104 SKU · 13 品类 · 7 指南 · 主体对齐已完成）
> **兄弟仓**：`data.filterhub`（MkDocs · 结构化数据子站，本批仅核对同步状态，零改动）
> **日期**：2026-10-30
> **纪律**：不重建框架 · 保留 Astro/URL/设计规范 · 不删页 · 不虚构（缺信息保留现值或标 HUMAN REVIEW）· 增量 · 本批只产出报告与架构数据，不动业务页面（实施在后续批）

---

## 0. 结论摘要（TL;DR）

| 维度 | 结果 |
|---|---|
| 页面总量 | **136 页**（A 首页 1 · B 品类 14 · C SKU 104 · D 指南 8 · E OEM/批发 2 · F 公司/联系 2 · G 数据 0 · H 其他 5）|
| 处置分布 | **KEEP 32 · IMPROVE 104 · MERGE 0 · REDIRECT 0 · HUMAN REVIEW 0** |
| 支柱映射覆盖 | **131/131 内容页 = 100%**（另 5 页合规/系统页按设计不入支柱）|
| 五支柱规模 | P1 汽车滤清 57 · P2 滤清技术 9 · P3 工业与 HVAC 57 · P4 OEM 与批发 3 · P5 Huiying 制造 2 · 跨支柱枢纽页 3 |
| 关键发现 | ① SKU/指南「深度内容」接线断裂（CFH 改号后 skuDepth/guideSkus 按旧 OE 号查找 → 0 命中）；② 4 品类 SKU 描述模板化可互换；③ 54/104 SKU 无 OE 交叉号；④ data.filterhub `docs/data/products.json` served 副本与主库分叉 |

---

## 1. 方法与假设

- **逐页来源**：`src/pages/*.astro`（静态/动态路由）+ `src/data/*.ts`（categories / guides / products.json / sku-depth / link-map / site）+ 兄弟仓 `data.filterhub/docs/`。
- **页面清单**：136 页 = 12 静态页 + 13 品类页 + 104 SKU 页 + 7 指南页。
- **支柱映射规则**（落实执行书五支柱，见 `CONTENT_STRATEGY.md`）：
  - P1 汽车滤清 = 车辆/设备流体与进气滤（air / cabin / oil / fuel / hydraulic / transmission 6 品类 + 50 SKU + 1 指南）
  - P2 滤清技术 = 滤材/效率/标准跨品类知识（filter-media 1 品类 + 6 SKU + 2 指南）
  - P3 工业与 HVAC = 工业/暖通/洁净室/液体（hvac / hepa / activated-carbon / pocket / liquid-cartridges / cleanroom-equipment 6 品类 + 48 SKU + 3 指南）
  - P4 OEM 与批发 = 采购/贴牌/询价（1 指南 + /oem/ + /contact/）
  - P5 Huiying 制造与商业 = 制造主体（/factory/ + /company/）
- **页型 A–H** 按执行书 Phase 1 定义分类；`G 数据页` 在主站为 0（结构化数据整体落在兄弟仓 `data.filterhub`，主站通过绝对链接外链）。
- **处置标签**：KEEP（保留，内容达标）/ IMPROVE（保留并增强，实施在后续批）/ MERGE（合并）/ REDIRECT（重定向）/ HUMAN REVIEW（需人工确认）。
- **优先级**：P0 = 阻塞性修正（接线断裂）；P1 = 高价值实施（支柱页/首页/商业页/top SKU）；P2 = 中（品类/SKU 深化）；P3 = 低（合规润色）。

---

## 2. 页型分布（A–H）

| 页型 | 数量 | 说明 |
|---|---|---|
| A · 首页/品牌 | 1 | `/` |
| B · 品类页 | 14 | `/products/`（产品中心）+ 13 个 `/products/{category}/` |
| C · SKU 页 | 104 | `/products/{category}/{slug}/` |
| D · 技术指南 | 8 | `/guides/`（索引）+ 7 个 `/guides/{slug}/` |
| E · OEM/批发页 | 2 | `/oem/` + `/factory/`（制造能力属商业转化） |
| F · 公司/联系页 | 2 | `/company/` + `/contact/` |
| G · 数据页 | 0 | 结构化数据在 `data.filterhub`（兄弟仓，主站外链） |
| H · 其他 | 5 | `/privacy/` `/terms/` `/disclaimer/` `/cookies/` `/404/` |
| **合计** | **136** | — |

---

## 3. 逐页清册

### 3.1 A · 首页/品牌（1 页）

| URL | 主搜索意图 | 主主题/实体 | 支柱 | 内容质量 | 内链关系 | 处置 | 优先级 | 实施状态 |
|---|---|---|---|---|---|---|---|---|
| `/` | 品牌导航 + 品类发现（navigational → informational） | China Filter Hub 平台定位 + 13 品类入口 + 实体披露 | 跨支柱枢纽 | 中：hero 定位清晰、五问范式到位，但尚未按执行书 Phase 3 落实「八段式首页」与五支柱分层 | 出链 13 品类 + /products/ /guides/ /factory/ /oem/ /company/ /contact/ + 数据站 | **IMPROVE** | P1 | 待实施（Phase 3） |

### 3.2 B · 品类页（14 页）

| URL | 品类 | 主搜索意图 | 主主题/实体 | 支柱 | 内容质量 | 处置 | 优先级 |
|---|---|---|---|---|---|---|---|
| `/products/` | 产品中心（hub） | 品类导航（navigational） | 13 品类树 + SKU 总数 | 跨支柱枢纽 | 中：树结构清晰，缺支柱分组 | IMPROVE | P1 |
| `/products/air-filters/` | Air Filters (Engine Intake) | 商业+信息（选型） | 发动机进气滤 + OE 交叉 | **P1** | 高：450 词，ISO 5011 锚定 | IMPROVE | P2 |
| `/products/cabin-filters/` | Cabin Air Filters | 商业+信息 | 座舱滤 + 适配 | **P1** | 中：385 词（<400） | IMPROVE | P2 |
| `/products/oil-filters/` | Oil Filters | 商业+信息 | 机油滤 + 旁通阀 | **P1** | 中：403 词 | IMPROVE | P2 |
| `/products/fuel-filters/` | Fuel Filters | 商业+信息 | 燃油滤 + 水分离 | **P1** | 中：402 词 | IMPROVE | P2 |
| `/products/hydraulic-filters/` | Hydraulic Filters | 商业+信息 | 液压滤 + ISO 4406 | **P1** | 中：398 词（<400） | IMPROVE | P2 |
| `/products/transmission-filters/` | Transmission Filters | 商业+信息 | 变速箱滤 + 安装形式 | **P1** | 中：390 词（<400） | IMPROVE | P2 |
| `/products/filter-media/` | Filter Media | 商业+信息 | 滤材介质（针毡/合成/微玻/碳） | **P2** | 中：397 词（<400） | IMPROVE | P2 |
| `/products/hvac-filters/` | HVAC Filters | 商业+信息 | HVAC 分级 EN 779/ISO 16890 | **P3** | 高：419 词 | IMPROVE | P2 |
| `/products/hepa-filters/` | HEPA / ULPA Filters | 商业+信息 | HEPA/ULPA EN 1822 | **P3** | 高：420 词 | IMPROVE | P2 |
| `/products/activated-carbon/` | Activated Carbon Filters | 商业+信息 | 活性炭吸附 | **P3** | 中：399 词（<400） | IMPROVE | P2 |
| `/products/pocket-filters/` | Pocket / Bag Filters | 商业+信息 | 袋式滤 | **P3** | 高：411 词 | IMPROVE | P2 |
| `/products/liquid-cartridges/` | Liquid Filter Cartridges | 商业+信息 | 液体滤芯（膜/金属） | **P3** | 高：416 词 | IMPROVE | P2 |
| `/products/cleanroom-equipment/` | Cleanroom Equipment | 商业+信息 | 洁净室设备 FFU/层流 | **P3** | 高：414 词 | IMPROVE | P2 |

> 品类页整体：内容已含 `positioning / directAnswer / technicalDepth / selection / procurement / sourcingPerspective` 六段 + 「Category at a glance」对比表 + SKU 表，质量中上。IMPROVE 目标为按执行书 Phase 5 增「主要应用 / 常见采购考量 / 引用指南 / 报价 CTA」，并补 5 个 <400 词品类。


### 3.3 C · SKU 页（104 页，全量清册）

> **模板级统一属性**（104 页共用，不逐行重复）：
> - **主搜索意图**：交易型（transactional）——买家定位/核验某一具体 OE 号或 SKU 部件、核对规格并索取报价。
> - **主主题/实体**：SKU 名称 + OE 交叉号 + 规格字段（`spec / material / filter_media / application / moq / efficiency_class`，全部 `catalog-confirmed`）。
> - **内链关系**：SKU 页 → 品类页 + 相关指南（`categoryGuides`）+ 数据站 SKU 单页 + /oem/ + /contact/。
> - **页面结构**：六区块（身份+询价 / 核心参数 / OE 交叉 / 质量文件 / OEM 条款 / 相关资源），含 Product JSON-LD（无虚构价/评分）。
>
> **处置判据**：含 `sku-depth` 深度（fitment + conclusion）的 20 个 top OE 型号 = **KEEP**；其余 84 = **IMPROVE**（补 fitment/结论深度，尤其 54 个无 OE 号与 43 个 <60 词描述）。
>
> ⚠️ **接线断裂（P0）**：以下 20 个 KEEP SKU 的深度内容当前**未渲染**——`src/data/sku-depth.ts` 按旧 OE 号建键，而 SKU 页 `skuDepth[product.sku]` 按 CFH 新号查找 → 0 命中（详见 §5.1）。页面本身保留，仅需在实施批修接线。

| # | SKU | Category | Pillar | OE reference | URL | Disposition |
|---:|------|----------|--------|--------------|-----|-------------|
| # | SKU | Category | Pillar | OE reference | URL | Disposition |
|---:|------|----------|--------|--------------|-----|-------------|
| 1 | `CFH-AF-001` | air-filters | P1 | 42N-62-15470 | /products/air-filters/42n-62-15470/ | KEEP |
| 2 | `CFH-AF-002` | air-filters | P1 | P778989 | /products/air-filters/p778989/ | IMPROVE |
| 3 | `CFH-AF-003` | air-filters | P1 | P822768, P822769 | /products/air-filters/p822768/ | KEEP |
| 4 | `CFH-AF-004` | air-filters | P1 | 1542743, 1660619 | /products/air-filters/1542743/ | KEEP |
| 5 | `CFH-AF-005` | air-filters | P1 | 626095, P626096 | /products/air-filters/626095/ | IMPROVE |
| 6 | `CFH-AF-006` | air-filters | P1 | 178017810, 17801-7810 | /products/air-filters/178017810/ | IMPROVE |
| 7 | `CFH-AF-007` | air-filters | P1 | 8-98260-8340, 8982608340 | /products/air-filters/8-98260-8340/ | IMPROVE |
| 8 | `CFH-AF-008` | air-filters | P1 | P608677 | /products/air-filters/p608677/ | IMPROVE |
| 9 | `CFH-AF-009` | air-filters | P1 | P623400, PA32001 | /products/air-filters/p623400/ | IMPROVE |
| 10 | `CFH-AF-010` | air-filters | P1 | 2116040258 | /products/air-filters/2116040258/ | IMPROVE |
| 11 | `CFH-AF-011` | air-filters | P1 | AF55014, AF55308 | /products/air-filters/af55014/ | IMPROVE |
| 12 | `CFH-AF-012` | air-filters | P1 | P643118, P318005 | /products/air-filters/p643118/ | IMPROVE |
| 13 | `CFH-CF-001` | cabin-filters | P1 | 72880-FG000 | /products/cabin-filters/72880-fg000/ | KEEP |
| 14 | `CFH-CF-002` | cabin-filters | P1 | 500-0957 | /products/cabin-filters/500-0957/ | KEEP |
| 15 | `CFH-CF-003` | cabin-filters | P1 | 580-5439 | /products/cabin-filters/580-5439/ | IMPROVE |
| 16 | `CFH-CF-004` | cabin-filters | P1 | 90915-YZZA3 | /products/cabin-filters/90915-yzza3/ | KEEP |
| 17 | `CFH-CF-005` | cabin-filters | P1 | G92DH42010 | /products/cabin-filters/g92dh42010/ | IMPROVE |
| 18 | `CFH-CF-006` | cabin-filters | P1 | 88880-20110 | /products/cabin-filters/88880-20110/ | IMPROVE |
| 19 | `CFH-CF-007` | cabin-filters | P1 | 7803A112 | /products/cabin-filters/7803a112/ | IMPROVE |
| 20 | `CFH-CF-008` | cabin-filters | P1 | 7701059997 | /products/cabin-filters/7701059997/ | IMPROVE |
| 21 | `CFH-FF-001` | fuel-filters | P1 | 23401-1441 | /products/fuel-filters/23401-1441/ | KEEP |
| 22 | `CFH-FF-002` | fuel-filters | P1 | 23401-1220 | /products/fuel-filters/23401-1220/ | IMPROVE |
| 23 | `CFH-FF-003` | fuel-filters | P1 | 8159975 | /products/fuel-filters/8159975/ | IMPROVE |
| 24 | `CFH-FF-004` | fuel-filters | P1 | 2169185 | /products/fuel-filters/2169185/ | IMPROVE |
| 25 | `CFH-FF-005` | fuel-filters | P1 | 0007733150 | /products/fuel-filters/0007733150/ | IMPROVE |
| 26 | `CFH-FF-006` | fuel-filters | P1 | VG1540080311 | /products/fuel-filters/vg1540080311/ | IMPROVE |
| 27 | `CFH-FF-007` | fuel-filters | P1 | FS19920 | /products/fuel-filters/fs19920/ | KEEP |
| 28 | `CFH-FF-008` | fuel-filters | P1 | PP879 | /products/fuel-filters/pp879/ | IMPROVE |
| 29 | `CFH-TF-001` | transmission-filters | P1 | 35330-60070 | /products/transmission-filters/35330-60070/ | KEEP |
| 30 | `CFH-TF-002` | transmission-filters | P1 | 35303-B1010 | /products/transmission-filters/35303-b1010/ | IMPROVE |
| 31 | `CFH-TF-003` | transmission-filters | P1 | 31728-3JX0C | /products/transmission-filters/31728-3jx0c/ | IMPROVE |
| 32 | `CFH-TF-004` | transmission-filters | P1 | 25420-PR0-030 | /products/transmission-filters/25420-pr0-030/ | KEEP |
| 33 | `CFH-TF-005` | transmission-filters | P1 | 25420-P7W-003 | /products/transmission-filters/25420-p7w-003/ | IMPROVE |
| 34 | `CFH-TF-006` | transmission-filters | P1 | 25420-PW4-010 | /products/transmission-filters/25420-pw4-010/ | IMPROVE |
| 35 | `CFH-TF-007` | transmission-filters | P1 | 31728-AA000 | /products/transmission-filters/31728-aa000/ | IMPROVE |
| 36 | `CFH-TF-008` | transmission-filters | P1 | 8973310630 | /products/transmission-filters/8973310630/ | IMPROVE |
| 37 | `CFH-OF-001` | oil-filters | P1 | 15208-AD200 | /products/oil-filters/15208-ad200/ | KEEP |
| 38 | `CFH-OF-002` | oil-filters | P1 | 1S7J-6744-BA | /products/oil-filters/1s7j-6744-ba/ | KEEP |
| 39 | `CFH-OF-003` | oil-filters | P1 | 77-00-126-705 | /products/oil-filters/77-00-126-705/ | IMPROVE |
| 40 | `CFH-OF-004` | oil-filters | P1 | 93-18-6310 | /products/oil-filters/93-18-6310/ | IMPROVE |
| 41 | `CFH-OF-005` | oil-filters | P1 | 93175493 | /products/oil-filters/93175493/ | IMPROVE |
| 42 | `CFH-OF-006` | oil-filters | P1 | 03C115577A | /products/oil-filters/03c115577a/ | KEEP |
| 43 | `CFH-OF-007` | oil-filters | P1 | 0393-1030 | /products/oil-filters/0393-1030/ | IMPROVE |
| 44 | `CFH-HF-001` | hydraulic-filters | P1 | SH66279, 362-1163 | /products/hydraulic-filters/sh66279/ | KEEP |
| 45 | `CFH-HF-002` | hydraulic-filters | P1 | 322-3155, 322-3154 | /products/hydraulic-filters/322-3155/ | IMPROVE |
| 46 | `CFH-HF-003` | hydraulic-filters | P1 | P177047, 1G-8878 | /products/hydraulic-filters/p177047/ | KEEP |
| 47 | `CFH-HF-004` | hydraulic-filters | P1 | A222100000119 | /products/hydraulic-filters/a222100000119/ | IMPROVE |
| 48 | `CFH-HF-005` | hydraulic-filters | P1 | R010109, E1310212 | /products/hydraulic-filters/r010109/ | IMPROVE |
| 49 | `CFH-HF-006` | hydraulic-filters | P1 | 1194740 | /products/hydraulic-filters/1194740/ | IMPROVE |
| 50 | `CFH-HF-007` | hydraulic-filters | P1 | P502561 | /products/hydraulic-filters/p502561/ | IMPROVE |
| 51 | `CFH-AC-001` | activated-carbon | P3 | — | /products/activated-carbon/airy-ac-panel/ | IMPROVE |
| 52 | `CFH-AC-002` | activated-carbon | P3 | — | /products/activated-carbon/airy-ac-pocket/ | IMPROVE |
| 53 | `CFH-AC-003` | activated-carbon | P3 | — | /products/activated-carbon/airy-ac-pleated/ | IMPROVE |
| 54 | `CFH-FM-001` | filter-media | P2 | — | /products/filter-media/airy-ac-media/ | IMPROVE |
| 55 | `CFH-HP-001` | hepa-filters | P3 | — | /products/hepa-filters/airy-gel-hepa/ | KEEP |
| 56 | `CFH-PF-001` | pocket-filters | P3 | — | /products/pocket-filters/airy-merv-pocket/ | IMPROVE |
| 57 | `CFH-PF-002` | pocket-filters | P3 | — | /products/pocket-filters/airy-poly-pocket/ | IMPROVE |
| 58 | `CFH-PF-003` | pocket-filters | P3 | — | /products/pocket-filters/airy-rigid-pocket/ | IMPROVE |
| 59 | `CFH-HV-001` | hvac-filters | P3 | — | /products/hvac-filters/airy-fb-panel/ | IMPROVE |
| 60 | `CFH-HV-002` | hvac-filters | P3 | — | /products/hvac-filters/airy-pre-panel/ | IMPROVE |
| 61 | `CFH-HV-003` | hvac-filters | P3 | — | /products/hvac-filters/airy-pleated-pre/ | IMPROVE |
| 62 | `CFH-HV-004` | hvac-filters | P3 | — | /products/hvac-filters/airy-cardboard-pre/ | IMPROVE |
| 63 | `CFH-FM-002` | filter-media | P2 | — | /products/filter-media/airy-needle-cotton/ | IMPROVE |
| 64 | `CFH-FM-003` | filter-media | P2 | — | /products/filter-media/airy-ht-fiberglass/ | IMPROVE |
| 65 | `CFH-FM-004` | filter-media | P2 | — | /products/filter-media/airy-ht-synthetic/ | IMPROVE |
| 66 | `CFH-FM-005` | filter-media | P2 | — | /products/filter-media/airy-fr-media/ | IMPROVE |
| 67 | `CFH-FM-006` | filter-media | P2 | — | /products/filter-media/airy-ceiling/ | IMPROVE |
| 68 | `CFH-HP-002` | hepa-filters | P3 | — | /products/hepa-filters/klc-24x24-hepa/ | IMPROVE |
| 69 | `CFH-HP-003` | hepa-filters | P3 | — | /products/hepa-filters/klc-ptfe-ulpa/ | IMPROVE |
| 70 | `CFH-HP-004` | hepa-filters | P3 | — | /products/hepa-filters/klc-ht-hepa/ | IMPROVE |
| 71 | `CFH-HV-005` | hvac-filters | P3 | — | /products/hvac-filters/klc-ht-separator/ | KEEP |
| 72 | `CFH-HV-006` | hvac-filters | P3 | — | /products/hvac-filters/klc-med-vbank/ | IMPROVE |
| 73 | `CFH-HV-007` | hvac-filters | P3 | — | /products/hvac-filters/klc-merv8/ | IMPROVE |
| 74 | `CFH-HV-008` | hvac-filters | P3 | — | /products/hvac-filters/klc-g3-ht-primary/ | IMPROVE |
| 75 | `CFH-PF-004` | pocket-filters | P3 | — | /products/pocket-filters/klc-m5-m9-pocket/ | IMPROVE |
| 76 | `CFH-PF-005` | pocket-filters | P3 | — | /products/pocket-filters/klc-glass-pocket/ | IMPROVE |
| 77 | `CFH-HV-009` | hvac-filters | P3 | — | /products/hvac-filters/klc-g1-g4-panel/ | IMPROVE |
| 78 | `CFH-HP-005` | hepa-filters | P3 | — | /products/hepa-filters/klc-e10-e14-terminal/ | IMPROVE |
| 79 | `CFH-CR-001` | cleanroom-equipment | P3 | — | /products/cleanroom-equipment/klc-ffu/ | IMPROVE |
| 80 | `CFH-CR-002` | cleanroom-equipment | P3 | — | /products/cleanroom-equipment/klc-clean-bench/ | IMPROVE |
| 81 | `CFH-CR-003` | cleanroom-equipment | P3 | — | /products/cleanroom-equipment/klc-biosafety/ | IMPROVE |
| 82 | `CFH-HP-006` | hepa-filters | P3 | — | /products/hepa-filters/yt-hepa-h14/ | IMPROVE |
| 83 | `CFH-HP-007` | hepa-filters | P3 | — | /products/hepa-filters/yt-ulpa-u15/ | IMPROVE |
| 84 | `CFH-HV-010` | hvac-filters | P3 | — | /products/hvac-filters/yt-coarse-g1-g4/ | IMPROVE |
| 85 | `CFH-HV-011` | hvac-filters | P3 | — | /products/hvac-filters/yt-medium-m5-m6/ | IMPROVE |
| 86 | `CFH-HV-012` | hvac-filters | P3 | — | /products/hvac-filters/yt-fine-f7-f9/ | IMPROVE |
| 87 | `CFH-LC-001` | liquid-cartridges | P3 | — | /products/liquid-cartridges/yt-metal-cart/ | KEEP |
| 88 | `CFH-LC-002` | liquid-cartridges | P3 | — | /products/liquid-cartridges/yt-liq-membrane/ | IMPROVE |
| 89 | `CFH-AC-004` | activated-carbon | P3 | — | /products/activated-carbon/yt-chemical/ | IMPROVE |
| 90 | `CFH-CR-004` | cleanroom-equipment | P3 | — | /products/cleanroom-equipment/eaway-ffu-4848/ | KEEP |
| 91 | `CFH-HP-008` | hepa-filters | P3 | — | /products/hepa-filters/eaway-hepa-61061070/ | KEEP |
| 92 | `CFH-HP-009` | hepa-filters | P3 | — | /products/hepa-filters/eaway-hepa-610610292/ | IMPROVE |
| 93 | `CFH-AC-005` | activated-carbon | P3 | — | /products/activated-carbon/eaway-carbon-vbank/ | IMPROVE |
| 94 | `CFH-AC-006` | activated-carbon | P3 | — | /products/activated-carbon/eaway-carbon-panel/ | IMPROVE |
| 95 | `CFH-HP-010` | hepa-filters | P3 | — | /products/hepa-filters/eaway-panel-hepa/ | IMPROVE |
| 96 | `CFH-HP-011` | hepa-filters | P3 | — | /products/hepa-filters/eaway-gel-hepa/ | IMPROVE |
| 97 | `CFH-HP-012` | hepa-filters | P3 | — | /products/hepa-filters/eaway-separator-hepa/ | IMPROVE |
| 98 | `CFH-HP-013` | hepa-filters | P3 | — | /products/hepa-filters/eaway-cassette-hepa/ | IMPROVE |
| 99 | `CFH-HP-014` | hepa-filters | P3 | — | /products/hepa-filters/eaway-ht-hepa/ | IMPROVE |
| 100 | `CFH-HV-013` | hvac-filters | P3 | — | /products/hvac-filters/eaway-flat-f5/ | IMPROVE |
| 101 | `CFH-HV-014` | hvac-filters | P3 | — | /products/hvac-filters/eaway-sus-g4/ | IMPROVE |
| 102 | `CFH-CR-005` | cleanroom-equipment | P3 | — | /products/cleanroom-equipment/eaway-air-shower/ | IMPROVE |
| 103 | `CFH-CR-006` | cleanroom-equipment | P3 | — | /products/cleanroom-equipment/eaway-pass-box/ | IMPROVE |
| 104 | `CFH-HP-015` | hepa-filters | P3 | — | /products/hepa-filters/eaway-95dop/ | IMPROVE |

### 3.4 D · 技术指南（8 页）

| URL | 指南 | 旧支柱（现有字段） | 新支柱（五支柱） | 主搜索意图 | 内容质量 | 处置 | 优先级 |
|---|---|---|---|---|---|---|---|
| `/guides/` | Buyer Guides（索引） | — | 跨支柱枢纽 | navigational | 中：按旧支柱分组，需按五支柱重排 | IMPROVE | P1 |
| `/guides/air-filter-selection/` | Selecting engine intake air filters | Selection | **P1** | informational（选型流程） | 高：512 词，含 directAnswer/结论/标准 | KEEP | P2 |
| `/guides/filter-efficiency-grades/` | Filter efficiency grades compared | Standards | **P2** | informational（标准框架） | 高：483 词 | KEEP | P2 |
| `/guides/filter-media-selection/` | Filter media selection | Standards | **P2** | informational（滤材选型） | 高：442 词 | KEEP | P2 |
| `/guides/hepa-cleanroom-sourcing/` | Sourcing HEPA/ULPA + cleanroom | Selection | **P3** | informational（采购核验） | 高：527 词 | KEEP | P2 |
| `/guides/hepa-vs-ulpa/` | HEPA vs ULPA | Standards | **P3** | informational（对比决策） | 高：446 词 | KEEP | P2 |
| `/guides/cleanroom-filtration-solutions/` | Cleanroom filtration | Cleanroom | **P3** | informational（系统方案） | 高：459 词 | KEEP | P2 |
| `/guides/oem-procurement-process/` | OEM procurement: RFQ → first article | OEM | **P4** | informational+transactional（采购流程） | 中：308 词（最薄） | KEEP | P2 |

> 指南整体质量高（7/7 含 directAnswer + sourcingPerspective + sources + Article schema）。IMPROVE 项：`/guides/` 索引按五支柱重排（Phase 2）；`oem-procurement-process` 加深（Phase 4）。注意指南字段 `pillar` 目前是 4 旧值（Selection/Standards/Cleanroom/OEM），本批在 `CONTENT_STRATEGY.md` 给出五支柱映射，数据字段改名实施在后续批（不破坏现有渲染）。

### 3.5 E · OEM/批发页（2 页）

| URL | 主搜索意图 | 主主题/实体 | 支柱 | 内容质量 | 内链关系 | 处置 | 优先级 |
|---|---|---|---|---|---|---|---|
| `/oem/` | transactional（OEM/ODM 询价） | OEM/ODM + 私牌 + MOQ/交期 | **P4** | 中：能力表+流程+私牌+邮件 CTA 齐全，缺 RFQ 表单与批发合作专节 | 出链 /contact/ + mailto；入链来自 SKU 页/指南 | IMPROVE | P1 |
| `/factory/` | informational（制造能力核验） | 清河制造能力 + 四段质控（IQC/IPQC/FQC/OQC） | **P5** | 中：诚实标注「行业参考、非本实体设备清单」，认证「未独立核实不展示」，符合纪律；但缺 P5 制造与商业方案专页的完整承载 | 出链数据站 test-standards + carfilterspro 工厂页 | IMPROVE | P1 |

### 3.6 F · 公司/联系页（2 页）

| URL | 主搜索意图 | 主主题/实体 | 支柱 | 内容质量 | 处置 | 优先级 |
|---|---|---|---|---|---|---|
| `/company/` | informational（主体核验/信任） | Qinghe County Huiying Automotive Parts Co., Ltd. 法务实体 | **P5** | 高：法务披露完整（信用代码/法人/地址/成立日）+ 品牌谱系 + Organization schema，与 carfilterspro 同源 | KEEP | P2 |
| `/contact/` | transactional（询价联系） | 联系渠道 + 询价要点 | **P4** | 中：渠道表 + mailto + WhatsApp 齐全；缺 RFQ 表单（Phase 7） | IMPROVE | P1 |

### 3.7 G · 数据页（0 页，主站）

主站无独立 `/data/` 页面。结构化数据（SKU/OE/参数/测试标准/数据状态）整体落在兄弟仓 `data.filterhub`（MkDocs），主站通过 `site.dataSubsiteUrl` 绝对链接外链（首页「Product database」、品类页「Open in product database」、SKU 页「Machine-readable record」、工厂页「test-standards reference」）。本批核对同步状态见 §5.2。

### 3.8 H · 其他（5 页）

| URL | 主搜索意图 | 主主题 | 支柱 | 内容质量 | 处置 | 优先级 |
|---|---|---|---|---|---|---|
| `/privacy/` | 合规 | 隐私政策 | 非支柱（合规） | 高：简洁准确，无追踪声明 | KEEP | P3 |
| `/terms/` | 合规 | 服务条款 | 非支柱（合规） | 高：含「AI 图免责」诚实声明 | KEEP | P3 |
| `/disclaimer/` | 合规 | 免责声明 | 非支柱（合规） | 中：存在**一句话重复**（「Cross-reference part numbers link a filter to an OE number…」出现两次） | IMPROVE | P3 |
| `/cookies/` | 合规 | Cookie 政策 | 非支柱（合规） | 高：简洁准确 | KEEP | P3 |
| `/404/` | 系统 | 未找到 | 非支柱（系统） | 高：标准 404 | KEEP | P3 |

---

## 4. 处置建议分布汇总

| 处置 | 数量 | 页面 |
|---|---|---|
| **KEEP** | **32** | 20 深度 SKU + 7 指南 + company + privacy + terms + cookies + 404 |
| **IMPROVE** | **104** | 首页 + 产品中心 + 13 品类页 + 84 SKU + 指南索引 + oem + factory + contact + disclaimer |
| **MERGE** | **0** | 无重复可合并页（无同义近页） |
| **REDIRECT** | **0** | 无废弃 URL（保留全部现有 URL） |
| **HUMAN REVIEW** | **0** | 无需人工确认的内容缺口（缺信息处已保留现值/标 pending，不虚构） |
| **合计** | **136** | — |

---

## 5. 关键发现（供后续批实施）

### 5.1 P0 · SKU/指南「深度内容」接线断裂（CFH 改号回归）

- **根因**：commit `b38ec96` 将 `products[].sku` 统一为 `CFH-{品类缩写}-{序号}`（URL 经 `url_slug` 保留旧 OE 号），但三处查找仍按旧 OE 号键控，未被同步更新：
  1. `src/data/sku-depth.ts` 的 20 条 fitment/conclusion 以旧 OE 号为键（`42N-62-15470`、`AIRY-GEL-HEPA`…），而 SKU 页 `const depth = skuDepth[product.sku]` 用 CFH 号 → **0 命中**，「Fitment & sourcing」区块在 104 个 SKU 页全部空渲染。
  2. `src/data/link-map.ts` 的 `guideSkus` 值（19 个 OE/厂商码）经 `productBySku(code)` 按 `sku === code` 精确匹配 → **0 命中**，7 个指南页「Featured SKUs」区块全部空渲染。
  3. `sku-depth.ts` 键风格不统一（16 个带引号 + 4 个无引号，大小写混杂），需一并规范。
- **实测**：`sku-depth` 20 键按 `url_slug`（忽略大小写）可全部命中 SKU；按 `product.sku` 命中 0。`guideSkus` 按 `sku` 命中 0。
- **修复方向（实施批，本批不动代码）**：SKU 页按 `url_slug` 小写归一化键查 `skuDepth`；`guideSkus` 改为按 `url_slug` 解析（或引入 `skuBySlug()` 辅助）。**不重建页面，仅修查找键。**

### 5.2 P1 · 数据子站同步状态（兄弟仓 data.filterhub）

| 项 | 状态 |
|---|---|
| `filterhub/src/data/products.json` ↔ `data.filterhub/data/products.json` | **字节一致 ✓** |
| `data.filterhub/docs/data/products.json`（served 副本） | **分叉 ✗**（仍为旧版；需在数据子站重跑生成脚本同步） |
| 数据子站 SKU 页 `pending` 残留 | 待核验（前一审计记录 322 处，因渲染逻辑把空值标 pending） |

> 本批主站只新增 3 个报告文件，不改 `products.json`，因此主↔数据子站**数据同步维持 0/0**（无新增漂移）。上述 served 副本分叉为**既有** P1 问题，属数据子站实施批范围，非本批引入。

### 5.3 P1 · 4 品类 SKU 描述模板化可互换

oil-filters(相似度 0.946) · transmission-filters(0.922) · fuel-filters(0.919) · cabin-filters(0.879) 的 SKU 描述同构（仅 OE 号/尺寸槽位不同），采购者无法区分。实施批按执行书 Phase 5 逐 SKU 补 fitment/结论深度。

### 5.4 P1 · 54/104 SKU 无 OE 交叉号

无 OE 号的 SKU 集中在 HVAC/HEPA/洁净室/活性炭/袋式/滤材/液体等工业品类（这些品类本身以「品类+参数」而非「OE 号」检索，属正常），但 cabin(8)/fuel(8)/transmission(8)/oil(7)/hydraulic(7) 等汽车品类也有部分无 OE 号 → 需在实施批补 OE 交叉或明确标注「无公开 OE 号，按参数选型」。

---

## 6. 优先级与实施状态图例

| 优先级 | 含义 | 对应实施批 |
|---|---|---|
| **P0** | 阻塞性修正（接线断裂） | 实施批 1（先行修查找键） |
| **P1** | 高价值（支柱页/首页/商业转化/top SKU） | Phase 2–7 |
| **P2** | 中（品类/SKU 深化、指南重排） | Phase 4–5 |
| **P3** | 低（合规润色） | Phase 10 |

**实施状态**：本批（批 1 = Phase 1–2）全部页面标记为「待实施」——仅产出本清册 + `CONTENT_STRATEGY.md` + `INTERNAL_LINK_MAP.md` 三份架构文档，不修改任何业务页面/数据。后续批按优先级落地。
