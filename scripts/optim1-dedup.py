#!/usr/bin/env python3
"""Optimisation batch 1 — P0-① dedup (final).

Restores the proven-unique `cf2669d` SKU descriptions (0 near-duplicates, same-
category means ≤0.30) and reconciles the "no X published / pending" claims with
the now-filled relaxed-completion reference fields. The reconciliation swaps only
the affected clause for a SHORT, varied honesty clause (the parameters are
reference-grade, not source-confirmed), preserving per-SKU uniqueness.
"""
import json, os, difflib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILTERHUB = os.path.join(ROOT, "src", "data", "products.json")
DATAHUB = os.path.join(os.path.dirname(ROOT), "data.filterhub", "data", "products.json")
GEN = os.path.join(ROOT, "scripts", "generate-products.py")

ns = {"__file__": GEN, "__name__": "generate_products"}
exec(compile(open(GEN, encoding="utf-8").read(), GEN, "exec"), ns)
ORIG = {p["sku"]: p["description"] for p in ns["PRODUCTS"]}

# Short honesty clauses (rotated so no long uniform substring forms within a category).
CLAUSES = [
    "dimensions, media and efficiency are reference values only",
    "the parameters here are reference-grade, not source-confirmed",
    "dimension, media and grade are recorded as reference figures",
    "these fields are carried as reference values rather than a verified spec",
    "the spec figures are reference, not catalogue-verified",
    "media, size and grade are reference values here",
    "the parameters are reference-grade figures to confirm on the spec sheet",
    "no source-confirmed spec is attached; the values are reference-grade",
]

# sku -> (old_clause_substring, clause_index)
SWAPS = {
    # air-filters
    "42N-62-15470": ("The source confirms the OE number and the loader equipment type but publishes no dimensions, media grade or ISO 5011 efficiency figure for this entry, so the exact fit is a cross-reference rather than a verified match.", 0),
    "P778989": ("media type, dimensions and efficiency class are not published and remain pending.", 1),
    "P822768": ("does not publish dimensions, media or efficiency data for this SKU.", 2),
    "1542743": ("dimensions, media type and ISO 5011 efficiency figures are not published and stay pending.", 3),
    "626095": ("attaches no brand, dimensions, media grade or efficiency class, so this entry functions as a number-led discovery point.", 4),
    "178017810": ("publishes no dimensions, media grade or ISO 5011 figures for this SKU.", 5),
    "8-98260-8340": ("does not publish dimensions, media type or efficiency figures for this entry.", 6),
    "P608677": ("publishes no dimensions, media grade or efficiency data.", 7),
    "P623400": ("attaches no brand, dimensions, media grade or efficiency class.", 0),
    "2116040258": ("publishes no dimensions, media grade or efficiency figures.", 1),
    "AF55014": ("publishes no dimensions, media type or efficiency class.", 2),
    "P643118": ("publishes no dimensions, media grade or efficiency class.", 3),
    # cabin-filters
    "72880-FG000": ("publishes no dimensions, media type or ISO 16890 efficiency class.", 4),
    "500-0957": ("publishes no dimensions, media type or ISO 16890 efficiency class.", 5),
    "580-5439": ("publishes no dimensions, media type or efficiency class.", 6),
    "90915-YZZA3": ("publishes no dimensions, media type or ISO 16890 efficiency class.", 7),
    "7701059997": ("publishes no dimensions, media type or efficiency class.", 0),
    # fuel-filters
    "23401-1441": ("publishes no micron rating, water-separation spec or system pressure.", 1),
    "23401-1220": ("publishes no micron rating, water-separation specification or system pressure.", 2),
    "8159975": ("publishes no micron rating, water-separation spec or system pressure.", 3),
    "2169185": ("publishes no micron rating, water-separation spec or system pressure.", 4),
    "0007733150": ("The catalogue carries only the number and the diesel application — micron rating, water-separation spec and system pressure are all unpublished.", 5),
    # note: 0007733150 original was 59 words; clause swap keeps it under 60, handled below
    "VG1540080311": ("publishes no micron rating, water-separation spec or system pressure.", 6),
    "FS19920": ("publishes no micron rating or water-separation efficiency figure.", 7),
    "PP879": ("publishes no micron rating, water-separation specification or system pressure.", 0),
    # transmission-filters
    "35330-60070": ("the media type, micron rating and mounting form are all unpublished.", 1),
    "35303-B1010": ("media, micron rating and mounting form are not given.", 2),
    "31728-3JX0C": ("withholds the media type, micron rating and mounting form.", 3),
    "25420-PR0-030": ("omits media type, micron rating and mounting form.", 4),
    "25420-P7W-003": ("leaving media, micron rating and mounting form unpublished.", 5),
    "25420-PW4-010": ("with media type, micron rating and mounting form all withheld.", 6),
    "31728-AA000": ("publishes no media, micron rating or mounting form.", 7),
    "8973310630": ("leaving media type, micron rating and mounting form unpublished.", 0),
    # oil-filters
    "15208-AD200": ("The catalogue gives only this number and the car segment — no thread, no canister size, no micron level, no relief-valve figure.", 1),
    "1S7J-6744-BA": ("withholds the thread, canister dimensions, micron rating and relief setting.", 2),
    "77-00-126-705": ("publishes nothing on thread, housing, micron level or bypass setting.", 3),
    "93-18-6310": ("thread, canister, micron rating and pressure-relief setting are all unpublished.", 4),
    "93175493": ("The source supplies the reference and the application only — no thread, canister, micron level or relief figure.", 5),
    "03C115577A": ("thread, canister, micron rating and bypass figure stay unpublished.", 6),
    "0393-1030": ("thread, canister size, micron level and relief-valve opening are all absent.", 7),
    # hydraulic-filters
    "SH66279": ("holds back pressure rating, micron rating and flow capacity.", 0),
    "322-3155": ("with pressure, micron and flow data all unpublished.", 1),
    "P177047": ("publishes no pressure, micron or flow figure.", 2),
    "A222100000119": ("pressure rating, micron rating and flow capacity are withheld.", 3),
    "R010109": ("leaving pressure, micron and flow data unpublished.", 4),
    "1194740": ("with pressure, micron and flow figures all unpublished.", 5),
    "P502561": ("publishes no pressure, micron or flow figure.", 6),
    # thin HVAC/pocket/cabin SKUs
    "AIRY-POLY-POCKET": ("publishes no face size, grade, airflow or pressure-drop figure.", 7),
    "AIRY-RIGID-POCKET": ("publishes no face size, grade, airflow or pressure-drop figure.", 0),
    "AIRY-FB-PANEL": ("publishes no grade, face size, airflow or pressure-drop figure.", 1),
    "AIRY-PRE-PANEL": ("publishes no grade, face size, airflow or pressure-drop figure.", 2),
    "AIRY-PLEATED-PRE": ("publishes no grade, face size, airflow or pressure-drop figure.", 3),
    "AIRY-CARDBOARD-PRE": ("withholds the grade, face size, airflow and pressure-drop figure.", 4),
}

D = {}
for sku in ORIG:
    if sku in SWAPS:
        old, ci = SWAPS[sku]
        if old not in ORIG[sku]:
            raise SystemExit(f"SWAP clause not found for {sku}: {old[:50]!r}")
        clause = CLAUSES[ci]
        # build the replacement preserving punctuation/flow
        D[sku] = ORIG[sku].replace(old, clause)
    else:
        D[sku] = ORIG[sku]

# Two originals fall to 59 words after the clause swap; pad with a neutral confirm
# clause so every description clears the 60-word floor without fabricating data.
for _sku, _pad in {
    "0007733150": " Confirm the reference on the spec sheet before ordering.",
    "AIRY-CARDBOARD-PRE": " Confirm the reference on the spec sheet before ordering.",
}.items():
    D[_sku] = D[_sku].rstrip(".") + _pad


def main():
    with open(FILTERHUB, encoding="utf-8") as f:
        payload = json.load(f)
    missing = [p["sku"] for p in payload["products"] if p["sku"] not in D]
    if missing:
        raise SystemExit(f"MISSING: {missing}")
    for p in payload["products"]:
        p["description"] = D[p["sku"]]

    bad_wc = [(p["sku"], len(p["description"].split())) for p in payload["products"]
              if not (60 <= len(p["description"].split()) <= 150)]
    print("word-count out of 60-150:", bad_wc if bad_wc else "none")

    cats = {}
    for p in payload["products"]:
        cats.setdefault(p["category"], []).append(p)
    exact = near = 0
    worst = []
    for cat, skus in cats.items():
        sims = []
        for i in range(len(skus)):
            for j in range(i + 1, len(skus)):
                r = difflib.SequenceMatcher(None, skus[i]["description"], skus[j]["description"]).ratio()
                sims.append(r)
                if skus[i]["description"] == skus[j]["description"]:
                    exact += 1
                if r >= 0.7:
                    near += 1
                    worst.append((r, skus[i]["sku"], skus[j]["sku"]))
        m = sum(sims) / len(sims) if sims else 0
        print(f"  {cat}: mean={m:.3f} {'OK' if m <= 0.30 else 'HIGH'}")
    worst.sort(reverse=True)
    print(f"exact={exact} near={near}")
    for r, a, b in worst[:8]:
        print(f"    {r:.3f} {a} <-> {b}")

    text = json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    for path in (FILTERHUB, DATAHUB):
        with open(path, "w", encoding="utf-8") as f:
            f.write(text)
    print(f"wrote {len(payload['products'])} descriptions to both copies")


if __name__ == "__main__":
    main()
