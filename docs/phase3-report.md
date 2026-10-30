# FilterHub Phase 3 报告 (Phase 3 Report)

> 阶段：Phase 3 — SKU 结构化数据填充 + 品类页/指南集群深化批
> 日期：2026-10-29
> 主体（占位）：Qinghe Yinghui Filter · 域名（占位）：chinafilterhub.com · 数据子站：data.chinafilterhub.com

## 1. SKU 结构化提取

从 5 站 crawls（text + HTML）逐站提取真实产品记录，落 `src/data/products.json`（canonical），
`data.filterhub/data/products.json` 字节一致同步。字段按 `data.filterhub/docs/field-dictionary.md` 字典。

- **SKU 总数：104**（无凑数，全部来自来源目录真实字段）
- **主品类覆盖：13/13**（空气滤/空调滤/机油滤/液压滤/燃油滤/变速箱滤/HVAC/HEPA-ULPA/活性炭/袋式/滤材/液体滤芯/洁净室设备）
- **去重**：按（型号/OE 号 + 品类）去重；同 OE 号多品牌/多设备写进 `oe_reference` 数组

### 分品类明细

| 品类 | code | SKU 数 |
|---|---|---|
| 空气滤清器 | air_filter | 12 |
| 空调滤清器 | cabin_filter | 8 |
| 机油滤清器 | oil_filter | 7 |
| 液压滤清器 | hydraulic_filter | 7 |
| 燃油滤清器 | fuel_filter | 8 |
| 变速箱滤清器 | transmission_filter | 8 |
| HVAC 过滤器 | hvac_filter | 14 |
| HEPA/ULPA | hepa_filter | 15 |
| 活性炭过滤器 | activated_carbon_filter | 6 |
| 袋式过滤器 | pocket_filter | 5 |
| 滤材介质 | filter_media | 6 |
| 液体过滤滤芯 | liquid_filter | 2 |
| 洁净室设备 | cleanroom_equipment | 6 |
| **合计** | — | **104** |

## 2. 字段填充率（已填 / 待确认）

| 字段 | 已填 | 待确认(pending) | 说明 |
|---|---|---|---|
| description 描述 | 104/104 (100%) | 0 | 来源产品页标题/一句话 |
| application 应用 | 104/104 (100%) | 0 | reference 级（来源表述） |
| oe_reference OE 交叉 | 50/104 (48%) | 54 | 仅 OE 号产品有 |
| filter_media 滤材 | 48/104 (46%) | 56 | 来源标注材质者有 |
| efficiency_class 效率等级 | 38/104 (37%) | 66 | 仅来源目录标注者填 |
| material 材质/端盖 | 30/104 (29%) | 74 | 来源表格/名者填 |
| spec 技术参数 | 21/104 (20%) | 83 | 来源规格表者填（压降/容尘多数未公开） |
| moq 起订量 | 19/104 (18%) | 85 | airyfilter 20卷/200套、cleanroom 5pcs 等 |

**数据状态分布**：产品级 `catalog-confirmed` 104/104；spec 字段级 `verified` 53 项（cleanroom 价格表/yitong 精度/airyfilter 规格表原文）。

## 3. 品类页深化（13 篇）

`src/data/categories.ts` 13 主品类，每页补 **Positioning（定位/工况）+ Procurement（采购注意）** 两个原创段落，
与既有 directAnswer / technicalDepth / selection / subcategories 组成六段结构。全部原创句式，整合多站差异细节，零编造。

## 4. 指南集群深化（7 篇）

`src/data/guides.ts` 支柱 + 集群，起 4 打样新增（共 7 篇，含阶段 2 的 2 篇）：

- 支柱 Selection：air-filter-selection（空气滤选型）、hepa-cleanroom-sourcing（HEPA/洁净室采购）
- 支柱 Standards：filter-efficiency-grades（EN 1822/ISO 16890/MERV 对照）、hepa-vs-ulpa、filter-media-selection（滤材选型）
- 支柱 Cleanroom：cleanroom-filtration-solutions（洁净室过滤方案）
- 支柱 OEM：oem-procurement-process（OEM 采购流程）

等级定义采用公开常识框架级表述，不含未验证数值主张。每篇含 `related` 集群互链。

## 5. 两站联动

- **data.filterhub**：`scripts/build-product-pages.py` 改为从 `data/products.json` 生成 SKU 索引/品类页/SKU 单页/数据落地页 + `mkdocs.yml` nav 自动重建；首页 `docs/index.md` 接入 104 SKU；删除 `sample-products.*`（14 样例 → 104 全量）。
- **主站**：首页 `index.astro` 渲染 `104 SKUs · 13/13 品类覆盖`（单一数据源 `products.json`）；品类中心/SKU 页接真实 SKU。
- **SKU 页模板**：`src/pages/products/[category]/[slug].astro` 六块结构（身份+询价 / 核心参数仅已确认 / OE 交叉参考 / 质量文件仅真实项 / OEM 条件 / 相关资料）。
- **llms.txt**：两站生成（`scripts/generate-llms.py`），SKU/品类/指南入列。

## 6. 验证

| 项 | 结果 |
|---|---|
| 主站 build | ✅ 136 页 0 错误 |
| 数据站 build | ✅ 127 页 0 错误 |
| 字节一致 diff | ✅ 0（sha256 相同） |
| 主品类覆盖 | ✅ 13/13 |
| 断链（两站） | ✅ 0 |

## 7. Git 提交

分步 commit + push 两仓，`phase3-*` 命名，push 后两仓 `ahead/behind = 0/0`。
