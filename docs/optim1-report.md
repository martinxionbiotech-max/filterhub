# chinafilterhub.com 优化批 1（P0 清零）实施报告

> 批次：optim1 · 日期：2026-10-30 · 范围：`filterhub`（Astro · 136 页 · 104 SKU · 13 品类）+ 兄弟仓 `data.filterhub`（MkDocs）
> 主体：`Qinghe Air Filter` → **`Qinghe Yinghui Filter`**（全站占位替换，地名 Qinghe 保留）
> 纪律：保留 URL/架构 · 零编造适度放宽（中文网补全 + 碎片分析结论可用）· 分步 commit+push 两仓

---

## 1. 结论摘要

| P0 项 | 结果 | 关键数字 |
|---|---|---|
| ⑤a 品类页「0 SKUs」修复 | **PASS** | 13/13 品类页 SKU 表恢复 · 104 条各归其位 |
| ⑤b data 站同步 | **PASS** | `docs/data/products.json` 字节一致 · pending 322→0 |
| ① 重复回归修复 | **PASS** | 完全重复 0 · 近重复 0 · 同品类均值 ≤0.30 |
| 主体替换 | **PASS** | 残留复扫 0（除历史报告文件） |
| 验证 | **PASS** | 两站 build 通过 · 断链 0 · 同步 0/0 |

---

## 2. P0-⑤a 品类页「0 SKUs」修复

**根因**：`products.json` 的 `category` 字段在 `b409f2e` 改为 kebab slug（`air-filters`），但 `src/data/products.ts` 的 `codeFromSlug()` 仍把 kebab → snake（`air_filter`）后交给 `productsByCategory()` 过滤，导致 13 个品类页全部渲染 0 SKU。

**修复**（`optim1-fix-category-mapping`）：
- `codeFromSlug(slug)` 改为恒等映射（`category` 字段本身就是 kebab slug）。
- `categoryName()` / `categorySlug()` 改为按 kebab slug 解析，并回退 snake_code 键查找（兼容 `_meta.categories` 旧键）。
- `coveredCategories` 改为按 `meta.slug` 统计（原先按 snake 键统计恒为 0）。

**验收**：
- 13 品类页 SKU 表渲染数：air 12 · cabin 8 · oil 7 · fuel 8 · hydraulic 7 · transmission 8 · hvac 14 · hepa 15 · activated-carbon 6 · pocket 5 · filter-media 6 · liquid-cartridges 2 · cleanroom-equipment 6（合计 104）。
- 全站计数一致：首页 Total SKUs = 104 · 产品中心 104 SKUs · 品类页卡片合计 104 · Categories covered = 13/13。

---

## 3. P0-⑤b data 站同步

**问题**：`data.filterhub/docs/data/products.json`（served copy）仍为 snake_case 旧版，与主库 kebab 版分叉；`docs/products/*.md` 共 322 处 `pending` 残留（`build-product-pages.py` 把 `None`/`""`/`[]` 渲染为 `` `pending` ``）。

**修复**（`optim1-entity-kebab` + `optim1-regenerate-products`）：
- `build-product-pages.py` 的 `CATEGORY_NAMES` 改为 kebab slug 键（13 品类全对上）。
- `cell()` 及所有空槽位渲染改为 `not published`（与主站「no fields left pending」口径一致）。
- 重跑 `build-product-pages.py` 生成 104 SKU 页 + 13 kebab 品类页 + `docs/data/products.json`。

**验收**：
- `docs/data/products.json` ≡ `data/products.json` ≡ `filterhub/src/data/products.json`（三副本字节一致，`cmp` 通过）。
- data 站 `pending` 残留 0（322→0）。
- `mkdocs build` 通过（Material 主题，CJK 搜索资源已按 hook 移除）。

---

## 4. P0-① 重复回归修复

**问题**：`9864da2 desource-enrich` 用统一句式重写 104 SKU 描述 → 365 对近重复（≥0.7）、1 组完全重复、同品类均值最高 0.946（oil）。

**修复**（`optim1-dedup-descriptions` + `optim1-dedup-sync`）：
- 恢复 `cf2669d` 已去重、字段锚定的 104 篇描述（60-150 词、含主观采购句）。
- 对其中 71 篇「publishes no X / pending」旧口径，按放宽补全后的 reference 字段做**短句诚实化替换**（参数为 reference 级、非源确认），保留逐 SKU 唯一性。
- 104 篇全部 60-150 词（脚本硬校验通过）。

**验收**（`SequenceMatcher` 同品类两两比对）：

| 品类 | 均值 | 品类 | 均值 |
|---|---|---|---|
| air-filters | 0.179 | activated-carbon | 0.166 |
| cabin-filters | 0.203 | filter-media | 0.179 |
| oil-filters | 0.048 | hepa-filters | 0.148 |
| fuel-filters | 0.150 | pocket-filters | 0.253 |
| hydraulic-filters | 0.266 | hvac-filters | 0.130 |
| transmission-filters | 0.086 | cleanroom-equipment | 0.124 |
| | | liquid-cartridges | 0.206 |

- 完全重复：**0** · 近重复（≥0.7）：**0** · 同品类均值：**全部 ≤0.30**。
- 两仓 `data/products.json` 字节一致。

---

## 5. 主体替换 Qinghe Air Filter → Qinghe Yinghui Filter

- 主仓：`src/data/site.ts`（brand）、`src/pages/*.astro`（首页/公司/合规/联系/OEM 描述）、`public/llms.txt`、`public/images/og-default.svg`、`package.json`、`scripts/generate-llms.py`、`docs/*.md`（EEAT/架构/阶段报告/内容草稿）。
- 兄弟仓：`mkdocs.yml`（site_description）、`docs/index.md`、`scripts/build-product-pages.py`。
- 替换纪律：仅替换品牌标识 `Qinghe Air Filter` → `Qinghe Yinghui Filter` 及 `Qinghe-based` → `Qinghe Yinghui-based`；地名 `Qinghe`（河北清河县）与「Qinghe filter industry cluster」保留不动。
- **残留复扫**：`grep "Qinghe Air Filter"` 两仓归零（排除 `.git/`、`reports/` 历史报告文件、构建产物）。

---

## 6. 验证总表

| 维度 | 结果 |
|---|---|
| 两站 build | `npm run build`（136 页）✓ · `mkdocs build` ✓ |
| 品类页 SKU 表 | 13/13 渲染 · 计数与首页/产品中心一致（104） |
| 计数一致 | 首页=产品中心=品类页卡片=104 · 品类覆盖 13/13 |
| 相似度 | 完全重复 0 · 近重复 0 · 同品类均值 ≤0.30 |
| data 站 pending | 322 → 0 |
| 字节一致 | 三副本 `cmp` 通过（diff 0） |
| 主体替换 | 残留 0（除历史报告文件） |
| 断链 | 0（`dist/` 站内 href 全命中） |
| git | optim1-* 分步 commit + push 两仓 · 同步 0/0 |

---

## 7. Commit 记录

**filterhub**（`5893030..fd0e63d`）：
- `optim1-fix-category-mapping` — 修 `codeFromSlug`/`categoryName` 映射
- `optim1-dedup-descriptions` — 104 SKU 描述去同质化
- `optim1-entity` — 主体替换

**data.filterhub**（`680acdc..62936dd`）：
- `optim1-dedup-sync` — 104 SKU 描述字节同步
- `optim1-entity-kebab` — 主体替换 + kebab 品类名 + not published 渲染
- `optim1-regenerate-products` — 重生成 104 SKU 页 + 13 品类页

---

## 8. 遗留（本批 P0 之外，供后续批次）

- 45 SKU 缺 `subcategory`（P1，批 2）。
- 品类页 5 页 <400 词（cabin/transmission/media/hydraulic/carbon，P1，批 1 深化）。
- 内链矩阵缺口（指南→品类/SKU 断链、孤立节点，P1，批 3）。
- FAQ schema / H3 层级 / SKU 页图与 alt（P1，批 4）。
- `products.json` `_meta.categories[].nameZh` 中文补全（已具备中文映射，渲染层待接入，P1）。
