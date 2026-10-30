# CONTENT_STRATEGY.md — 品牌与五支柱架构（批 1 · Phase 2）

> **范围**：`filterhub`（Astro · 136 页）· 兄弟仓 `data.filterhub`
> **日期**：2026-10-30
> **性质**：品牌定位 + 信息架构（IA）设计文档 + 数据骨架准备。本批**不渲染改动**——定位句与实体关系在此落为「架构文档 + 数据骨架说明」，实施在后续批（Phase 3 首页/导航、Phase 4 支柱页、Phase 5 品类/SKU）。
> **纪律**：不虚构公司事实/产能/认证/测试结果；平台 vs 制造商边界写入架构。

---

## 1. 品牌定位（落实执行书）

### 1.1 主站品牌 — China Filter Hub（平台）

- **定位**：过滤产品发现 + 技术知识 + 选型 + 采购平台。
- **定位句**（Positioning statement）：
  > A filtration knowledge and product sourcing platform connecting product selection, technical understanding, and manufacturing supply.
- **价值主张**：把「选型 → 技术理解 → 制造供应」三件事串成一条采购决策链，而非孤立罗列产品。

### 1.2 制造供应实体 — Qinghe Huiying（汽车滤清制造）

- **定位**：China Filter Hub 上的核心汽车滤清制造与供应伙伴。
- **定位句**：
  > Core automotive filter manufacturing and supply partner featured on China Filter Hub.
- **法律实体**：Qinghe County Huiying Automotive Parts Co., Ltd.（清河县汇盈汽车零部件有限公司，信用代码 `91130534MA0958NT84`，法人 Liu Fengxiu，成立 2017-10-10，品牌谱系可溯 1996）。与 `carfilterspro.com` 为**同一法律实体、两个店面**。

### 1.3 边界（必须写入架构，防止平台↔制造商能力混淆）

| 断言 | 是否可发 | 依据 |
|---|---|---|
| Huiying 制造**汽车滤清**（发动机进气/座舱/机油/燃油/液压/变速箱） | ✅ 可发 | 现有品类数据 + OEM 页能力描述 |
| Huiying 制造**工业/HVAC/HEPA/ULPA/液体滤**产品 | ❌ **不可暗示** | 执行书明确禁止；现有项目无证据支持 |
| China Filter Hub 平台**覆盖**工业/HVAC/HEPA/ULPA/液体滤**内容与数据** | ✅ 可发 | 平台是内容+数据 hub，非制造商 |

**落地规则**（数据层）：
- `site.ts` 现 `positioning` 字段已基本对齐（「operated by Qinghe County Huiying…」），但需在实施批将「platform 覆盖全品类」与「Huiying 制造仅限汽车滤清」的边界在 footer/schema 显式化。
- 工业/HVAC/HEPA/ULPA/液体滤品类页**不**写入 Huiying 制造声明；其制造归属保持「行业参考/多目录汇总」中性口径（现状已如此）。
- OEM/私牌能力描述限定在「汽车滤清 + 滤材（针毡/合成/微玻/碳，低 MOQ）」范围，不扩展到工业成品制造。

---

## 2. 五支柱架构（P1–P5）

| 支柱 | 名称 | 定位 | 现有内容映射 |
|---|---|---|---|
| **P1** | Automotive Filters（汽车滤清） | 车辆/设备流体与进气滤的品类 + 选型 + 适配 | 6 品类 · 50 SKU · 1 指南 |
| **P2** | Filter Technology（滤清技术） | 滤材/效率/压降/测试等跨品类技术知识 | 1 品类 · 6 SKU · 2 指南 |
| **P3** | Industrial & HVAC Filtration（工业与 HVAC） | 工业/暖通/洁净室/液体滤（平台内容，非 Huiying 制造） | 6 品类 · 48 SKU · 3 指南 |
| **P4** | OEM & Wholesale Sourcing（OEM 与批发采购） | 采购/贴牌/寻源/询价（采购决策） | 1 指南 · /oem/ · /contact/ |
| **P5** | Qinghe Huiying Manufacturing & Commercial Solutions（Huiying 制造与商业方案） | 制造主体 + 汽车滤清商业方案 | /factory/ · /company/ |
| — | 跨支柱枢纽页 | 首页 / 产品中心 / 指南索引 | 3 页 |

**覆盖核对**：131/131 内容页映射到支柱（100%）；5 页合规/系统页按设计不入支柱。详见 `CONTENT_AUDIT.md` §2/§3。

### 2.1 品类 → 支柱映射（13 品类）

| 品类 | 支柱 | SKU 数 |
|---|---|---|
| air-filters（发动机进气） | P1 | 12 |
| cabin-filters（座舱） | P1 | 8 |
| oil-filters（机油） | P1 | 7 |
| fuel-filters（燃油） | P1 | 8 |
| hydraulic-filters（液压） | P1 | 7 |
| transmission-filters（变速箱） | P1 | 8 |
| filter-media（滤材介质） | P2 | 6 |
| hvac-filters（HVAC） | P3 | 14 |
| hepa-filters（HEPA/ULPA） | P3 | 15 |
| activated-carbon（活性炭） | P3 | 6 |
| pocket-filters（袋式） | P3 | 5 |
| liquid-cartridges（液体滤芯） | P3 | 2 |
| cleanroom-equipment（洁净室设备） | P3 | 6 |

### 2.2 指南 → 支柱映射（7 指南，字段 `pillar` 现为 4 旧值 → 五支柱）

| 指南 | 现有 `pillar` 字段值 | 五支柱归属 |
|---|---|---|
| air-filter-selection | Selection | **P1** |
| filter-efficiency-grades | Standards | **P2** |
| filter-media-selection | Standards | **P2** |
| hepa-cleanroom-sourcing | Selection | **P3** |
| hepa-vs-ulpa | Standards | **P3** |
| cleanroom-filtration-solutions | Cleanroom | **P3** |
| oem-procurement-process | OEM | **P4** |

> **数据骨架说明**：`src/data/guides.ts` 的 `pillar` 字段当前为旧 4 值（Selection/Standards/Cleanroom/OEM），`/guides/` 索引按它分组渲染。五支柱是**内容架构层**的新标签，需在实施批给 `Guide` 增加 `pillarKey`（`p1`–`p5`）字段并重排 `/guides/` 索引分组——本批只产出映射表，不改字段（避免破坏现有渲染）。

---

## 3. 每支柱主题清单（执行书清单 vs 现有内容对照）

> 标注：**REUSE** = 现有内容直接复用 · **IMPROVE** = 现有内容需增强/重排 · **MERGE** = 与现有页合并 · **CREATE** = 缺失需新建（不盲目建，先比对照）。

### 3.1 P1 · 汽车滤清（投资优先级 35%）

| 执行书主题 | 现有内容 | 标注 |
|---|---|---|
| Engine Air Filter: Types, Materials and Selection | `/guides/air-filter-selection/` + `/products/air-filters/` | **REUSE / IMPROVE** |
| Cabin Air Filter vs Engine Air Filter | 无 | **CREATE** |
| Oil Filter Types and Filtration Performance | `/products/oil-filters/`（无专属指南） | **REUSE + CREATE**（补油滤指南） |
| How to Choose the Right Automotive Air Filter | `air-filter-selection` | **REUSE** |
| Automotive Filter Media: Paper, Nonwoven and Synthetic | `filter-media-selection`（属 P2）+ `air-filters` | **MERGE**（汽车滤材视角嵌入 P1 文章，复用 P2 介质知识） |
| Automotive Filter Dimensions and OE Cross-Reference | `/products/air-filters/` + `oem-procurement-process` | **REUSE / IMPROVE** |
| Pleated vs Non-Pleated Automotive Filters | 无 | **CREATE** |
| Heavy-Duty Truck Air Filters | `air-filters`（heavy-duty 子类）+ `42N-62-15470` 等 SKU | **REUSE + CREATE**（重卡专文） |

### 3.2 P2 · 滤清技术（投资优先级 20%）

| 执行书主题 | 现有内容 | 标注 |
|---|---|---|
| Filter Media Types and Their Applications | `filter-media-selection` + `/products/filter-media/` | **REUSE** |
| Filtration Efficiency vs Pressure Drop | `filter-efficiency-grades` | **REUSE / IMPROVE** |
| Initial Pressure Drop vs Final Pressure Drop | 无（仅品类页提及） | **CREATE** |
| Dust Holding Capacity Explained | 无（仅品类页提及） | **CREATE** |
| Filter Micron Rating: What Does It Really Mean? | 无（仅 SKU `micron` 槽位） | **CREATE** |
| Synthetic vs Cellulose Filter Media | `filter-media-selection` | **REUSE / IMPROVE** |
| How Humidity Affects Filter Performance | 无 | **CREATE** |
| Filter Efficiency Test Methods Explained | `filter-efficiency-grades` | **REUSE / IMPROVE** |

### 3.3 P3 · 工业与 HVAC（投资优先级 15%）

| 执行书主题 | 现有内容 | 标注 |
|---|---|---|
| Industrial Air Filter Types and Applications | `/products/hvac-filters/` | **REUSE + CREATE**（工业空气滤专文） |
| HVAC Filter Grades and Selection | `/products/hvac-filters/` + `filter-efficiency-grades` | **REUSE** |
| HEPA vs ULPA Filters | `hepa-vs-ulpa` + `/products/hepa-filters/` | **REUSE** |
| Bag Filters vs Panel Filters | `/products/pocket-filters/` + `/products/hvac-filters/` | **REUSE + CREATE**（袋式 vs 板式对比） |
| Cartridge Filter Types and Applications | `/products/liquid-cartridges/` | **REUSE** |
| Liquid Filtration: Filter Cartridge Selection | `/products/liquid-cartridges/` | **REUSE** |
| Pre-Filters vs Fine Filters | 无（品类页分级提及） | **CREATE** |

### 3.4 P4 · OEM 与批发采购（投资优先级 25%）

| 执行书主题 | 现有内容 | 标注 |
|---|---|---|
| Automotive Filter OEM Manufacturing Guide | `oem-procurement-process` + `/oem/` | **REUSE / IMPROVE** |
| How to Find an Automotive Filter Manufacturer in China | 无 | **CREATE** |
| Private Label Automotive Filters | `/oem/`（私牌节） | **REUSE + CREATE**（私牌专文） |
| Automotive Filter Wholesale Buying Guide | 无 | **CREATE** |
| Custom Automotive Air Filter Development | `/oem/`（定制节） | **REUSE + CREATE** |
| OEM vs ODM Automotive Filters | 无 | **CREATE** |
| How to Evaluate an Automotive Filter Supplier | 无 | **CREATE** |
| Automotive Filter MOQ, Lead Time and Pricing Factors | `/oem/`（MOQ/交期节） | **REUSE / IMPROVE** |
| How to Prepare an Automotive Filter RFQ | `oem-procurement-process` + `/contact/` | **REUSE / IMPROVE** |

### 3.5 P5 · Huiying 制造与商业方案（投资优先级 5%）

| 执行书主题 | 现有内容 | 标注 |
|---|---|---|
| Company profile | `/company/` + `carfilterspro.com/company-profile/` | **REUSE** |
| Automotive filter products | P1 6 品类 | **REUSE** |
| Air filter manufacturing and supply | `/factory/` | **REUSE / IMPROVE** |
| Cabin filter solutions | `/products/cabin-filters/` | **REUSE** |
| Oil filter solutions | `/products/oil-filters/` | **REUSE** |
| OEM and ODM | `/oem/` | **REUSE** |
| Private label supply | `/oem/`（私牌节） | **REUSE** |
| Wholesale and distributor cooperation | 无 | **CREATE** |
| Quotation and contact | `/contact/`（缺 RFQ 表单） | **REUSE / IMPROVE**（Phase 7 加 RFQ 表单） |

---

## 4. CREATE 缺口清单（对比执行书集群清单）

执行书「先对比、复用/改进/合并、只建真正缺失的页」。经 §3 对照，**真正缺失需新建**的主题：

| # | 主题 | 归属支柱 | 优先级 | 说明 |
|---|---|---|---|---|
| 1 | Cabin Air Filter vs Engine Air Filter | P1 | P1 | 高频对比查询，无现成页 |
| 2 | Oil Filter Types and Filtration Performance（指南） | P1 | P1 | 机油滤仅品类页，缺选型指南 |
| 3 | Pleated vs Non-Pleated Automotive Filters | P1 | P2 | 褶皱 vs 无褶皱选型 |
| 4 | Heavy-Duty Truck Air Filters（专文） | P1 | P2 | 重卡进气，复用 heavy-duty 子类 + SKU |
| 5 | Initial vs Final Pressure Drop | P2 | P2 | 压降核心概念，缺独立页 |
| 6 | Dust Holding Capacity Explained | P2 | P2 | 容尘量核心概念 |
| 7 | Filter Micron Rating: What Does It Really Mean? | P2 | P1 | 微米等级核心概念 |
| 8 | How Humidity Affects Filter Performance | P2 | P3 | 湿度工况 |
| 9 | Industrial Air Filter Types and Applications | P3 | P2 | 工业空气滤专文 |
| 10 | Bag Filters vs Panel Filters | P3 | P2 | 袋式 vs 板式对比 |
| 11 | Pre-Filters vs Fine Filters | P3 | P3 | 前置 vs 精滤分级 |
| 12 | How to Find an Automotive Filter Manufacturer in China | P4 | P1 | 寻源高价值 |
| 13 | Private Label Automotive Filters（专文） | P4 | P1 | 私牌专文 |
| 14 | Automotive Filter Wholesale Buying Guide | P4 | P1 | 批发采购指南 |
| 15 | Custom Automotive Air Filter Development | P4 | P2 | 定制开发 |
| 16 | OEM vs ODM Automotive Filters | P4 | P1 | OEM/ODM 对比 |
| 17 | How to Evaluate an Automotive Filter Supplier | P4 | P1 | 供应商评估 |
| 18 | Wholesale and Distributor Cooperation（P5） | P5 | P2 | 分销合作 |

> **18 个 CREATE 主题**，按执行书投资优先级（P1 汽车滤清 35% / P4 OEM 25% / P2 技术 20% / P3 工业 15% / P5 品牌 5%）排序落地，**非一次性全建**。本批仅列出缺口，实施在后续批。

---

## 5. 数据骨架准备（site.ts / content 数据结构层面）

本批产出架构文档 + 数据骨架说明，**不渲染改动**。实施批需在数据层落实：

1. **`src/data/site.ts`**：
   - 新增 `platformPositioning` 与 `manufacturerPositioning` 两个显式字段（承载 §1.1/§1.2 定位句）。
   - 新增 `manufacturerScope` 边界声明（「Huiying 制造范围 = 汽车滤清；工业/HVAC/HEPA/ULPA/液体为平台内容」），供 footer/schema 引用。
   - `brand` 保持 `Huiying`（不改成平台名，避免与 `carfilterspro` 同源实体割裂）；平台品牌「China Filter Hub」经 `siteUrl`/`domain` 承载。
2. **`src/data/guides.ts`**：`Guide` 接口增加 `pillarKey: 'p1' | 'p2' | 'p3' | 'p4' | 'p5'`（§2.2 映射），供 `/guides/` 五支柱分组。
3. **`src/data/link-map.ts`**：新增 `pillarLanding` 映射（五支柱 → 落地页 URL），供内链图谱（见 `INTERNAL_LINK_MAP.md`）。
4. **`src/data/products.json`**：不改 SKU/URL/canonical；仅在实施批评估是否增加 `pillar` 冗余字段（可选，因 pillar 可由 `category` 派生，不必冗余）。

---

## 6. 与现有文档关系

- 本文件承接 `docs/site-architecture.md`（Phase 2 架构设计）与 `docs/eeat-plan.md`（主体对齐），把「品牌占位 Qinghe Yinghui Filter」落实为「平台 China Filter Hub + 制造实体 Qinghe Huiying + 五支柱」的正式架构。
- `CONTENT_AUDIT.md`（本批产出）承载逐页清册与处置；`INTERNAL_LINK_MAP.md`（本批产出）承载内链现状与目标。
- 后续批产出：`IMPLEMENTATION_REPORT.md`（Phase 10）与 `FUTURE_CONTENT_BACKLOG.md`（§4 缺口 + 已实现项）。
