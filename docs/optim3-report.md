# chinafilterhub.com 优化批 3（Pillar/Cluster 内链矩阵 + 意图收口 + AIO/SEO 深化）实施报告

> 批次：optim3 · 日期：2026-10-30 · 范围：`filterhub`（Astro · 136 页 · 104 SKU · 13 品类 · 7 指南）+ 兄弟仓 `data.filterhub`（MkDocs）
> 纪律：保留 URL/架构 · 分步 commit+push 两仓 · 数据三副本字节一致 · 同步 0/0

---

## 1. 结论摘要

| 维度 | 结果 | 关键数字 |
|---|---|---|
| Pillar/Cluster 内链矩阵 | **PASS** | 87 条源→目标边 · 136 页全接入 · 7 指南 0 孤立节点 |
| 意图收口（8 组关键词） | **PASS** | 8 组三层 title/H1 全差异化 · 修复 1 处同名 SKU 竞争 |
| AIO 直接答案/结论段 | **PASS** | 7 指南全有直接答案段 + Key takeaway + 专业判断句 |
| 实体语义关联 | **PASS** | Article `about`/`articleSection` · Product `material`/`additionalProperty` |
| title/desc 终审 | **PASS** | 0 重复 title · 0 重复 desc · desc 全 ≤155 字符 |
| llms.txt | **PASS** | 主站支柱/指南/品类树/重要 SKU · data 站同步 |
| 验证 | **PASS** | 两站 build 通过 · 断链 0 · schema 653 块语法全合法 · 三副本字节一致 |

---

## 2. Pillar/Cluster 内链矩阵

### 2.1 支柱归属确认（7 指南）

| 支柱 | 指南 |
|---|---|
| Selection（选型） | air-filter-selection · hepa-cleanroom-sourcing |
| Standards（质量测试/标准） | filter-efficiency-grades · hepa-vs-ulpa · filter-media-selection |
| Cleanroom（洁净室） | cleanroom-filtration-solutions |
| OEM | oem-procurement-process |

### 2.2 矩阵规模

| 方向 | 链接数 |
|---|---|
| 指南 → 指南（related[] 双向/交叉） | 26 |
| 品类 → 指南（categoryGuides） | 21 |
| 指南 → 品类（guideCategories） | 21 |
| 指南 → 重要 SKU（guideSkus） | 19 |
| **合计** | **87** |

### 2.3 孤立节点清零

此前 `filter-media-selection`（Standards）与 `oem-procurement-process`（OEM）**零入链**，`cleanroom-filtration-solutions` 仅 1 入链。本批补齐反向引用后，7 指南入链全部 ≥3（无孤立节点）。详细全表见 `reports/internal-link-matrix.md`。

### 2.4 指南 → 重要 SKU（新增）

每篇指南新增「Featured SKUs」区块，链 2–3 个 top SKU（锚定 `sku-depth.ts` 已发布的规格/适配框架，零虚构）。SKU 页「Related resources」回链品类 + 指南（已有，本批复核确认方向正确）。

---

## 3. 意图收口（8 组关键词三层分工复查）

复查全站 dist 的 title/desc/H1，8 组关键词三层分工全部保持差异化（品类=通用 hub / 指南=流程 / SKU=型号落地），无同词同位竞争：

| 关键词组 | 品类页 | 指南页 | SKU 页 |
|---|---|---|---|
| HEPA | hepa-filters | hepa-cleanroom-sourcing | AIRY-GEL-HEPA 等 |
| ULPA | hepa-filters | hepa-vs-ulpa | YT-ULPA-U15 等 |
| cleanroom | cleanroom-equipment | cleanroom-filtration-solutions | KLC-FFU / EAWAY-FFU-4848 |
| air filter | air-filters | air-filter-selection | 42N-62-15470 等 |
| activated carbon | activated-carbon | filter-media-selection | AIRY-AC-PANEL |
| filter media | filter-media | filter-media-selection | AIRY-NEEDLE-COTTON |
| efficiency class | hvac-filters | filter-efficiency-grades | AIRY-FB-PANEL |
| OE number | oil-filters | oem-procurement-process | 15208-AD200 |

**遗留冲突修复 1 处**：`KLC-HT-HEPA` 与 `EAWAY-HT-HEPA` 同名「High Temperature HEPA Filter」导致重复 title，改为「High Temperature HEPA Filter (KLC)」/「…(EAWAY)」区分源厂线（仅 name 字段，不动 URL/描述）。

---

## 4. AIO/SEO 深化

### 4.1 直接答案段 / 结论段 / 专业判断句

7 指南全部：
- **直接答案段**：开篇 2–3 句直答核心问题（`directAnswer` 字段，渲染为 lede，利于 AI 提取引用）。
- **Key takeaway 小结**：新增 `keyTakeaway` 字段，渲染为高亮 callout（`<section class="notice notice--navy">`）。
- **专业判断句**：`sourcingPerspective` 段（已有，本批复核 7/7 保留主观采购判断）。

### 4.2 实体语义关联

- **Article schema**（指南页）：增补 `articleSection`（支柱）+ `about`（标准实体 Thing 数组，如 EN 1822 / ISO 16890 / ISO 14644 / ASHRAE 52.2 / MERV），正文与 schema 一致提及。
- **Product schema**（SKU 页）：增补 `material`（已确认材质字段）+ `additionalProperty`（efficiency_class + 已确认 spec 字段），实体字段只取 `data_status !== 'pending'` 的已确认值，零虚构。
- **Breadcrumb schema**（BaseLayout）：已有，本批复核保留。

### 4.3 title/desc 终审

- 唯一性：0 重复 title · 0 重复 desc（脚本抽验 136 页）。
- 含意图词：8 组关键词意图词均落在对应 title/desc 首句。
- 长度合规：meta description 全站截断至 ≤155 字符（`BaseLayout.truncateDesc` 词边界截断，意图词前置不丢失）；title 保留完整（指南标题本身为长描述性标题）。

### 4.4 H2/H3 关键词布局 / FAQ 密度

- 指南页 H2 结构 7/7 完整（8–9 个 H2：Key takeaway + 3 小节 + sourcing + related + shop + featured SKUs + sources）。
- FAQ 密度：全站 FAQPage 0（本批未引入 FAQ，无堆砌风险；FAQ schema 属批 4 范围）。

### 4.5 llms.txt

- 主站 `public/llms.txt`：新增「Buyer guides (by pillar)」（Selection/Standards/Cleanroom/OEM 四支柱分组）+「Important SKUs (top models)」（20 top SKU）+ 品类树（含中文名）。
- data 站 `docs/llms.txt`：品类 URL 改为 kebab slug（`/products/air-filters/`），品类名含中文，与主站同步。

---

## 5. 验证总表

| 维度 | 结果 |
|---|---|
| 主站 build | `npm run build` 136 页 ✓ |
| 数据子站 build | `mkdocs build` ✓（CJK 搜索资源按 hook 移除） |
| 断链 | dist 站内 href 3204 条全解析，**0 断链** |
| schema 语法 | 653 个 JSON-LD 块全部合法（0 失败） |
| title/desc | 0 重复 · desc ≤155 字符 |
| 内链矩阵 | 87 条边 · 7 指南无孤立节点 |
| 字节一致 | `data/products.json` ≡ `docs/data/products.json` ≡ 主库 `products.json`（cmp 通过） |
| 子站 pending | docs/products/*.md 0 处 `pending` 残留 |
| 同步 | 两仓提交前 `git status` 干净 → 提交后推送到位 |

---

## 6. Commit 记录

**filterhub**：
- `optim3-pillar-cluster` — 指南 Key takeaway + 标准实体 + related 矩阵补齐 + link-map 指南→品类/SKU + 指南页/SKU 页 schema 实体 + desc 截断
- `optim3-intent-llms` — 同名 SKU 区分（KLC/EAWAY）+ llms.txt 支柱/重要 SKU 重构 + 内链矩阵报告

**data.filterhub**：
- `optim3-sync` — SKU name 字节同步 + 重生成 docs/products/*.md + docs/data/products.json + llms.txt kebab 修复

---

## 7. 遗留（供后续批次）

- FAQ schema + 问答区块、SKU 页图与 alt、H3 层级（批 4）。
- `_meta.categories[].nameZh` 中文补全仍为英文占位（数据层已具备 categories.ts 中文映射，渲染接入待批 4）。
- `oem-procurement-process` 指南「RFQ 错误清单 + 首件检验 checklist」加深（plan §3 批 3 项，本批已补 Key takeaway，正文加深留待后续）。
