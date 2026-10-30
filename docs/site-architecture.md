# FilterHub B2B 网站架构设计 (Site Architecture)

> 阶段：Phase 2 — 架构设计
> 主站域名（占位）：`chinafilterhub.com`
> 主站品牌（占位）：**Qinghe Yinghui Filter**（清河滤清器产业集群定位）
> 数据子站域名（占位）：`data.chinafilterhub.com`
> 日期：2026-10-29

## 1. 两站分工（主站 vs 数据子站）

| 维度 | 主站 chinafilterhub.com（Astro） | 数据子站 data.chinafilterhub.com（MkDocs） |
|---|---|---|
| 定位 | B2B 营销 + 采购决策 | 被检索/被机器读/被引用的结构化数据 |
| 内容 | 首页/产品中心/工厂质控/OEM/采购指南/公司/合规 | SKU/OE/参数/滤材对比/测试标准/数据状态 |
| 语气 | 营销文案（原创、去模板化） | 零营销、纯数据 |
| 目标读者 | 采购经理/进口商/工程买家 | 工程师/供应商检索/AIO |
| Schema | Organization/Product/Article/Breadcrumb | Dataset/DefinedTerm/TechArticle |
| 关系 | 主站商业转化 | 主站产品页链向数据站 SKU 详参（证据层） |

**分工原则**：主站「卖」，数据站「证」。产品规格、OE 交叉、测试标准等**唯一事实源**放数据子站；主站产品页做商业叙事并回链数据站。数据站权威 JSON 与主站同值（跨站唯一）。

## 2. 主站信息架构（Astro，`chinafilterhub.com`）

```
/                         首页（定位/品类入口/实力/五问）
├─ /products/             产品中心（品类 → SKU 树，13 主品类）
│  ├─ /products/air-filters/           空气滤清器（6 子类）
│  ├─ /products/cabin-filters/         空调滤清器
│  ├─ /products/oil-filters/           机油滤清器
│  ├─ /products/fuel-filters/          燃油滤清器（含尿素）
│  ├─ /products/hydraulic-filters/     液压滤清器
│  ├─ /products/transmission-filters/  变速箱滤清器
│  ├─ /products/hvac-filters/          HVAC 过滤器
│  ├─ /products/hepa-filters/          HEPA/ULPA 过滤器
│  ├─ /products/activated-carbon/      活性炭过滤器
│  ├─ /products/pocket-filters/        袋式过滤器
│  ├─ /products/filter-media/          滤材介质
│  ├─ /products/liquid-cartridges/     液体过滤滤芯
│  └─ /products/cleanroom-equipment/   洁净室设备
├─ /factory/              工厂与质控（清河产业集群 + 生产设备 + 质检）
├─ /oem/                  OEM / 私牌（OEM/ODM 能力 + 定制流程）
├─ /guides/               采购指南（支柱集群）
│  ├─ /guides/air-filter-selection/    （支柱 1：空气滤选型）
│  ├─ /guides/hepa-cleanroom-sourcing/ （支柱 2：HEPA/洁净室采购）
│  └─ /guides/oem-private-label/       （支柱 3：OEM 私牌）
├─ /company/              公司/主体（Qinghe Yinghui Filter 占位 + 产业集群）
├─ /contact/              联系
└─ 合规四页 /privacy/ /terms/ /disclaimer/ /cookies/
```

**首页五问范式**（沿用四轮审计确立的 B2B 范式，回答买家核心疑虑）：
1. 你们是谁？（主体 + 产业集群定位）
2. 你们做什么？（品类覆盖）
3. 为什么选你们？（产能/质控/定制/认证）
4. 怎么保证质量？（质检/标准/数据站证据）
5. 怎么开始？（询价/OEM/MOQ/交期）

## 3. 数据子站信息架构（MkDocs，`data.chinafilterhub.com`）

复用 `data.filterhub` 的 4 文档（schema-design / field-dictionary / data-status / design-report），并扩展产品数据库：

```
/                            首页（数据站索引 + 回链主站）
├─ /database/                数据库设计（4 文档复用）
│  ├─ schema-design.md        实体关系 + ER 图
│  ├─ field-dictionary.md     字段字典（13 表）
│  ├─ data-status.md          数据状态体系（四态）
│  └─ design-report.md        设计报告
├─ /products/                产品数据库（SKU/OE/参数）
│  ├─ index.md                SKU 全量索引
│  ├─ {category}/             品类页（SKU 规格表 + 参数定义）
│  └─ {sku}/                  SKU 单页（标识/尺寸/材质/性能/适配）
├─ /reference/               参考资料
│  ├─ filter-media.md         滤材介质对比
│  └─ test-standards.md       测试标准（EN 1822 / ISO 16890 / ISO 5011 / EN 779 / ASHRAE 52.2）
└─ /specification/
   ├─ data-status.md          数据状态标签定义
   └─ sources.md              来源诚实声明
```

## 4. URL 结构规范

| 层 | 主站 | 数据子站 |
|---|---|---|
| 首页 | `https://chinafilterhub.com/` | `https://data.chinafilterhub.com/` |
| 品类 | `/products/air-filters/` | `/products/air-filters/` |
| SKU | （主站营销页 `/products/air-filters/42n-62-15470/`） | `/products/42n-62-15470/` |
| 指南 | `/guides/air-filter-selection/` | — |
| 标准 | — | `/reference/test-standards/` |

**规则**：全部小写 + 连字符；品类用单数名词；SKU/OE 号保留原始大小写（如 `42N-62-15470` 在 URL 小写化处理为 `42n-62-15470`，页面内显示原号）。尾斜杠统一 `trailingSlash: 'always'`。

## 5. 内链矩阵（Pillar → Cluster）

主站 → 数据站跨站内链（`rel="noopener" target="_blank"`，绝对 URL 到子站域）：

| 主站页面 | 内链目标（主站） | 跨站内链（数据站） |
|---|---|---|
| 首页 | 13 品类入口、工厂、OEM、采购指南、公司 | 数据站产品索引 |
| 品类页 `/products/air-filters/` | 子类、相关品类、采购指南、工厂 | 数据站品类页 + SKU 索引 |
| SKU 详情页 | 品类页、相关 SKU、OEM 页 | 数据站 SKU 单页（唯一参据） |
| 工厂页 | OEM、质控、公司 | 数据站测试标准 |
| OEM 页 | 工厂、采购指南、公司 | — |
| 采购指南 | 品类页、OEM、数据站标准 | 数据站标准/滤材对比 |
| 公司页 | 工厂、OEM、合规 | 数据站（证据） |

**锚文本规范**：描述目标页、自然、不堆关键词；车型/型号名在无真实适配页时用**非链接纯文本**（`reference`），只放一条指向数据站参考数据的诚实外链（见 internal-linking 反模式）。

## 6. Schema 规划

| 页面类型 | Schema | 说明 |
|---|---|---|
| 首页 | `WebSite` + `Organization` + `ItemList`（品类） | Organization 用占位实体（见 eeat-plan.md） |
| 品类页 | `CollectionPage` + `ItemList` + `BreadcrumbList` | 品类即 CollectionPage |
| SKU 详情页 | `Product` + `AggregateOffer` + `BreadcrumbList` | 价格标「on quotation / 指示区间」，不可见内容不发 |
| 采购指南 | `Article` + `FAQPage` + `BreadcrumbList` | FAQ 只发在含可见 FAQ 的页 |
| 公司页 | `Organization` + `AboutPage` + `BreadcrumbList` | 主体占位，只发已确认字段 |
| 数据站 SKU | `Dataset` / `DefinedTerm` | 规格表发 `Dataset`（variableMeasured） |
| 数据站标准 | `TechArticle` | 测试标准 |
| 合规页 | `WebPage` + `BreadcrumbList` | 无实体 schema |

**统一 Organization 实体**：主站与数据站共享单一 `@id`（`https://chinafilterhub.com/#organization`），数据站 `publisher`/`isPartOf` 引用同一 @id，不各自发组织实体。

**禁止虚构**：Rating/Review/Price（真实价除外）/Author/Certification/Award/Availability/AggregateRating——B2B 询价站用真实 `AggregateOffer`（lowPrice/highPrice 指示区间 + 可见价格行），不靠假评分。

## 7. 数据子站权威数据流

1. 主站 `src/data/products.json`（canonical）→ 字节一致复制入 `data.filterhub/data/products.json`。
2. 数据站生成脚本（单脚本幂等）从 JSON 渲染 SKU 索引/品类页/SKU 单页，零手工抄写。
3. 估算值（托盘/40HQ）只在脚本内算、页面标假设，**永不进权威 JSON**。
4. 改数据 → 复制 JSON → 跑脚本 → `mkdocs build` → commit/push。

> 阶段 2 当前仅有 `sample-products.json`（14 样例），完整 SKU 数据库待阶段 3 从 5 站目录补全后灌入。数据站产品页以样例数据生成骨架，作为结构打样。
