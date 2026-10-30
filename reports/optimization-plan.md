# chinafilterhub.com 优化计划（阶段二实施蓝图 · 分批）

> 本文件为**计划**，非执行。所有内容改动待用户批准后分批复现。扫描阶段零改动。
> 主体替换目标：占位 `Qinghe Air Filter` → **`Qinghe Yinghui Filter`**（全站 + 兄弟仓）。
> 保留红线：URL/架构/布局/数据库不动 · 不批量删页 · 不动 canonical/索引 · 保留有效关键词。

---

## 0. 分批总览

| 批次 | 范围 | 目标 | 主要动作 |
|---|---|---|---|
| 批 1 | 核心品类（13 页） | 修复 P0 渲染 bug + 品类页补足 400 词 + 主体替换 | 修 `codeFromSlug` 映射、5 薄品类加深、品类→指南内链 |
| 批 2 | 重要 SKU（104 页） | 去模板化 + 差异化 + 补主观句 + 补 subcategory | 4 高相似品类重写、45 SKU 补 subcategory、SKU→指南内链 |
| 批 3 | Pillar/Cluster（7 指南） | 建满内链矩阵 + 补齐孤立节点 | 补入链、指南→品类、oem/media 扩充 |
| 批 4 | 商业页 + 合规页 | 主体替换 + AIO（FAQ/schema/alt） | company/factory/oem/contact/合规页替换 + FAQ schema |

每批独立 commit + push，兄弟仓同步保持一致（`data/products.json` ≡ `docs/data/products.json`）。

---

## 1. 主体 Qinghe Yinghui Filter 全站替换清单

**主仓 `filterhub`**（占位 `Qinghe Air Filter` 出现文件，174 处）:

| 文件 | 位置 | 替换内容 |
|---|---|---|
| `src/data/site.ts` | `brand` / `positioning` / `organizationSchema.name` | `'Qinghe Air Filter'` → `'Qinghe Yinghui Filter'`；`positioning` 中 "Qinghe filter industry cluster" 保留（地名 Qinghe 不动） |
| `src/data/site.ts` | `entity.*`（6 个 `[provisional: …]`） | 待营业执照核验后填实（本批只保留 provisional 标记，不虚构） |
| `src/pages/index.astro` | title/description/hero H1/lede/"Who are you?" 卡 | `Qinghe Air Filter` → `Qinghe Yinghui Filter`；"Qinghe-based" → "Qinghe Yinghui-based" |
| `src/pages/company.astro` | title/description/H1 | 同上 |
| `src/pages/factory.astro` | description/lede | 同上（"Qinghe filter industry cluster" 保留） |
| `src/pages/contact.astro` | description | 同上 |
| `src/pages/oem.astro` | title/description | 同上（若含） |
| `src/pages/privacy.astro` / `terms.astro` / `disclaimer.astro` / `cookies.astro` | description | 同上 |
| `src/data/products.json` | `_meta.note` / 无品牌位 | 品牌名仅存于 site.ts（产品层无品牌字段，无需动） |
| `package.json` | `description` | `"Qinghe Air Filter — …"` → `"Qinghe Yinghui Filter — …"` |
| `README.md` | 标题/说明 | 更新 |
| `public/llms.txt` | 首行标题 `# Qinghe Air Filter (FilterHub)` | → `# Qinghe Yinghui Filter (FilterHub)` |
| `public/images/og-default.svg` | 内含文字（若含品牌名） | 检查并替换 |

**兄弟仓 `data.filterhub`**:

| 文件 | 内容 |
|---|---|
| `mkdocs.yml` | `site_description: Qinghe Air Filter product database` → `Qinghe Yinghui Filter …` |
| `docs/index.md` | 品牌名替换 |
| `scripts/build-product-pages.py` | 若含品牌常量则替换 |
| `docs/data/products.json` + `data/products.json` | `_meta` 品牌字段同步（若引入） |

**替换纪律**：地名 `Qinghe`（河北省清河县产业集群）**保留不替换**；仅替换品牌标识 `Qinghe Air Filter` → `Qinghe Yinghui Filter`。全站替换后 `grep -rn "Qinghe Air Filter"` 应归零（除历史 commit/报告文件）。

---

## 2. 中文网补全清单

> 扫描发现：品类 `nameZh` 已存在于 `categories.ts`（空气滤清器/机油滤清器…），但**未渲染**于品类页、SKU 页、首页、指南页；`products.json` 的 `_meta.categories[].nameZh` 当前是英文占位（`"Air Filters (Engine Intake)"`），非中文。

| 补全项 | 现状 | 动作 |
|---|---|---|
| `products.json` `_meta.categories[].nameZh` | 英文占位 | 替换为真实中文（空气滤清器、空调滤清器、机油滤清器、燃油滤清器、液压滤清器、变速箱滤清器、HVAC 过滤器、HEPA/ULPA 高效过滤器、活性炭过滤器、袋式过滤器、滤材介质、液体过滤滤芯、洁净室设备） |
| 品类页 `nameZh` 渲染 | 已有 `<p class="muted">{nameZh} · {grades}</p>` | ✓ 已渲染（nameZh 补中文后自动生效） |
| SKU 页 | 无中文名 | 可加一行中文品类名（数据层已有 category nameZh，渲染层可加） |
| 首页品类卡 | 仅英文名 | 可加 nameZh 副标 |
| 指南页 | 无中文 | 可选：加中文导语（低优先） |

**口径**：中文补全只做「品类名中文化 + 渲染」，不做整站中文内容（站点主体仍英文 B2B）；碎片化分析结论与自有生产口径在批 1–3 的采购观点中植入。

---

## 3. 分批执行细节

### 批 1 — 核心品类（13 页）

**目标**：修复 P0 渲染 bug；品类页全 ≥400 词；主体替换落第一批；品类→指南内链建立。

**动作**：
1. **修 `codeFromSlug`/`categoryName` 映射**（P0-1）：`src/data/products.ts` 让 `codeFromSlug(slug)` 返回 kebab 原值（或让 `productsByCategory` 同时匹配 kebab 与 snake），并让 `categoryName` 用 slug→name 映射（而非 code→name）。验收：`dist/products/{each}/index.html` 渲染「SKUs catalogued: {实际数}」且 SKU 表非空；SKU 面包屑显示「Air Filters (Engine Intake)」非裸 slug。
2. **5 薄品类加深**（cabin 385 / transmission 390 / filter-media 397 / hydraulic 398 / activated-carbon 399 → 各补 60–120 词到 ≥450）：在 `technicalDepth` 补「典型失效模式 + 选型决策树 + 数据确认点」，不虚构数值。
3. **品类→指南内链**：品类页加「Related buyer guides」区块，链到对应指南（如 air-filters→air-filter-selection；hepa-filters→hepa-cleanroom-sourcing；pocket/hvac→filter-efficiency-grades）。
4. **主体替换**（§1 主仓全部文件）。
5. **中文 nameZh 补全**（§2 第一项）。

**验收**：品类页 13/13 ≥400 词；`grep "Qinghe Air Filter"` 主仓归零；品类页 SKU 列表正确；5 个薄品类补足；品类→指南内链 8+ 条；`npm run build` 通过（136 页）。

### 批 2 — 重要 SKU（104 页）

**目标**：去模板化 + 差异化 + 补主观句 + 补 subcategory；SKU→指南内链。

**动作**：
1. **4 高相似品类去模板化**（oil 0.946 / transmission 0.922 / fuel 0.919 / cabin 0.879）：逐条重写描述，锚定 OE 号 + 安装形式 + 典型工况 + 一句采购观点（`Our advice`/`From a sourcing perspective` 轮换）。验收：这 4 品类同品类相似度均值降至 ≤0.30，0 完全重复对。
2. **全 104 SKU 补主观句**：`desource-enrich` 丢失的采购观点补回，每 SKU ≥1 句主观判断（不虚构数据）。
3. **45 SKU 补 `subcategory`**（cabin 8 / fuel 8 / transmission 8 / oil 7 / hydraulic 7 / pocket 5 / air 1 / hepa 1）：按品类已有 subcategory 枚举归类。
4. **SKU→指南内链**：SKU 页「Related resources」从「guides 索引」改为链到**具体相关指南**（如 air-filters SKU → air-filter-selection；hepa SKU → hepa-cleanroom-sourcing/hepa-vs-ulpa）。
5. **消重 `KLC-HT-HEPA` ↔ `EAWAY-HT-HEPA`**（完全相同描述对）：分别锚定各自源厂特征重写。

**验收**：同品类相似度均值 ≤0.30（重点 4 品类）；0 完全重复对；近重复对（≥0.7）≤5（不同品类跨对可容忍）；104/104 含主观句；45 SKU 补 subcategory；SKU→指南内链 ≥104 条；`npm run build` 通过。

### 批 3 — Pillar / Cluster（7 指南）

**目标**：建满内链矩阵；补齐孤立节点；扩充薄指南。

**动作**：
1. **补入链**（§4.3 缺口）：
   - `filter-media-selection` ← 加来自 `air-filter-selection`、`hepa-cleanroom-sourcing`、`activated-carbon`(品类页) 的反向引用。
   - `oem-procurement-process` ← 加来自 `filter-media-selection`、`cleanroom-filtration-solutions` 的引用。
   - `cleanroom-filtration-solutions` ← 加来自 `hepa-vs-ulpa` 的引用。
2. **指南→品类内链**：`air-filter-selection`→`/products/air-filters/`；`hepa-cleanroom-sourcing`→`/products/hepa-filters/`；`cleanroom-filtration-solutions`→`/products/cleanroom-equipment/`；`filter-media-selection`→`/products/filter-media/`；`oem-procurement-process`→`/oem/`。
3. **扩充薄指南**：`oem-procurement-process`(308 词) 补「常见 RFQ 错误清单 + 首件检验 checklist」到 ≥450 词；`filter-media-selection`(442) 可补「grammage/roll width 决策表」。
4. **`sources` 段规范化**：7 篇 sources 目前是「框架级标准引用」，补具体标准编号/年份（已有 ISO 5011/16890/EN 1822/14644/ASHRAE 52.2，检查编号完整性）。

**验收**：7 指南入链完整（无孤立节点）；指南→品类内链 ≥6 条；oem-procurement-process ≥450 词；`npm run build` 通过。

### 批 4 — 商业页 + 合规页 + AIO 收口

**目标**：主体替换收尾；AIO 补 FAQ/schema/alt；商业页实体口径统一。

**动作**：
1. **FAQ schema + 问答区块**：首页/品类页/SKU 页加 `FAQPage` schema 与 3–5 条 Q/A（「如何确认尺寸」「MOQ 是多少」「如何下单」等真实问答，不虚构）。验收：`grep "FAQPage"` ≥3 页。
2. **SKU 页补图 + alt**：为主要 SKU 补品类代表图（已有 6 张品类 webp 可复用），全 `alt` 有文字。
3. **商业页实体口径**：company/factory/oem 页 `[provisional: …]` 字段保持 provisional 不虚构；`entity.legalName` 待核验后填「清河县英汇滤清器」相关实值（本批仅预留字段，不填）。
4. **H3 层级**：品类页「Technical depth」长段落拆 H3 子节（选型/失效模式/标准），补 H3 层级。
5. **数据子站 322 pending 残留修复**：改 `build-product-pages.py`，把空槽位渲染为「not published」而非 `` `pending` ``（与主库「no pending」口径一致），重生成 `docs/products/*.md` + `docs/data/products.json`（并修 snake_case → kebab 同步）。

**验收**：FAQ schema ≥3 页；SKU 页有图有 alt；H3 出现于品类页；数据子站 pending 归零；`docs/data/products.json` 与 `data/products.json` 字节一致；`mkdocs build` 通过；兄弟仓同步 0/0。

---

## 4. Pillar / Cluster 内链矩阵目标（批 3 完成后）

| 指南 | 目标入链来源 | 目标出链（品类/指南） |
|---|---|---|
| air-filter-selection | filter-efficiency-grades · hepa-cleanroom-sourcing | → /products/air-filters/ · filter-media-selection |
| hepa-cleanroom-sourcing | hepa-vs-ulpa · cleanroom-filtration-solutions · air-filter-selection | → /products/hepa-filters/ · filter-media-selection |
| filter-efficiency-grades | air-filter-selection · hepa-vs-ulpa · filter-media-selection | → (标准总纲，出链 all) |
| hepa-vs-ulpa | filter-efficiency-grades · hepa-cleanroom-sourcing · cleanroom-filtration-solutions | → /products/hepa-filters/ |
| filter-media-selection | **air-filter-selection · hepa-cleanroom-sourcing · activated-carbon(品类)** | → /products/filter-media/ · filter-efficiency-grades |
| cleanroom-filtration-solutions | hepa-cleanroom-sourcing · **hepa-vs-ulpa** | → /products/cleanroom-equipment/ · /products/hepa-filters/ |
| oem-procurement-process | **air-filter-selection · filter-media-selection · cleanroom-filtration-solutions** | → /oem/ · /products/ |

> 加粗 = 当前缺失、需新建的链接。完成后 7 指南无孤立节点，每个指南入链 ≥2、出链 ≥2（filter-efficiency-grades 作为标准总纲出链更多）。

---

## 5. 数据可靠性收口清单（跨批）

| 项 | 严重度 | 所在批 | 动作 |
|---|---|---|---|
| 品类页 SKU 列表断裂（映射 bug） | P0 | 批 1 | 修 `codeFromSlug`/`categoryName` |
| `docs/data/products.json` 未同步（snake_case 分叉） | P0 | 批 4 | 重生成 + kebab 同步 |
| 数据子站 322 处 pending 残留 | P1 | 批 4 | 渲染逻辑改「not published」 |
| 45 SKU 缺 subcategory | P1 | 批 2 | 补全 |
| 源站信息残留（company/source_url 数据层） | P2 | 批 4 | 数据层清理（若用户要求彻底 desource） |

---

## 6. 执行纪律（沿用三次修订）

1. **主体 = Qinghe Yinghui Filter**：全站品牌占位替换，地名 Qinghe 保留。
2. **中文网补全 + 碎片化分析结论 + 自有生产口径**：允许在品类/SKU/指南补中文品类名、采购分析结论、自有生产口径（不虚构认证/客户/工厂数据）。
3. **保留 URL/架构/布局/数据库**：不重建路由、不动产品库结构。
4. **不批量删页**：只增改内容，不删 SKU/品类页。
5. **不动 canonical/索引**：不设 noindex、不改 canonical 规则。
6. **保留有效关键词**：HEPA/ULPA/cleanroom/OE number 等商业关键词保留，只做意图分层（品类 hub / 指南框架 / SKU 落地）。
7. **零编造**：数据字段只确认不杜撰；pending 语义保留（改为「not published」而非估算）。
8. **每批 commit + push + 兄弟仓同步 0/0**：`filterhub` 与 `data.filterhub` 的 `data/products.json` 与 `docs/data/products.json` 三副本字节一致。

---

## 7. 验收总表

| 维度 | 目标 |
|---|---|
| P0 渲染 bug | 13 品类页 SKU 列表正确 + 面包屑显示品类名 |
| 重复 | 同品类相似度均值 ≤0.30；0 完全重复；≥0.7 近重复 ≤5 |
| 浅层 | 品类 13/13 ≥400；SKU 中位 ≥60；指南 ≥450（oem/media 补足） |
| 主观观点 | SKU 104/104 · 品类 13/13 · 指南 7/7 |
| 数据可靠性 | 子站 pending 归零；三副本字节一致；subcategory 104/104 |
| 主体替换 | `grep "Qinghe Air Filter"` 全仓归零 |
| 内链 | 7 指南无孤立节点；指南→品类 ≥6；SKU→指南 ≥104 |
| AIO | FAQ schema ≥3 页；SKU 有图有 alt；H3 出现 |
| 构建 | `npm run build` 136 页 · `mkdocs build` 通过 · 同步 0/0 |

---
