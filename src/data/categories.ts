// Product category tree — 13 main categories / 20 subcategories (Phase 2 taxonomy).
// Copy is original rewording from the 5-site crawl corpus. Grades anchored to
// recognised standards. Per-model values not published stay `pending`.

export interface Category {
  slug: string;
  name: string;
  nameZh: string;
  grades: string;
  subcategories: string[];
  summary: string;
  positioning: string;
  directAnswer: string;
  technicalDepth: string;
  selection: string[];
  procurement: string[];
}

export const categories: Category[] = [
  {
    slug: 'air-filters',
    name: 'Air Filters (Engine Intake)',
    nameZh: '空气滤清器',
    grades: 'ISO 5011',
    subcategories: ['Panel', 'Round', 'Heavy-Duty', 'PowerCore', 'Air Compressor', 'GT Intake'],
    summary: 'Engine intake air filters in panel, round and heavy-duty forms, plus PowerCore, air-compressor and gas-turbine stages.',
    positioning:
      'Engine intake air filters sit upstream of the combustion chamber, shielding cylinders, pistons and rings from abrasive dust. They run in a high-velocity, high-dust airflow across on-road trucks, off-highway machinery, agricultural equipment and compressors, so capacity and intake-restriction control matter as much as raw efficiency.',
    directAnswer:
      'An engine air filter removes airborne dust before it reaches the combustion chamber. The catalogue covers panel, round and heavy-duty cartridge forms, plus PowerCore, air-compressor and gas-turbine intake stages.',
    technicalDepth:
      'Intake air filtration is graded under ISO 5011 for multi-pass efficiency and dust capacity. Form factor follows the housing: panel elements suit compact passenger and commercial vehicles, round elements suit agricultural and off-highway equipment, and heavy-duty cylindrical elements serve trucks and construction machinery. PowerCore construction adds a compact pleated-media option for space-limited housings. OE cross-reference is the practical entry point — numbers such as 42N-62-15470 (Komatsu loader), P778989 (Mitsubishi compressor) and 1542743/8-475386 (Volvo) are catalogued as cross-reference entries, with the exact dimensional match still requiring confirmation against the OE drawing.',
    selection: [
      'Confirm the OE number first; treat the catalogue cross-reference as a starting point, not a verified fitment.',
      'Verify media type and pleat construction for the dust environment.',
      'Dimensions, pressure drop and dust-holding capacity are published per model only where the source catalogue provides them; otherwise request the spec sheet.',
    ],
    procurement: [
      'State the OE number plus the equipment make, model and year — the cross-reference is a discovery aid, not a fitment guarantee.',
      'Confirm the form factor against the housing (panel, round, heavy-duty cylinder or PowerCore) before committing a bulk order.',
      'Request the spec sheet for dimensions, media and ISO 5011 efficiency/dust-capacity figures, since per-model values are not published in the catalogue.',
    ],
  },
  {
    slug: 'cabin-filters',
    name: 'Cabin Air Filters',
    nameZh: '空调滤清器',
    grades: 'ISO 16890',
    subcategories: [],
    summary: 'Cabin air filters for passenger and commercial vehicles.',
    positioning:
      'Cabin air filters clean the air entering the vehicle interior, protecting occupants from dust, pollen and particulates. They work in a low-velocity HVAC airflow inside a compact automotive cartridge, where fitment by year and trim is the dominant failure mode.',
    directAnswer:
      'A cabin filter cleans air entering the vehicle interior, protecting occupants from dust and particulates.',
    technicalDepth:
      'Cabin filtration sits between engine intake and HVAC-grade media. Particle-holding and odour-removal variants map to the same ISO 16890 / activated-carbon logic as building HVAC, but in a compact automotive cartridge form. The source catalogue confirms the category and typical cross-reference numbers such as 72880-FG000 (Subaru), 500-0957 (Caterpillar) and 90915-YZZA3 (Lexus/Toyota); per-model efficiency and dimensions are not published and remain pending.',
    selection: [
      'Match by OE number; confirm the specific vehicle year and trim before ordering.',
      'Specify whether particle-only or carbon (odour) media is required.',
      'Request the spec sheet for dimensions and efficiency class.',
    ],
    procurement: [
      'Confirm the exact vehicle year, trim and whether the housing takes a single-piece or two-piece filter.',
      'Specify particle-only versus activated-carbon (odour) media — the catalogue does not publish per-model media type.',
      'Request dimensions and ISO 16890 efficiency class on the spec sheet before bulk ordering.',
    ],
  },
  {
    slug: 'oil-filters',
    name: 'Oil Filters',
    nameZh: '机油滤清器',
    grades: '—',
    subcategories: [],
    summary: 'Engine and equipment oil filters.',
    positioning:
      'Oil filters remove contaminants from lubricating oil to protect the engine or equipment oil circuit. They operate under hot-oil flow with a bypass valve and anti-drain-back valve, so thread, canister and gasket fitment are as important as media micron rating.',
    directAnswer:
      'An oil filter removes contaminants from lubricating oil to protect the engine or equipment oil circuit.',
    technicalDepth:
      'Oil filtration for engines and equipment is catalogued together with hydraulic filtration. The category is OE-cross-referenced; the source catalogue publishes part numbers but not per-model micron rating, bypass-valve setting or canister dimensions — those fields stay pending.',
    selection: [
      'Match by OE number; confirm thread size and canister dimensions on the spec sheet.',
      'Specify operating oil type and change interval for correct media selection.',
      'Request bypass-valve and micron-rating data where critical.',
    ],
    procurement: [
      'Confirm thread size, gasket seat and canister dimensions — these are not published per model.',
      'State the operating oil type and change interval; extended intervals need a matched media and bypass-valve setting.',
      'Request bypass-valve and micron-rating data where the circuit is sensitive.',
    ],
  },
  {
    slug: 'fuel-filters',
    name: 'Fuel Filters',
    nameZh: '燃油滤清器',
    grades: '—',
    subcategories: ['Diesel', 'Petrol', 'Urea'],
    summary: 'Diesel and petrol fuel filters, incl. urea.',
    positioning:
      'Fuel filters remove water and particulate from fuel before the injection system. Diesel duty in heavy trucks and commercial vehicles dominates the catalogue and typically requires a water-separation specification in addition to particle retention.',
    directAnswer:
      'A fuel filter removes water and particulate from fuel before the injection system.',
    technicalDepth:
      'The catalogue lists diesel fuel filters for heavy-duty trucks and commercial vehicles, with urea filtration listed alongside. OE entries include VG1540080311, 8159975, 2169185 and 23401-1441 for heavy-duty diesel applications. Water-separation capability and micron rating are not published per model and remain pending.',
    selection: [
      'Confirm the OE number; heavy-duty diesel lines commonly need water-separation specification.',
      'Specify fuel type (diesel/petrol) and system pressure.',
      'Request micron rating and water-separation efficiency.',
    ],
    procurement: [
      'Specify fuel type (diesel/petrol) and whether the line needs water separation — heavy-duty diesel lines usually do.',
      'Confirm the OE number and system pressure against the injection specification.',
      'Request micron rating and water-separation efficiency; the catalogue does not publish these per model.',
    ],
  },
  {
    slug: 'hydraulic-filters',
    name: 'Hydraulic Filters',
    nameZh: '液压滤清器',
    grades: 'ISO 4406',
    subcategories: [],
    summary: 'Hydraulic circuit filters for heavy equipment and industrial systems.',
    positioning:
      'Hydraulic filters protect pumps, valves and actuators by removing particles from the hydraulic oil circuit. Selection turns on system pressure, flow rate and the cleanliness target of the circuit — excavators, loaders and industrial systems all impose different duty cycles.',
    directAnswer:
      'A hydraulic filter protects pumps, valves and actuators by removing particles from the hydraulic oil circuit.',
    technicalDepth:
      'Hydraulic filtration is catalogued with oil filtration. Selection depends on system pressure, flow rate and the cleanliness target of the circuit. Per-model pressure rating, micron rating and flow capacity are not published by the source catalogue and remain pending.',
    selection: [
      'Provide system flow rate and operating pressure when inquiring.',
      'Specify the cleanliness class target (ISO 4406) of the circuit.',
      'Request pressure-drop and beta-ratio data for critical circuits.',
    ],
    procurement: [
      'Provide system flow rate and operating pressure — selection depends on both.',
      'State the ISO 4406 cleanliness target of the circuit.',
      'Request pressure-drop and beta-ratio data for critical circuits; the catalogue does not publish these per model.',
    ],
  },
  {
    slug: 'transmission-filters',
    name: 'Transmission Filters',
    nameZh: '变速箱滤清器',
    grades: '—',
    subcategories: [],
    summary: 'Automatic transmission filters.',
    positioning:
      'Transmission filters remove wear debris from transmission fluid to protect the valve body and clutches. They are OE-cross-referenced, and the key procurement risk is matching the exact transmission model — pan-mounted and external forms are not interchangeable.',
    directAnswer:
      'A transmission filter removes wear debris from transmission fluid to protect the valve body and clutches.',
    technicalDepth:
      'Transmission filters are OE-cross-referenced. The catalogue publishes a range of part numbers including 35303-B1010, 35330-60070, 31728-3JX0C and 25420-PR0-030. Media type and micron rating are not published per model and remain pending.',
    selection: [
      'Match by OE number; confirm the exact transmission model.',
      'Specify whether the filter is pan-mounted or external.',
      'Request media and micron-rating data where available.',
    ],
    procurement: [
      'Confirm the exact transmission model — pan-mounted and external filters are not interchangeable.',
      'Match by OE number first; the cross-reference is the discovery entry point.',
      'Request media and micron-rating data; the catalogue does not publish these per model.',
    ],
  },
  {
    slug: 'hvac-filters',
    name: 'HVAC Filters',
    nameZh: 'HVAC 过滤器',
    grades: 'EN 779 / ISO 16890',
    subcategories: ['Pre (G1–G4)', 'Medium (M5–F9)', 'V-Bank'],
    summary: 'HVAC air filters — pre, medium and V-bank stages.',
    positioning:
      'HVAC filters protect air-handling equipment and occupants by staged particle removal, from coarse pre-filtration through fine filtration. They run continuously in AHU systems where pressure drop translates directly into fan energy, so initial and final resistance are procurement-relevant.',
    directAnswer:
      'HVAC filters protect air-handling equipment and occupants by staged particle removal, from coarse pre-filtration through fine filtration.',
    technicalDepth:
      'HVAC filtration follows a grade ladder. Pre-filters (G1–G4) capture coarse dust and protect downstream stages; medium filters (M5–F9) remove finer particulate; V-bank rigid filters deliver high airflow at low pressure drop for the main AHU stage. Grades are expressed under EN 779 and ISO 16890 (ePM1/ePM2.5/ePM10/coarse). Frame options include cardboard, metal and galvanised steel, with synthetic-fibre or micro-glass media.',
    selection: [
      'Match the filter grade to the downstream protection target.',
      'Confirm frame size and construction (cardboard for disposable, metal for washable or higher strength).',
      'Request pressure-drop and dust-holding data for energy-consumption comparisons.',
    ],
    procurement: [
      'Match the grade to the downstream protection target — G1–G4 pre, M5–F9 medium, V-bank for the main AHU stage.',
      'Confirm face dimensions and frame construction (cardboard disposable, metal washable or high-strength).',
      'Request initial/final pressure-drop and dust-holding data to compare energy cost over the service life.',
    ],
  },
  {
    slug: 'hepa-filters',
    name: 'HEPA / ULPA Filters',
    nameZh: 'HEPA/ULPA 高效过滤器',
    grades: 'EN 1822',
    subcategories: ['H10–H12 (EPA)', 'H13–H14 (HEPA)', 'U15–U17 (ULPA)'],
    summary: 'HEPA and ULPA filters — H10 through U17 for cleanrooms and critical environments.',
    positioning:
      'HEPA and ULPA filters sit at the terminal end of the air chain in cleanrooms, operating rooms and critical manufacturing. They run on the back of a pre-filter chain, so the efficiency class must be matched to the cleanroom ISO target rather than selected for its own sake.',
    directAnswer:
      'HEPA/ULPA filters remove ≥99.95% (H13) and up to 99.9995% (U15+) of particles at MPPS for cleanrooms and critical environments.',
    technicalDepth:
      'Efficiency is graded under EN 1822: H10–H12 cover the EPA range, H13–H14 are high-efficiency HEPA, and U15–U17 are ultra-low-penetration ULPA. Construction is either separator or mini-pleat. Sealing options include gel and endless-gasket types; frames are aluminium, galvanised steel or stainless. Typical panel sizes run 610×610×70 mm through 610×610×292 mm. Mini-pleat production uses micro-glass media with pleat depths of 22–100 mm.',
    selection: [
      'Confirm the required efficiency class (H13/H14 vs U15) against the cleanroom ISO class target.',
      'Verify the seal type matches the housing (gel vs gasket).',
      'Confirm dimensions and whether a factory leakage-test certificate is required.',
    ],
    procurement: [
      'Lock the efficiency class (H13/H14 versus U15) to the cleanroom ISO 14644 target, not to a marketing claim.',
      'Verify the seal type against the housing — gel for knife-edge, gasket/endless-gasket for flanged.',
      'Confirm panel dimensions and state whether a factory leakage-test certificate is required with the order.',
    ],
  },
  {
    slug: 'activated-carbon',
    name: 'Activated Carbon Filters',
    nameZh: '活性炭过滤器',
    grades: '—',
    subcategories: ['Panel', 'Pleated', 'Pocket', 'V-Bank'],
    summary: 'Activated carbon filters for odour and chemical-vapour removal.',
    positioning:
      'Activated carbon filters adsorb gaseous odours and chemical vapours that particulate filters cannot capture. They complement rather than replace particulate stages, and appear across panel, pleated, pocket and V-bank forms for commercial HVAC and industrial fume duty.',
    directAnswer:
      'Activated carbon filters adsorb gaseous odours and chemical vapours that particulate filters cannot capture.',
    technicalDepth:
      'Carbon media appears across panel, pleated, pocket and V-bank forms, applied to odour control in commercial buildings and chemical-vapour capture in industrial settings. Carbon filters complement rather than replace particulate stages. Media weight and adsorption capacity per model are not published and remain pending.',
    selection: [
      'Specify the target contaminant (odour, VOC, or a specific chemical vapour).',
      'Confirm the airflow and contact time required for the target removal efficiency.',
      'Request carbon weight and expected service life.',
    ],
    procurement: [
      'Name the target contaminant — odour, VOC or a specific chemical vapour — since carbon is contaminant-specific.',
      'Confirm airflow and required contact time, which drive removal efficiency.',
      'Request carbon weight and expected service life; the catalogue does not publish these per model.',
    ],
  },
  {
    slug: 'pocket-filters',
    name: 'Pocket / Bag Filters',
    nameZh: '袋式过滤器',
    grades: 'EN 779 / ISO 16890',
    subcategories: [],
    summary: 'Pocket and bag filters for high dust-holding AHU stages.',
    positioning:
      'Pocket filters provide high dust-holding capacity through extended media pockets, serving AHU main filtration where a compact frame must hold a large media surface area. Bag count and face dimensions are set by the AHU frame.',
    directAnswer:
      'Pocket filters provide high dust-holding capacity with a large media surface area in a compact frame for AHU main filtration.',
    technicalDepth:
      'Pocket filters use extended media pockets to maximise surface area and dust capacity. Grades run M5 through F9 (EN 779 / ISO 16890). Media is typically synthetic fibre for strength and long service life. Frame and pocket-count options vary by airflow.',
    selection: [
      'Match grade to the AHU stage.',
      'Confirm face dimensions and number of pockets against the AHU frame.',
      'Request initial pressure-drop and dust-holding capacity for life-cycle cost.',
    ],
    procurement: [
      'Match the grade (M5–F9) to the AHU stage.',
      'Confirm face dimensions and the number of pockets against the AHU frame.',
      'Request initial pressure-drop and dust-holding capacity for life-cycle cost comparison.',
    ],
  },
  {
    slug: 'filter-media',
    name: 'Filter Media',
    nameZh: '滤材介质',
    grades: '—',
    subcategories: ['Needle-Punched', 'Synthetic Fibre', 'Micro-Glass', 'Activated Carbon'],
    summary: 'Filter media — needle-punched, synthetic fibre, micro-glass and activated carbon.',
    positioning:
      'Filter media is the raw filtration material supplied as rolls or made-to-order media for filter manufacturers and integrators. The source supplier serves pre-filtration, HEPA and odour-control grades at low minimum order quantity, from prototyping to production.',
    directAnswer:
      'Filter media is the raw filtration material supplied as rolls or made-to-order media for filter manufacturers and integrators.',
    technicalDepth:
      'Media types span needle-punched non-woven, synthetic fibre, micro-glass fibre and activated carbon. Media is supplied at low MOQ (from 20 rolls) with prototyping-to-production capability. Grammage, thickness and efficiency-curve parameters are not published and remain pending.',
    selection: [
      'Specify the target efficiency grade and the application (pre-filter vs HEPA vs odour).',
      'Confirm roll width, grammage and any fire-rating requirement (e.g. UL 900).',
      'Request an efficiency curve for the target particle size.',
    ],
    procurement: [
      'Specify the target efficiency grade and application — pre-filter, HEPA or odour — before asking for media.',
      'Confirm roll width, grammage and any fire-rating requirement such as UL 900.',
      'Request an efficiency curve for the target particle size; grammage and thickness are not published per model.',
    ],
  },
  {
    slug: 'liquid-cartridges',
    name: 'Liquid Filter Cartridges',
    nameZh: '液体过滤滤芯',
    grades: 'micron rating',
    subcategories: ['Membrane (PP/PVDF/PTFE)', 'Metal (SS304/SS316L/Ti)'],
    summary: 'Liquid filter cartridges — membrane and metal.',
    positioning:
      'Liquid filter cartridges remove particles or separate phases from process liquids, using membrane (PP/PVDF/PTFE) or metal (SS304/SS316L/Ti) media. Fluid chemistry, temperature and chemical compatibility decide the media grade before micron rating is even considered.',
    directAnswer:
      'Liquid filter cartridges remove particles or separate phases from process liquids, using membrane (PP/PVDF/PTFE) or metal (SS304/SS316L/Ti) media.',
    technicalDepth:
      'Membrane cartridges use PP, PVDF or PTFE membranes with PP/PET/PTFE/PVDF cores and 215/222/226/DOE end-caps, in 5–70-inch lengths, with O-ring materials from silicon to EPDM, Viton and FEP. Metal cartridges use SS304, SS316L or titanium in sintered or woven-mesh form, with filtration ratings from 1 to 100 μm and diameters of 20/38/60 mm or custom.',
    selection: [
      'Specify the fluid, temperature and chemical compatibility to choose the right membrane or metal grade.',
      'Confirm the micron rating and flow rate.',
      'For metal cartridges, specify sintered vs woven-mesh construction and end-fitting type.',
    ],
    procurement: [
      'Name the fluid, temperature and chemical compatibility — this decides membrane versus metal before any other field.',
      'Confirm micron rating and flow rate.',
      'For metal cartridges, specify sintered versus woven-mesh construction and the end-fitting type.',
    ],
  },
  {
    slug: 'cleanroom-equipment',
    name: 'Cleanroom Equipment',
    nameZh: '洁净室设备',
    grades: 'Class 100',
    subcategories: ['FFU', 'Laminar Flow', 'Biosafety Cabinet', 'Air Shower', 'Pass Box'],
    summary: 'Cleanroom equipment — FFU, laminar flow, biosafety cabinets, air showers and pass boxes.',
    positioning:
      'Cleanroom equipment maintains the controlled airflow and contamination control required for ISO-classified cleanrooms. Fan filter units generate ceiling-down laminar airflow, while biosafety cabinets, air showers and pass boxes handle the entry, handling and transfer of materials and personnel.',
    directAnswer:
      'Cleanroom equipment maintains the controlled airflow and contamination control required for ISO-classified cleanrooms.',
    technicalDepth:
      'Fan filter units (FFU) combine a fan with a HEPA/ULPA filter in a galvanised or stainless housing; a 48"×48" double-motor unit delivers 4000–5000 CMH at Class 100. Efficiency runs F8/F9 (EN 779) through H10–H14/U15 (EN 1822), with 80 °C / 80% RH operating limits. The range extends to laminar-flow cabinets, biosafety cabinets, air showers and pass boxes.',
    selection: [
      'Confirm the cleanroom ISO class and required FFU airflow/coverage.',
      'Specify AC or EC motor and voltage (110/220 V).',
      'Confirm dimensions and whether standard or custom sizing is needed.',
    ],
    procurement: [
      'Confirm the cleanroom ISO class and the FFU airflow/coverage required to hold it.',
      'Specify AC versus EC motor and voltage (110/220 V); EC suits fleets over 100 units with central control.',
      'Confirm dimensions and whether standard or custom sizing is needed.',
    ],
  },
];
