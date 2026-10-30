# EEAT 主体对齐改造批 — 报告

> 批次：`eeat-align` · 日期：2026-10-30 · 仓库：`filterhub`（Astro 主站，136 页 / 104 SKU / 13 品类）+ 兄弟仓 `data.filterhub`（MkDocs 数据子站）
> 目标：China Filter Hub 的 EEAT 主体与 carfilterspro.com 对齐 · 不造成内容重复 · 本站以产品信息 + 数据库为核心。

## 1. 主体替换点

**统一法律主体**（沿用 carfilterspro 已核验主体，两个 storefront 同一法律实体）：

| 字段 | 值 |
|---|---|
| 法律主体（legalName） | Qinghe County Huiying Automotive Parts Co., Ltd. |
| 中文名 | 清河县汇盈汽车零部件有限公司 |
| 统一社会信用代码 | 91130534MA0958NT84 |
| 法定代表人 | Liu Fengxiu（刘风秀） |
| 成立日期 | 2017-10-10 |
| 品牌渊源 | 1996（Huiying 品牌） |
| 注册地址 | North of Minjiang Street, west of Jiuhuashan Road, Qinghe County, Xingtai City, Hebei Province, China |
| 邮箱 | martin@carfilterspro.com |
| 电话 | +86 13323237275 |
| 品牌名（brand 层） | Huiying（关系说明：Huiying brand · legal entity Qinghe County Huiying Automotive Parts Co., Ltd.） |

**替换落点（全站 + 两仓）**：

- `src/data/site.ts` — 单一事实源：brand → `Huiying`；新增完整 `entity`（legalName/legalNameZh/creditCode/legalRepresentative/address/email/phone/foundingDate/since）、`baikeUrl`、`brandRelationship`、`companyProfileUrl`、`factoryUrl`；`positioning`/`tagline`/`disclosure` 重写为产品信息 + 数据库定位。
- `src/layouts/BaseLayout.astro` — `organizationSchema` 全字段（见 §5），网站/页面/面包屑 schema 的 publisher/name 随 `site.brand` 同步。
- 页面：`company.astro`（重写为精简披露）、`factory.astro`（精简）、`index.astro`（hero/定位语/Who are you?）、`contact.astro`、`oem.astro`、`disclaimer/cookies/terms/privacy`（description）、`products/[category].astro`（新增 Product Database 入口块）。
- `public/llms.txt` + `public/images/og-default.svg` + `package.json` — 品牌与定位同步。
- 数据子站：`docs/index.md`、`docs/llms.txt`、`mkdocs.yml` `site_description`、`scripts/build-product-pages.py` `site_description`、`data/products.json` + `docs/data/products.json`（`company` 字段）。
- `scripts/generate-llms.py` — 两站 llms.txt 头部（产品信息 + 数据库定位 + EEAT 主体一行披露）。

## 2. 旧名残留复扫

- 旧占位名 `Qinghe Yinghui Filter` / `Yinghui`：
  - 主站 `src/` + `public/` + `package.json` + `scripts/`：**0**
  - 数据子站源码（`docs/` + `mkdocs.yml` + `scripts/` + `data/`）：**0**
  - `dist/` 构建产物：**0**
- 品牌 `Qinghe Yinghui Filter` → 品牌层 `Huiying` + 法律主体全称。地名 `Qinghe`（清河县）与「Qinghe filter industry cluster」保留（地理指称）。
- 注：`filterhub/docs/` 与 `reports/` 下历史里程碑报告（`final/phase2/phase3/optim1/eeat-plan/site-architecture/integration-analysis`、`reports/audit-scan/optimization-plan`）作为**历史记录**保留旧占位名（非渲染内容）；`docs/content/` 两份内容草稿已同步新主体。

## 3. Company / Factory 去重（字数 before → after）

| 页面 | before | after | 压减 |
|---|---|---|---|
| Company | 469 | 233 | **−50%**（披露级） |
| Factory | 346 | 285 | −18%（保留与产品相关的生产框架 + QC 四门，删叙述） |

- Company 页改为**精简主体披露**：法律名 / 中文名 / 信用代码 / 法人 / 成立 / 注册地址 / 品牌渊源 / 联系 + `Full company profile: carfilterspro.com/company-profile/` 外链；删除原公司故事（产业集群长叙述、资质框架、制造规模、工作流程）。
- Factory 页保留「生产流程（行业参考）+ QC 四门 + 认证诚实声明」，新增指向 carfilterspro 工厂页的外链。
- **重复内容检查**（与 carfilterspro 公司页段落 5-gram 相似度）：Company 页与 carfilterspro 叙述共同 5-gram 仅 19 个，全部为**强制一致的实体事实短语**（法律名/地址/信用代码/来源注记/品牌关系句，≤7 词），**无大段复刻**；公司故事/工厂详情/文化/设备等长叙述零复现。

## 4. 产品信息 + 数据库核心定位改动

- 首页 hero：`Product information & database hub · 104 SKUs · 13 categories`；H1 改为「A searchable product information and database hub for filters」；lede 重写为结构化产品数据库定位。
- 首页新增「Product Database」区块（数据子站 + `products.json` 入口 + 按钮）。
- 品类页（`[category].astro`）新增「Product Database」入口块（指向数据子站对应品类 + 按钮）。
- `llms.txt`（主站 + 数据子站）定位描述更新为「product information & database hub」+ EEAT 主体一行披露。
- 数据子站 `docs/index.md` 首页同定位（结构化产品数据库 + 主体披露）。
- 每 SKU 页「machine-readable record → data subsite」链接已复核（原有，保持）。

## 5. schema Organization（同口径 carfilterspro）

```json
{
  "@type": "Organization",
  "name": "Qinghe County Huiying Automotive Parts Co., Ltd.",
  "legalName": "Qinghe County Huiying Automotive Parts Co., Ltd.",
  "alternateName": ["Huiying", "Huiying Automotive Parts"],
  "foundingDate": "2017-10-10",
  "telephone": "+86 13323237275",
  "email": "martin@carfilterspro.com",
  "address": { "@type": "PostalAddress", "addressCountry": "CN", "addressRegion": "Hebei Province", "addressLocality": "Qinghe County, Xingtai City", "streetAddress": "North of Minjiang Street, west of Jiuhuashan Road" },
  "sameAs": ["https://baike.baidu.com/item/%E6%B8%85%E6%B2%B3%E5%8E%BF%E6%B1%87%E7%9B%88%E6%B1%BD%E8%BD%A6%E9%9B%B6%E9%83%A8%E4%BB%B6%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/54139720"],
  "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "name": "Martin", "email": "martin@carfilterspro.com", "telephone": "+86 13323237275" }
}
```

- **百科 sameAs**：百度百科条目（百分号编码 URL，region-blocked 403，作为权威引用）。
- schema 语法：JSON-LD 解析通过（Organization / WebSite / WebPage / Breadcrumb / Product 五类均有效）。

## 6. 构建与验证

- 主站 `astro build`：**136 页** 构建成功。
- 数据子站 `mkdocs build`：成功（2.36s）。
- 断链检查：3187 个站内链接，**0 断链**。
- `products.json` 三副本：主站 `src/data/products.json` == 数据子站 `data/products.json`（**字节一致**）；`docs/data/products.json` 为构建脚本重序列化副本（同内容）；三副本 `company` 字段 `Huiying` 各 104 处、旧名 0。**本批无产品数据改动**（仅品牌 `company` 字段；spec/OE/material/media/application/MOQ 零改动）。
- 旧名残留：见 §2（0）。

## 7. Commit / Push

- `filterhub`：commit 标记 `eeat-align`（18 文件）→ push `origin/main`。
- `data.filterhub`：commit 标记 `eeat-align`（6 文件）→ push `origin/main`。
- 同步：两仓 0/0（working tree clean after push）。
