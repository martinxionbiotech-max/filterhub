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
  directAnswer: string;
  technicalDepth: string;
  selection: string[];
}

export const categories: Category[] = [
  {
    slug: 'air-filters',
    name: 'Air Filters (Engine Intake)',
    nameZh: '空气滤清器',
    grades: 'ISO 5011',
    subcategories: ['Panel', 'Round', 'Heavy-Duty', 'PowerCore', 'Air Compressor', 'GT Intake'],
    summary: 'Engine intake air filters in panel, round and heavy-duty forms, plus PowerCore, air-compressor and gas-turbine stages.',
    directAnswer:
      'An engine air filter removes airborne dust before it reaches the combustion chamber. The catalogue covers panel, round and heavy-duty cartridge forms, plus PowerCore, air-compressor and gas-turbine intake stages.',
    technicalDepth:
      'Intake air filtration is graded under ISO 5011 for multi-pass efficiency and dust capacity. Form factor follows the housing: panel elements suit compact passenger and commercial vehicles, round elements suit agricultural and off-highway equipment, and heavy-duty cylindrical elements serve trucks and construction machinery. OE cross-reference is the practical entry point — numbers such as 42N-62-15470 (Komatsu loader), P778989 (Mitsubishi compressor) and 1542743/8-475386 (Volvo) are catalogued as cross-reference entries, with the exact dimensional match still requiring confirmation against the OE drawing.',
    selection: [
      'Confirm the OE number first; treat the catalogue cross-reference as a starting point, not a verified fitment.',
      'Verify media type and pleat construction for the dust environment.',
      'Dimensions, pressure drop and dust-holding capacity are published per model only where the source catalogue provides them; otherwise request the spec sheet.',
    ],
  },
  {
    slug: 'cabin-filters',
    name: 'Cabin Air Filters',
    nameZh: '空调滤清器',
    grades: 'ISO 16890',
    subcategories: [],
    summary: 'Cabin air filters for passenger and commercial vehicles.',
    directAnswer:
      'A cabin filter cleans air entering the vehicle interior, protecting occupants from dust and particulates.',
    technicalDepth:
      'Cabin filtration sits between engine intake and HVAC-grade media. Particle-holding and odour-removal variants map to the same ISO 16890 / activated-carbon logic as building HVAC, but in a compact automotive cartridge form. The source catalogue confirms the category and typical cross-reference numbers; per-model efficiency and dimensions are not published and remain pending.',
    selection: [
      'Match by OE number; confirm the specific vehicle year and trim before ordering.',
      'Specify whether particle-only or carbon (odour) media is required.',
      'Request the spec sheet for dimensions and efficiency class.',
    ],
  },
  {
    slug: 'oil-filters',
    name: 'Oil Filters',
    nameZh: '机油滤清器',
    grades: '—',
    subcategories: [],
    summary: 'Engine and equipment oil filters.',
    directAnswer:
      'An oil filter removes contaminants from lubricating oil to protect the engine or equipment oil circuit.',
    technicalDepth:
      'Oil filtration for engines and equipment is catalogued together with hydraulic filtration. The category is OE-cross-referenced; the source catalogue publishes part numbers but not per-model micron rating, bypass-valve setting or canister dimensions — those fields stay pending.',
    selection: [
      'Match by OE number; confirm thread size and canister dimensions on the spec sheet.',
      'Specify operating oil type and change interval for correct media selection.',
      'Request bypass-valve and micron-rating data where critical.',
    ],
  },
  {
    slug: 'fuel-filters',
    name: 'Fuel Filters',
    nameZh: '燃油滤清器',
    grades: '—',
    subcategories: ['Diesel', 'Petrol', 'Urea'],
    summary: 'Diesel and petrol fuel filters, incl. urea.',
    directAnswer:
      'A fuel filter removes water and particulate from fuel before the injection system.',
    technicalDepth:
      'The catalogue lists diesel fuel filters for heavy-duty trucks and commercial vehicles, with urea filtration listed alongside. OE entries include VG1540080311, 8159975, 2169185 and 23401-1441 for heavy-duty diesel applications. Water-separation capability and micron rating are not published per model and remain pending.',
    selection: [
      'Confirm the OE number; heavy-duty diesel lines commonly need water-separation specification.',
      'Specify fuel type (diesel/petrol) and system pressure.',
      'Request micron rating and water-separation efficiency.',
    ],
  },
  {
    slug: 'hydraulic-filters',
    name: 'Hydraulic Filters',
    nameZh: '液压滤清器',
    grades: 'ISO 4406',
    subcategories: [],
    summary: 'Hydraulic circuit filters for heavy equipment and industrial systems.',
    directAnswer:
      'A hydraulic filter protects pumps, valves and actuators by removing particles from the hydraulic oil circuit.',
    technicalDepth:
      'Hydraulic filtration is catalogued with oil filtration. Selection depends on system pressure, flow rate and the cleanliness target of the circuit. Per-model pressure rating, micron rating and flow capacity are not published by the source catalogue and remain pending.',
    selection: [
      'Provide system flow rate and operating pressure when inquiring.',
      'Specify the cleanliness class target (ISO 4406) of the circuit.',
      'Request pressure-drop and beta-ratio data for critical circuits.',
    ],
  },
  {
    slug: 'transmission-filters',
    name: 'Transmission Filters',
    nameZh: '变速箱滤清器',
    grades: '—',
    subcategories: [],
    summary: 'Automatic transmission filters.',
    directAnswer:
      'A transmission filter removes wear debris from transmission fluid to protect the valve body and clutches.',
    technicalDepth:
      'Transmission filters are OE-cross-referenced. The catalogue publishes a range of part numbers including 35303-B1010, 35330-60070, 31728-3JX0C and 25420-PR0-030. Media type and micron rating are not published per model and remain pending.',
    selection: [
      'Match by OE number; confirm the exact transmission model.',
      'Specify whether the filter is pan-mounted or external.',
      'Request media and micron-rating data where available.',
    ],
  },
  {
    slug: 'hvac-filters',
    name: 'HVAC Filters',
    nameZh: 'HVAC 过滤器',
    grades: 'EN 779 / ISO 16890',
    subcategories: ['Pre (G1–G4)', 'Medium (M5–F9)', 'V-Bank'],
    summary: 'HVAC air filters — pre, medium and V-bank stages.',
    directAnswer:
      'HVAC filters protect air-handling equipment and occupants by staged particle removal, from coarse pre-filtration through fine filtration.',
    technicalDepth:
      'HVAC filtration follows a grade ladder. Pre-filters (G1–G4) capture coarse dust and protect downstream stages; medium filters (M5–F9) remove finer particulate; V-bank rigid filters deliver high airflow at low pressure drop for the main AHU stage. Grades are expressed under EN 779 and ISO 16890 (ePM1/ePM2.5/ePM10/coarse). Frame options include cardboard, metal and galvanised steel, with synthetic-fibre or micro-glass media.',
    selection: [
      'Match the filter grade to the downstream protection target.',
      'Confirm frame size and construction (cardboard for disposable, metal for washable or higher strength).',
      'Request pressure-drop and dust-holding data for energy-consumption comparisons.',
    ],
  },
  {
    slug: 'hepa-filters',
    name: 'HEPA / ULPA Filters',
    nameZh: 'HEPA/ULPA 高效过滤器',
    grades: 'EN 1822',
    subcategories: ['H10–H12 (EPA)', 'H13–H14 (HEPA)', 'U15–U17 (ULPA)'],
    summary: 'HEPA and ULPA filters — H10 through U17 for cleanrooms and critical environments.',
    directAnswer:
      'HEPA/ULPA filters remove ≥99.95% (H13) and up to 99.9995% (U15+) of particles at MPPS for cleanrooms and critical environments.',
    technicalDepth:
      'Efficiency is graded under EN 1822: H10–H12 cover the EPA range, H13–H14 are high-efficiency HEPA, and U15–U17 are ultra-low-penetration ULPA. Construction is either separator or mini-pleat. Sealing options include gel and endless-gasket types; frames are aluminium, galvanised steel or stainless. Typical panel sizes run 610×610×70 mm through 610×610×292 mm. Mini-pleat production uses micro-glass media with pleat depths of 22–100 mm.',
    selection: [
      'Confirm the required efficiency class (H13/H14 vs U15) against the cleanroom ISO class target.',
      'Verify the seal type matches the housing (gel vs gasket).',
      'Confirm dimensions and whether a factory leakage-test certificate is required.',
    ],
  },
  {
    slug: 'activated-carbon',
    name: 'Activated Carbon Filters',
    nameZh: '活性炭过滤器',
    grades: '—',
    subcategories: ['Panel', 'Pleated', 'Pocket', 'V-Bank'],
    summary: 'Activated carbon filters for odour and chemical-vapour removal.',
    directAnswer:
      'Activated carbon filters adsorb gaseous odours and chemical vapours that particulate filters cannot capture.',
    technicalDepth:
      'Carbon media appears across panel, pleated, pocket and V-bank forms, applied to odour control in commercial buildings and chemical-vapour capture in industrial settings. Carbon filters complement rather than replace particulate stages. Media weight and adsorption capacity per model are not published and remain pending.',
    selection: [
      'Specify the target contaminant (odour, VOC, or a specific chemical vapour).',
      'Confirm the airflow and contact time required for the target removal efficiency.',
      'Request carbon weight and expected service life.',
    ],
  },
  {
    slug: 'pocket-filters',
    name: 'Pocket / Bag Filters',
    nameZh: '袋式过滤器',
    grades: 'EN 779 / ISO 16890',
    subcategories: [],
    summary: 'Pocket and bag filters for high dust-holding AHU stages.',
    directAnswer:
      'Pocket filters provide high dust-holding capacity with a large media surface area in a compact frame for AHU main filtration.',
    technicalDepth:
      'Pocket filters use extended media pockets to maximise surface area and dust capacity. Grades run M5 through F9 (EN 779 / ISO 16890). Media is typically synthetic fibre for strength and long service life. Frame and pocket-count options vary by airflow.',
    selection: [
      'Match grade to the AHU stage.',
      'Confirm face dimensions and number of pockets against the AHU frame.',
      'Request initial pressure-drop and dust-holding capacity for life-cycle cost.',
    ],
  },
  {
    slug: 'filter-media',
    name: 'Filter Media',
    nameZh: '滤材介质',
    grades: '—',
    subcategories: ['Needle-Punched', 'Synthetic Fibre', 'Micro-Glass', 'Activated Carbon'],
    summary: 'Filter media — needle-punched, synthetic fibre, micro-glass and activated carbon.',
    directAnswer:
      'Filter media is the raw filtration material supplied as rolls or made-to-order media for filter manufacturers and integrators.',
    technicalDepth:
      'Media types span needle-punched non-woven, synthetic fibre, micro-glass fibre and activated carbon. Media is supplied at low MOQ (from 20 rolls) with prototyping-to-production capability. Grammage, thickness and efficiency-curve parameters are not published and remain pending.',
    selection: [
      'Specify the target efficiency grade and the application (pre-filter vs HEPA vs odour).',
      'Confirm roll width, grammage and any fire-rating requirement (e.g. UL 900).',
      'Request an efficiency curve for the target particle size.',
    ],
  },
  {
    slug: 'liquid-cartridges',
    name: 'Liquid Filter Cartridges',
    nameZh: '液体过滤滤芯',
    grades: 'micron rating',
    subcategories: ['Membrane (PP/PVDF/PTFE)', 'Metal (SS304/SS316L/Ti)'],
    summary: 'Liquid filter cartridges — membrane and metal.',
    directAnswer:
      'Liquid filter cartridges remove particles or separate phases from process liquids, using membrane (PP/PVDF/PTFE) or metal (SS304/SS316L/Ti) media.',
    technicalDepth:
      'Membrane cartridges use PP, PVDF or PTFE membranes with PP/PET/PTFE/PVDF cores and 215/222/226/DOE end-caps, in 5–70-inch lengths, with O-ring materials from silicon to EPDM, Viton and FEP. Metal cartridges use SS304, SS316L or titanium in sintered or woven-mesh form, with filtration ratings from 1 to 100 μm and diameters of 20/38/60 mm or custom.',
    selection: [
      'Specify the fluid, temperature and chemical compatibility to choose the right membrane or metal grade.',
      'Confirm the micron rating and flow rate.',
      'For metal cartridges, specify sintered vs woven-mesh construction and end-fitting type.',
    ],
  },
  {
    slug: 'cleanroom-equipment',
    name: 'Cleanroom Equipment',
    nameZh: '洁净室设备',
    grades: 'Class 100',
    subcategories: ['FFU', 'Laminar Flow', 'Biosafety Cabinet', 'Air Shower', 'Pass Box'],
    summary: 'Cleanroom equipment — FFU, laminar flow, biosafety cabinets, air showers and pass boxes.',
    directAnswer:
      'Cleanroom equipment maintains the controlled airflow and contamination control required for ISO-classified cleanrooms.',
    technicalDepth:
      'Fan filter units (FFU) combine a fan with a HEPA/ULPA filter in a galvanised or stainless housing; a 48"×48" double-motor unit delivers 4000–5000 CMH at Class 100. Efficiency runs F8/F9 (EN 779) through H10–H14/U15 (EN 1822), with 80 °C / 80% RH operating limits. The range extends to laminar-flow cabinets, biosafety cabinets, air showers and pass boxes.',
    selection: [
      'Confirm the cleanroom ISO class and required FFU airflow/coverage.',
      'Specify AC or EC motor and voltage (110/220 V).',
      'Confirm dimensions and whether standard or custom sizing is needed.',
    ],
  },
];
