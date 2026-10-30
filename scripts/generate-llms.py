#!/usr/bin/env python3
"""Generate llms.txt for both FilterHub sites.

Main site: categories (tree) -> buyer guides grouped by pillar -> important SKUs
-> full SKU index. Data subsite: product categories (kebab-slug URLs) -> SKUs ->
reference pages.

The category nameZh and guide pillar mappings are kept here in sync with
src/data/categories.ts and src/data/guides.ts; important SKUs mirror
src/data/sku-depth.ts. Regenerate after any change to those sources.
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRODUCTS = os.path.join(ROOT, "src", "data", "products.json")
SITE = "https://chinafilterhub.com"
DATA_SITE = "https://data.chinafilterhub.com"

# guide slug -> (title, pillar) — mirror of src/data/guides.ts
GUIDES = [
    ("air-filter-selection", "Selecting engine intake air filters", "Selection"),
    ("hepa-cleanroom-sourcing", "Sourcing HEPA/ULPA filters and cleanroom equipment", "Selection"),
    ("filter-efficiency-grades", "Filter efficiency grades: EN 1822, ISO 16890 and MERV", "Standards"),
    ("hepa-vs-ulpa", "HEPA vs ULPA", "Standards"),
    ("filter-media-selection", "Filter media selection", "Standards"),
    ("cleanroom-filtration-solutions", "Cleanroom filtration solutions", "Cleanroom"),
    ("oem-procurement-process", "OEM filter procurement process", "OEM"),
]

# category slug -> Chinese name (mirror of src/data/categories.ts nameZh)
CATEGORY_ZH = {
    "air-filters": "空气滤清器",
    "cabin-filters": "空调滤清器",
    "oil-filters": "机油滤清器",
    "fuel-filters": "燃油滤清器",
    "hydraulic-filters": "液压滤清器",
    "transmission-filters": "变速箱滤清器",
    "hvac-filters": "HVAC 过滤器",
    "hepa-filters": "HEPA/ULPA 过滤器",
    "activated-carbon": "活性炭过滤器",
    "pocket-filters": "袋式过滤器",
    "filter-media": "滤材介质",
    "liquid-cartridges": "液体过滤滤芯",
    "cleanroom-equipment": "洁净室设备",
}

# top SKU codes (mirror of src/data/sku-depth.ts keys)
TOP_SKUS = [
    "42N-62-15470", "1542743", "P822768",
    "72880-FG000", "500-0957", "90915-YZZA3",
    "15208-AD200", "03C115577A", "1S7J-6744-BA",
    "23401-1441", "FS19920",
    "SH66279", "P177047",
    "35330-60070", "25420-PR0-030",
    "AIRY-GEL-HEPA", "EAWAY-HEPA-61061070",
    "KLC-HT-SEPARATOR", "YT-METAL-CART", "EAWAY-FFU-4848",
]

PILLAR_ORDER = ["Selection", "Standards", "Cleanroom", "OEM"]


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def main():
    with open(PRODUCTS, encoding="utf-8") as f:
        data = json.load(f)
    cats = data["_meta"]["categories"]
    products = data["products"]

    cat_by_slug = {meta["slug"]: meta for meta in cats.values()}

    # --- Main site llms.txt ---
    lines = [
        "# China Filter Hub (Huiying)",
        "",
        f"> Main site: {SITE} (placeholder domain chinafilterhub.com)",
        f"> Data subsite: {DATA_SITE} (placeholder domain)",
        "> Product information & database hub for automotive, HVAC and cleanroom filters.",
        "> Operating legal entity: Qinghe County Huiying Automotive Parts Co., Ltd. (credit code 91130534MA0958NT84).",
        "",
        "## Categories",
        "",
    ]
    for meta in cats.values():
        zh = CATEGORY_ZH.get(meta["slug"], meta["name"])
        lines.append(f"- [{meta['name']}]({SITE}/products/{meta['slug']}/): {zh}")

    lines += ["", "## Buyer guides (by pillar)", ""]
    for pillar in PILLAR_ORDER:
        group = [g for g in GUIDES if g[2] == pillar]
        lines.append(f"### {pillar}")
        for slug_, title, _ in group:
            lines.append(f"- [{title}]({SITE}/guides/{slug_}/)")
        lines.append("")

    lines += ["", "## Important SKUs (top models)", ""]
    for sku in TOP_SKUS:
        p = next((x for x in products if x["sku"] == sku), None)
        if p is None:
            continue
        cat_slug = p["category"]
        lines.append(
            f"- [{p['sku']} — {p['name']}]({SITE}/products/{cat_slug}/{slug(p['sku'])}/)"
        )

    lines += ["", "## All SKUs", ""]
    for p in products:
        lines.append(
            f"- [{p['sku']} — {p['name']}]({SITE}/products/{p['category']}/{slug(p['sku'])}/)"
        )
    out = os.path.join(ROOT, "public", "llms.txt")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"wrote {out} ({len(products)} SKUs, {len(TOP_SKUS)} top)")

    # --- Data subsite llms.txt ---
    dlines = [
        "# China Filter Hub Data (FilterHub data subsite)",
        "",
        f"> Data subsite: {DATA_SITE} (placeholder domain)",
        f"> Main site: {SITE} (placeholder domain chinafilterhub.com)",
        "> Operating legal entity: Qinghe County Huiying Automotive Parts Co., Ltd. (credit code 91130534MA0958NT84).",
        "",
        "## Products",
        f"- [SKU index]({DATA_SITE}/products/)",
        "",
    ]
    for meta in cats.values():
        zh = CATEGORY_ZH.get(meta["slug"], meta["name"])
        dlines.append(f"- [{meta['name']} ({zh})]({DATA_SITE}/products/{meta['slug']}/)")
    dlines += ["", "## SKUs", ""]
    for p in products:
        dlines.append(f"- [{p['sku']}]({DATA_SITE}/products/{slug(p['sku'])}/)")
    dlines += [
        "",
        "## Reference",
        f"- [Filter media]({DATA_SITE}/reference/filter-media/)",
        f"- [Test standards]({DATA_SITE}/reference/test-standards/)",
        f"- [Field dictionary]({DATA_SITE}/field-dictionary/)",
        f"- [Data status system]({DATA_SITE}/data-status/)",
        f"- [Schema design]({DATA_SITE}/schema-design/)",
        f"- [Machine-readable products.json]({DATA_SITE}/data/products.json)",
    ]
    dout = os.path.join(os.path.dirname(ROOT), "data.filterhub", "docs", "llms.txt")
    os.makedirs(os.path.dirname(dout), exist_ok=True)
    with open(dout, "w", encoding="utf-8") as f:
        f.write("\n".join(dlines) + "\n")
    print(f"wrote {dout} ({len(products)} SKUs)")


if __name__ == "__main__":
    main()
