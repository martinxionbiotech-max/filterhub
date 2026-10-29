# FilterHub — 5 站深度抓取汇总

本目录为 **filterhub** 内容仓的站点抓取汇总。数据来源为 5 家滤清器/过滤器制造商官网的深度抓取（Playwright 渲染 + 链接去重枚举；cleanroom-ffu.com 因 WAF 拦截改用 sitemap + curl）。所有信息**仅从站点采集，不虚构**。

- 抓取日期：2026-10-29
- 抓取工具：Playwright (Chromium headless)；cleanroom-ffu.com 使用 curl 回退方案
- 原始数据：`../crawls/{site}/`（HTML 快照 + 逐页文字 + manifest.json）

## 站点索引

| 站点 | 公司 | 定位 | 文档 |
|---|---|---|---|
| hbxueyuan.com | 河北雪缘滤清器 | 汽车/工程机械滤清器 + 控制拉索 | [hbxueyuan.md](sites/hbxueyuan.md) |
| airyfilter.com | 广州艾瑞滤材 (AIRY) | 工业空气滤材 + 成品过滤器 | [airyfilter.md](sites/airyfilter.md) |
| klcintl.com | KLC | 空气过滤器 + 洁净室设备 | [klcintl.md](sites/klcintl.md) |
| yitong-filter.com | 石家庄一通滤清器 | 通风空气过滤 + 液体过滤 + 金属滤芯 | [yitong-filter.md](sites/yitong-filter.md) |
| cleanroom-ffu.com | 长沙 EawayFilter | HVAC + 洁净室 HEPA + 洁净室设备 | [cleanroom-ffu.md](sites/cleanroom-ffu.md) |

## 品类覆盖矩阵

行 = 站点，列 = 滤清器品类。● = 直接采集到该品类；◐ = 部分/间接涉及；— = 未涉及。

| 站点 \ 品类 | 空气滤清器 | 空调/驾驶室滤 | 机油滤 | 燃油滤 | 液压滤 | 变速箱滤 | 尿素滤 | HVAC 过滤器 | HEPA/ULPA | 活性炭 | 袋式/褶式 | 金属滤芯/液体滤 | 洁净室设备/FFU |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| hbxueyuan | ● | ● | ● | ● | ● | ● | ● | — | — | — | — | — | — |
| airyfilter | ● | — | — | — | — | — | — | ● | ● | ● | ● | — | — |
| klcintl | — | — | — | — | — | — | — | ● | ● | ● | ● | — | ● |
| yitong-filter | ● | — | — | — | — | — | — | ● | ● | ● | ● | ● | — |
| cleanroom-ffu | ◐(净化器/3D打印机) | — | — | — | — | — | — | ● | ● | ● | ● | — | ● |

### 品类说明

- **空气滤清器**（发动机进气）：hbxueyuan（割草机/农用/卡车/乘用车/重型机械/PowerCore）、airyfilter（工业空气滤材）、yitong（GT 进气 1/2/3 级）、cleanroom（净化器/3D 打印机滤）
- **HVAC/洁净室空气过滤**：airyfilter、klcintl、yitong、cleanroom 四家覆盖（初效 G1–G4 → 中效 M5–F9 → HEPA H10–H14 → ULPA U15–U17）
- **机油/燃油/液压/变速箱/尿素滤**：仅 hbxueyuan（汽车 + 工程机械 OE 交叉参考）
- **金属滤芯/液体过滤**：仅 yitong（SS304/316L/Ti 烧结/编织滤芯，PP/PVDF/PTFE 膜液体滤）
- **洁净室设备/FFU**：klcintl、cleanroom 两家（FFU、层流罩、生物安全柜、风淋、传递窗等）

## 数据状态体系

每个站点文档内统一使用以下状态标注（详见 data.filterhub 仓的 `docs/data-status.md`）：

- `verified` — 站点文字层直接提取，字段值可信
- `catalog-confirmed` — 型号/OE 号/分类从站点目录与标题确认
- `reference` — 站点描述性文案（应用场景、技术标准）
- `pending` — 站点未公开该字段，待补充（不虚构）

## 抓取统计

| 站点 | 页面数 | 文字量(字符) | 失败页 |
|---|---|---|---|
| hbxueyuan.com | 250 | 409,001 | 0 |
| airyfilter.com | 178 | 1,691,255 | 72* |
| klcintl.com | 250 | 91,588 | 0 |
| yitong-filter.com | 250 | 579,923 | 0 |
| cleanroom-ffu.com | 111 | 632,819 | 0 |

> *airyfilter 72 个失败页为多语言分站（ar/de/es/fr/hi/it/ja/ko/pt/ru）中内容重复的语言镜像页，主体英文内容已完整采集，不影响数据完整性。

详细抓取报告见 [crawl-report.md](crawl-report.md)。
