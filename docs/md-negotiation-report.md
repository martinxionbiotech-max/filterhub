# Markdown 内容协商实施报告

- **站点**：China Filter Hub（filterhub · Astro · Cloudflare Pages）
- **实施批**：HTTP Markdown content negotiation（`Accept: text/markdown`）
- **日期**：2026-10-30
- **状态**：本地完成，**未部署生产 / 未做生产测试**（如实声明，见 §14）

---

## 1. 项目架构（发现）

- **框架**：Astro `5.18.2`，纯静态输出（`output: 'static'`）。
- **尾斜杠策略**：`trailingSlash: 'always'` —— 所有页面 URL 均以 `/` 结尾，路由为目录索引（`dist/a/b/index.html` → `/a/b/`）。
- **站点域名**：`site: 'https://chinafilterhub.com'`（占位域名，非最终上线域名）。
- **运行环境**：Node `v24.20.0`，npm `11.19.0`。
- **部署目标**：Cloudflare Pages（GitHub 仓库 `martinxionbiotech-max/filterhub`，`main` 分支，**无 `wrangler.toml` / 无 `.github/workflows`**，推断为 CF Pages 面板直连 GitHub 构建：`npm run build` + 输出目录 `dist`）。
- **现有 Functions**：`functions/` 目录不存在，无 `_middleware.js`、无 `_worker.js`、无高级模式 Worker。→ 本次为**新建** Pages Functions（非扩展）。
- **页面构成**：150 个 HTML（首页 1 + 公司/商业/合规页 11 + 指南 12 + 支柱 6 + 产品目录/品类/SKU 120 + 工具 1 = 150，含 `404.html`）。

## 2. 检查的文件

`package.json`、`astro.config.mjs`、`tsconfig.json`、`.gitignore`、`.git/config`；`src/pages/**`（`index`、`company/contact/cookies/disclaimer/factory/oem/privacy/private-label/rfq/terms/wholesale`、`404`、`guides/[slug]`、`pillars/[slug]`、`products/[category]`、`products/[category]/[slug]`、`tools/oe-lookup`）；`src/layouts/BaseLayout.astro`；`src/components/{Header,Footer,CategoryIcon,StatusBadge}.astro`；`src/data/{site,categories,guides,pillars,products,products.json,sku-depth,link-map}.ts`；`public/{robots.txt,llms.txt,favicon.svg}`；`dist/` 构建产物；以及 `scripts/generate-llms.py` 等既有脚本（参考其路由枚举方式，未复用）。

## 3. 新建 / 修改的文件

| 类型 | 路径 | 说明 |
|---|---|---|
| 新建 | `functions/_middleware.js` | Pages Functions 中间件，协商逻辑 |
| 新建 | `scripts/generate-markdown.mjs` | 构建期 HTML→Markdown 转换 + manifest 生成 + 校验 |
| 新建 | `scripts/test-negotiation.mjs` | 本地协商测试（模拟 `env.ASSETS`） |
| 新建 | `docs/md-negotiation-report.md` | 本报告 |
| 修改 | `package.json` | `build` 脚本追加 `&& node scripts/generate-markdown.mjs` |

**构建期产物（不提交 git，`dist/` 已 gitignore）**：`dist/**/*.md`（149 个 sidecar）+ `dist/_md/manifest.json`。

## 4. 现有 Functions / Worker 扩展情况

**无**。仓库此前没有任何 `functions/`、`_middleware.js`、`_worker.js`。本次直接新建 `functions/_middleware.js`，未覆盖任何既有请求拦截架构。

## 5. 扫描的 HTML 页数

`astro build` 产出 **150** 个 HTML 页面，全部扫描。

## 6. 生成的 Markdown 页数

**149** 个（`dist/**/index.md` sidecar，与 `index.html` 同级）。

## 7. 排除的页数及理由

- **1 个**：`dist/404.html` —— 错误页（skill §4 明确排除 404 页）。
- **非 HTML 资产不计入**（`sitemap-*.xml`、`robots.txt`、`llms.txt`、`favicon.svg`、`images/`、`_astro/` JS/CSS）—— 本就不属于 HTML 页面，不生成 MD。
- 全站**无任何 `noindex` / `robots` meta**（`grep` 验证），无重复 canonical 变体，故除 404 外无其它排除。资格判定按页面元数据（canonical、noindex）而非仅文件名。

## 8. 转换依赖

- **HTML 解析**：`parse5@7.3.0` —— 已随 Astro 传递依赖存在（`astro → @astrojs/markdown-remark → hast-util-from-html → parse5`），**未新增依赖、未联网安装**。
- **Markdown 序列化**：自写轻量转换器（`scripts/generate-markdown.mjs` 内），以便确定性剥离导航/页头页脚/脚本/样式/装饰图标；通用 HTML→MD 库无法理解本站结构。
- 转换**只在构建期执行**，运行期零转换。

## 9. 清单（manifest）位置

`dist/_md/manifest.json`（构建期自动生成，URL → MD 资产相对路径的映射）。

## 10. URL 归一化策略

- `dist/index.html` → `/`；`dist/a/b/index.html` → `/a/b/`（尾斜杠，与站点 `trailingSlash: always` 一致）。
- manifest 键为尾斜杠 URL；值指向实存文件（`/index.md`、`/a/b/index.md`）。
- 中间件查找容忍缺尾斜杠：先查 `pathname`，再查 `pathname + '/'`。
- **不映射查询串**（只用 `URL.pathname`）。
- **防路径穿越**：仅查 manifest 白名单 + `isSafeAssetPath()`（须 `/` 开头且不含 `..`），不根据输入拼文件系统路径。

## 11. 协商行为

| 请求 Accept | 响应 |
|---|---|
| `text/markdown` | Markdown（`text/markdown; charset=utf-8`） |
| `text/markdown; q=1.0` | Markdown |
| `text/markdown; q=0` | HTML |
| `text/html` | HTML |
| （缺失 / 不支持） | HTML |
| `text/html, text/markdown`（同 q 平局） | **HTML**（确定性平局 → HTML 默认） |
| `text/html;q=0.5, text/markdown;q=0.9` | Markdown（md q 更高） |

- `q` 值按 RFC 解析；`q=0` 视为显式拒绝 → HTML；不支持用简单子串判断。
- MD 响应头：`Content-Type: text/markdown; charset=utf-8` + `Vary: Accept` + `Cache-Control: no-store`。
- HTML 响应：原样保留状态/头/缓存行为，仅**合并** `Vary: Accept`（不覆盖既有 Vary）。
- 资产通过 `env.ASSETS.fetch()` 解析；manifest 缺失 / 资产缺失 → 安全回退 HTML；无递归/自取循环（`env.ASSETS.fetch` 直达静态资产存储，不重入 Functions）。

## 12. 缓存策略

- **HTML**：缓存行为保留（Astro 静态构建本身不加 `Cache-Control`，由 CF Pages 默认策略处理），仅合并 `Vary: Accept`。
- **Markdown**：`Cache-Control: no-store`（生产缓存键分离**尚未验证**前保持保守）。
- **静态资产**：完全不动（不加 Vary、不改缓存）。
- **未全站禁缓存**。

## 13. 本地测试结果（如实标注环境）

**环境：未安装 `wrangler`，故用 `scripts/test-negotiation.mjs` 模拟 `env.ASSETS`（从 `dist/` 提供静态文件），并直接 import 真实 `functions/_middleware.js` 的 `onRequest` 执行。** 这验证了协商逻辑本身，**不等于**生产 Pages Functions 已通过。

结果：**22/22 通过**，覆盖：
- `GET /` → 200 `text/html`、原始 HTML、`Vary: Accept`；
- `GET /` + `Accept: text/markdown` → 200 `text/markdown; charset=utf-8`、`Vary: Accept`、真实 Markdown；
- SKU 页 `/products/air-filters/42n-62-15470/` 协商返回正确条目（CFH-AF-001）；
- `q=0` → HTML；`Accept: text/html` → HTML；平局 → HTML；`md q>html q` → Markdown；
- MD 响应 `Cache-Control: no-store`；HTML 无 `no-store`；
- 缺失路由 → HTML 回退；`/404.html` → 保持 HTML；缺尾斜杠 → 仍协商 MD；查询串忽略；静态资产不加 Vary；
- manifest 可读、149 条。

## 14. 生产测试结果

**未部署生产，未执行生产测试。** 本仓库当前无 `wrangler`、无部署凭证/管线配置，且站点域名为占位域名。生产测试须在部署后按 skill §11 Test 1–8 重跑；在完成生产缓存键分离验证前，MD 维持 `no-store`。

## 15. SEO / AIO 完整性验证

- **canonical**：未改动（仅在 HTML 侧由 `BaseLayout` 生成，本次未触碰任何 HTML 模板/配置）。
- **sitemap**：`sitemap-0.xml` / `sitemap-index.xml` 由 `@astrojs/sitemap` 生成，**未改动**；验证含 **149 个 URL、0 个 `.md`** → MD 未入 sitemap。
- **robots.txt**：未改动。
- **redirects / headers**：仓库无 `_redirects` / `_headers`，未新增。
- **索引性 / 内链**：未改动（未删改任何页面源文件、`link-map` 或导航）。
- **与其它技术区分**：本实现为 **HTTP 内容协商**（同 URL 按 Accept 返回 HTML/MD），与 `llms.txt`（发现/导航文件，`public/llms.txt` 未动）、`robots.txt`（爬虫指令，未动）、Cloudflare 原生 Markdown for Agents（平台特性，**未启用、未推荐**，Free 计划可用性未验证）严格区分。

## 16. 已知限制

1. 本地测试为**模拟** `env.ASSETS`，非真实 Pages 运行时（缺 `wrangler`）。
2. 生产**缓存键分离未验证** → MD 维持 `no-store`（保守）。
3. `dist/_md/manifest.json` 与 `.md` sidecar 是公开静态资产（可被直接抓取 `/*.md`），无害但不隐。
4. MD 顶部引用的是被 Astro 截断至 ~155 字符的 meta description（保留原文事实，仅长度截断）。
5. 首页 hero 背景图、品类/CTA 卡片图等图片引用按"有 alt 即保留"原则保留（装饰性背景图未单独剥离）。
6. 中间件对**所有**请求生效（含静态资产），但仅对 `text/markdown` 请求触发 manifest 读取、仅对 HTML 文档加 Vary，正常请求开销可忽略。

## 17. 精确回滚指令

1. **git 回滚整批**（推荐）：
   ```bash
   git revert <commit-hash>   # 或 git reset --hard <前一个提交>
   git push
   ```
2. **手工回滚**（逐文件）：
   - 删除 `functions/_middleware.js`（恢复"无 Functions"状态）；
   - `package.json` 的 `build` 改回 `"build": "astro build"`；
   - 删除 `scripts/generate-markdown.mjs`、`scripts/test-negotiation.mjs`；
   - 删除 `docs/md-negotiation-report.md`；
   - 重新 `npm run build`（`astro build` 会自动清空 `dist/`，MD 产物随之消失）。
3. 无需回滚任何页面源文件、`robots.txt`、`sitemap`、`llms.txt`（本批未改动它们）。

---

## 附：执行要点小结

- **有无现有 middleware**：无（首次引入 `functions/_middleware.js`）。
- **转换库**：`parse5`（Astro 传递依赖，零新增）+ 自写序列化器。
- **MD 生成数**：149（排除 1：`404.html`；无 noindex/重复 canonical）。
- **manifest**：`dist/_md/manifest.json`。
- **本地协商测试**：22/22 通过（模拟 ASSETS，非 wrangler）。
- **缓存**：MD `no-store` + `Vary: Accept`；HTML 合并 `Vary: Accept`、其余保留；资产不动。
- **回滚**：`git revert` 或删除 `functions/` + 还原 build 脚本。
- **未部署生产 / 未做生产测试**（如实）。
