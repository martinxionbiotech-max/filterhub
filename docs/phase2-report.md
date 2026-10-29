# FilterHub Phase 2 报告 (Phase 2 Report)

> 阶段：Phase 2 — 内容整合 + B2B 网站架构设计 + 原创重编加深 + EEAT 规划
> 日期：2026-10-29
> 主体（占位）：Qinghe Air Filter · 域名（占位）：chinafilterhub.com · 数据子站：data.chinafilterhub.com

## 1. 交付物清单

| # | 交付物 | 文件 | 状态 |
|---|---|---|---|
| 1 | 内容整合分析 | `docs/integration-analysis.md` | ✅ |
| 2 | B2B 网站架构设计 | `docs/site-architecture.md` | ✅ |
| 3 | 原创整合编辑（内容初稿） | `docs/content/`（首页/品类概览×13/公司页/采购指南×2） | ✅ |
| 4 | EEAT 框架 | `docs/eeat-plan.md` | ✅ |
| 5 | Astro 主站骨架 | filterhub `src/`（27 页） | ✅ |
| 6 | MkDocs 数据子站骨架 | data.filterhub（32 页） | ✅ |
| 7 | 阶段报告 | `docs/phase2-report.md`（本文件） | ✅ |

## 2. 品类树规模

- **主品类：13**（空气滤/空调滤/机油滤/燃油滤/液压滤/变速箱滤/HVAC/HEPA-ULPA/活性炭/袋式/滤材介质/液体滤芯/洁净室设备）
- **子类：20**（空气滤 6、HVAC 3、滤材介质 4、液体滤芯 2、洁净室设备 5）
- 统一属性学四维：效率等级（EN 1822 / ISO 16890 / ISO 5011 / EN 779 / ASHRAE 52.2 / UL 900 / DIN 5510）、尺寸、材质、应用工况。

## 3. 五站重叠矩阵摘要

- **无重叠（单站独占）**：机油/燃油/液压/变速箱/尿素滤（hbxueyuan）、液体/金属滤芯（yitong）、滤材介质（airyfilter）。
- **四站重叠（整合价值最高）**：HVAC 过滤器（等级链 G1–G4 → M5–F9 → H10–H14 → U15–U17 互相印证）。
- **规格字段差异化**：cleanroom 有价格/交期/FFU 风量，yitong 有设备参数/过滤精度，airyfilter 有 MOQ/产能，klcintl 有耐温。

## 4. 架构文档要点

- **URL 结构**：主站 `/products/{category}/`（13 品类）+ `/guides/{slug}/` + `/factory/` + `/oem/` + `/company/` + `/contact/` + 合规四页；数据子站 `/products/`（SKU 索引/品类/SKU 单页）+ `/reference/`（滤材对比/测试标准）+ `/database/`（4 设计文档）。
- **内链矩阵**：主站 Pillar → Cluster → 跨站到数据子站（`rel="noopener" target="_blank"`）；车型/型号名无真实适配页时用非链接纯文本。
- **Schema**：Organization（占位实体，仅发已确认字段）+ WebPage + BreadcrumbList + Product（AggregateOffer 询价）+ Article + Dataset/DefinedTerm/TechArticle（数据子站）。
- **两站分工**：主站「卖」（营销文案），数据站「证」（机器可读结构化数据，唯一事实源）。

## 5. 原创内容初稿清单

| 页 | 文件 | 字数（约） |
|---|---|---|
| 首页 | `docs/content/homepage.md` | ~550 词 |
| 品类概览（13 品类合一） | `docs/content/category-overviews.md` | ~1800 词 |
| 公司页 | `docs/content/company.md` | ~350 词 |
| 采购指南 1（空气滤选型） | `docs/content/guides/air-filter-selection.md` | ~450 词 |
| 采购指南 2（HEPA/洁净室采购） | `docs/content/guides/hepa-cleanroom-sourcing.md` | ~500 词 |

**风格守则**（复用 carfilterspro 打磨批标准）：去模板化（消除 "However," / "not automatically" / "This guide explains" 等机械句式）、保留合规限定语（reference/not a verified fitment）、零编造（未证实字段标 `pending`/`provisional`）、单一 H1 + H2/H3 层级。

## 6. EEAT 占位清单

- 品牌名 `Qinghe Air Filter`（provisional，待用户确认）
- 法律实体全称（英/中）、统一社会信用代码、注册地址、成立年份、法定代表人、注册资本、电话/WhatsApp、邮箱 —— 全部 `[provisional: …]`
- 域名所有权 `chinafilterhub.com`（占位）
- 工厂面积/员工/产能、认证/资质 —— `pending`（非占位，综合 5 站无主体自身数据）
- Organization schema 只发已确认字段，缺失字段省略。

## 7. 两站 build / commit / push

### 7.1 构建验证

| 站 | 框架 | 页数 | build |
|---|---|---|---|
| filterhub 主站 | Astro 5 | 27（含 404.html） | ✅ 0 错误 |
| data.filterhub 子站 | MkDocs 1.6 | 32 | ✅ 0 错误 |

### 7.2 占位符一致性验证

- `provisional` 标注覆盖：`src/data/site.ts` + 8 个页面（company/contact/disclaimer/factory/index/privacy/terms）。
- 无真实实值泄漏（信用代码/电话/邮箱均占位，`grep` 校验通过）。

### 7.3 Git 提交（见下）

分步 commit：filterhub `phase2-*` + data.filterhub `phase2-*`，push 后两仓 `ahead/behind = 0/0`。
