# FilterHub 内容回查审计报告（AUDIT ONLY）

> **审计纪律**：本批为只读审计。**内容文件零修改**——仅新增本报告文件。所有发现均为证据驱动；凡无法由仓库/抓取源文本验证的判断，均显式标注「假设」。
>
> - 审计日期：2026-10-30
> - 审计范围：`filterhub`（Astro · 104 SKU · 13 品类页 · 7 指南 · 首页/公司/工厂/OEM 页）+ 兄弟仓 `data.filterhub`（产品库字节一致，仅核验同步状态，零改动）
> - 审计方法：Python 脚本（N-gram / SequenceMatcher / 正则模式 / 字数统计 / 4-gram 源重合）+ 逐页人工抽查
> - 数据源：`src/data/products.json`、`src/data/categories.ts`、`src/data/guides.ts`、`src/pages/*.astro`、`crawls/*/text/`（5 站 1039 个源文本）

---

## 0. 结论摘要（TL;DR）

| 维度 | 结果 | 关键数字 | 严重度 |
|---|---|---|---|
| 1. 重复 | **FAIL** | 1 组 7× 完全相同描述；48 对近重复（≥0.7）；同品类内相似度均值 0.50 | P0 |
| 2. AI 痕迹 | **PASS** | 机械模式命中 **0**；但公式化「not published / remain pending」结构 21 处 | P2 |
| 3. 内容薄 | **FAIL** | 104/104 SKU 页 <150 词；13/13 品类页 <400 词；SKU 描述中位 7 词 | P0 |
| 4. 内容没有价值 | **部分 FAIL** | 空话命中仅 5；但 7 个机油滤 SKU 描述可互换（同字符串） | P1 |
| 5. 缺乏主观观点 | **FAIL** | 主观判断句命中 **0/全站**（SKU 0/104 · 品类 0/13 · 指南 0/7） | P1 |
| 6. 非原创 | **部分 FAIL** | 22/104 SKU 描述逐字来自源站；品类/指南源重合 ≤16%（基本原创） | P2 |

**总体判断**：站点的「数据诚实纪律」（`verified/catalog-confirmed/reference/pending` 字段级标注 + 拒绝虚构规格）是显著亮点，AI 机械腔与空话控制到位。**结构性短板集中在三处**：① SKU 页内容深度极薄（描述 3–16 词，无主观采购结论）；② 机油滤品类 7 个 SKU 描述完全相同、变速箱滤「High-quality … for {品牌}」模板化；③ 全站零主观判断/建议（与 carfilterspro 确立的「主观判断结论与建议」标准相悖）。

---

## 1. 重复（Duplication）

**结果：FAIL · 严重度 P0**

### 量化统计

- **完全相同描述组**：1 组，7 个 SKU 共享字符串 `Engine oil filter.`
  - `15208-AD200`、`1S7J-6744-BA`、`77-00-126-705`、`93-18-6310`、`93175493`、`03C115577A`、`0393-1030`
- **近重复对**（同品类内 SequenceMatcher ≥ 0.7）：**48 对**
- **同品类内描述相似度分布**（444 对，全量）：

| 相似度区间 | 对数 |
|---|---|
| ≥0.9 | 24 |
| 0.7–0.9 | 24 |
| 0.5–0.7 | 122 |
| 0.3–0.5 | 249 |
| <0.3 | 25 |

  均值 0.497，中位 0.452（说明同品类描述整体偏高，因为格式都是「类型 + for + 品牌/设备」）。

### 重复 top 清单（SKU 对 · 相似度 · 共享片段）

| # | SKU 对 | 相似度 | 共享片段 |
|---|---|---|---|
| 1 | 机油滤 7 SKU（见上） | 1.00 | `Engine oil filter.`（全文） |
| 2 | `31728-AA000` ↔ `8973310630` | 0.94 | `High-quality transmission filter for {Subaru/Isuzu}` |
| 3 | `25420-P7W-003` ↔ `25420-PW4-010` | 0.93 | `High-quality transmission filter for {Honda/Acura}` |
| 4 | `EAWAY-HEPA-61061070` ↔ `EAWAY-HEPA-610610292` | 0.91 | `Cleanroom HEPA filter 610×610×{70/292}mm` |
| 5 | `25420-PW4-010` ↔ `31728-AA000` | 0.90 | `High-quality transmission filter for {Honda/Subaru}` |

### 模板化同构检测（同结构换词）

- **机油滤（oil_filter）**：7/7 SKU 共享同一描述模板（`Engine oil filter.`），同构率 **100%**。
- **变速箱滤（transmission_filter）**：`High-quality transmission filter for {品牌}` 模板覆盖多对（Subaru / Isuzu / Honda / Honda-Acura），仅在品牌位替换。
- **HEPA 面板（hepa_filter）**：`Cleanroom HEPA filter 610×610×{尺寸}mm` 模板，仅尺寸位替换。
- 其余 10 品类各 SKU 描述字符串唯一（max-dup = 1），无模板同构。

### 品类页 vs SKU 页段落重复

品类页 `technicalDepth` 与其 SKU 描述共享 3-gram 数量极低（fuel 3、hepa 2、pocket 2、liquid 2、carbon 1），**无段落级重复**——品类页与 SKU 页描述层不重复（PASS）。

> **已验证**：上述重复对/模板/相似度分布均来自脚本对 `products.json` 全量两两比对 + 逐对人工抽查。
> **假设**：相似度 ≥0.7 判定为「近重复」为审计阈值设定（非事实）。

---

## 2. AI 痕迹（Mechanical Patterns）

**结果：PASS · 严重度 P2（结构公式化，非机械腔）**

### 量化统计

- 机械模式命中（`However` / `It is important to` / `not automatically` / `This guide explains` / `should not be assumed` / `In conclusion` / `Moreover` / `delve` / `crucial` / `seamless` / `world-class` 等 19 项）：**0 命中 / 全站**
- 公式化开篇/排比堆叠：未检出（无「In today's …」「This article …」式开篇）。

### 结构性公式化（唯一需要关注项）

站点刻意采用数据诚实句式，形成高重复的结构化表达（**非 AI 机械腔，而是系统性的「诚实声明」套话**）：

| 句式 | 品类页命中 | 指南命中 |
|---|---|---|
| `not published` | 10 | — |
| `remain(s) pending` | 6 | — |
| `does not publish` | 5 | — |
| `request the spec sheet` | 3 | 1 |
| `rather than` | 3 | 3 |

这 21+ 处「not published / remain pending」结构是站点数据纪律的刻意产物（标注未公开字段），**本身不构成 AI 痕迹**，但会造成读者层面的「句式疲劳」，与模板化同构（§1）叠加后放大了「同构感」。

> **已验证**：19 项机械模式对 131 个页面文本（104 SKU + 13 品类 + 7 指南 + 首页/公司/工厂/OEM/产品中心）正则全扫 = 0。
> **假设**：句式疲劳属主观判断（「AI 痕迹」维度本身无客观阈值），已明确为 P2 观察项而非 FAIL。

---

## 3. 内容薄（Thin Content）

**结果：FAIL · 严重度 P0**

### 字数分布

**SKU 页描述（`description` 字段，页面唯一独有正文）：**

| 指标 | 值 |
|---|---|
| 最小 / 最大 | 3 / 16 词 |
| 均值 / 中位 | 7.3 / 7 词 |
| <15 词 | **103/104** |
| <150 词 | **104/104**（全部，按定义） |

字数直方图：3 词 ×7 · 4 词 ×8 · 5 词 ×9 · 6 词 ×21 · 7 词 ×15 · 8 词 ×15 · 9 词 ×10 · 10 词 ×5 · 11 词 ×5 · 12 词 ×8 · 16 词 ×1。

**品类页（summary+positioning+directAnswer+technicalDepth+selection+procurement 合计）：**

| 指标 | 值 |
|---|---|
| 最小 / 最大 | 162 / 317 词 |
| 均值 | 203 词 |
| <400 词 | **13/13**（全部品类页均低于 400 词阈值） |

**指南页（title+description+directAnswer+sections 合计）：**

| 指标 | 值 |
|---|---|
| 最小 / 最大 | 215 / 284 词 |
| 均值 | 242 词 |

### 薄页清单

- **SKU 页（<150 词）**：104/104 全部。其中描述 <15 词的 103 个 SKU 是「重度薄」——页面仅 1 句描述 + 模板化 notice + 表格（多数字段 pending）。
- **品类页（<400 词）**：13/13 全部。最薄为 transmission-filters（162）、hydraulic-filters（171）、pocket-filters（172）。

### 信息密度评估

- **确认字段数/SKU**（spec + material + filter_media + oe_reference + moq 中非 pending 项）：
  - **0 个确认字段：5 SKU**（纯目录条目，无任何规格数据）
  - 1 字段：51 SKU · 2 字段：20 · 3 字段：12 · 4 字段：1 · 5 字段：6 · 6 字段：3 · 7 字段：6
  - 均值 **2.1 个/SKU**
- **独有字段 vs 通用句**：SKU 页独有信息 = 描述 1 句 + OE 号 + 品牌；其余 5 个区块（notice / 质量文件 / OEM 条款 / 相关资源 / 交叉引用声明）为**全站共享模板文本**。独有正文占比极低。

> **已验证**：字数分布、薄页清单、字段计数均由脚本从数据源全量统计。
> **假设**：SKU <150 词、品类 <400 词为审计阈值（用户给定）；「重度薄」为基于 15 词的分级判断。

---

## 4. 内容没有价值（No-Value / Boilerplate）

**结果：部分 FAIL · 严重度 P1**

### 空话（纯套话）检测

19 项空话模式（`quality first` / `high quality` / `professional manufacturer` / `leading manufacturer` / `best price` / `one-stop` / `years of experience` / `customer satisfaction` 等）：

- 总命中：**5 处**（`durable` ×4 · `premium` ×1）
- 无「质量第一」「专业制造商」「世界一流」类典型外贸空话。**空话控制优秀（PASS）。**

### 无采购价值页面清单（描述可互换、无独有信息）

核心问题不在空话，而在**描述可互换**：

1. **机油滤 7 SKU**（`Engine oil filter.`）：描述完全同字符串，页面间除了 SKU/OE 号无任何差异化信息，**采购者无法区分任一型号**——无可采购价值。
2. **变速箱滤「High-quality transmission filter for {品牌}」系列**（Subaru / Isuzu / Honda / Honda-Acura）：仅品牌位差异，「High-quality」为无实质信息的修饰词，不提供型号/年份/安装形式等采购判断依据。
3. 其余品类描述含设备型号/应用（如 `for Komatsu loader`、`for Toyota RAV4`、`610×610×70mm`），具备最低限度的可区分性。

> **已验证**：空话命中数、可互换描述组均由脚本 + 人工核对数据源。
> **假设**：「可互换 = 无采购价值」是采购价值判断，属审计师主观定性（已给出具体依据：描述同字符串/仅品牌位差异）。

---

## 5. 缺乏主观观点（Lack of Subjective Opinion）

**结果：FAIL · 严重度 P1**

### 专家视角检测

12 项主观判断句模式（`we recommend` / `our advice` / `from our perspective` / `our view` / `we suggest` / `in our experience` / `our opinion` / `we believe` / `our assessment` / `our take` / `you should` / `our recommendation`）：

- **全站命中 0**。

| 页面类型 | 含主观观点 | 无主观观点 |
|---|---|---|
| SKU 页 | 0/104 | **104** |
| 品类页 | 0/13 | **13** |
| 指南页 | 0/7 | **7** |

### 无观点页面清单

- 全部 104 SKU 页：纯「描述 + pending 表格 + 模板 notice」，无任何「我们建议选 X / 该场景应优先 Y」类结论。
- 全部 13 品类页：`selection`/`procurement` 列表为中性祈使句（`Confirm …` / `Request …` / `Specify …`），**无「我们推荐」式立场**。
- 全部 7 指南页：`directAnswer` 与 section 均为框架级中性陈述，**无主观结论与建议**。

### 对比 carfilterspro 标准

carfilterspro 审计范式确立的「主观判断结论与建议」要求：页面须含专家立场（如「以我们的经验，重尘环境优先加大滤材面积而非追求名义效率」）。filterhub 现状是**系统性地「只陈述、不判断」**——指南里偶有接近主观的句子（如「higher is not automatically better」），但以第三人称中性表达，无 `we`/`our` 视角，未达 carfilterspro 标准。

> **已验证**：12 项主观句模式全站 0 命中；「无观点页面」为 100%。
> **假设**：对 carfilterspro 标准的「主观判断结论与建议」解读为审计师推断（未直接读取 carfilterspro 源文件，以用户指令文字为准）。

---

## 6. 非原创（Non-Original / Source Echo）

**结果：部分 FAIL · 严重度 P2**

### 方法

- 源语料：`crawls/{hbxueyuan,airyfilter,klcintl,yitong-filter,cleanroom-ffu}.com/text/` 共 **1039 个源文本**，构建 5 站各自 4-gram 索引。
- 判定：SKU/品类/指南文本的 4-gram 与对应源站索引的重合率（逐字搬运比例）。

### SKU 描述源重合（全量 104，逐字/部分检测）

| 类别 | 数量 | 占比 |
|---|---|---|
| 逐字（描述整串在源文本中） | 22 | 21% |
| 部分（≥70% 4-gram 重合） | 3 | 3% |
| 无重合 | 79 | 76% |

**抽样 20 SKU 的 4-gram 重合率**：6 个 100%（如 `Engine parts air filter for Volvo.`、`High-precision transmission filter.`、`High temperature HEPA filter.`、`Powercore honeycomb compressed air filter.`），另有 80%（1）、67%（1）、50%（2）等。

### 源句式回声清单（直接搬运句，抽样 20 中 100% 重合者）

- `1542743` → `Engine parts air filter for Volvo.`（源：hbxueyuan 标题 `Engine Parts Air Filter 1542743 … FOR VOLVO`，人工核对逐字）
- `35330-60070` → `High-precision transmission filter.`
- `KLC-HT-HEPA` → `High temperature HEPA filter.`
- `P643118` → `Powercore honeycomb compressed air filter.`
- `KLC-GLASS-POCKET` → `Glass fiber medium efficiency pocket filter.`
- `AIRY-HT-SYNTHETIC` → `High-temperature synthetic filter media.`

### 品类页 / 指南页源重合（原创性）

- **品类页 technicalDepth**：最佳源 4-gram 重合率 0–16%（fuel-filters 16% 最高，air/cabin/oil/hydraulic/transmission 为 0%）。
- **指南页正文**：最佳源重合率 0–4%（cleanroom-filtration-solutions 4% 最高）。

→ 品类页与指南页**基本为原创改写**（源重合率个位数百分比），非原创问题**仅集中在 SKU 描述**（短句直接搬运源站标题/描述，占比 21–24%）。

> **已验证**：1039 源文本 4-gram 索引 + 全量/抽样重合率均为脚本实测；`1542743` 逐字搬运经人工打开源文本核对。
> **假设**：4-gram 重合率作为「非原创」代理指标；「76% 无重合」中包含仅差标点/词序的改写（未逐条人工复核全部 104 条，已标注）。

---

## 7. 六维矩阵汇总

| 维度 | 结果 | 严重度 | 量化证据 |
|---|---|---|---|
| 1. 重复 | FAIL | **P0** | 7× 完全相同描述；48 对近重复；同品类相似度均值 0.50 |
| 2. AI 痕迹 | PASS | P2 | 机械模式 0；「not published/remain pending」结构 21 处 |
| 3. 内容薄 | FAIL | **P0** | SKU 描述中位 7 词；104/104 SKU <150 词；13/13 品类 <400 词 |
| 4. 无价值 | 部分 FAIL | P1 | 空话 5；机油滤 7 SKU 描述可互换 |
| 5. 缺主观观点 | FAIL | P1 | 主观句 0/全站；无观点页 104+13+7 |
| 6. 非原创 | 部分 FAIL | P2 | 22/104 SKU 逐字搬运；品类/指南重合 ≤16% |

**P0：2 · P1：2 · P2：2 · PASS：1（AI 痕迹）**

---

## 8. 修复建议（**不实施，等用户指令**）

> 以下均为建议，本轮未执行任何内容改动。

### P0（优先）

1. **SKU 描述去重 + 差异化**：机油滤 7 SKU 的 `Engine oil filter.` 逐一改写为含 OE 号 + 适配品牌/设备 + 安装形式（如 `15208-AD200 — spin-on engine oil filter for Nissan/Infiniti`），消除可互换描述；变速箱滤「High-quality … for {品牌}」系列补充型号/年份/安装形式（pan-mounted vs external）。
2. **SKU 页内容加深**：为每个 SKU 补充至少一段 40–80 词的独有采购正文（适配设备/典型工况/关键参数确认点），使 SKU 页脱离「1 句描述 + 模板」状态。字段确实未公开的，用「确认方法」替代空白（如「尺寸需对照 OE 图纸确认」）。

### P1

3. **植入主观判断与建议**（对齐 carfilterspro 标准）：在品类页 `selection`/`procurement` 与指南页加入 `we`/`our` 视角的结论句（如「Our advice: in heavy-dust duty, prioritise media area over nominal efficiency」），并给 SKU 页增加一句「适用建议」（该型号适合/不适合什么工况）。
4. **品类页扩容**：13 个品类页全部 <400 词，补足至 ≥400 词（每页补 150–200 词：应用场景展开 + 典型失效模式 + 选型决策树）。

### P2

5. **句式去疲劳**：将高频「not published / remain pending」结构部分改写为「confirmed on request」「verify against the OE drawing」等变体，降低同构感。
6. **源回声改写**：22 个逐字搬运的 SKU 描述改写为原创表述（保留事实、换词序/句式），降低逐字源重合率。

### 已验证 vs 假设分离

- **已验证**：所有量化数字（重复对、相似度分布、字数分布、字段计数、空话/主观句/机械模式命中、源重合率）均来自脚本对仓库文件与 1039 源文本的全量实测，可复现。
- **假设**：相似度/字数/薄页阈值（≥0.7、15/150/400 词）为审计设定；「句式疲劳」「可互换=无采购价值」「carfilterspro 标准解读」为审计师主观判断（均已逐条标注依据）。
- **数据差异**：用户指令称「8 指南」，仓库实际为 **7 篇指南**（`air-filter-selection`、`hepa-cleanroom-sourcing`、`filter-efficiency-grades`、`hepa-vs-ulpa`、`filter-media-selection`、`cleanroom-filtration-solutions`、`oem-procurement-process`）——已按 7 篇审计。
- **数据子站**：`data.filterhub/data/products.json` 与 `filterhub/src/data/products.json` **字节一致**（`cmp` 通过），兄弟仓同步状态 0/0，无内容差异。
