# FilterHub 内容整合分析 (Integration Analysis)

> 阶段：Phase 2 — 内容整合
> 输入：5 站深度抓取汇总（`docs/sites/`）+ 数据库结构设计（`data.filterhub` 4 文档）
> 日期：2026-10-29
> 纪律：本文件所有事实仅来自 5 站抓取，缺失/未证实字段标 `pending` 或 `provisional`，不虚构。

## 1. 五站素材概览

| 站点 | 公司 | 定位 | 数据质量 | 独有优势 |
|---|---|---|---|---|
| hbxueyuan.com | 河北雪缘滤清器 | 汽车/工程机械滤清器 + 控制拉索 | 产品正文薄，OE 号集中在标题 | 全品类液体/进气滤 + 大量 OE 交叉号 |
| airyfilter.com | 广州艾瑞滤材 (AIRY) | 工业空气滤材 + 成品过滤器 | 规格存于图片/JS，文字层不完整 | 滤材介质（针刺棉）+ MOQ/产能 + 客户背书 |
| klcintl.com | KLC | 空气过滤器 + 洁净室设备 | company 页极薄，规格多数 pending | 耐高温（260/350°C）+ 洁净室设备 |
| yitong-filter.com | 石家庄一通滤清器 | 通风/液体/金属滤芯 | **数据质量最高**（规格表/设备参数/客户全） | ISO 16890/EN 1822 等级表 + 金属滤芯 + 生产设备参数 |
| cleanroom-ffu.com | 长沙 EawayFilter | HVAC + 洁净室 HEPA + 洁净室设备 | 数据质量高（价格/规格/交期表） | HEPA 价格表 + FFU 规格表 + 洁净室设备清单 |

**数据质量分层结论**：yitong-filter 与 cleanroom-ffu 是「富数据」站（规格可溯源），airyfilter 是「滤材 + 定制能力」站，hbxueyuan 是「OE 交叉号」站，klcintl 是「耐高温 + 洁净室设备」站但公司信息最薄。整合策略：**以富数据站为规格骨架，以 OE 站为交叉参考骨架，以滤材站为介质骨架**。

## 2. 统一品类学（Taxonomy）

整合 5 站产品导航 + data.filterhub 品类树，形成 **13 主品类 / 20 子类**的统一品类树。

| # | 主品类 | code | 子类 | 来源站 | 效率等级锚点 |
|---|---|---|---|---|---|
| 1 | 空气滤清器（发动机进气） | air_filter | 板式 Panel · 圆筒 Round · 重载 Heavy-Duty · PowerCore · 空压机 Air Compressor · 燃气轮机 GT Intake（6） | hbxueyuan, yitong, cleanroom | ISO 5011 / ISO 16890 |
| 2 | 空调/驾驶室滤清器 | cabin_filter | — | hbxueyuan | — |
| 3 | 机油滤清器 | oil_filter | — | hbxueyuan | — |
| 4 | 燃油滤清器（含尿素滤） | fuel_filter | — | hbxueyuan | — |
| 5 | 液压滤清器 | hydraulic_filter | — | hbxueyuan | — |
| 6 | 变速箱滤清器 | transmission_filter | — | hbxueyuan | — |
| 7 | HVAC 空气过滤器 | hvac_filter | 初效 Pre（G1–G4）· 中效 Medium（M5–F9）· V 型 V-Bank（3） | airyfilter, klcintl, yitong, cleanroom | EN 779 / ISO 16890 |
| 8 | HEPA/ULPA 高效过滤器 | hepa_filter | —（等级 H10–H14 / U15–U17 归属性学） | airyfilter, klcintl, yitong, cleanroom | EN 1822 |
| 9 | 活性炭过滤器 | activated_carbon_filter | — | airyfilter, klcintl, cleanroom | — |
| 10 | 袋式过滤器 | pocket_filter | — | airyfilter, klcintl, yitong, cleanroom | EN 779 / ISO 16890 |
| 11 | 滤材介质 | filter_media | 针刺棉 Needle-Punched · 合成纤维 Synthetic Fiber · 微玻纤 Micro Glass Fiber · 活性炭 Activated Carbon（4） | airyfilter（主）, yitong | — |
| 12 | 液体过滤滤芯 | liquid_filter | 膜滤芯 Membrane（PP/PVDF/PTFE）· 金属滤芯 Metal（SS304/SS316L/Ti）（2） | yitong | 过滤精度 μm |
| 13 | 洁净室设备 | cleanroom_equipment | FFU · 层流罩 · 生物安全柜 · 风淋 · 传递窗（5） | klcintl, cleanroom | 洁净度 Class |

> 品类树规模：**13 主品类 / 20 子类**。喷漆房（Spray Booth）作为**应用工况**挂到 airyfilter 的「喷漆房滤材/过滤器」产品线与应用场景，不单列品类（阻燃 UL 900 为属性）。

### 品类归属判定（诚实边界）

- **空气滤清器**（发动机进气）为 hbxueyuan 独有强项（割草机/农用/卡车/乘用车/重载/PowerCore/空压机），yitong 提供 GT 燃气轮机进气（1/2/3 级）。
- **HVAC + 洁净室空气过滤**为四站重叠（airyfilter/klcintl/yitong/cleanroom），等级链完整：G1–G4 → M5–F9 → H10–H14 → U15–U17。
- **液体滤（机油/燃油/液压/变速箱/尿素）** 仅 hbxueyuan 覆盖（汽车 + 工程机械 OE 交叉参考）。
- **金属滤芯/液体过滤** 仅 yitong 覆盖（SS304/SS316L/Ti + PP/PVDF/PTFE 膜）。
- **滤材介质** 以 airyfilter 为主（针刺棉/合成纤维/活性炭），yitong 补充微玻纤（HEPA 折纸机）。

## 3. 统一属性学（Attribute Schema）

整合 5 站规格字段，形成四维属性体系（与 data.filterhub `field-dictionary.md` 对齐）：

### 3.1 效率等级（Efficiency Class）

| 标准 | 适用品类 | 等级/值 | 来源证据 |
|---|---|---|---|
| EN 1822 | HEPA/ULPA | H10–H14（效率型/高效型）、U15–U17（超低穿透） | yitong（`verified`）、cleanroom（`verified`） |
| ISO 16890 | HVAC/通风 | ePM1 / ePM2.5 / ePM10 / ePM coarse | yitong（`verified`）、airyfilter（`reference`） |
| EN 779 | HVAC 初/中效 | G1–G4 / M5–M6 / F7–F9 | yitong（`verified`）、cleanroom（`verified`） |
| ISO 5011 | 发动机进气 | 多循环效率 + 容尘量 | 行业标准（适用空气滤清器品类，5 站文字层未逐型号公开该值 → `pending`） |
| ASHRAE 52.2 | HVAC（美标） | MERV 5 等 | airyfilter（`reference`） |
| UL 900 / DIN 5510 | 阻燃（喷漆房/轨道） | 阻燃级 | airyfilter（`reference`） |

> 诚实标注：EN 1822 与 ISO 16890 在源站为表格原文（`verified`）；ISO 5011 为发动机进气滤清器的行业标准，整合到属性学框架，但**5 站未逐型号公开该值**，故相关字段标 `pending`，不编造具体数值。

### 3.2 尺寸（Dimension）

- 板式 HEPA：610×610×70 / 610×610×80 / 610×610×150 / 610×610×292 mm（cleanroom `verified`）
- FFU：48"×48" / 48"×24" / 24"×24"，厚 320 mm（cleanroom `verified`）
- 液体滤芯：5/10/20/30/40/70 英寸（yitong `verified`）
- 金属滤芯直径：20/38/60 mm + 定制（yitong `verified`）

### 3.3 材质（Material）

- **滤材介质**：针刺棉（needle-punched）、合成纤维（synthetic fiber）、微玻纤（micro glass fiber）、活性炭、PP/PVDF/PTFE 膜、烧结金属网（sintered mesh）——来源 airyfilter/yitong/klcintl（`catalog-confirmed`）
- **端盖**：PU（聚氨酯，hbxueyuan）、215/222/Flat 222/High 222/226/DOE（yitong `verified`）
- **密封/O 型圈**：Silicon / EPDM / Viton / FEP / NBR / PEFE / 无端垫片 endless gasket / 凝胶 gel（yitong、klcintl、cleanroom）
- **框架/壳体**：镀锌钢 / 不锈钢 / 铝 / 纸板 / 钛（yitong、cleanroom `catalog-confirmed`）

### 3.4 应用工况（Operating Condition）

- 温度：80°C（cleanroom FFU `verified`）、260–350°C（klcintl 耐高温 `catalog-confirmed`）
- 湿度：80%（cleanroom `verified`）
- 风量：4000–5000 CMH（FFU 48×48 双电机）、2000–2500 / 1000–1200（cleanroom `verified`）
- 洁净度：Class 100（cleanroom FFU `verified`）
- 过滤精度：1/3/5/10/20/30/50/100 μm（yitong 金属滤芯 `verified`）

## 4. 五站差异与重叠矩阵

### 4.1 品类覆盖矩阵（● 直接采集 · ◐ 间接 · — 未涉及）

| 站点 \ 品类 | 空气滤 | 空调滤 | 机油滤 | 燃油滤 | 液压滤 | 变速箱滤 | 尿素滤 | HVAC | HEPA/ULPA | 活性炭 | 袋式 | 液体滤芯 | 滤材介质 | 洁净室设备 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| hbxueyuan | ● | ● | ● | ● | ● | ● | ● | — | — | — | — | — | — | — |
| airyfilter | ◐(滤材) | — | — | — | — | — | — | ● | ● | ● | ● | — | ● | — |
| klcintl | — | — | — | — | — | — | — | ● | ● | ● | ● | — | — | ● |
| yitong-filter | ●(GT) | — | — | — | — | — | — | ● | ● | ● | ● | ● | ◐(微玻纤) | — |
| cleanroom-ffu | ◐(净化器) | — | — | — | — | — | — | ● | ● | ● | ● | — | — | ● |

### 4.2 差异与重叠（整合要点）

- **无重叠品类（独家）**：机油/燃油/液压/变速箱/尿素滤（hbxueyuan）、液体滤芯/金属滤芯（yitong）、滤材介质（airyfilter）——这三块各自是单站独占，整合时需为各自建立独立知识簇，无法交叉验证，字段 `pending` 风险最高。
- **四站重叠品类**：HVAC 过滤器（初效→中效→高效）是整合价值最高区——四站等级链互相印证（G1–G4/M5–F9/H10–H14/U15–U17），可形成「等级链统一叙述」，但逐型号规格（压降/容尘）四站均未公开，须诚实标 `pending`。
- **规格字段差异化**：cleanroom 有价格/交期/FFU 风量，yitong 有设备参数/过滤精度，airyfilter 有 MOQ/产能，klcintl 有耐温——整合时「字段级」取各站最优，不跨站混填。
- **认证重叠与差异**：airyfilter 独有 UL 900/DIN 5510/ASHRAE 52.2；yitong 独有 ISO 16890/EN 1822 等级表；hbxueyuan 资质为「国家机械工业部技术标准鉴定 + 守合同重信用企业」（非 ISO 证书，`pending` ISO 认证）。

## 5. 整合后的主目录规划（品类树 → 主站信息架构）

见 `docs/site-architecture.md` 的 URL 结构。此处给出品类树与数据子站 category code 的映射，作为主站 `/products/` 与数据子站 `/products/` 的共同骨架：

```
Qinghe Yinghui Filter（占位主体）
├─ /products/air-filters/          空气滤清器（6 子类）
├─ /products/cabin-filters/        空调滤清器
├─ /products/oil-filters/          机油滤清器
├─ /products/fuel-filters/         燃油滤清器（含尿素）
├─ /products/hydraulic-filters/    液压滤清器
├─ /products/transmission-filters/ 变速箱滤清器
├─ /products/hvac-filters/         HVAC 过滤器（3 子类）
├─ /products/hepa-filters/         HEPA/ULPA 过滤器
├─ /products/activated-carbon/     活性炭过滤器
├─ /products/pocket-filters/       袋式过滤器
├─ /products/filter-media/         滤材介质（4 子类）
├─ /products/liquid-cartridges/    液体过滤滤芯（2 子类）
└─ /products/cleanroom-equipment/  洁净室设备（5 子类）
```

## 6. 内容缺口（诚实清单）

| 缺口 | 说明 | 影响品类 | 处理 |
|---|---|---|---|
| 压降 pressure drop | 5 站文字层普遍未公开 | 全部 | `pending`，待供应商目录 PDF/询价补充 |
| 容尘量 dust holding | 同上 | HVAC/空气滤 | `pending` |
| 克重 grammage | 滤材参数未公开 | 滤材介质 | `pending` |
| 滤材效率曲线 | 未公开 | 滤材介质 | `pending` |
| 包装/装箱规格 | 未公开 | 全部 | `pending` |
| MOQ | 仅 airyfilter 明确（20 卷/200 套） | 其余 pending | 部分 `pending` |
| 公司工商信息 | 主体占位（无核验） | 全部 | `provisional`（见 eeat-plan.md） |
| 逐 SKU 规格 | hbxueyuan/klcintl 产品页极薄 | 液体滤/洁净室设备 | `pending`，OE 号仅 `catalog-confirmed` |
