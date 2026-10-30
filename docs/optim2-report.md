# chinafilterhub.com 优化批 2（P1 四维 + 重要 SKU 深度）实施报告

> 批次：optim2 · 日期：2026-10-30 · 范围：`filterhub`（Astro · 136 页 · 104 SKU · 13 品类）+ 兄弟仓 `data.filterhub`（MkDocs）
> 纪律：保留 URL/架构 · 中文网补全 + 碎片分析结论可用 · 分步 commit+push 两仓 · 数据三副本字节一致

---

## 1. 结论摘要

| 维度 | 结果 | 关键数字 |
|---|---|---|
| P1 浅层（SKU <60 词） | **PASS** | 0/104 低于 60 词（min 60 · 中位 77.5） |
| P1 浅层（品类 <400 词） | **PASS** | 13/13 品类页 ≥400 词（min 400） |
| P1 关键词堆砌 | **PASS** | MOQ 正文 13→0 · confirm 句式 66→9（余为「source confirms」词源义） |
| P1 搜索意图冲突 | **PASS** | 8 组关键词三争已按「品类=通用/SKU=型号/指南=流程」分层 |
| P1 内容价值（4 品类页） | **PASS** | 机油/变速箱/座舱/燃油 4 页独立重写 + 消重尾句 |
| 重要 SKU 深度 | **PASS** | 20 个高价值 OE 型号加「规格+适配框架+采购结论+指南内链」 |
| 验证 | **PASS** | 两站 build 通过 · 断链 0 · 三副本字节一致 · 同步 0/0 |

---

## 2. P1 浅层修复

### 2.1 SKU 描述字数
- 优化前（audit 阶段）：43/104 <60 词。
- optim1 去同质化已将 104 篇重写至 60-150 词；本批复扫确认 **0/104 <60 词**（min 60 · max 103 · 中位 77.5 · 均值 77.6），并保持主观采购句（`From a sourcing perspective`/`Our advice` 轮换）。

### 2.2 品类页字数
5 个 <400 词品类（cabin 385 / transmission 390 / filter-media 397 / hydraulic 398 / activated-carbon 399）各自加深至 ≥400：

| 品类 | 优化前 | 优化后 | 补法 |
|---|---|---|---|
| cabin-filters | 385 | 408 | 材料差异段 + 采购判断尾句 |
| transmission-filters | 390 | 409 | 市场结构段（pan-mounted vs external） |
| filter-media | 397 | 406 | 效率曲线/上游链采购判断段 |
| hydraulic-filters | 398 | 416 | 滤芯位置（return/pressure/suction）决策点 |
| activated-carbon | 399 | 411 | 吸附函数（克重/风量/停留时间） |

验收：**13/13 品类页 ≥400 词**（min 400）。

---

## 3. P1 关键词堆砌修复

模板化句式（MOQ/confirm/OE number 同页重复罗列）压缩：

| 指标 | 优化前 | 优化后 | 说明 |
|---|---|---|---|
| MOQ 出现在正文 | 13 SKU | **0** | MOQ 归入 OEM/private-label terms 区块 + data 子站，正文不再重复 |
| MOQ 每页 >2 | 0 | **0** | 达标 |
| confirm 句式 >1 | 66 SKU | **9** | 命令式 `confirm`→`verify/state/specify`；剩余 9 处为「source confirms/confirmed」词源义，非堆砌 |
| OE number 正文罗列 | 29 | 29 | OE 号保留在 OE cross-reference 表（结构化位置），正文锚定一次不重复罗列 |

- 同时修复了 `desource-enrich` 遗留的 **127 处断句缺句号**（如 `reference values only For loaders` → `reference values only. For loaders`），消除句式破碎。

---

## 4. P1 搜索意图冲突（8 组关键词三争）

分配主意图页 + title/desc/H1 差异化 + 内链方向按意图层级（指南→品类→SKU）：

| 关键词组 | 品类页（通用品类 hub） | 指南页（流程知识） | SKU 页（型号落地） |
|---|---|---|---|
| HEPA | hepa-filters「HEPA / ULPA Filters」 | hepa-cleanroom-sourcing「Sourcing…」 | 型号（如 AIRY-GEL-HEPA H14） |
| ULPA | hepa-filters | hepa-vs-ulpa「HEPA vs ULPA…」 | YT-ULPA-U15 |
| cleanroom | cleanroom-equipment | cleanroom-filtration-solutions | KLC-FFU |
| air filter | air-filters「Air Filters (Engine Intake)」 | air-filter-selection「Selecting…」 | 42N-62-15470 |
| activated carbon | activated-carbon | filter-media-selection | AIRY-AC-PANEL |
| filter media | filter-media | filter-media-selection | AIRY-NEEDLE-COTTON |
| efficiency class | hvac-filters | filter-efficiency-grades | AIRY-FB-PANEL |
| OE number | oil-filters | oem-procurement-process | 15208-AD200 |

**内链方向**（新增 `src/data/link-map.ts` 单一来源表，双向推导不漂移）：
- 指南页 → 品类页（`Shop the category` 区块，`guideCategories` 反向）。
- 品类页 → 指南页（`Related buyer guides` 区块，`categoryGuides`）。
- SKU 页 → 具体指南（`Related resources` 从「guides 索引」改为链到相关指南 + 品类 + data 子站）。

验收：8 组三层 title/H1 全部差异化（无同词同位竞争）· 断链 0。

---

## 5. P1 内容价值（4 模板化品类页重写）

机油 / 变速箱 / 座舱 / 燃油 4 个高相似品类页重写为独立价值页，各自锚定技术要点 + 选型判断 + 市场差异：

- **oil-filters**：锚定「螺纹/垫圈座/旁通阀/防回流阀」——新增「敏感回路需旁通阀开启压力 + 防回流阀材质」采购判断。
- **transmission-filters**：锚定「pan-mounted vs external 不可互换」——新增「两者成本与工时不同」市场差异。
- **cabin-filters**：锚定「年份/trim 适配」——新增「颗粒 vs 碳介质按工况选材」材料差异。
- **fuel-filters**：锚定「共轨喷射对水分离敏感」——新增「共轨 vs 汽油线过滤精度需求差异」技术要点。

同时清理 4 品类 `sourcingPerspective` 的**重复尾句**（此前 content-fix 拼接残留）。

---

## 6. 重要 SKU 深度（20 个高价值 OE 型号）

每品类 1–2 个 top SKU 深化，新增 `src/data/sku-depth.ts`（20 条），SKU 页渲染「Fitment & sourcing」区块（规格表 + 适配框架 + 采购结论），并把「Related resources」改为链到具体相关指南：

| 品类 | 深化 SKU |
|---|---|
| air-filters | 42N-62-15470 (Komatsu) · 1542743 (Volvo) · P822768 (Case/Cat/Hitachi) |
| cabin-filters | 72880-FG000 (Subaru) · 500-0957 (Cat) · 90915-YZZA3 (Lexus/Toyota) |
| oil-filters | 15208-AD200 · 03C115577A (VW) · 1S7J-6744-BA (Ford) |
| fuel-filters | 23401-1441 · FS19920 |
| hydraulic-filters | SH66279 (Cat 308C2) · P177047 (Bobcat) |
| transmission-filters | 35330-60070 · 25420-PR0-030 (Honda) |
| hepa-filters | AIRY-GEL-HEPA · EAWAY-HEPA-61061070 |
| hvac-filters | KLC-HT-SEPARATOR |
| liquid-cartridges | YT-METAL-CART |
| cleanroom-equipment | EAWAY-FFU-4848 |

内容纪律：适配框架与采购结论全部锚定各 SKU 已发布的 OE 号 / 规格 / 材质 / 应用字段，**零虚构数值**。

---

## 7. 验证总表

| 维度 | 结果 |
|---|---|
| 主站 build | `npm run build` 136 页 ✓ |
| 数据子站 build | `mkdocs build` ✓（CJK 搜索资源按 hook 移除） |
| SKU 字数 | 0/104 <60 词 |
| 品类字数 | 13/13 ≥400 词 |
| MOQ 堆砌 | 正文 0 · 每页 ≤2 |
| confirm 句式 | 66→9（余为词源义） |
| 意图差异化 | 8 组三层 title/H1 抽验全部差异化 |
| 断链 | 0（dist 站内 href 全命中） |
| 字节一致 | `data/products.json` ≡ `docs/data/products.json` ≡ 主库 `products.json`（cmp 通过） |
| 同步 | 两仓 `git status` 同步 0/0（提交前） |

---

## 8. Commit 记录（待推送）

**filterhub**：
- `optim2-category-value` — 5 薄品类加深 + 4 高相似品类页独立重写 + 消重尾句
- `optim2-sku-keywords` — SKU 描述 MOQ 出正文 + confirm 句式压缩 + 断句修复
- `optim2-intent-sku-depth` — 意图分层内链 map + 20 重要 SKU 深度 + 页面接线

**data.filterhub**：
- `optim2-sync` — 104 SKU 描述字节同步 + 重生成 docs/products/*.md + docs/data/products.json

---

## 9. 遗留（供后续批次）

- 45 SKU 缺 `subcategory`（plan §3 批 2 项，本批未列入用户任务清单）。
- FAQ schema / H3 层级 / SKU 页图与 alt（批 4）。
- `_meta.categories[].nameZh` 中文补全渲染接入（数据层已具备中文映射）。
