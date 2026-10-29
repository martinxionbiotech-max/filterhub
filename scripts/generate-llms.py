#!/usr/bin/env python3
"""Generate llms.txt for both FilterHub sites (SKU / category / guide entries)."""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRODUCTS = os.path.join(ROOT, "src", "data", "products.json")
SITE = "https://chinafilterhub.com"
DATA_SITE = "https://data.chinafilterhub.com"

GUIDES = [
    ("air-filter-selection", "Selecting engine intake air filters"),
    ("hepa-cleanroom-sourcing", "Sourcing HEPA/ULPA filters and cleanroom equipment"),
    ("filter-efficiency-grades", "Filter efficiency grades: EN 1822, ISO 16890 and MERV"),
    ("hepa-vs-ulpa", "HEPA vs ULPA"),
    ("filter-media-selection", "Filter media selection"),
    ("cleanroom-filtration-solutions", "Cleanroom filtration solutions"),
    ("oem-procurement-process", "OEM filter procurement process"),
]


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def main():
    with open(PRODUCTS, encoding="utf-8") as f:
        data = json.load(f)
    cats = data["_meta"]["categories"]
    products = data["products"]

    # --- Main site llms.txt ---
    lines = [
        "# Qinghe Air Filter (FilterHub)",
        "",
        f"> Main site: {SITE} (placeholder domain chinafilterhub.com)",
        f"> Data subsite: {DATA_SITE} (placeholder domain)",
        "> Brand/entity fields are provisional pending verification.",
        "",
        "## Categories",
        "",
    ]
    for code, meta in cats.items():
        lines.append(f"- [{meta['name']}]({SITE}/products/{meta['slug']}/): {meta['nameZh']}")
    lines += ["", "## Buyer guides", ""]
    for slug_, title in GUIDES:
        lines.append(f"- [{title}]({SITE}/guides/{slug_}/)")
    lines += ["", "## SKUs", ""]
    for p in products:
        lines.append(
            f"- [{p['sku']} — {p['name']}]({SITE}/products/{cats[p['category']]['slug']}/{slug(p['sku'])}/)"
        )
    out = os.path.join(ROOT, "public", "llms.txt")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"wrote {out} ({len(products)} SKUs)")

    # --- Data subsite llms.txt ---
    dlines = [
        "# China Filter Hub Data (FilterHub data subsite)",
        "",
        f"> Data subsite: {DATA_SITE} (placeholder domain)",
        f"> Main site: {SITE} (placeholder domain chinafilterhub.com)",
        "",
        "## Products",
        f"- [SKU index]({DATA_SITE}/products/)",
        "",
    ]
    for code, meta in cats.items():
        dlines.append(f"- [{meta['nameZh']}]({DATA_SITE}/products/{slug(code)}/)")
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
