# INTERNAL_LINK_MAP.md — 内链图谱（终版 · Phase 6）

> **范围**：`filterhub`（Astro · 150 页）· 兄弟仓 `data.filterhub`（跨站外链）
> **日期**：2026-10-30
> **性质**：内链图谱终版。批 1 出「现状核对 + 目标设计」，批 2/3 落地全部链接与接线修复，批 4 复核（断链 0 · 孤儿 0）。
> **纪律**：保留现有 URL · 描述性锚文本 · 不堆砌精确匹配锚 · 工业/HVAC 不指向 Huiying 制造页。

---

## 1. 目标用户旅程（转化链）

```
搜索文章(指南) → 技术解释 → 支柱落地页 → 品类页 → 相关 SKU → Huiying OEM/批发页 → RFQ/联系
```

- 每条链路一个主转化目标，副链做「进一步阅读」。
- 工业/HVAC（P3）链路**不**进入 Huiying 制造页（P5）；终点是品类/SKU + 通用 /rfq/。
- 汽车滤清（P1）链路才进入 Huiying 制造（P5）与 OEM（P4）。

---

## 2. 内链现状（`src/data/link-map.ts` 单一来源表，全部已落地）

| 方向 | 实现 | 规模 | 状态 |
|---|---|---|---|
| 指南 → 指南（`related[]`）| 双向/交叉 | 26 边 | ✅ 正常 |
| 品类 → 指南（`categoryGuides`）| 品类页 + SKU 页 | 21 边 | ✅ 正常 |
| 指南 → 品类（`guideCategories` 反向派生）| 指南页「Shop the category」| 21 边 | ✅ 正常 |
| 指南 → 重要 SKU（`guideSkus`）| 指南页「Featured SKUs」| 19 边 | ✅ **已修复**（`productBySlug` 按 url_slug 解析）|
| 指南 → 商业页（`guideCommercialLinks`）| 指南页「Related pages」| 11 指南全覆盖 | ✅ 正常（含边界纪律）|
| SKU → 深度（`sku-depth.ts`）| SKU 页「Fitment & sourcing」| 20 条 | ✅ **已修复**（`skuSlug` 归一化键）|
| 支柱页 → 品类/指南/其他支柱 | `pillars.ts` `categories/guides` + 跨支柱块 | 5 支柱 | ✅ 正常 |
| 首页 → 品类/支柱/指南/商业页 | index.astro 八段 | 全覆盖 | ✅ 正常 |
| 商业页 ↔ 品类/指南/contact | /oem/ /private-label/ /wholesale/ /rfq/ | 全覆盖 | ✅ 正常 |
| 工具页 | /rfq/ → /tools/oe-lookup/ | 1 入链 | ✅ 正常（批 4 新增，无孤儿）|

### 2.1 接线断裂（批 1 发现 → 批 2/3 已修）

| 断裂点 | 根因 | 修复 |
|---|---|---|
| `guideSkus` → SKU（19 边）| 旧 OE 码 vs CFH 新号 | `productBySlug()` 按 `url_slug` 小写归一化解析 |
| `sku-depth.ts` → SKU（20 条）| 旧 OE 号键 vs CFH 号查找 | `skuSlug(product.url_slug \|\| product.sku)` 归一化键 |

---

## 3. 支柱落地页（批 2 已建，非暂用品类页）

| 支柱 | 落地 URL | 承载 |
|---|---|---|
| P1 汽车滤清 | `/pillars/automotive-filters/` | 6 品类 + 3 指南 |
| P2 滤清技术 | `/pillars/filter-technology/` | filter-media + 3 指南 |
| P3 工业与 HVAC | `/pillars/industrial-hvac/` | 6 品类 + 3 指南 |
| P4 OEM 与批发 | `/pillars/oem-wholesale/` | /oem/ /private-label/ /wholesale/ /rfq/ + 2 指南 |
| P5 Huiying 制造 | `/pillars/qinghe-huiying/` | /company/ /factory/ + 汽车品类 |

---

## 4. 目标链路（边 + 锚文本规范，已落地）

| 源 | → 目标 | 锚文本 | 主/副 |
|---|---|---|---|
| 指南（P1）| 支柱页 P1 | 支柱名 | 副 |
| 指南（P1）| 品类页 | 品类名 | 主 |
| 指南（P1）| 具体 SKU | `SKU` + 用途 | 主 |
| 指南（P1）| /oem/ /company/ /factory/ | 「Discuss an OEM project」「Qinghe Huiying manufacturing」| 副 |
| 指南（P2/P3）| 品类页 / 通用 /rfq/ | 描述性 | 主 |
| 指南（P4）| /oem/ /contact/ /rfq/ | 「Start an inquiry」| 主 |
| 品类页 | 相关指南 / SKU / 支柱 | 指南标题 / SKU 表 | 主 |
| SKU 页 | 品类页 / 指南 / /oem/ /contact/ /pillar | 描述性 | 主 |
| SKU 页（P1）| Huiying 制造页 | 仅汽车滤清 SKU | 副 |
| 商业页 | 支柱 + 品类 + 指南 + /contact/ | 描述性 | 副 |

### 4.1 转化目标与 CTA 措辞（Phase 7 已对齐）

| 页面类型 | 主转化目标 | CTA 措辞 |
|---|---|---|
| 技术文章（指南）| 探索相关产品 / 读选型指南 | Explore related products · Read selection guide |
| 产品页（品类/SKU）| 索取产品详情 / 报价 | Request product details · Request quotation |
| OEM 页 | 讨论 OEM 项目 / 提交 RFQ | Discuss an OEM project · Submit an RFQ |

---

## 5. 现状 vs 目标（批 4 复核结论）

| 维度 | 目标 | 状态 |
|---|---|---|
| 支柱层 | 五支柱独立落地页 | ✅ 已建 5 + 索引 |
| 指南 → SKU | 按语境链接 top SKU | ✅ 19 边已修复渲染 |
| SKU → 深度 | fitment/结论 | ✅ 20 条已修复渲染 |
| 工业/HVAC → Huiying | 不指向 Huiying 制造 | ✅ 边界纪律保持 |
| RFQ 环节 | RFQ 表单 | ✅ /rfq/ 表单 |
| 孤立页 | 0 | ✅ 0 |
| 断链 | 0 | ✅ 0 |

---

## 6. 与现有报告关系

- 承接 `reports/internal-link-matrix.md`（optim3 · 87 边矩阵），叠加五支柱映射 + 接线修复 + 目标图谱。
- `CONTENT_AUDIT.md`（终版逐页清册）· `CONTENT_STRATEGY.md`（终版五支柱架构）为本文件提供页面与支柱归属。
