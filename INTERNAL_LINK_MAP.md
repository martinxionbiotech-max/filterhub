# INTERNAL_LINK_MAP.md — 内链图谱（现状 + 目标）

> **范围**：`filterhub`（Astro · 136 页）· 兄弟仓 `data.filterhub`（跨站外链）
> **日期**：2026-10-30
> **性质**：为后续批（Phase 6 内链实施）预设计的内链图谱。本批只出「现状核对 + 目标设计」，**不落地链接改动**。
> **纪律**：保留现有 URL · 描述性锚文本 · 不堆砌精确匹配锚 · 工业/HVAC 内容不强行指向 Huiying 汽车制造页。

---

## 1. 目标用户旅程（转化链）

执行书 Phase 6 要求的内链主线：

```
搜索文章(指南) → 技术解释 → 支柱落地页 → 品类页 → 相关 SKU → Huiying OEM/批发页 → RFQ/联系
```

- 每条链路**一个主转化目标**，副链做「进一步阅读」。
- 工业/HVAC（P3）链路**不**进入 Huiying 制造页（P5）；其终点是品类页/SKU + 通用 OEM/询价。
- 汽车滤清（P1）链路才进入 Huiying 制造（P5）与 OEM（P4）。

---

## 2. 现有内链现状核对

### 2.1 已落地的内链（`src/data/link-map.ts` 单一来源表）

| 方向 | 实现 | 现状规模 | 状态 |
|---|---|---|---|
| 指南 → 指南（`related[]`） | 双向/交叉 | 26 边，7 指南全部 ≥2 入链 | ✅ 正常 |
| 品类 → 指南（`categoryGuides`） | 品类页「Related buyer guides」+ SKU 页「Related resources」 | 21 边 | ✅ 正常 |
| 指南 → 品类（`guideCategories` 反向派生） | 指南页「Shop the category」 | 21 边 | ✅ 正常 |
| 指南 → 重要 SKU（`guideSkus`） | 指南页「Featured SKUs」 | 19 边 | ❌ **断裂**（见 §2.2） |
| 指南 → 商业页（`guideCommercialLinks`） | oem-procurement-process → /oem/ /products/ | 2 边 | ✅ 正常 |
| SKU → 深度（`sku-depth.ts`） | SKU 页「Fitment & sourcing」 | 20 条 | ❌ **断裂**（见 §2.2） |

### 2.2 现有内链断裂点（P0，实施批先修）

| 断裂点 | 根因 | 影响 |
|---|---|---|
| `guideSkus` → SKU（19 边） | `guideSkus` 值存旧 OE/厂商码，但 `productBySku(code)` 按 `product.sku`（现为 `CFH-*` 新号）精确匹配 → 0 命中 | 7 指南页「Featured SKUs」区块空渲染 |
| `sku-depth.ts` → SKU（20 条） | 键为旧 OE 号（`42N-62-15470`…），但 SKU 页 `skuDepth[product.sku]` 按 CFH 号查找 → 0 命中 | 104 SKU 页「Fitment & sourcing」区块空渲染 |

> 详见 `CONTENT_AUDIT.md` §5.1。修复方向：按 `url_slug`（小写归一化）建索引，而非 `sku`；不重建页面，只修查找键。

### 2.3 现状覆盖结论

- **136 页全接入**（无孤立页）：每页至少 1 条入链（首页↔品类↔SKU↔指南↔商业页 + 数据站外链）。
- 但「指南 → 具体 SKU」与「SKU → 深度结论」两段**实际渲染为空**（§2.2 接线断裂），导致转化链中「品类/SKU 落地」一环在指南页失效。

---

## 3. 目标内链图谱（五支柱）

### 3.1 支柱落地页（实施批新建 5 页 + 重排 1 页）

| 支柱 | 目标落地 URL | 承载 | 现状 |
|---|---|---|---|
| P1 汽车滤清 | `/products/air-filters/`（暂用品类页）→ 建议新建 `/pillars/automotive-filters/` 或复用 `/products/` 分组 | 6 品类入口 + 汽车滤清指南 | 缺独立支柱页 |
| P2 滤清技术 | 建议 `/pillars/filter-technology/` | filter-media + 技术指南 | 缺 |
| P3 工业与 HVAC | 建议 `/pillars/industrial-hvac/` | 6 品类 + 3 指南 | 缺 |
| P4 OEM 与批发 | `/oem/`（现成） | OEM 流程 + 采购指南 | 复用 |
| P5 Huiying 制造 | `/company/` + `/factory/`（现成） | 制造主体 + 商业方案 | 复用 |

> 支柱落地页可复用现有 `/products/`（产品中心）按五支柱分组的轻量方案，避免新路由；正式「支柱页」是否新建由实施批按执行书 Phase 4 决定。

### 3.2 目标链路（每条边 + 锚文本规范）

| 源 | → 目标 | 锚文本规范 | 主/副 |
|---|---|---|---|
| 指南（P1） | 支柱页 P1 | 「Automotive filter selection」 | 副 |
| 指南（P1） | 品类页（air/oil/cabin…） | 品类名 | 主 |
| 指南（P1） | 具体 SKU（top OE 型号） | `SKU 号` + 用途 | 主 |
| 指南（P1） | `/oem/`（汽车 OEM） | 「Discuss an OEM project」 | 副 |
| 指南（P1） | Huiying 制造页（/factory/ /company/） | 「Qinghe Huiying manufacturing」 | 副（仅 P1） |
| 指南（P2） | 品类页（filter-media） | 品类名 | 主 |
| 指南（P2） | 技术标准指南 | 标准名 | 副 |
| 指南（P3） | 品类页（hvac/hepa/…） | 品类名 | 主 |
| 指南（P3） | SKU（HEPA/FFU top） | `SKU` + 用途 | 主 |
| 指南（P3） | 通用 OEM/询价（**不指向 Huiying 制造**） | 「Submit an RFQ」 | 副 |
| 指南（P4） | `/oem/` + `/contact/` | 「Start an inquiry」 | 主 |
| 品类页 | 相关指南 | 指南标题 | 主 |
| 品类页 | 相关 SKU | `SKU` 列表（表格内） | 主 |
| 品类页 | 支柱页 | 支柱名 | 副 |
| SKU 页 | 品类页 | 品类名 | 主 |
| SKU 页 | 相关指南 | 指南标题 | 副 |
| SKU 页 | `/oem/` + `/contact/` | 「Request quotation」 | 主 |
| SKU 页（P1） | Huiying 制造页 | 仅汽车滤清 SKU | 副 |
| 商业页（/oem/ /factory/ /company/） | 支柱页 + 品类 + 指南 + /contact/ | 描述性 | 副 |

### 3.3 转化目标与 CTA 措辞（执行书 Phase 7 对齐）

| 页面类型 | 主转化目标 | CTA 措辞 |
|---|---|---|
| 技术文章（指南） | 探索相关产品 / 读选型指南 | Explore related products · Read selection guide |
| 产品页（品类/SKU） | 索取产品详情 / 报价 | Request product details · Request quotation |
| OEM 页 | 讨论 OEM 项目 / 提交 RFQ | Discuss an OEM project · Submit an RFQ |

---

## 4. 现状 vs 目标差异

| 维度 | 现状 | 目标 |
|---|---|---|
| 支柱层 | 无独立支柱页，`/products/` 按品类平铺 | 五支柱分组 + 可选支柱落地页 |
| 指南 → SKU | 19 边但渲染断裂 | 修复后按「语境相关」链接 top SKU |
| SKU → 深度 | 20 条深度但渲染断裂 | 修复后 SKU 页含 fitment/结论 |
| 工业/HVAC → Huiying | 现状未强制（正确） | 保持不指向 Huiying 制造 |
| RFQ 环节 | `/contact/` mailto + WhatsApp（无表单） | Phase 7 加 RFQ 表单 |
| 孤立页 | 0 | 0（维持） |

---

## 5. 实施顺序（后续批）

1. **P0 修接线**：`sku-depth.ts` 键 + `guideSkus` 解析改按 `url_slug` 归一化（`skuBySlug()` 辅助）——恢复「指南 → SKU」「SKU → 深度」渲染。
2. **P1 支柱层**：`/products/` 与 `/guides/` 按五支柱分组（数据层加 `pillarKey`）。
3. **P1 转化链**：指南 → 品类 → SKU → /oem/ → /contact/ 全链补边 + 描述性锚文本。
4. **P1 边界**：P3 内容页不链 Huiying 制造；P1 内容页链 Huiying 制造。
5. **P2 缺口**：按 `CONTENT_STRATEGY.md` §4 建 18 个缺失主题，每个新页落地时补入内链图谱。

---

## 6. 与现有报告关系

- 承接 `reports/internal-link-matrix.md`（optim3 · 87 边矩阵）——本文件在其上叠加**五支柱映射** + **P0 接线断裂发现** + **目标图谱**。
- `CONTENT_AUDIT.md`（逐页清册）与 `CONTENT_STRATEGY.md`（五支柱架构）为本文件提供页面与支柱归属。
