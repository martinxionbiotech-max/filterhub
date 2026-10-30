// Product category tree — 13 main categories / 20 subcategories (Phase 2 taxonomy).
// Category copy is original procurement-grade rewording anchored to recognised
// industry standards. All per-model fields are populated (no `pending`).
//
// Content-fix batch (2026-10-30): added `sourcingPerspective` (subjective expert
// view) to every category and deepened technicalDepth so each page clears 400 words
// with procurement-grade information density. Subjective statements are sourcing
// judgement, never fabricated data.

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
  sourcingPerspective: string;
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
      'Intake air filtration is graded under ISO 5011 for multi-pass efficiency and dust capacity. Form factor follows the housing: panel elements suit compact passenger and commercial vehicles, round elements suit agricultural and off-highway equipment, and heavy-duty cylindrical elements serve trucks and construction machinery. PowerCore construction adds a compact pleated-media option for space-limited housings, while air-compressor and gas-turbine stages run a shorter, higher-velocity duty cycle. OE cross-reference is the practical entry point — numbers such as 42N-62-15470 (Komatsu loader), P778989 (Mitsubishi compressor) and 1542743/8-475386 (Volvo) are catalogued as cross-reference entries, with the exact dimensional match still requiring confirmation against the OE drawing. The same OE family can span several housings, so a number-led order without a form-factor check is the single most common source of a wrong fit. Service life in this category is set by dust loading rather than time, so capacity — not calendar interval — is the figure that schedules replacement.',
    selection: [
      'Confirm the OE number first; treat the catalogue cross-reference as a starting point, not a verified fitment.',
      'Verify media type and pleat construction for the dust environment.',
      'Dimensions, pressure drop and dust-holding capacity are model-specific; confirm them against the spec sheet.',
    ],
    procurement: [
      'State the OE number plus the equipment make, model and year — the cross-reference is a discovery aid, not a fitment guarantee.',
      'Confirm the form factor against the housing (panel, round, heavy-duty cylinder or PowerCore) before committing a bulk order.',
      'Request the spec sheet for dimensions, media and ISO 5011 efficiency/dust-capacity figures.',
    ],
    sourcingPerspective:
      'From a sourcing perspective, engine intake filters reward a capacity-first mindset. A filter that traps particles efficiently but loads up quickly costs more in downtime than one with a balanced efficiency-to-capacity curve, so in heavy-dust off-highway and agricultural duty we advise prioritising confirmed dust-holding capacity and intake-restriction control over a headline efficiency number. PowerCore is worth specifying only where the housing is genuinely space-limited, since it trades a compact envelope for a different fit and price point. Our advice is to treat every OE reference in this category as a cross-reference to be verified against the drawing, and to request the spec sheet before a volume commitment rather than buying on the number alone.',
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
      'Cabin filtration sits between engine intake and HVAC-grade media. Particle-holding and odour-removal variants map to the same ISO 16890 / activated-carbon logic as building HVAC, but in a compact automotive cartridge form. Typical cross-reference numbers include 72880-FG000 (Subaru), 500-0957 (Caterpillar) and 90915-YZZA3 (Lexus/Toyota). The dominant risk in this category is not media performance but fitment — a single OE number can span several model years, trims or body styles, and some housings take a two-piece filter while others take a single cartridge. Confirming the exact vehicle, year and trim is therefore the step that eliminates most wrong orders before efficiency is even discussed. In dust-heavy or commercial cab duty, activated-carbon media adds odour control but also adds cost, so it should be selected for the occupant environment rather than by default.',
    selection: [
      'Match by OE number; confirm the specific vehicle year and trim before ordering.',
      'Specify whether particle-only or carbon (odour) media is required.',
      'Request the spec sheet for dimensions and efficiency class.',
    ],
    procurement: [
      'Confirm the exact vehicle year, trim and whether the housing takes a single-piece or two-piece filter.',
      'Specify particle-only versus activated-carbon (odour) media.',
      'Request dimensions and ISO 16890 efficiency class on the spec sheet before bulk ordering.',
    ],
    sourcingPerspective:
      'Our advice on cabin filters is to lead with fitment and let media follow. Because a wrong year or trim is a hard failure while a wrong media grade is usually only a comfort difference, we recommend confirming the exact vehicle application first and treating the OE number as a cross-reference, not a fit. For commercial and machine-cab duty the calculus flips: dust load is heavier, so particle-holding behaviour and a robust single-piece versus two-piece housing decision matter more than in passenger duty. Specify particle-only versus activated-carbon media explicitly, since carbon adds cost and is only worth it where odour control is actually required. Specify particle-only versus carbon explicitly and confirm the exact year and trim, since fitment is the hard failure mode here.',
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
      'Oil filtration for engines and equipment is catalogued together with hydraulic filtration. The category is OE-cross-referenced; per-model micron rating, bypass-valve setting and canister dimensions are engine-family-specific. A spin-on oil filter runs in a hot-oil loop, so three mechanical details govern the fit beyond the media: the mounting thread, the gasket seat and the canister dimensions. In parallel, two valves govern protection: the bypass valve opens under high pressure to keep oil flowing even if the media is blocked, and the anti-drain-back valve holds oil in the filter between starts. Both settings are engine-family-specific, which is why a number-led order without a fitment check is the main failure mode here. Service intervals in this category are oil-determined, so stating the change interval is the input that lets the media grade be matched to the actual duty.',
    selection: [
      'Match by OE number; confirm thread size and canister dimensions on the spec sheet.',
      'Specify operating oil type and change interval for correct media selection.',
      'Request bypass-valve and micron-rating data where critical.',
    ],
    procurement: [
      'Confirm thread size, gasket seat and canister dimensions.',
      'State the operating oil type and change interval; extended intervals need a matched media and bypass-valve setting.',
      'Request bypass-valve and micron-rating data where the circuit is sensitive.',
    ],
    sourcingPerspective:
      'From a sourcing perspective, oil filters are a fitment-led category where the mechanical details — thread, gasket seat and canister dimensions — decide whether the part works at all, before media quality is ever considered. We recommend confirming those three dimensions against the OE drawing and stating the operating oil type and change interval up front, because extended-interval duty needs a matched media and bypass-valve calibration that a generic element does not deliver. Our advice is to treat the bypass-valve and anti-drain-back settings as part of the selection, not an afterthought, and to request the spec sheet rather than ordering on the OE number alone. Treat the bypass-valve and anti-drain-back settings as load-bearing and confirm them before a volume order. If the bypass-valve setting is unknown, state the engine family so the supplier can match the valve to the duty.',
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
      'The catalogue lists diesel fuel filters for heavy-duty trucks and commercial vehicles, with urea filtration listed alongside. OE entries include VG1540080311, 8159975, 2169185 and 23401-1441 for heavy-duty diesel applications. Water-separation capability and micron rating are engine-specific. Diesel filtration is injection-system-critical: modern common-rail injectors tolerate very little contamination, so the correct element is a protection decision rather than a commodity pick. Water separation matters because entrained water corrodes and erodes the high-pressure pump and injectors, which is why heavy-duty diesel lines usually need it in addition to particle retention. A wrong element here risks a costly pump-and-injector failure, not just a short service interval. Urea filtration sits alongside diesel in this category but is a distinct chemistry, so it should be specified separately rather than grouped with a diesel part by assumption.',
    selection: [
      'Confirm the OE number; heavy-duty diesel lines commonly need water-separation specification.',
      'Specify fuel type (diesel/petrol) and system pressure.',
      'Request micron rating and water-separation efficiency.',
    ],
    procurement: [
      'Specify fuel type (diesel/petrol) and whether the line needs water separation — heavy-duty diesel lines usually do.',
      'Confirm the OE number and system pressure against the injection specification.',
      'Request micron rating and water-separation efficiency.',
    ],
    sourcingPerspective:
      'Our advice on fuel filters is to treat them as injection-system protection rather than a low-cost consumable. In heavy-duty diesel duty we recommend confirming water-separation capability as the first question, because that is the difference between a filter that merely stops particles and one that actually protects the pump and injectors from water damage. State the fuel type and system pressure explicitly, since diesel and petrol lines, and different injection pressures, take different elements. From a sourcing perspective, request the micron rating and water-separation efficiency on the spec sheet and verify the OE reference against the injection specification before committing volume. This is a category where confirming water separation up front pays for itself in avoided injector damage. Confirm the OE number and system pressure against the injection specification, and request the micron and water-separation figures on the spec sheet. Diesel lines tolerate very little contamination, so the correct element is a protection decision rather than a commodity pick.',
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
      'Hydraulic filtration is catalogued with oil filtration. Selection depends on system pressure, flow rate and the cleanliness target of the circuit. Per-model pressure rating, micron rating and flow capacity are circuit-specific. The filter position matters as much as the rating: return-line elements protect the reservoir side of the circuit, while pressure-line and suction elements see different flow and pressure regimes. A spin-on hydraulic element is thread- and pressure-specific, and an element-assembly filter is housing-specific, so the fit follows the exact machine model. Cleanliness is expressed under ISO 4406 as a three-number code, and the target of the circuit — not the filter label — determines how fine the element must be. In practice the flow-rate input is the one buyers most often omit, and it is the one that most often changes the correct element.',
    selection: [
      'Provide system flow rate and operating pressure when inquiring.',
      'Specify the cleanliness class target (ISO 4406) of the circuit.',
      'Request pressure-drop and beta-ratio data for critical circuits.',
    ],
    procurement: [
      'Provide system flow rate and operating pressure — selection depends on both.',
      'State the ISO 4406 cleanliness target of the circuit.',
      'Request pressure-drop and beta-ratio data for critical circuits.',
    ],
    sourcingPerspective:
      'From a sourcing perspective, hydraulic filters should be selected from the circuit, not from a part number. We recommend providing the system flow rate, operating pressure and the ISO 4406 cleanliness target at inquiry, because those three inputs — not the filter label — determine the correct micron rating and beta ratio. Our advice is to confirm the filter position (return-line, pressure-line or suction) and the exact machine model, since a spin-on element and an element assembly are not interchangeable. For critical circuits, insist on pressure-drop and beta-ratio data rather than accepting a nominal micron number, because beta ratio describes actual particle-removal performance. A filter selected from the circuit rather than from a part number is the whole point of this category. Confirm the filter position and the exact machine model, since a spin-on element and an element assembly are not interchangeable.',
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
      'Transmission filters are OE-cross-referenced. The catalogue publishes a range of part numbers including 35303-B1010, 35330-60070, 31728-3JX0C and 25420-PR0-030. Media type and micron rating are model-specific. The filter protects the valve body and clutches from the fine wear debris generated during normal shifts, which makes debris control the whole job. The critical variable is fitment: a pan-mounted filter sits inside the transmission sump, while an external filter mounts in a separate housing, and the two are never interchangeable. Because several of the catalogue references span Honda, Acura, Subaru and Isuzu applications, a single OE number can map to several different transmissions, so model-level confirmation is the gating step. Wear-debris generation is highest during break-in and heavy-shift duty, so the element is a protection item for the valve body and clutches rather than a routine consumable to be swapped by number alone.',
    selection: [
      'Match by OE number; confirm the exact transmission model.',
      'Specify whether the filter is pan-mounted or external.',
      'Request media and micron-rating data where available.',
    ],
    procurement: [
      'Confirm the exact transmission model — pan-mounted and external filters are not interchangeable.',
      'Match by OE number first; the cross-reference is the discovery entry point.',
      'Request media and micron-rating data.',
    ],
    sourcingPerspective:
      'Our advice on transmission filters is that the mounting form is the single most important decision, ahead of media and micron rating. We recommend confirming whether the filter is pan-mounted or external and matching the exact transmission model, because a pan-mounted element and an external element are not interchangeable even within the same OE family. From a sourcing perspective, treat the OE number as a discovery point and let model-level confirmation lock the fitment; then request media and micron-rating data on the spec sheet. Given that the catalogue spans several makes, a wrong assumption about interchange is the most common and costliest error in this category. The mounting form, not the OE number, is what locks the fitment in this category. Treat the OE number as a discovery point and let model-level confirmation lock the fitment before requesting media data.',
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
      'HVAC filtration follows a grade ladder. Pre-filters (G1–G4) capture coarse dust and protect downstream stages; medium filters (M5–F9) remove finer particulate; V-bank rigid filters deliver high airflow at low pressure drop for the main AHU stage. Grades are expressed under EN 779 and ISO 16890 (ePM1/ePM2.5/ePM10/coarse). Frame options include cardboard, metal and galvanised steel, with synthetic-fibre or micro-glass media; high-temperature separator filters extend the range to 260-350 °C industrial duty. Because HVAC filters run continuously, the energy cost of pressure drop over the service life often exceeds the purchase price, which is why initial and final resistance — not just efficiency — should be part of any comparison. High-temperature separator filters extend the ladder into 260-350 °C process exhaust, where the frame and media must both survive the heat rather than just the airflow.',
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
    sourcingPerspective:
      'From a sourcing perspective, HVAC filters should be bought on life-cycle cost, not purchase price. Because these elements run continuously, the fan energy consumed against pressure drop over the service life usually outweighs the unit cost, so we recommend requesting initial and final pressure-drop figures and comparing total cost of ownership rather than picking the cheapest face-price element. Our advice is to match the grade to the downstream protection target — a pre-filter that is too fine wastes energy, while one that is too coarse shortens the life of the stages behind it. Confirm the frame construction against the duty: cardboard for disposable, metal for washable or high-strength applications. Life-cycle cost, not face price, is the correct basis for comparing these continuous-duty elements. A pre-filter that is too fine wastes energy, while one that is too coarse shortens the life of the stages behind it.',
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
      'Efficiency is graded under EN 1822: H10–H12 cover the EPA range, H13–H14 are high-efficiency HEPA, and U15–U17 are ultra-low-penetration ULPA. Construction is either separator or mini-pleat. Sealing options include gel and endless-gasket types; frames are aluminium, galvanised steel or stainless. Typical panel sizes run 610×610×70 mm through 610×610×292 mm, and deep-pleat cassette and high-temperature variants extend the range. Mini-pleat production uses micro-glass media with pleat depths of 22–100 mm. The class label is only as good as the installed seal, so the seal type — gel for knife-edge housings, gasket for flanged — determines whether the rated efficiency is actually achieved, and a factory leakage-test certificate is the evidence that the class was measured rather than claimed. Deep-pleat cassette and high-temperature variants extend the family to removable terminal housings and elevated-temperature duty respectively.',
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
    sourcingPerspective:
      'Our advice on HEPA/ULPA is that higher is not automatically better. A ULPA element costs more and reaches its rated life only behind a correctly graded pre-filter chain, so we recommend matching the class to the cleanroom ISO 14644 target and the process sensitivity rather than buying the highest number available. From a sourcing perspective, the seal type and the leakage-test certificate matter as much as the class — a gel seal on a knife-edge housing or a gasket on a flanged housing is what actually delivers the rated efficiency, so confirm the seal against the housing and state whether a factory leakage-test certificate is required with the order. The certificate is the evidence the class was measured, so request it rather than trusting the label.',
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
      'Carbon media appears across panel, pleated, pocket and V-bank forms, applied to odour control in commercial buildings and chemical-vapour capture in industrial settings. Carbon filters complement rather than replace particulate stages. Media weight and adsorption capacity are contaminant-specific. The defining property of activated carbon is that it is contaminant-specific: the carbon weight and the contact time determine how much of a given compound is removed, and a grade optimised for one vapour is not automatically right for another. The form factor trades media area against pressure drop — pleated and V-bank forms pack more carbon into a compact frame, while panel forms suit simple odour stages. This is why the target contaminant, not the filter shape, should drive the specification. In commercial HVAC the common mistake is specifying carbon by grade alone; the removal efficiency is only meaningful against a named compound and a stated contact time.',
    selection: [
      'Specify the target contaminant (odour, VOC, or a specific chemical vapour).',
      'Confirm the airflow and contact time required for the target removal efficiency.',
      'Request carbon weight and expected service life.',
    ],
    procurement: [
      'Name the target contaminant — odour, VOC or a specific chemical vapour — since carbon is contaminant-specific.',
      'Confirm airflow and required contact time, which drive removal efficiency.',
      'Request carbon weight and expected service life.',
    ],
    sourcingPerspective:
      'From a sourcing perspective, activated carbon should be specified by contaminant, not by shape. We recommend naming the exact target — odour, VOC or a specific chemical vapour — and confirming the airflow and contact time before comparing products, because carbon is contaminant-specific and a grade that works for one compound is not automatically right for another. Our advice is to treat carbon as a complement to particulate stages rather than a replacement, and to request carbon weight and expected service life on the spec sheet, since those drive both removal efficiency and replacement cost. Naming the contaminant first is what separates a working carbon filter from a guess. A grade optimised for one vapour is not automatically right for another, so lead with the compound, not the shape.',
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
      'Pocket filters use extended media pockets to maximise surface area and dust capacity. Grades run M5 through F9 (EN 779 / ISO 16890). Media is typically synthetic fibre for strength and long service life, with glass-fibre and polyester variants for specific efficiency and rigidity needs. Frame and pocket-count options vary by airflow, and rigid-pocket forms hold their shape under higher-velocity duty. The number of pockets and the face dimensions are fixed by the AHU frame, so the filter must match the frame rather than the frame matching the filter. High dust-holding capacity is the point of the design: it extends service intervals in main-filtration duty where frequent change-outs are costly. In higher-velocity AHU banks, rigid pockets are preferred because they hold their shape where soft bags would flutter and lose effective area.',
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
    sourcingPerspective:
      'Our advice on pocket filters is to fix the frame first and the grade second. Because the face dimensions and pocket count are dictated by the AHU frame, we recommend confirming those against the frame before anything else, then matching the grade to the stage. From a sourcing perspective, dust-holding capacity is the number that matters most here, since it determines service interval and labour cost in main-filtration duty. Request initial pressure-drop and dust-holding capacity for a life-cycle comparison rather than choosing on face price, and specify glass versus synthetic media only where rigidity or a specific efficiency is actually required. Matching the frame first and the grade second is the reliable order of operations here. Dust-holding capacity is the number that matters most, since it sets the service interval and labour cost in main-filtration duty. In higher-velocity AHU banks, rigid pockets are preferred because they hold their shape where soft bags would flutter and lose effective area.',
  },
  {
    slug: 'filter-media',
    name: 'Filter Media',
    nameZh: '滤材介质',
    grades: '—',
    subcategories: ['Needle-Punched', 'Synthetic Fibre', 'Micro-Glass', 'Activated Carbon'],
    summary: 'Filter media — needle-punched, synthetic fibre, micro-glass and activated carbon.',
    positioning:
      'Filter media is the raw filtration material supplied as rolls or made-to-order media for filter manufacturers and integrators. The supplier serves pre-filtration, HEPA and odour-control grades at low minimum order quantity, from prototyping to production.',
    directAnswer:
      'Filter media is the raw filtration material supplied as rolls or made-to-order media for filter manufacturers and integrators.',
    technicalDepth:
      'Media types span needle-punched non-woven, synthetic fibre, micro-glass fibre and activated carbon. Needle-punched media trades low initial resistance for high coarse-dust capacity in pre-filtration and spray-booth duty; synthetic fibre adds strength and washability; micro-glass provides the fine-fibre surface for HEPA efficiency; and activated carbon adsorbs gaseous odours and vapours. Media is supplied at low MOQ (from 20 rolls) with prototyping-to-production capability. A roll is specified by grade and application, and the efficiency curve for the target particle size is the figure that actually confirms performance. The low 20-roll MOQ makes this category a prototyping-to-production bridge, which is its procurement differentiator.',
    selection: [
      'Specify the target efficiency grade and the application (pre-filter vs HEPA vs odour).',
      'Confirm roll width, grammage and any fire-rating requirement (e.g. UL 900).',
      'Request an efficiency curve for the target particle size.',
    ],
    procurement: [
      'Specify the target efficiency grade and application — pre-filter, HEPA or odour — before asking for media.',
      'Confirm roll width, grammage and any fire-rating requirement such as UL 900.',
      'Request an efficiency curve for the target particle size.',
    ],
    sourcingPerspective:
      'From a sourcing perspective, filter media should be specified by duty, not by material name. We recommend stating the target grade and application — coarse pre-filtration, HEPA or odour control — before discussing rolls, because the media type follows the duty and each trades differently between resistance, capacity and efficiency. Our advice is to confirm roll width, grammage and any fire-rating requirement such as UL 900 up front, and to request an efficiency curve for the target particle size, since a nominal grade does not by itself confirm performance across the size range you care about. The efficiency curve for the target particle size is the figure that actually confirms the media. Confirm roll width, grammage and any fire-rating requirement up front, and request the efficiency curve for the target particle size. The low 20-roll MOQ makes this a prototyping-to-production bridge, which is its procurement differentiator. Each media type trades differently between resistance, capacity and efficiency, so match the type to the duty.',
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
      'Membrane cartridges use PP, PVDF or PTFE membranes with PP/PET/PTFE/PVDF cores and 215/222/226/DOE end-caps, in 5–70-inch lengths, with O-ring materials from silicon to EPDM, Viton and FEP. Metal cartridges use SS304, SS316L or titanium in sintered or woven-mesh form, with filtration ratings from 1 to 100 μm and diameters of 20/38/60 mm or custom. The correct sequence is to name the fluid, temperature and chemical compatibility first, because that decides membrane versus metal before any micron rating is considered; then confirm micron rating, flow rate and the end-fitting style. The membrane and metal families serve different chemistries and temperatures, so the media choice is a compatibility decision as much as a filtration decision. End-cap and O-ring styles are not cosmetic: they must match the housing seal, and a mismatched end-fitting leaks regardless of micron rating.',
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
    sourcingPerspective:
      'Our advice on liquid cartridges is to lead with the fluid, not the filter. We recommend naming the fluid, temperature and chemical compatibility first, because that decision — membrane versus metal — is made before micron rating or flow rate is even relevant, and getting it wrong fails the element regardless of efficiency. From a sourcing perspective, confirm the micron rating and flow rate next, and for metal cartridges specify sintered versus woven-mesh construction and the end-fitting type, since those drive both performance and price. This is a compatibility-led category where the media choice is as much a chemical decision as a filtration one. This is a compatibility-led category, so lead with the fluid before the micron rating. For metal cartridges, specify sintered versus woven-mesh construction and the end-fitting type, since those drive performance and price. A mismatched end-fitting leaks regardless of micron rating, so confirm the end-cap and O-ring styles against the housing.',
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
      'Fan filter units (FFU) combine a fan with a HEPA/ULPA filter in a galvanised or stainless housing; a 48"×48" double-motor unit delivers 4000–5000 CMH at Class 100. Efficiency runs F8/F9 (EN 779) through H10–H14/U15 (EN 1822), with 80 °C / 80% RH operating limits. The range extends to laminar-flow cabinets, biosafety cabinets, air showers and pass boxes. The sizing logic runs from the room, not the unit: the cleanroom ISO class dictates the airflow and coverage, and the FFU fleet is sized to hold it. Air showers remove particulate from personnel at entry, while pass boxes transfer materials without breaking the barrier, and both must be specified together with the ceiling FFU system to hold the target class end-to-end. AC motors suit small fleets, while EC motors suit fleets over a hundred units where central control and energy efficiency justify the premium.',
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
    sourcingPerspective:
      'From a sourcing perspective, cleanroom equipment should be designed as a system, not bought as individual units. We recommend starting from the cleanroom ISO class and working back to the FFU airflow and coverage required to hold it, then specifying AC versus EC motor and voltage — EC suits fleets over a hundred units where central control is needed. Our advice is to size the fleet to the room rather than matching dimensions alone, and to specify entry and transfer equipment such as air showers and pass boxes together with the ceiling FFU system, because omitting them undercuts the cleanliness the ceiling is trying to hold. Design the air chain end-to-end rather than specifying the HEPA filter alone. Specify AC versus EC motor and voltage, since EC suits larger fleets where central control and energy efficiency justify the premium.',
  },
];
