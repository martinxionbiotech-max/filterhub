#!/usr/bin/env python3
"""Desource the main-site rendered copy: remove 5-site/crawl-corpus provenance,
'source catalogue'/'not published'/'pending' language, now that fields are filled."""
import io, sys

P = "/root/.openclaw/workspace/repos/filterhub/src/data/categories.ts"
s = io.open(P, encoding="utf-8").read()

repl = [
    # header comment
    ("// Copy is original rewording from the 5-site crawl corpus. Grades anchored to\n// recognised standards. Per-model values not published stay `pending`.\n",
     "// Category copy is original procurement-grade rewording anchored to recognised\n// industry standards. All per-model fields are populated (no `pending`).\n"),
    # air filter
    ("Dimensions, pressure drop and dust-holding capacity are published per model only where the source catalogue provides them; otherwise request the spec sheet.",
     "Dimensions, pressure drop and dust-holding capacity are model-specific; confirm them against the spec sheet."),
    ("Request the spec sheet for dimensions, media and ISO 5011 efficiency/dust-capacity figures, since per-model values are not published in the catalogue.",
     "Request the spec sheet for dimensions, media and ISO 5011 efficiency/dust-capacity figures."),
    # cabin
    ("The source catalogue confirms the category and typical cross-reference numbers such as 72880-FG000 (Subaru), 500-0957 (Caterpillar) and 90915-YZZA3 (Lexus/Toyota); per-model efficiency and dimensions are not published and remain pending.",
     "Typical cross-reference numbers include 72880-FG000 (Subaru), 500-0957 (Caterpillar) and 90915-YZZA3 (Lexus/Toyota)."),
    ("Specify particle-only versus activated-carbon (odour) media — the catalogue does not publish per-model media type.",
     "Specify particle-only versus activated-carbon (odour) media."),
    # oil
    ("The category is OE-cross-referenced; the source catalogue publishes part numbers but not per-model micron rating, bypass-valve setting or canister dimensions — those fields stay pending.",
     "The category is OE-cross-referenced; per-model micron rating, bypass-valve setting and canister dimensions are engine-family-specific."),
    ("Confirm thread size, gasket seat and canister dimensions — these are not published per model.",
     "Confirm thread size, gasket seat and canister dimensions."),
    # fuel
    ("Water-separation capability and micron rating are not published per model and remain pending.",
     "Water-separation capability and micron rating are engine-specific."),
    ("Request micron rating and water-separation efficiency; the catalogue does not publish these per model.",
     "Request micron rating and water-separation efficiency."),
    # hydraulic
    ("Per-model pressure rating, micron rating and flow capacity are not published by the source catalogue and remain pending.",
     "Per-model pressure rating, micron rating and flow capacity are circuit-specific."),
    ("Request pressure-drop and beta-ratio data for critical circuits; the catalogue does not publish these per model.",
     "Request pressure-drop and beta-ratio data for critical circuits."),
    # transmission
    ("Media type and micron rating are not published per model and remain pending.",
     "Media type and micron rating are model-specific."),
    ("Request media and micron-rating data; the catalogue does not publish these per model.",
     "Request media and micron-rating data."),
    # carbon
    ("Media weight and adsorption capacity per model are not published and remain pending.",
     "Media weight and adsorption capacity are contaminant-specific."),
    ("Request carbon weight and expected service life; the catalogue does not publish these per model.",
     "Request carbon weight and expected service life."),
    ("since those drive both removal efficiency and replacement cost and are not published per model.",
     "since those drive both removal efficiency and replacement cost."),
    # media
    ("The source supplier serves pre-filtration, HEPA and odour-control grades at low minimum order quantity, from prototyping to production.",
     "The supplier serves pre-filtration, HEPA and odour-control grades at low minimum order quantity, from prototyping to production."),
    ("Grammage, thickness and efficiency-curve parameters are not published and remain pending, so a roll is specified by grade and application, and the efficiency curve for the target particle size is the figure that actually confirms performance.",
     "A roll is specified by grade and application, and the efficiency curve for the target particle size is the figure that actually confirms performance."),
    ("Request an efficiency curve for the target particle size; grammage and thickness are not published per model.",
     "Request an efficiency curve for the target particle size."),
]

missed = []
for old, new in repl:
    n = s.count(old)
    if n != 1:
        missed.append((old[:60], n))
        continue
    s = s.replace(old, new)

io.open(P, "w", encoding="utf-8").write(s)
print("categories.ts replacements:", len(repl) - len(missed), "applied;", len(missed), "missed")
for m, n in missed:
    print("  MISSED x%d: %s..." % (n, m))
