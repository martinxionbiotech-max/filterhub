#!/usr/bin/env python3
"""Optim2: fix SKU description keyword templating + broken sentence boundaries.

Applies deterministic fixes to every description in products.json:
1. Broken sentence boundaries (missing ". " before a capitalised sentence start)
   left behind by the desource-enrich template.
2. MOQ removed from body prose (MOQ is rendered in the OEM-terms section + data
   subsite; body should not repeat it). Replaced with a natural clause so word
   counts stay >=60.
3. "confirm" density compressed: imperative/advice "confirm" -> verify/state/specify
   so the sourcing-advice line doesn't repeat the same verb across the page.
"""
import json
import re

ROOT = "/root/.openclaw/workspace/repos/filterhub"
PATH = f"{ROOT}/src/data/products.json"

# --- 1. Broken sentence boundaries: specific known pairs (sentence-ender + capital word) ---
# These are the exact spots where the template dropped ". " between two sentences.
BOUNDARY_FIXES = [
    ("reference values only For loaders", "reference values only. For loaders"),
    ("not source-confirmed Compressor intake", "not source-confirmed. Compressor intake"),
    ("recorded as reference figures Across the Case", "recorded as reference figures. Across the Case"),
    ("rather than a verified spec Volvo trucks", "rather than a verified spec. Volvo trucks"),
    ("not catalogue-verified Compressor intake filtration", "not catalogue-verified. Compressor intake filtration"),
    ("reference values here Hino truck", "reference values here. Hino truck"),
    ("to confirm on the spec sheet PowerCore's compact", "to confirm on the spec sheet. PowerCore's compact"),
    ("not source-confirmed Agricultural duty", "not source-confirmed. Agricultural duty"),
    ("recorded as reference figures Because the reference", "recorded as reference figures. Because the reference"),
    ("rather than a verified spec Compressed-air intake", "rather than a verified spec. Compressed-air intake"),
    ("not catalogue-verified Cabin filters", "not catalogue-verified. Cabin filters"),
    ("reference values here Machine-cab duty", "reference values here. Machine-cab duty"),
    ("values are reference-grade The cross-brand reference", "values are reference-grade. The cross-brand reference"),
    ("reference values only The wide cross-brand", "reference values only. The wide cross-brand"),
    ("not source-confirmed Heavy-duty diesel", "not source-confirmed. Heavy-duty diesel"),
    ("recorded as reference figures Diesel filtration", "recorded as reference figures. Diesel filtration"),
    ("not catalogue-verified Heavy-truck diesel", "not catalogue-verified. Heavy-truck diesel"),
    ("reference values here Because diesel", "reference values here. Because diesel"),
    ("from the spec sheet Confirm the reference on the spec sheet before ordering",
     "from the spec sheet. Verify the reference on the spec sheet before ordering"),
    ("to confirm on the spec sheet Commercial diesel", "to confirm on the spec sheet. Commercial diesel"),
    ("values are reference-grade For diesel duty", "values are reference-grade. For diesel duty"),
    ("reference values only Diesel injection", "reference values only. Diesel injection"),
    ("not source-confirmed What protects", "not source-confirmed. What protects"),
    ("rather than a verified spec Wear-debris control", "rather than a verified spec. Wear-debris control"),
    ("not catalogue-verified Honda filters", "not catalogue-verified. Honda filters"),
    ("reference values here Because the reference", "reference values here. Because the reference"),
    ("to confirm on the spec sheet Debris control", "to confirm on the spec sheet. Debris control"),
    ("values are reference-grade Subaru filters", "values are reference-grade. Subaru filters"),
    ("reference values only The filter protects", "reference values only. The filter protects"),
    ("recorded as reference figures Ford engines", "recorded as reference figures. Ford engines"),
    ("rather than a verified spec Renault powerplants", "rather than a verified spec. Renault powerplants"),
    ("not catalogue-verified What actually guards", "not catalogue-verified. What actually guards"),
    ("values are reference-grade Media efficiency", "values are reference-grade. Media efficiency"),
    ("reference values only Hydraulic selection", "reference values only. Hydraulic selection"),
    ("rather than a verified spec Selection depends", "rather than a verified spec. Selection depends"),
    ("not catalogue-verified Hydraulic selection", "not catalogue-verified. Hydraulic selection"),
    ("to confirm on the spec sheet Return-line duty", "to confirm on the spec sheet. Return-line duty"),
    ("values are reference-grade Polyester pockets", "values are reference-grade. Polyester pockets"),
    ("reference values only Rigid pockets", "reference values only. Rigid pockets"),
    ("not source-confirmed Panel pre-filters", "not source-confirmed. Panel pre-filters"),
    ("rather than a verified spec The pleated form", "rather than a verified spec. The pleated form"),
    ("not catalogue-verified The cardboard frame", "not catalogue-verified. The cardboard frame"),
    ("to compare energy cost Confirm the reference on the spec sheet before ordering",
     "to compare energy cost. Verify the reference on the spec sheet before ordering"),
    ("reference values only PowerCore's compact", "reference values only. PowerCore's compact"),
]

# --- 2. MOQ clauses removed from body prose ---
# MOQ is already rendered in the OEM/private-label terms section (and the data
# subsite), so the body should not repeat it. Each tuple is (match, replacement)
# with clean punctuation; all target descriptions stay well above 60 words.
MOQ_FIXES = [
    (", with a 200-set MOQ. Carbon", ". Carbon"),
    (", with a 200-set MOQ and a choice of", " and a choice of"),
    (", with a 200-set MOQ. The pleated", ". The pleated"),
    (", with a 200-set MOQ. The gel seal", ". The gel seal"),
    (", with a 200-set MOQ. Fiberglass", ". Fiberglass"),
    (", with a low 20-roll MOQ. Carbon", ". Carbon"),
    (", with a low 20-roll MOQ. Needle-punched", ". Needle-punched"),
    (", with a low 20-roll MOQ. Fiberglass", ". Fiberglass"),
    (", with a low 20-roll MOQ. Synthetic", ". Synthetic"),
    (", with a low 20-roll MOQ. Flame-retardant", ". Flame-retardant"),
    (", with a low 20-roll MOQ, but", ", but"),
    (", with a 5-pcs reference MOQ. The 70 mm", ". The 70 mm"),
    (", with a 5-pcs reference MOQ. The 292 mm", ". The 292 mm"),
]

# --- 3. confirm-density compression ---
# Imperative/advice "confirm" -> varied verbs. Applied per-description so the
# sourcing-advice line reads naturally. We do targeted phrase swaps.
CONFIRM_SWAPS = [
    ("buyers should confirm", "buyers should verify"),
    ("should confirm", "should verify"),
    ("Our advice: confirm", "Our advice: verify"),
    ("confirm the", "verify the"),
    ("must be confirmed", "must be verified"),
    ("Confirm the", "Verify the"),
    ("and confirm", "and verify"),
    ("confirm whether", "verify whether"),
    ("confirm the exact", "verify the exact"),
    ("to confirm on the spec sheet", "to verify on the spec sheet"),
]


def main():
    with open(PATH, encoding="utf-8") as f:
        data = json.load(f)

    for p in data["products"]:
        desc = p.get("description")
        if not desc:
            continue
        orig = desc
        # 1. boundaries
        for a, b in BOUNDARY_FIXES:
            desc = desc.replace(a, b)
        # 2. MOQ neutralise
        for a, b in MOQ_FIXES:
            desc = desc.replace(a, b)
        # 3. confirm compression: only swap when there is more than one "confirm"
        #    token, so provenance "confirms/confirmed" can stay where it's the sole use.
        n_confirm = len(re.findall(r"\bconfirm", desc, re.I))
        if n_confirm > 1:
            for a, b in CONFIRM_SWAPS:
                desc = re.sub(a, b, desc)
        if desc != orig:
            p["description"] = desc

    with open(PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("rewrote descriptions")


if __name__ == "__main__":
    main()
