# CONTENT_AUDIT.md — chinafilterhub.com 全站内容清册（终版 · Phase 1–10）

> **范围**：`filterhub`（Astro · 150 页 · 104 SKU · 13 品类 · 11 指南 · 5 支柱 · 6 商业页 · 1 工具）
> **兄弟仓**：`data.filterhub`（MkDocs · 结构化数据子站，本批仅同步 llms.txt 生成，数据 0 漂移）
> **日期**：2026-10-30
> **纪律**：不重建框架 · 保留 Astro/URL/设计规范 · 不删页 · 不虚构（缺信息保留现值或标 HUMAN REVIEW）· 增量 · 分步 commit+push

---

## 0. 结论摘要（TL;DR）

| 维度 | 结果 |
|---|---|
| 页面总量 | **150 页**（首页 1 · 品类 14 · SKU 104 · 指南 12 · 支柱 6 · 商业页 6 · 合规/系统 6 · 工具 1）|
| 处置分布（批 1） | KEEP 32 · IMPROVE 104 · MERGE 0 · REDIRECT 0 · HUMAN REVIEW 0 |
| **实施状态（批 1–4 落地后）** | **全部 IMPROVE 已实施**（支柱页/首页/商业转化/深度接线/品类深化/SKU 模板/SEO 技术） |
| 五支柱规模 | P1 汽车滤清 57 · P2 滤清技术 9 · P3 工业与 HVAC 57 · P4 OEM 与批发 3 · P5 Huiying 制造 2 · 跨支柱枢纽页 3 |
| 关键发现（批 1 已修） | ① SKU/指南「深度内容」接线断裂 → 批 2/3 修（`productBySlug` + `skuSlug` 归一化）；② 4 品类描述模板化 → 批 3 逐 SKU 深化；③ 54/104 无 OE 号 → 属工业品类正常；④ data.filterhub served 副本分叉 → 数据子站实施范围 |

---

## 1. 方法与假设

- **逐页来源**：`src/pages/*.astro`（静态/动态路由）+ `src/data/*.ts`（categories / guides / products.json / sku-depth / link-map / pillars / site）+ 兄弟仓 `data.filterhub/docs/`。
- **页面清单**：150 页 = 12 静态页 + 13 品类页 + 1 产品中心 + 104 SKU 页 + 11 指南页 + 1 指南索引 + 5 支柱页 + 1 支柱索引 + 6 商业页 + 1 工具 + 6 合规/系统页（含 404）。
- **支柱映射规则**（执行书五支柱）：
  - P1 汽车滤清 = air / cabin / oil / fuel / hydraulic / transmission 6 品类 + 50 SKU + 3 指南
  - P2 滤清技术 = filter-media 1 品类 + 6 SKU + 3 指南
  - P3 工业与 HVAC = hvac / hepa / activated-carbon / pocket / liquid-cartridges / cleanroom-equipment 6 品类 + 48 SKU + 3 指南
  - P4 OEM 与批发 = 2 指南 + /oem/ + /private-label/ + /wholesale/ + /rfq/ + /contact/
  - P5 Huiying 制造 = /factory/ + /company/
- **页型 A–H** 按执行书 Phase 1 定义；`G 数据页` 在主站为 0（结构化数据在 `data.filterhub`，主站外链）。
- **处置标签**：KEEP / IMPROVE / MERGE / REDIRECT / HUMAN REVIEW。
- **优先级**：P0 阻塞修正 → P1 高价值 → P2 中 → P3 低。

---

## 2. 页型分布（A–H，终版 150 页）

| 页型 | 数量 | 说明 |
|---|---|---|
| A · 首页/品牌 | 1 | `/`（八段式首页，批 2）|
| B · 品类页 | 14 | `/products/` + 13 个 `/products/{category}/` |
| C · SKU 页 | 104 | `/products/{category}/{slug}/` |
| D · 技术指南 | 12 | `/guides/` + 11 个 `/guides/{slug}/` |
| E · 支柱页 | 6 | `/pillars/` + 5 个 `/pillars/{slug}/`（批 2 新建）|
| F · OEM/批发/商业页 | 6 | `/oem/` `/factory/` `/private-label/` `/wholesale/` `/rfq/` `/contact/` `/company/`（其中 company/factory 属 P5）|
| G · 数据页 | 0 | 结构化数据在 `data.filterhub`（主站外链）|
| H · 其他 | 6 | `/privacy/` `/terms/` `/disclaimer/` `/cookies/` `/404/` + 工具 `/tools/oe-lookup/` |
| **合计** | **150** | — |

> 工具页 `/tools/oe-lookup/`（批 4 Phase 9）为纯前端静态 OE 交叉号查询，数据来源 `products.json` 的 `oe_reference` 字段（67 条 OE 号 / 50 SKU），无虚构适配。

---

## 3. 逐页清册（摘要）

### 3.1 A · 首页（1 页）

| URL | 处置 | 实施状态 |
|---|---|---|
| `/` | IMPROVE | ✅ 已实施（批 2：八段式——品牌定位/五问/能力表/品类/汽车支柱/知识中心/OEM/制造伙伴/指南/CTA）|

### 3.2 B · 品类页（14 页，全部 IMPROVE → 已实施）

13 品类页均含 `positioning / directAnswer / technicalDepth / selection / procurement / sourcingPerspective` 六段 + 「Category at a glance」对比表 + SKU 表 + 报价 CTA（批 3 深化）。5 个 <400 词品类已补足。支柱归属见 §3.5。

### 3.3 C · SKU 页（104 页）

- 20 个 top OE 深度 SKU = KEEP（fitment + conclusion 已随接线修复渲染，批 3）。
- 84 个 IMPROVE SKU = 已实施（描述去模板化 + fitment 结论 + related products/guides 区块）。
- Product JSON-LD：仅 `name / sku / category / description / brand / material / additionalProperty / AggregateOffer(无价)` 真实字段，无虚构评分/价格。

### 3.4 D · 技术指南（12 页，11 指南 + 索引）

| 指南 | 支柱 | 处置 | 实施状态 |
|---|---|---|---|
| air-filter-selection | P1 | KEEP | ✅ |
| cabin-vs-engine-air-filter（批 2 新建）| P1 | CREATE | ✅ |
| oil-filter-types（批 2 新建）| P1 | CREATE | ✅ |
| filter-efficiency-grades | P2 | KEEP | ✅ |
| filter-media-selection | P2 | KEEP | ✅ |
| efficiency-vs-pressure-drop（批 2 新建）| P2 | CREATE | ✅ |
| hepa-cleanroom-sourcing | P3 | KEEP | ✅ |
| hepa-vs-ulpa | P3 | KEEP | ✅ |
| cleanroom-filtration-solutions | P3 | KEEP | ✅ |
| oem-procurement-process | P4 | KEEP | ✅ |
| filter-moq-lead-time（批 2 新建）| P4 | CREATE | ✅ |

### 3.5 E · 支柱页（6 页，批 2 新建）

| URL | 支柱 | 承载 |
|---|---|---|
| `/pillars/` | 跨支柱枢纽 | 五支柱索引 |
| `/pillars/automotive-filters/` | P1 | 6 品类 + 3 指南 |
| `/pillars/filter-technology/` | P2 | filter-media + 3 指南 |
| `/pillars/industrial-hvac/` | P3 | 6 品类 + 3 指南 |
| `/pillars/oem-wholesale/` | P4 | /oem/ /private-label/ /wholesale/ /rfq/ + 2 指南 |
| `/pillars/qinghe-huiying/` | P5 | /company/ /factory/ + 汽车品类 |

### 3.6 F · 商业页（6 页）

| URL | 支柱 | 实施状态 |
|---|---|---|
| `/oem/` | P4 | ✅（能力表 + 流程 + 私牌 + CTA，批 3）|
| `/private-label/`（批 3 新建）| P4 | ✅ |
| `/wholesale/`（批 3 新建）| P4 | ✅ |
| `/rfq/`（批 3 新建，RFQ 表单）| P4 | ✅ |
| `/factory/` | P5 | ✅（行业参考框架 + 四段质控，诚实标注）|
| `/company/` | P5 | ✅（法务披露 + Organization schema）|
| `/contact/` | P4 | ✅（渠道表 + WhatsApp）|

### 3.7 G · 数据页（0，主站）

结构化数据在 `data.filterhub`；主站通过 `site.dataSubsiteUrl` 外链。

### 3.8 H · 其他（6 页）

| URL | 处置 | 实施状态 |
|---|---|---|
| `/privacy/` `/terms/` `/cookies/` `/404/` | KEEP | ✅ |
| `/disclaimer/` | IMPROVE | ✅（批 4 修复一句话重复）|
| `/tools/oe-lookup/`（批 4 新建）| CREATE | ✅ |

---

## 4. 处置分布汇总（批 1 → 实施后）

| 处置 | 批 1 数量 | 实施后 |
|---|---|---|
| KEEP | 32 | 保持 |
| IMPROVE | 104 | **全部已实施** |
| CREATE（批 2–4 新增）| — | 14（4 指南 + 5 支柱 + 1 支柱索引 + 3 商业页 + 1 工具）|
| MERGE / REDIRECT | 0 | 0（保留全部现有 URL）|
| HUMAN REVIEW | 0 | 见 §5 人工复核清单 |

---

## 5. 关键发现与遗留（终版）

### 5.1 ✅ 已修复（批 1 发现 → 批 2/3 落地）

- **SKU/指南深度接线断裂**：`productBySlug()` + `skuSlug()` 归一化按 `url_slug` 解析，20 条 fitment/conclusion + 19 条 guideSkus 全部恢复渲染。
- **4 品类 SKU 描述模板化**：oil/fuel/cabin/transmission SKU 描述逐条去模板（批 3）。
- **disclaimer 一句话重复**：批 4 修复。

### 5.2 ⚠️ 遗留（数据子站范围，主站本批不改）

| 项 | 状态 |
|---|---|
| `filterhub/src/data/products.json` ↔ `data.filterhub/data/products.json` | **字节一致 ✓** |
| `data.filterhub/docs/data/products.json`（served 副本）| 分叉 ✗（需数据子站重跑生成脚本）|
| 数据子站 SKU 页 `pending` 残留 | 待核验 |

> 主站本批对 `products.json` 零改动，主↔数据子站数据同步维持 **0/0**（无新增漂移）。llms.txt 两站均由 `scripts/generate-llms.py` 重新生成（数据子站 llms.txt 一并同步，数据文件不动）。

### 5.3 54/104 SKU 无 OE 号

集中在 HVAC/HEPA/洁净室/活性炭/袋式/滤材/液体等工业品类（以「品类+参数」检索，属正常），汽车品类无 OE 号 SKU 已按参数选型标注。

---

## 6. 优先级与实施状态图例

| 优先级 | 含义 | 对应实施批 |
|---|---|---|
| P0 | 阻塞修正（接线断裂）| 批 2/3 已修 |
| P1 | 高价值（支柱/首页/商业转化/top SKU）| 批 2–3 已实施 |
| P2 | 中（品类/SKU 深化、指南重排）| 批 3 已实施 |
| P3 | 低（合规润色）| 批 4 已实施 |

**实施状态**：批 1–4 全部落地。本清册为终版。
