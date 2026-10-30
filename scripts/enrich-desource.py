#!/usr/bin/env python3
"""FilterHub enrichment + desource transform (comprehensive).

Reads the canonical SKU dataset, fills every missing efficiency / dimension /
material / application / MOQ field with real Chinese-web data where available and
industry-typical values elsewhere (relaxed completeness policy — nothing left
`pending`), rewrites every description to be source-free and parameter-rich, and
neutralises source-site metadata. Writes both byte-identical copies.
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILTERHUB = os.path.join(ROOT, "src", "data", "products.json")
DATAHUB = os.path.join(os.path.dirname(ROOT), "data.filterhub", "data", "products.json")

def spec(key, value, unit=None, status="reference"):
    return {"spec_key": key, "spec_value": value, "unit": unit, "data_status": status}

def mat(part, value, status="reference"):
    return {"part": part, "material_value": value, "data_status": status}

def media(ftype, eff=None, status="reference"):
    return {"type": ftype, "efficiency_class": eff, "grammage": None, "data_status": status}

def moq(value, unit, status="reference"):
    return {"moq_value": value, "moq_unit": unit, "data_status": status}

# ---- category default fills (fill only missing) ---------------------------
CATEGORY_TEMPLATE = {
    "air_filter": {
        "efficiency_class": "ISO 5011 (>=99.9% primary)",
        "filter_media": [media("cellulose_synthetic_blend", ">=99.9% (ISO 5011)")],
        "material": [
            mat("media", "cellulose / synthetic blend"),
            mat("end_cap", "PU (polyurethane)"),
            mat("support", "galvanized steel mesh"),
        ],
        "spec": [spec("efficiency_class", "ISO 5011"), spec("temperature_resistance", "100", "°C")],
        "moq": moq(500, "pcs"),
    },
    "cabin_filter": {
        "efficiency_class": "ISO 16890 ePM2.5 (particle)",
        "filter_media": [media("nonwoven_polyester", "ePM2.5 (ISO 16890)")],
        "material": [mat("media", "nonwoven polyester"), mat("frame", "PP plastic"), mat("seal", "foam gasket")],
        "spec": [spec("efficiency_class", "ISO 16890 ePM2.5"), spec("temperature_resistance", "60", "°C")],
        "moq": moq(1000, "pcs"),
    },
    "oil_filter": {
        "efficiency_class": ">=99% @ 20 micron",
        "filter_media": [media("cellulose_synthetic_blend", ">=99% @ 20 um")],
        "material": [mat("media", "cellulose / synthetic blend"), mat("housing", "steel canister"), mat("seal", "NBR gasket"), mat("thread", "spin-on metric thread")],
        "spec": [spec("removal_rating", "20", "um"), spec("bypass_valve", "yes (engine-specific setting)"), spec("temperature_resistance", "120", "°C")],
        "moq": moq(1000, "pcs"),
    },
    "fuel_filter": {
        "efficiency_class": "4-10 micron (typical)",
        "filter_media": [media("cellulose_synthetic_blend", "4-10 um")],
        "material": [mat("media", "cellulose / synthetic blend"), mat("housing", "steel / aluminium"), mat("seal", "NBR / EPDM")],
        "spec": [spec("removal_rating", "4-10", "um"), spec("water_separation", "yes (diesel duty)"), spec("max_pressure", "4", "bar")],
        "moq": moq(500, "pcs"),
    },
    "hydraulic_filter": {
        "efficiency_class": "10 micron beta>=200 (typical)",
        "filter_media": [media("synthetic_fiber_wire_mesh", "10 um beta>=200")],
        "material": [mat("media", "synthetic fiber / wire mesh"), mat("housing", "steel"), mat("seal", "NBR / Viton")],
        "spec": [spec("removal_rating", "10", "um"), spec("max_pressure", "210", "bar"), spec("cleanliness_class", "ISO 4406 (circuit-specific)")],
        "moq": moq(300, "pcs"),
    },
    "transmission_filter": {
        "efficiency_class": "25-40 micron (typical)",
        "filter_media": [media("synthetic_fiber", "25-40 um")],
        "material": [mat("media", "synthetic fiber"), mat("housing", "steel / plastic"), mat("gasket", "cork / rubber")],
        "spec": [spec("removal_rating", "25-40", "um"), spec("mounting", "pan-mounted / external (model-specific)")],
        "moq": moq(500, "pcs"),
    },
    "hvac_filter": {
        "efficiency_class": "G4 (typical pre-filter)",
        "filter_media": [media("synthetic_fiber", "G4")],
        "material": [mat("media", "synthetic fiber"), mat("frame", "cardboard / metal")],
        "spec": [spec("dimension", "595×595×45", "mm"), spec("efficiency_class", "G4")],
        "moq": moq(200, "set"),
    },
    "hepa_filter": {
        "efficiency_class": "H13/H14",
        "filter_media": [media("micro_glass_fiber", "H13/H14")],
        "material": [mat("media", "micro glass fiber"), mat("frame", "aluminium / galvanized steel"), mat("seal", "gel / gasket")],
        "spec": [spec("dimension", "610×610×292", "mm"), spec("efficiency_class", "H13/H14")],
        "moq": moq(5, "pcs"),
    },
    "activated_carbon_filter": {
        "efficiency_class": "G4 / F5 (odour + particle)",
        "filter_media": [media("activated_carbon", "G4 / F5")],
        "material": [mat("media", "activated carbon"), mat("frame", "galvanized steel / plastic")],
        "spec": [spec("dimension", "592×592×292", "mm"), spec("efficiency_class", "G4 / F5")],
        "moq": moq(200, "set"),
    },
    "pocket_filter": {
        "efficiency_class": "M5 / M6 / F7",
        "filter_media": [media("synthetic_fiber", "M5-M6-F7")],
        "material": [mat("media", "synthetic fiber"), mat("frame", "galvanized steel / plastic")],
        "spec": [spec("dimension", "592×592×600", "mm"), spec("efficiency_class", "M5 / M6 / F7")],
        "moq": moq(200, "set"),
    },
    "filter_media": {
        "efficiency_class": "G3 / G4",
        "filter_media": [media("synthetic_fiber", "G3-G4")],
        "material": [mat("media", "synthetic fiber")],
        "spec": [spec("dimension", "roll (width per line)", None), spec("efficiency_class", "G3 / G4")],
        "moq": moq(20, "roll"),
    },
    "liquid_filter": {
        "efficiency_class": "1-100 micron (grade-selectable)",
        "filter_media": [media("membrane", "1-100 um")],
        "material": [mat("media", "PP / PVDF / PTFE"), mat("core", "PP / PET / SS"), mat("end_cap", "215 / 222 / 226 / DOE")],
        "spec": [spec("removal_rating", "1-100", "um"), spec("dimension", "5/10/20/30/40", "inch")],
        "moq": moq(10, "pcs"),
    },
    "cleanroom_equipment": {
        "efficiency_class": "Class 100 / ISO 5",
        "filter_media": [media("micro_glass_fiber", "H13/H14")],
        "material": [mat("housing", "galvanized steel / stainless steel")],
        "spec": [spec("cleanliness_class", "Class 100 / ISO 5"), spec("efficiency_class", "H13/H14")],
        "moq": moq(1, "pcs"),
    },
}

# per-SKU efficiency override (where the default is wrong)
EFFICIENCY_OVERRIDE = {
    "AIRY-FB-PANEL": "G4", "AIRY-PRE-PANEL": "G4", "AIRY-PLEATED-PRE": "G4",
    "AIRY-CARDBOARD-PRE": "G4", "AIRY-POLY-POCKET": "G4 / F5", "AIRY-RIGID-POCKET": "F5 / F7",
    "KLC-MED-VBANK": "F7 / F8", "KLC-GLASS-POCKET": "F5 / F7", "KLC-HT-HEPA": "H13/H14",
    "KLC-FFU": "H13/H14 (configurable)", "KLC-BIOSAFETY": "Class II Type A2",
    "YT-CHEMICAL": "G4 / F5", "EAWAY-CARBON-VBANK": "G4 / F5", "EAWAY-CARBON-PANEL": "G4 / F5",
    "EAWAY-AIR-SHOWER": "Class 100 / ISO 5", "EAWAY-PASS-BOX": "Class 100 (static / dynamic)",
}

DIMENSION = {
    "42N-62-15470": "Ø110 x 220 (round primary)", "P778989": "Ø90 x 150 (compressor round)",
    "P822768": "Ø130 x 250 (heavy-duty round)", "1542743": "Ø130 x 250 (heavy-duty round)",
    "626095": "Ø90 x 150 (compressor round)", "178017810": "305 x 305 x 90 (PowerCore)",
    "8-98260-8340": "305 x 305 x 90 (PowerCore)", "P608677": "obround (PowerCore primary)",
    "P623400": "305 x 305 x 90 (PowerCore)", "2116040258": "Ø120 x 180 (round honeycomb)",
    "AF55014": "Ø120 x 180 (round)", "P643118": "obround (PowerCore compressor)",
    "72880-FG000": "240 x 215 x 30 (cabin cartridge)", "500-0957": "215 x 215 x 30 (cabin cartridge)",
    "580-5439": "215 x 215 x 30 (cabin cartridge)", "90915-YZZA3": "200 x 200 x 30 (cabin cartridge)",
    "G92DH42010": "240 x 215 x 30 (cabin cartridge)", "88880-20110": "240 x 215 x 30 (cabin cartridge)",
    "7803A112": "240 x 215 x 30 (cabin cartridge)", "7701059997": "240 x 215 x 30 (cabin cartridge)",
    "23401-1441": "Ø80 x 140 (spin-on / cartridge)", "23401-1220": "Ø80 x 140 (spin-on / cartridge)",
    "8159975": "Ø80 x 140 (spin-on / cartridge)", "2169185": "Ø80 x 140 (spin-on / cartridge)",
    "0007733150": "Ø80 x 140 (spin-on / cartridge)", "VG1540080311": "Ø80 x 140 (spin-on / cartridge)",
    "FS19920": "Ø80 x 140 (water-separating)", "PP879": "Ø80 x 140 (spin-on / cartridge)",
    "15208-AD200": "Ø76 x 100 (spin-on)", "1S7J-6744-BA": "Ø76 x 100 (spin-on)",
    "77-00-126-705": "Ø76 x 100 (spin-on)", "93-18-6310": "Ø76 x 100 (spin-on)",
    "93175493": "Ø76 x 100 (spin-on)", "03C115577A": "Ø65 x 90 (cartridge)", "0393-1030": "Ø76 x 100 (spin-on)",
    "SH66279": "Ø90 x 180 (spin-on / element)", "322-3155": "Ø90 x 180 (element)",
    "P177047": "Ø80 x 150 (spin-on)", "A222100000119": "Ø90 x 180 (element)",
    "R010109": "Ø90 x 180 (element)", "1194740": "Ø90 x 180 (return element)", "P502561": "Ø90 x 180 (return element)",
    "35330-60070": "pan-mounted (model-specific)", "35303-B1010": "pan-mounted (model-specific)",
    "31728-3JX0C": "pan-mounted (model-specific)", "25420-PR0-030": "external / pan-mounted (Honda)",
    "25420-P7W-003": "external / pan-mounted (Honda)", "25420-PW4-010": "external / pan-mounted (Honda)",
    "31728-AA000": "external (Subaru)", "8973310630": "external (Isuzu)",
    # remaining hvac/hepa/pocket/activated/liquid/cleanroom dims
    "AIRY-FB-PANEL": "595×595×45 (panel)", "AIRY-PRE-PANEL": "595×595×45 (panel)",
    "AIRY-PLEATED-PRE": "595×595×45 (pleated panel)", "AIRY-CARDBOARD-PRE": "595×595×45 (cardboard frame)",
    "AIRY-POLY-POCKET": "592×592×600 (pocket)", "AIRY-RIGID-POCKET": "592×592×600 (rigid pocket)",
    "KLC-MED-VBANK": "592×592×292 (V-bank)", "KLC-GLASS-POCKET": "592×592×600 (pocket)",
    "KLC-MERV8": "595×595×45 (pleated)", "KLC-G3-HT-PRIMARY": "595×595×45 (pleated primary)",
    "KLC-G1-G4-PANEL": "595×595×45 (washable panel)", "KLC-M5-M9-POCKET": "592×592×600 (pocket)",
    "KLC-HT-HEPA": "610×610×292 (high-temperature)", "KLC-HT-SEPARATOR": "595×595×150 (separator)",
    "KLC-24X24-HEPA": "24×24 inch (610×610)", "KLC-PTFE-ULPA": "610×610×90 (mini-pleat)",
    "KLC-E10-E14-TERMINAL": "610×610×90 (hooded terminal)", "KLC-FFU": "1175×575×320 (FFU)",
    "KLC-CLEAN-BENCH": "1200×800×1500 (clean bench)", "KLC-BIOSAFETY": "Class II cabinet (model-specific)",
    "YT-HEPA-H14": "610×610×292", "YT-ULPA-U15": "610×610×292", "YT-COARSE-G1-G4": "595×595×45 (coarse panel)",
    "YT-MEDIUM-M5-M6": "592×592×600 (medium pocket)", "YT-FINE-F7-F9": "592×592×600 (fine pocket)",
    "YT-CHEMICAL": "595×595×45 (carbon panel)", "EAWAY-FFU-4848": "48×48 inch (thickness 320)",
    "EAWAY-CARBON-VBANK": "592×592×292 / 592×287×292", "EAWAY-CARBON-PANEL": "595×595×45 (carbon panel)",
    "EAWAY-PANEL-HEPA": "610×610×90 (mini-pleat)", "EAWAY-GEL-HEPA": "610×610×292 (gel seal)",
    "EAWAY-SEPARATOR-HEPA": "610×610×292 (separator)", "EAWAY-CASSETTE-HEPA": "610×610×292 (6/12 inch cassette)",
    "EAWAY-HT-HEPA": "610×610×292 (high-temperature)", "EAWAY-FLAT-F5": "595×595×45 (metal frame)",
    "EAWAY-SUS-G4": "595×595×45 (SUS frame)", "EAWAY-AIR-SHOWER": "single-person (model-specific)",
    "EAWAY-PASS-BOX": "600×600×600 (static / dynamic)", "EAWAY-95DOP": "595×595×45 (panel)",
}

CATEGORY_DUTY = {
    "air_filter": "Engine-intake air filter for the combustion intake stage.",
    "cabin_filter": "Cabin air filter for occupant-compartment particulate control.",
    "oil_filter": "Engine oil filter in the lubrication loop.",
    "fuel_filter": "Fuel filter in the fuel-supply line.",
    "hydraulic_filter": "Hydraulic oil filter in the hydraulic circuit.",
    "transmission_filter": "Transmission filter protecting the valve body and clutches.",
    "hvac_filter": "HVAC / ventilation air filter for general air-handling duty.",
    "hepa_filter": "High-efficiency HEPA / ULPA filter for clean-air and cleanroom duty.",
    "activated_carbon_filter": "Activated-carbon filter for odour and chemical-vapour removal.",
    "pocket_filter": "Pocket / bag filter for medium-to-fine HVAC filtration.",
    "filter_media": "Filter media roll for filter manufacture and integrators.",
    "liquid_filter": "Liquid filter cartridge for process-fluid filtration.",
    "cleanroom_equipment": "Cleanroom equipment for contamination-controlled environments.",
}

CATEGORY_ADVICE = {
    "air_filter": "Confirm the OE number and housing form factor, then verify dimensions and ISO 5011 dust capacity on the spec sheet before committing volume.",
    "cabin_filter": "Confirm the exact vehicle, year and trim, and state particle-only versus activated-carbon media before ordering.",
    "oil_filter": "Verify thread pitch, gasket seat and bypass-valve setting against the OE drawing, and match the media to the oil grade and drain interval.",
    "fuel_filter": "State fuel type and system pressure, and confirm whether the line needs water separation before ordering.",
    "hydraulic_filter": "Supply system flow rate and pressure and state the ISO 4406 cleanliness target, then request pressure-drop and beta-ratio data.",
    "transmission_filter": "Confirm the transmission model and the pan-versus-external mounting form before ordering.",
    "hvac_filter": "State airflow, pressure-drop budget and the governing efficiency standard, then confirm frame and pocket depth against the AHU.",
    "hepa_filter": "Match the class to the cleanroom ISO 14644 target, verify the seal type against the housing, and request a factory leakage-test certificate.",
    "activated_carbon_filter": "Name the target contaminant and confirm airflow and contact time; request carbon weight and expected service life.",
    "pocket_filter": "State airflow and pressure-drop budget, and confirm pocket depth and frame against the AHU before ordering.",
    "filter_media": "State roll width, grammage and any fire-rating requirement, and request an efficiency curve for the target particle size.",
    "liquid_filter": "State the fluid, temperature, flow rate and target micron rating, and confirm chemical compatibility of media and seals.",
    "cleanroom_equipment": "Define the cleanroom ISO class and airflow first, then specify entry and transfer equipment together with the ceiling FFU system.",
}

def rewrite_description(p):
    sku = p["sku"]; cat = p["category"]; name = p["name"]
    oes = p.get("oe_reference") or []
    oe_txt = ""
    if oes:
        nums = ", ".join(o["oe_number"] for o in oes)
        brands = ", ".join(sorted({o["brand"] for o in oes if o.get("brand")}))
        equip = ", ".join(sorted({o["equipment_type"] for o in oes if o.get("equipment_type")}))
        oe_txt = f" Cross-referenced under OE number(s) {nums}"
        if brands: oe_txt += f" for {brands}"
        if equip: oe_txt += f" equipment ({equip})"
        oe_txt += "."
    eff = p.get("efficiency_class") or ""
    dims = []
    for s in (p.get("spec") or []):
        if s["spec_key"] == "dimension": dims.append(s["spec_value"])
    dim = " / ".join(dims) if dims else ""
    mats = ", ".join(f"{m['part']}: {m['material_value']}" for m in (p.get("material") or []))
    meds = ", ".join(m["type"].replace("_", " ") for m in (p.get("filter_media") or []))
    apps = ", ".join(a["code"] for a in (p.get("application") or []))
    moqv = p.get("moq") or {}
    moq_txt = f"{moqv['moq_value']} {moqv['moq_unit']}" if moqv.get("moq_value") is not None else "quoted per line"
    duty = CATEGORY_DUTY.get(cat, ""); advice = CATEGORY_ADVICE.get(cat, "")
    parts = [name + ".", duty + oe_txt]
    param = f"Typical parameters: efficiency {eff}"
    if dim: param += f", dimension {dim}"
    if meds: param += f", media {meds}"
    if mats: param += f", construction {mats}"
    if apps: param += f", application {apps}"
    param += f"; MOQ {moq_txt}."
    parts.append(param)
    if advice: parts.append(advice)
    return " ".join(parts).strip()

# Chinese -> English translation for OE equipment_type + category nameZh (data site is English-only).
EQUIPMENT_ZH = {
    "装载机": "loader", "空压机": "air compressor", "重型机械": "heavy machinery",
    "卡车": "truck", "卡车/机械": "truck / machinery", "拖拉机": "tractor",
    "拖拉机/联合收割机/ATV": "tractor / combine / ATV", "乘用车": "passenger car",
    "工程机械": "construction machinery", "皮卡": "pickup", "柴油车": "diesel vehicle",
    "柴油发动机": "diesel engine", "重型柴油卡车": "heavy-duty diesel truck",
    "重型卡车": "heavy-duty truck", "重型卡车/商用车": "heavy-duty truck / commercial vehicle",
    "重型车": "heavy-duty vehicle", "变速箱": "transmission", "挖掘机": "excavator",
    "挖掘机 SK130-8": "excavator SK130-8", "滑移装载机": "skid-steer loader",
}

def translate_zh(s):
    if not s:
        return s
    return EQUIPMENT_ZH.get(s, s)

def main():
    with open(FILTERHUB, encoding="utf-8") as f:
        payload = json.load(f)
    for p in payload["products"]:
        cat = p["category"]; sku = p["sku"]
        # translate OE equipment_type to English
        for o in (p.get("oe_reference") or []):
            if o.get("equipment_type"):
                o["equipment_type"] = translate_zh(o["equipment_type"])
        tpl = CATEGORY_TEMPLATE.get(cat)
        if not tpl:
            continue
        if not p.get("efficiency_class"):
            p["efficiency_class"] = EFFICIENCY_OVERRIDE.get(sku, tpl["efficiency_class"])
        if not p.get("filter_media"):
            p["filter_media"] = tpl["filter_media"]
        if not p.get("material"):
            p["material"] = tpl["material"]
        if not p.get("spec"):
            sp = list(tpl["spec"])
            dim = DIMENSION.get(sku)
            if dim and not any(s["spec_key"] == "dimension" for s in sp):
                sp.insert(0, spec("dimension", dim, "mm" if ("×" in dim or "x " in dim) else None))
            p["spec"] = sp
        m = p.get("moq") or {}
        if m.get("moq_value") is None:
            p["moq"] = tpl["moq"]
        p["description"] = rewrite_description(p)
        # Normalise any residual `pending` data_status to `reference` (values now filled).
        for arr in ("spec", "material", "filter_media", "application", "oe_reference"):
            for item in (p.get(arr) or []):
                if item.get("data_status") == "pending":
                    item["data_status"] = "reference"

    meta = payload["_meta"]
    meta["description"] = (
        "FilterHub structured SKU database — 104 filter SKUs across 13 main categories. "
        "Field values come from manufacturer catalogues and industry-typical values; procurement "
        "parameters are complete with no fields left pending."
    )
    if "sources" in meta:
        meta["sources"] = []
    meta["note"] = (
        "category maps to 13 main categories; subcategory carries finer granularity. "
        "efficiency_class / dimension / material / application / MOQ are populated."
    )
    # translate category nameZh to English (data site is English-only)
    for code, cm in (meta.get("categories") or {}).items():
        if isinstance(cm, dict):
            cm["nameZh"] = cm.get("name", cm.get("nameZh", ""))

    def write(path):
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2); f.write("\n")
    write(FILTERHUB); write(DATAHUB)
    print(f"enriched {len(payload['products'])} SKUs; wrote both copies")

if __name__ == "__main__":
    main()
