# AI Images Report — FilterHub 主要页面配图批

Date: 2026-10-30
Model: `doubao-seedream-4-5-251128`（probe 实测可用列表确认）
Source size: 2K / 16:9 (2560×1440) → PIL 居中裁切 + LANCZOS 精确缩放 → WebP q82

## 生成清单（9 张，全部一次通过，重生成次数 = 0）

| # | 文件（public/images/ai/） | 目标尺寸 | seed | 用途 | OCR |
|---|---|---|---|---|---|
| 1 | hero-filtration.webp | 1600×900 | 7101 | 首页 hero | 0 字 |
| 2 | category-air-filters.webp | 1200×675 | 7102 | 空气滤清器（板式滤芯特写） | 0 字 |
| 3 | category-hepa-filters.webp | 1200×675 | 7103 | HEPA 高效滤（折叠滤芯微距） | 0 字 |
| 4 | category-pocket-filters.webp | 1200×675 | 7104 | 袋式滤（滤袋阵列） | 0 字 |
| 5 | category-cleanroom-equipment.webp | 1200×675 | 7105 | 洁净室 FFU（层流设备宽景，无屏幕无标牌） | 0 字 |
| 6 | category-oil-filters.webp | 1200×675 | 7106 | 机油滤（旋装滤筒静物） | 0 字 |
| 7 | category-filter-media.webp | 1200×675 | 7107 | 滤材介质（纤维微距） | 0 字 |
| 8 | factory-workshop.webp | 1600×900 | 7108 | 工厂页车间宽景（无字） | 0 字 |
| 9 | company-facility.webp | 1600×900 | 7109 | 公司页设施示意（无字） | 0 字 |

## OCR 复检

- 原始图（original/ 2K）：9/9 干净，跨 PSM（3/6/11）复检无一致有意义文字。
- 交付图（public/images/ai/ webp）：9/9 干净，0 字。
- 重生成次数：0（首轮全部归零）。

## 接线清单（src/pages）

| 页面 | 图片 | 说明 |
|---|---|---|
| index.astro | hero-filtration.webp | hero 全幅背景（叠加 navy 渐变保持文字可读），alt 自然描述 |
| products/[category].astro | 6 张品类图 | 仅 6 个主品类 slug 渲染，经 `categoryImages` 映射；loading=lazy |
| factory.astro | factory-workshop.webp | 车间宽景，置于 lede 之后 |
| company.astro | company-facility.webp | 设施示意，置于 h1 之后 |

alt 全部为自然描述，无「AI / illustrative」字样。

## 合规声明（仅两页提及）

在 `disclaimer.astro` 与 `terms.astro` 各追加一段：

> Certain product and facility images on this site are computer-generated illustrations for presentation purposes and do not depict actual production facilities.

全站复扫（dist 构建产物）确认：`AI-generated` / `illustrative` / `computer-generated` 字样**仅出现在** `dist/disclaimer/` 与 `dist/terms/` 两页，其余 134 页零命中。

## 验证

- `npm run build`：136 页成功。
- 图片实存：public/images/ai/ 共 9 张 webp，src 引用的 9 个 `/images/ai/*.webp` 全部落盘，断链 0。
- OCR 终扫：交付 webp 9/9 归零。
- AI 字样复扫：仅 disclaimer/terms。
