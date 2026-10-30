#!/usr/bin/env python3
"""Generate llms.txt for both FilterHub sites.

Main site: platform positioning -> five-pillar architecture -> categories (by
pillar) -> buyer guides (by pillar) -> commercial/company pages -> tools ->
important SKUs -> full SKU index.

Data subsite: product categories (kebab-slug URLs) -> SKUs -> reference pages.

Keep category nameZh, guide five-pillar mapping and top-SKU list in sync with
src/data/categories.ts, src/data/guides.ts and src/data/sku-depth.ts. Regenerate
after any change to those sources.

URL discipline: the main site resolves SKU pages by `url_slug` (the OE number /
manufacturer code), NOT by the internal `CFH-*` SKU code. The data subsite
resolves its SKU pages by the `CFH-*` SKU code. Both are derived here from the
same products.json so they cannot drift.
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRODUCTS = os.path.join(ROOT, "src", "data", "products.json")
SITE = "https://chinafilterhub.com"
DATA_SITE = "https://data.chinafilterhub.com"


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


# --- Five-pillar architecture (mirror of src/data/pillars.ts) ----------------
PILLARS = [
    ("p1", "Automotive Filters", "automotive-filters"),
    ("p2", "Filter Technology", "filter-technology"),
    ("p3", "Industrial & HVAC Filtration", "industrial-hvac"),
    ("p4", "OEM & Wholesale Sourcing", "oem-wholesale"),
    ("p5", "Qinghe Huiying Manufacturing & Commercial Solutions", "qinghe-huiying"),
]

# category slug -> pillar key (mirror of src/data/pillars.ts `categories`)
CATEGORY_PILLAR = {
    "air-filters": "p1",
    "cabin-filters": "p1",
    "oil-filters": "p1",
    "fuel-filters": "p1",
    "hydraulic-filters": "p1",
    "transmission-filters": "p1",
    "filter-media": "p2",
    "hvac-filters": "p3",
    "hepa-filters": "p3",
    "activated-carbon": "p3",
    "pocket-filters": "p3",
    "liquid-cartridges": "p3",
    "cleanroom-equipment": "p3",
}

# guide slug -> (title, pillar key) — mirror of src/data/guides.ts + pillars.ts
GUIDES = [
    # P1 Automotive Filters
    ("air-filter-selection", "Engine air filters: types, materials and selection", "p1"),
    ("cabin-vs-engine-air-filter", "Cabin air filter vs engine air filter: two different jobs", "p1"),
    ("oil-filter-types", "Oil filter types: spin-on, cartridge and element assembly", "p1"),
    # P2 Filter Technology
    ("filter-efficiency-grades", "Filter efficiency grades: EN 1822, ISO 16890 and MERV compared", "p2"),
    ("filter-media-selection", "Filter media types: needle-punched, synthetic, micro-glass and carbon", "p2"),
    ("efficiency-vs-pressure-drop", "Filtration efficiency vs pressure drop: why higher is not automatically better", "p2"),
    # P3 Industrial & HVAC
    ("hepa-cleanroom-sourcing", "Sourcing HEPA/ULPA filters and cleanroom equipment: what to verify", "p3"),
    ("hepa-vs-ulpa", "HEPA vs ULPA: when the extra penetration class is worth it", "p3"),
    ("cleanroom-filtration-solutions", "Cleanroom filtration: FFU, laminar flow and contamination control", "p3"),
    # P4 OEM & Wholesale
    ("oem-procurement-process", "Automotive filter OEM manufacturing guide: from RFQ to first article", "p4"),
    ("filter-moq-lead-time", "Automotive filter MOQ, lead time and pricing: what drives them", "p4"),
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

# top SKU url_slugs (mirror of src/data/sku-depth.ts keys, lowercased)
TOP_SKUS = [
    "42n-62-15470", "1542743", "p822768",
    "72880-fg000", "500-0957", "90915-yzza3",
    "15208-ad200", "03c115577a", "1s7j-6744-ba",
    "23401-1441", "fs19920",
    "sh66279", "p177047",
    "35330-60070", "25420-pr0-030",
    "airy-gel-hepa", "eaway-hepa-61061070",
    "klc-ht-separator", "yt-metal-cart", "eaway-ffu-4848",
]

# commercial / company / static pages (main site)
STATIC_PAGES = [
    ("Product Centre", "/products/"),
    ("Buyer Guides", "/guides/"),
    ("Content Pillars", "/pillars/"),
    ("OEM & Private Label", "/oem/"),
    ("Private-label supply", "/private-label/"),
    ("Wholesale & distributor cooperation", "/wholesale/"),
    ("Request a Quotation (RFQ)", "/rfq/"),
    ("Company & legal entity", "/company/"),
    ("Factory & quality control", "/factory/"),
    ("Contact", "/contact/"),
]

# tools (Phase 9 — pure static, data-backed)
TOOLS = [
    ("OE cross-reference lookup", "/tools/oe-lookup/"),
]


def main():
    with open(PRODUCTS, encoding="utf-8") as f:
        data = json.load(f)
    cats = data["_meta"]["categories"]
    products = data["products"]

    cat_by_slug = {meta["slug"]: meta for meta in cats.values()}
    products_by_slug = {slug(p.get("url_slug") or p["sku"]): p for p in products}

    # --- Main site llms.txt ---
    lines = [
        "# China Filter Hub (Huiying)",
        "",
        f"> Main site: {SITE} (placeholder domain chinafilterhub.com)",
        f"> Data subsite: {DATA_SITE} (placeholder domain)",
        "> Filtration knowledge & sourcing platform — product discovery, technical knowledge and",
        "> manufacturing supply. Product information & database hub for automotive, HVAC and cleanroom filters.",
        "> Operating legal entity: Qinghe County Huiying Automotive Parts Co., Ltd. (credit code 91130534MA0958NT84).",
        "",
        "## Pillars",
        "",
    ]
    for key, name, slug_ in PILLARS:
        lines.append(f"- {name}: {SITE}/pillars/{slug_}/")
    lines += ["", "## Categories (by pillar)", ""]
    for key, name, slug_ in PILLARS:
        pillar_cats = [c for c in cats.values() if CATEGORY_PILLAR.get(c["slug"]) == key]
        if not pillar_cats:
            continue
        lines.append(f"### {name}")
        for meta in pillar_cats:
            zh = CATEGORY_ZH.get(meta["slug"], meta["name"])
            lines.append(f"- [{meta['name']}]({SITE}/products/{meta['slug']}/): {zh}")
        lines.append("")

    lines += ["## Buyer guides (by pillar)", ""]
    for key, name, slug_ in PILLARS:
        group = [g for g in GUIDES if g[2] == key]
        if not group:
            continue
        lines.append(f"### {name}")
        for slug_, title, _ in group:
            lines.append(f"- [{title}]({SITE}/guides/{slug_}/)")
        lines.append("")

    lines += ["## Commercial & company pages", ""]
    for label, href in STATIC_PAGES:
        lines.append(f"- [{label}]({SITE}{href})")
    lines += ["", "## Tools", ""]
    for label, href in TOOLS:
        lines.append(f"- [{label}]({SITE}{href})")

    lines += ["", "## Important SKUs (top models)", ""]
    for key in TOP_SKUS:
        p = products_by_slug.get(key)
        if p is None:
            continue
        lines.append(
            f"- [{p['sku']} — {p['name']}]({SITE}/products/{p['category']}/{slug(p.get('url_slug') or p['sku'])}/)"
        )

    lines += ["", "## All SKUs", ""]
    for p in products:
        lines.append(
            f"- [{p['sku']} — {p['name']}]({SITE}/products/{p['category']}/{slug(p.get('url_slug') or p['sku'])}/)"
        )
    out = os.path.join(ROOT, "public", "llms.txt")
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
    with open(dout, "w", encoding="utf-8") as f:
        f.write("\n".join(dlines) + "\n")
    print(f"wrote {dout} ({len(products)} SKUs)")


if __name__ == "__main__":
    main()
