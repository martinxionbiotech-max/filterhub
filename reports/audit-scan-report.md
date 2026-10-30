# chinafilterhub.com 全站内容扫描审计报告（阶段一 · AUDIT-ONLY）

> **纪律**：本批为**只读扫描**——零内容修改，仅新增本报告与 `optimization-plan.md` 两个文件。
> 审计日期：2026-10-30 · 主体占位 `Qinghe Air Filter` → 待换 `Qinghe Yinghui Filter`（扫描阶段只记录清单，不动）。
> 范围：`filterhub`（Astro · 136 页 · 104 SKU · 13 品类 · **7** 指南 · 商业页 + 合规页）+ 兄弟仓 `data.filterhub`（MkDocs · 127 页，仅核验同步状态，零改动）。

---

## 0. 结论摘要（TL;DR）

| 维度 | 结果 | 关键数字 | 严重度 |
|---|---|---|---|
| 1. 重复 | **FAIL** | 1 组完全相同描述；**365 对**近重复（≥0.7）；同品类相似度均值 0.32–0.95 | **P0** |
| 2. 浅层 | **部分 FAIL** | SKU 描述中位 63 词；43/104 <60 词；5/13 品类页 <400 词 | P1 |
| 3. 关键词堆砌 | **部分 FAIL** | `MOQ` 104/104 · `confirm` 63 · `OE number` 62 · `cross-reference` 50 | P1 |
| 4. 搜索意图冲突 | **部分 FAIL** | 8 组关键词跨「品类页+指南页+SKU 页」三争 | P1 |
| 5. 数据可靠性 | **FAIL（同步断裂）** | JSON `pending`=0，但数据子站 322 处 `pending` 残留；`docs/data/products.json` 陈旧（snake_case）未同步 | **P0** |
| 6. 内容价值 | **部分 FAIL** | 机油/变速箱/座舱/燃油 4 品类描述模板化可互换 | P1 |

**总体判断**：站点「数据诚实纪律」（字段级 data-status + 拒绝虚构规格）是核心亮点，且**上一轮 content-fix 曾把六维修到接近达标**（`cf2669d`/`116b506` 两个提交：0 近重复、SKU 中位 78.5 词、104/104 主观句）。但**随后的 `9864da2 desource-enrich` 批量改写把 SKU 描述重新模板化，回退了去重成果**，同时引入了**两处 P0 回归**：① 品类页 SKU 列表因 `category` 字段 slug 改 kebab 后与 `products.ts` 的 `codeFromSlug()` 映射错位，**13 个品类页全部渲染「0 SKUs」且无 SKU 表**；② `docs/data/products.json` 未随主库同步，仍为 snake_case 旧版。

---

## 1. 逐页扫描数据表（aggregated）

### 1.1 页面清单（136 页）

| 页面类型 | 数量 | 说明 |
|---|---|---|
| 首页 | 1 | `/` |
| 品类页 | 13 | `/products/{category}/` |
| SKU 页 | 104 | `/products/{category}/{sku}/` |
| 产品中心 | 1 | `/products/` |
| 指南索引 | 1 | `/guides/` |
| 指南页 | **7** | `/guides/{slug}/`（**任务称 8，实际 7**） |
| 商业页 | 3 | company / factory / oem |
| 合规页 | 5 | contact / privacy / terms / disclaimer / cookies |
| 404 | 1 | — |
| **合计** | **136** | — |

> 任务书「8 指南」与仓库不符：实际为 **7 篇**（`air-filter-selection`、`hepa-cleanroom-sourcing`、`filter-efficiency-grades`、`hepa-vs-ulpa`、`filter-media-selection`、`cleanroom-filtration-solutions`、`oem-procurement-process`），按 7 篇审计。

### 1.2 品类页字段字数（正文主体字段合计）

| 品类 | 总词数 | summary | positioning | directAnswer | technicalDepth | sourcingPerspective | sel/proc |
|---|---|---|---|---|---|---|---|
| air-filters | 450 | 16 | 45 | 29 | 153 | 114 | 93 |
| hepa-filters | 420 | 13 | 48 | 19 | 133 | 126 | 81 |
| hvac-filters | 419 | 9 | 38 | 17 | 134 | 145 | 76 |
| liquid-cartridges | 416 | 7 | 34 | 18 | 135 | 154 | 68 |
| cleanroom-equipment | 414 | 13 | 38 | 13 | 142 | 139 | 69 |
| pocket-filters | 411 | 9 | 36 | 20 | 132 | 158 | 56 |
| oil-filters | 403 | 5 | 40 | 16 | 135 | 140 | 67 |
| fuel-filters | 402 | 7 | 34 | 13 | 131 | 159 | 58 |
| **activated-carbon** | **399** | 8 | 37 | 14 | 147 | 129 | 64 |
| **filter-media** | **397** | 10 | 35 | 18 | 100 | 163 | 71 |
| **hydraulic-filters** | **398** | 9 | 40 | 16 | 135 | 142 | 56 |
| **transmission-filters** | **390** | 3 | 37 | 16 | 140 | 140 | 54 |
| **cabin-filters** | **385** | 8 | 40 | 15 | 131 | 124 | 67 |

- 均值 408 词；**5 个品类 <400 词**（加粗行）：cabin-filters(385)、transmission-filters(390)、filter-media(397)、hydraulic-filters(398)、activated-carbon(399)。其余 8 个达标。
- 全部 13 品类页均已含 `sourcingPerspective` 主观段（前一 commit 补齐）。

### 1.3 SKU 页字段填充（104 SKU）

| 字段 | 均值 | 分布 | 备注 |
|---|---|---|---|
| description | 63.8 词 | 46–84，43/104 <60 词 | 全 104 有值 |
| spec | 2.85 条 | 1–5 条 | 全有 |
| material | 2.32 条 | 1–4 条 | 全有 |
| filter_media | 1.00 条 | 104/104 =1 | 全有 |
| oe_reference | 0.64 条 | 0(54) / 1(38) / 2(7) / 3(5) | **54 SKU 无 OE 号** |
| application | 1.01 条 | 1(103) / 2(1) | 全有 |
| moq | 104/104 | — | 全有 |
| efficiency_class | 104/104 | — | 全有 |
| **subcategory** | — | **59/104 有，45 缺失** | 见 §5 |

- 缺失 `subcategory` 的 45 个 SKU 集中在：cabin(8)、fuel(8)、transmission(8)、oil(7)、hydraulic(7)、pocket(5)、air(1)、hepa(1)。

### 1.4 指南页字数

| 指南 | 总词数 | 备注 |
|---|---|---|
| hepa-cleanroom-sourcing | 527 | |
| air-filter-selection | 512 | |
| filter-efficiency-grades | 483 | |
| cleanroom-filtration-solutions | 459 | |
| hepa-vs-ulpa | 446 | |
| filter-media-selection | 442 | |
| **oem-procurement-process** | **308** | 最薄 |

- 全部 7 篇均已含 `sourcingPerspective` + `directAnswer` + `sources` 段。

### 1.5 每页 H 结构 / 表格 / 内链 / 主观句 / 数据字段（模板级）

| 页面类型 | H1 | H2 | H3 | 表格 | 内链（站内） | 主观句 | 数据字段 |
|---|---|---|---|---|---|---|---|
| 首页 | 1 | 4 | 5 | 1 | ~16 | 无（中立） | 4 统计卡 |
| 品类页 | 1 | 7 | 0 | 2（at-a-glance + SKU） | 13–16 | 1（sourcingPerspective） | 3–5 行 |
| SKU 页 | 1 | 5 | 0 | 2–3（spec/OE + 素材） | 23 | **0** | 全字段 |
| 指南页 | 1 | 3–4 | 0 | 0 | ~8 | 1（sourcingPerspective） | — |
| 商业页 | 1 | 4–6 | 0 | 1–2 | ~8 | 0 | — |
| 合规页 | 1 | 0 | 0 | 0–1 | ~3 | 0 | — |

> 主观句检测：SKU 描述主观命中 **0/104**（`desource-enrich` 模板化后丢失了 `cf2669d` 已植入的采购观点）；品类页 13/13、指南 7/7 仍含主观段。

---

## 2. 六维问题清单

### 2.1 重复（Duplication）— **P0 FAIL**

**量化**：
- **完全相同描述组**：1 组 → `KLC-HT-HEPA` 与 `EAWAY-HT-HEPA` 共享 `"High Temperature HEPA Filter. High-efficiency HEPA / ULPA filter for clean-air and cleanroom duty…"`。
- **近重复对（同品类 SequenceMatcher ≥0.7）**：**365 对**（此前的 content-fix 报告为 0 对 → **已回退**）。
- **同品类描述相似度均值**：

| 品类 | 均值 | 品类 | 均值 |
|---|---|---|---|
| oil-filters | **0.946** | activated-carbon | 0.813 |
| transmission-filters | **0.922** | air-filters | 0.820 |
| fuel-filters | **0.919** | hepa-filters | 0.733 |
| cabin-filters | **0.879** | filter-media | 0.655 |
| hydraulic-filters | 0.872 | liquid-cartridges | 0.565 |
| pocket-filters | 0.873 | cleanroom-equipment | 0.327 |
| hvac-filters | 0.850 | | |

**模板化同构**：`desource-enrich` 用统一句式重写描述 → `"{Name}. {品类套话} Cross-referenced under OE number(s) {OE} … Typical parameters: … MOQ {n} {unit}. {结尾套话}"`。同品类内除 OE 号/尺寸/应用三个槽位外，其余全为共享模板（证据：oil-filters 7 SKU 相似度均值 0.946，前两句逐字相同仅 OE 号不同）。

**顶配重复对（抽样）**：`42N-62-15470↔2116040258`(0.88)、`P778989↔626095`(0.90)、`1542743↔178017810`(0.87)、`23401-1441↔23401-1220`(fuel 0.919 均值内)、`15208-AD200↔1S7J-6744-BA`(oil 0.946 均值内)。

**品类页 vs SKU 页段落重叠**：品类页 `technicalDepth` 与 SKU 描述共享 3-gram 数量极低（品类层为原创改写），无段落级重复（PASS）。

**证据**：`SequenceMatcher` 对 `src/data/products.json` 全量两两比对（脚本可复现）。

---

### 2.2 浅层（Thin Content）— **P1 部分 FAIL**

| 指标 | 现状 | 阈值 | 判定 |
|---|---|---|---|
| SKU 描述字数 | min 46 / max 84 / 中位 63 | ≥60 达标线 | 43/104 <60 词 |
| SKU 描述 <100 词 | 104/104 | — | 全部 <100 |
| 品类页 <400 词 | 5/13 | ≥400 | cabin/transmission/media/hydraulic/carbon |
| 指南页 | 308–527 词 | — | oem-procurement-process 最薄(308) |

- 上一轮 `cf2669d` 曾达 SKU 中位 78.5 词、13/13 品类 ≥400 词；`desource-enrich` 把 SKU 描述压缩回 46–84 词，并抹掉了独有采购观点 → **回退**。
- 信息密度：独有信息 = 描述 1 句 + OE 号 + 品牌 + 尺寸槽位；其余 5 区块（notice/质量文件/OEM 条款/相关资源/交叉引用声明）为全站共享模板文本。

---

### 2.3 关键词堆砌（Keyword Stuffing）— **P1 部分 FAIL**

SKU 描述层高频词（104 篇合计）：

| 词 | 命中 | 密度异常？ |
|---|---|---|
| `MOQ` | 104/104 | 模板必含（非堆砌，但高度公式化） |
| `confirm` | 63 | 结尾套话固定 |
| `OE number` | 62 | 套话固定 |
| `cross-reference` | 50 | 套话固定 |
| `spec sheet` | 12 | 品类层 |
| `Typical parameters` | ~104 | 模板锚 |

- 非「关键词灌水」（无 `best price`/`high quality` 类外贸空话），而是**模板句式高频复用**，与 §2.1 模板化同构叠加 → 读者层面「句式疲劳」+ 搜索引擎「同构薄页」风险。
- 品类页关键词（`HEPA` 16 / `ULPA` 10 / `cleanroom` 19 / `OE number` 16）与指南页（`HEPA` 37 / `ULPA` 25 / `cleanroom` 27 / `OE number` 8）存在密度差异，未见单页超标堆砌。

---

### 2.4 搜索意图冲突（Intent Conflict）— **P1 部分 FAIL**

同关键词跨「品类页 / 指南页 / SKU 页」三争清单（命中数 >0 且 ≥2 类型）：

| 关键词 | 品类页 | 指南页 | SKU 页 | 冲突说明 |
|---|---|---|---|---|
| `HEPA` | 16 | 37 | 43 | 品类页 `hepa-filters`、指南 `hepa-cleanroom-sourcing`/`hepa-vs-ulpa`、15 SKU 页三争 |
| `ULPA` | 10 | 25 | 20 | 同上 |
| `cleanroom` | 19 | 27 | 64 | 品类页 + 指南 `cleanroom-filtration-solutions` + cleanroom SKU 三争 |
| `air filter` | 8 | 3 | 84 | 品类页 `air-filters` + 指南 `air-filter-selection` + 12 SKU |
| `activated carbon` | 10 | 3 | 17 | 品类页 + 指南 `filter-media-selection` + 6 SKU |
| `filter media` | 5 | 1 | 16 | 品类页 `filter-media` + 指南 + 6 SKU |
| `efficiency class` | 5 | 6 | 4 | 品类 + 指南 `filter-efficiency-grades` + SKU |
| `OE number` | 16 | 8 | 62 | 品类 + 指南 `oem-procurement-process` + SKU |

- **风险**：`HEPA`/`cleanroom`/`ULPA` 三组在品类页、指南页、SKU 页同时主攻同一意图，未做「品类页=导航 hub、指南页=框架解释、SKU 页=型号落地」的明确分工，存在同页多结果自我竞争。见 §4 缺口清单的修复目标。

---

### 2.5 数据可靠性（Data Reliability）— **P0 FAIL（同步断裂）**

**(a) 字段状态分布（主库 JSON，干净）**：

| data_status | 数量 | 占比 | 含义 |
|---|---|---|---|
| `verified` | 70 | 7.6% | 直接取自目录/标准 |
| `catalog-confirmed` | 148 | 16.1% | 目录确认 |
| `reference` | 699 | 76.2% | 描述性/行业典型值 |
| `pending` | **0** | 0% | 主库无 pending 残留 |

- 产品级 `data_status` 104/104 = `catalog-confirmed`。
- **主库已无 `pending` 残留（PASS）**——前一 commit `9864da2` 填满全部 104 SKU 字段。

**(b) 数据子站残留（FAIL）**：
- `data.filterhub/docs/products/*.md`（104 个页面）共 **322 处 `pending` 标签**（由 `build-product-pages.py` 把 `None`/`""`/`[]` 渲染为 `` `pending` ``），例如 `42N-62-15470.md` 的 `efficiency_class | ISO 5011 | pending`、`Grammage: pending`。
- **矛盾**：主库 JSON 声称「no fields left pending」，但数据子站生成页仍暴露 322 处 pending（grammage/unit/brand/equipment_type 等空槽位）。需要重新生成子站页面或改渲染逻辑。

**(c) 兄弟仓同步断裂（P0）**：
- `filterhub/src/data/products.json` ↔ `data.filterhub/data/products.json`：**字节一致（✓）**，`category` 字段均为 kebab slug（`air-filters`）。
- `data.filterhub/docs/data/products.json`（**served copy**）：**未同步**，`category` 仍为 snake_case（`air_filter`），`nameZh` 仍为英文「Air Filters (Engine Intake)」——与主库 kebab + 中文 `nameZh` 不一致。
- 即 `data.filterhub` 内部 `data/` 与 `docs/data/` 两个副本已分叉（`cmp` 失败，diff 首行 byte 2653）。

**(d) subcategory 缺失**：45/104 SKU 无 `subcategory` 字段（cabin 8 / fuel 8 / transmission 8 / oil 7 / hydraulic 7 / pocket 5 / air 1 / hepa 1）。

**(e) 源站信息残留**：`company`（5 站域名）与 `source_url`（104 条原始 URL）仍存于主库 JSON 数据层（渲染层已「desource」，但数据层未清）。见 §5 待决清单。

---

### 2.6 内容价值（No-Value / Interchangeable）— **P1 部分 FAIL**

- **空话命中**：无 `quality first`/`best price`/`world-class` 类典型外贸空话（PASS）。
- **可互换页清单**（模板化导致采购者无法区分）：
  1. **机油滤 7 SKU**（相似度均值 0.946）：描述前两句逐字相同，仅 OE 号槽位不同，无安装形式/旁通阀/防回流阀等采购判断依据。
  2. **变速箱滤 8 SKU**（0.922）：`High-quality transmission filter for {品牌}` 模板。
  3. **燃油滤 8 SKU**（0.919）：`Fuel filter in the fuel-supply line…` 模板。
  4. **座舱滤 8 SKU**（0.879）：`Cabin air filter for occupant-compartment particulate control…` 模板。
- 其余品类（cleanroom-equipment 0.327、filter-media 0.655）描述区分度尚可。

---

## 3. AIO / SEO 现状评估

| 项目 | 现状 | 判定 |
|---|---|---|
| title / description | 全页有；title 格式 `{page} — {brand}`；SKU title=`product.name` | ✓ 规范 |
| H1–H3 | 单 H1 纪律 ✓；H2 层级 ✓；**H3 全站为 0**（SKU/品类/指南均无 H3 细分） | △ |
| 直接答案（directAnswer） | 品类页 13/13 · 指南 7/7 有 | ✓ |
| 对比表 | 品类页「Category at a glance」13/13；SKU 页 spec/OE 表 104/104 | ✓ |
| 结论段 | 品类 13/13 + 指南 7/7 有 `sourcingPerspective`；**SKU 0/104**（丢失） | △ |
| 实体语义关联 | 标准实体（ISO 5011/16890/4406、EN 779/1822、MERV）品类+指南层提及充分；SKU 层仅 `efficiency_class` 槽位 | △ |
| alt | 仅 4 页（首页 hero、company、factory、品类页 6 图）有 alt；SKU/指南页无图无 alt | △ |
| breadcrumb | 全页有（视觉 + BreadcrumbList schema） | ✓ |
| schema | Organization/WebSite/WebPage（BaseLayout）+ Product（SKU 页）+ Article（指南页）+ BreadcrumbList | ✓ |
| **FAQ 密度** | **0**（无 FAQPage/HowTo/Question schema，无问答区块） | ✗ |
| 内链 | 首页→品类 13 · 品类→SKU（**当前断裂**，见 §5 P0）· SKU→品类/指南/数据站/OEM/contact | △ |

**AIO 结论**：结构化数据（Product/Article/Breadcrumb/Organization）到位，直接答案与结论段在品类/指南层到位；但 **FAQ 完全缺失**、SKU 层无结论段、H3 缺层、SKU 页无图无 alt、品类页→SKU 列表断裂，是 AIO 三处主要短板。

---

## 4. Pillar / Cluster 关系图

### 4.1 现有 7 指南支柱归属

| 支柱 | 指南数 | 指南 |
|---|---|---|
| Selection | 2 | air-filter-selection · hepa-cleanroom-sourcing |
| Standards | 3 | filter-efficiency-grades · hepa-vs-ulpa · filter-media-selection |
| Cleanroom | 1 | cleanroom-filtration-solutions |
| OEM | 1 | oem-procurement-process |

### 4.2 内链现状矩阵（related[] 谁链谁）

| 指南 | related → |
|---|---|
| air-filter-selection | filter-efficiency-grades · oem-procurement-process |
| hepa-cleanroom-sourcing | hepa-vs-ulpa · cleanroom-filtration-solutions |
| filter-efficiency-grades | hepa-vs-ulpa · air-filter-selection |
| hepa-vs-ulpa | filter-efficiency-grades · hepa-cleanroom-sourcing |
| filter-media-selection | filter-efficiency-grades · air-filter-selection |
| cleanroom-filtration-solutions | hepa-cleanroom-sourcing · hepa-vs-ulpa |
| oem-procurement-process | air-filter-selection · hepa-cleanroom-sourcing |

### 4.3 缺口清单（应建未建）

1. **入链缺口**：
   - `filter-media-selection`（Standards）**零入链**——无任何指南链向它，是孤立节点。
   - `cleanroom-filtration-solutions`（Cleanroom 唯一）仅 1 入链，支柱过薄。
   - `oem-procurement-process`（OEM 唯一）零入链。
2. **跨支柱断链**：
   - `filter-media-selection` 应被 `air-filter-selection`、`hepa-cleanroom-sourcing`、`activated-carbon`（品类）反向引用，现缺失。
   - `filter-efficiency-grades`（标准总纲）未被 `cleanroom-filtration-solutions` 引用（cleanroom 需 EN 1822/ISO 14644 标准支持，却只链 hepa-vs-ulpa）。
3. **指南→品类断链**：指南页只链其他指南，**未链到对应品类页/SKU 页**（如 `air-filter-selection` 应链 `/products/air-filters/`）。
4. **品类→指南断链**：品类页「SKUs in this category」区块无「查看相关指南」入口。
5. **SKU→指南断链**：SKU 页「Related resources」只链 guides 索引，未链到具体相关指南。

> 详见 `optimization-plan.md` §4 目标矩阵。

---

## 5. 关键 P0 待决清单（供阶段二实施参考）

### P0-1：品类页 SKU 列表断裂（渲染 bug）

- **根因**：commit `b409f2e` 把 `products.json` 的 `category` 字段改为 kebab slug（`air-filters`），但 `src/data/products.ts` 的 `codeFromSlug()` 仍把 kebab → snake（`air_filter`）后交给 `productsByCategory(code)` 过滤 → 0 命中。
- **实测**：`dist/products/air-filters/index.html` 渲染「SKUs catalogued: 0」、无 SKU 表、`<a>` SKU 链接数 0。
- **连带**：SKU 页面包屑显示裸 slug「air-filters」而非「Air Filters (Engine Intake)」（`categoryName()` 用 kebab 查 snake 键 → 未命中 → 返回原值）。
- **首页/产品中心正常**（`categoryCount(c.slug)` 直接用 kebab，命中 12 等正确值）——只有品类页和 SKU 页面包屑受影响。
- **影响面**：13 个品类页 + 104 个 SKU 页面包屑。

### P0-2：`docs/data/products.json` 未同步

- 兄弟仓 served copy 仍 snake_case，需重跑生成脚本或 `cp data/products.json docs/data/products.json`。

---

## 6. 六维矩阵汇总

| 维度 | 结果 | 严重度 | 量化证据 |
|---|---|---|---|
| 1. 重复 | FAIL | **P0** | 1 组完全相同；365 对近重复；同品类均值最高 0.946 |
| 2. 浅层 | 部分 FAIL | P1 | SKU 中位 63 词；43/104 <60；5/13 品类 <400 |
| 3. 关键词堆砌 | 部分 FAIL | P1 | MOQ 104 · confirm 63 · OE number 62（模板化） |
| 4. 意图冲突 | 部分 FAIL | P1 | 8 组关键词跨三层三争 |
| 5. 数据可靠性 | FAIL | **P0** | 子站 322 pending 残留；docs 副本未同步；45 SKU 缺 subcategory |
| 6. 内容价值 | 部分 FAIL | P1 | 机油/变速箱/燃油/座舱 4 品类可互换 |

**P0：2 · P1：4 · PASS：0（六维全有缺口，无全绿维度）**

---

## 7. 已验证 vs 假设分离

- **已验证**（脚本实测，可复现）：字数分布、字段填充率、相似度/重复对、关键词命中、意图冲突矩阵、data_status 分布、pending 残留数、`cmp` 同步结果、品类页渲染 0 SKU、面包屑裸 slug、指南 7 篇、subcategory 缺失 45、源站 5 域名。
- **假设**（审计师设定阈值）：近重复 ≥0.7、SKU <60 词 = 浅层、品类 <400 词 = 浅层；「可互换 = 无采购价值」为采购价值定性判断。
- **数据差异**：任务书「8 指南」→ 实际 7；「同步 0/0」→ 实际 `data/products.json` 一致但 `docs/data/products.json` 分叉（已在报告标注）。

---
