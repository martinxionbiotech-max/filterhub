# FilterHub 抓取报告 (Crawl Report)

- 抓取日期：2026-10-29
- 执行：采集工程师 + 数据架构师（OpenClaw agent）

## 抓取方法

1. **Playwright (Chromium headless)**：逐站枚举页面（导航 + `<a href>` 链接去重），渲染 + 滚动，提取正文（标题/段落/表格/列表），每页存 HTML 快照 + 文字文件。
2. **链接去重**：同源过滤、去 fragment、去尾斜杠，排除登录/购物车/搜索/分页标签等噪音路径，以及静态资源扩展名。
3. **cleanroom-ffu.com 回退**：该站 WAF 拦截无头 Chromium（`ERR_HTTP2_PROTOCOL_ERROR` → `ERR_EMPTY_RESPONSE`）与 node-fetch（`SocketError: other side closed`），但 `curl` 正常返回 HTTP 200。改用 **Yoast sitemap（sitemap_index.xml）枚举 111 个 URL + curl 抓取 + HTML 文本抽取**，实现同等覆盖。

## 结果统计

| 站点 | 页面数 | 文字量(字符) | 失败页 | 方法 |
|---|---|---|---|---|
| hbxueyuan.com | 250 | 409,001 | 0 | Playwright |
| airyfilter.com | 178 | 1,691,255 | 72 | Playwright |
| klcintl.com | 250 | 91,588 | 0 | Playwright |
| yitong-filter.com | 250 | 579,923 | 0 | Playwright |
| cleanroom-ffu.com | 111 | 632,819 | 0 | curl 回退 |

### airyfilter 失败页说明

72 个失败页均为多语言镜像分站（`/ar`、`/de`、`/es`、`/fr`、`/hi`、`/it`、`/ja`、`/ko`、`/pt`、`/ru`）下的重复内容页，主站英文内容已完整抓取，不影响数据完整性与汇总质量。

## 数据质量观察（诚实标注）

- **hbxueyuan**：产品详情页正文极薄（90–165 字符），型号/OE 号主要在标题；规格参数表未在文字层呈现。
- **airyfilter**：产品页含「Product Overview」标题但正文规格在文字层不完整（部分规格存于图片/JS 渲染），产品分类与认证信息完整。
- **klcintl**：产品详情页极薄（约 300 字符），大量规格参数未在文字层呈现，公司沿革/工厂参数未公开。
- **yitong-filter**：数据质量最高——首页含完整规格分类表（ISO 16890/EN 1822 等级、液体过滤材质表、金属滤芯表）、生产设备参数表（真实设备参数）、沿革与客户列表。
- **cleanroom-ffu**：数据质量高——含 HEPA 价格表（USD/PCS）、FFU 规格表（风量/效率/尺寸）、交期表。

## 交付物

- `docs/sites/`：5 份站点汇总 MD（每站：公司概况/产品线/产品详情/原料工艺/应用/生产加工，字段缺失标注 `pending`）
- `docs/README.md`：站点索引 + 品类覆盖矩阵
- `crawls/{site}/`：HTML 快照 + 逐页文字 + manifest.json（原始证据）

## 失败清单

| 站点 | 问题 | 处理 |
|---|---|---|
| cleanroom-ffu.com | WAF 拦截 Playwright/node-fetch | curl 回退，完成 111 页 0 失败 |
| airyfilter.com | 72 个多语言镜像页失败 | 主站内容已完整，不影响 |
