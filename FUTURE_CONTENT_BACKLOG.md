# FUTURE_CONTENT_BACKLOG.md — 未实施优先主题（Phase 4 缺口 · 终版）

> **范围**：`filterhub`（Astro）· 后续批建议
> **日期**：2026-10-30
> **性质**：未实施的优先主题清单，按执行书投资优先级排序。每个主题标注支柱、优先级、复用路径、创建依据，供后续批落地。
> **纪律**：不盲目建页——每个主题先对照现有内容，复用/改进/合并优先，只建真正缺失的页。

---

## 0. 说明

批 1–4 已落地 11 个 CREATE（4 指南 + 5 支柱 + 1 支柱索引 + 3 商业页 + 1 工具）。本清单为**未实施**的 12 个主题，按执行书投资优先级（P1 35% / P4 25% / P2 20% / P3 15% / P5 5%）排序。

---

## 1. P1 · 汽车滤清（优先）

| # | 主题 | 优先级 | 复用路径 | 说明 |
|---|---|---|---|---|
| 1 | Pleated vs Non-Pleated Automotive Filters | P1 | air-filter-selection + air-filters 品类 | 褶皱 vs 无褶皱选型对比，高频选型查询 |
| 2 | Heavy-Duty Truck Air Filters（专文）| P2 | air-filters heavy-duty 子类 + 42N-62-15470 等 SKU | 重卡进气专文，复用现有 SKU |

## 2. P4 · OEM 与批发采购

| # | 主题 | 优先级 | 复用路径 | 说明 |
|---|---|---|---|---|
| 3 | How to Find an Automotive Filter Manufacturer in China | P1 | oem-procurement-process + /oem/ | 寻源高价值，本地化内容机会 |
| 4 | OEM vs ODM Automotive Filters | P1 | /oem/ + oem-procurement-process | OEM/ODM 对比决策 |
| 5 | How to Evaluate an Automotive Filter Supplier | P1 | /factory/ + oem-procurement-process | 供应商评估，采购核验 |

## 3. P2 · 滤清技术

| # | 主题 | 优先级 | 复用路径 | 说明 |
|---|---|---|---|---|
| 6 | Initial vs Final Pressure Drop | P2 | efficiency-vs-pressure-drop + hvac-filters | 压降核心概念独立页 |
| 7 | Dust Holding Capacity Explained | P2 | efficiency-vs-pressure-drop + air-filters | 容尘量核心概念 |
| 8 | Filter Micron Rating: What Does It Really Mean? | P1 | filter-efficiency-grades + liquid-cartridges | 微米等级核心概念 |
| 9 | How Humidity Affects Filter Performance | P3 | filter-media-selection + hvac-filters | 湿度工况 |

## 4. P3 · 工业与 HVAC

| # | 主题 | 优先级 | 复用路径 | 说明 |
|---|---|---|---|---|
| 10 | Industrial Air Filter Types and Applications | P2 | hvac-filters 品类 | 工业空气滤专文 |
| 11 | Bag Filters vs Panel Filters | P2 | pocket-filters + hvac-filters | 袋式 vs 板式对比 |
| 12 | Pre-Filters vs Fine Filters | P3 | hvac-filters 分级 + efficiency-vs-pressure-drop | 前置 vs 精滤分级 |

---

## 5. Phase 9 未强做工具（可选 backlog）

| 工具 | 结论 | 前置条件 |
|---|---|---|
| 汽车滤清选型工具（完整版）| 当前 OE 查询工具已覆盖「按件号定位」子集 | 需车辆适配数据库，当前不支持明确匹配 → 强做会虚构适配结果 |
| 滤材对比工具 | 内容型，已有指南覆盖 | 如需交互版，纯前端静态可做，但价值有限 |
| OEM RFQ 向导 | 已有 /rfq/ 表单 | 如需多步向导，纯前端静态可做 |

---

## 6. 落地规则（后续批）

1. 每建一个主题：补 `guides.ts` 条目 + `pillars.ts` 五支柱归属 + `link-map.ts` 内链（categoryGuides/guideCategories/guideSkus/guideCommercialLinks）+ `/guides/` 索引分组 + llms.txt（跑 `scripts/generate-llms.py`）。
2. 复用现有内容优先，不重复模板。
3. 新建页遵守：单 H1 + 层级 + 面包屑 + canonical + 真实结构化数据 + 边界纪律（P3 不指向 Huiying 制造）。
4. 每个新页落地后：build + 断链/孤儿/重复 title/H1 复核 + commit+push。
