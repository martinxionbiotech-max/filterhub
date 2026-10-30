// Buyer's guide cluster — pillar + cluster guides (procurement-grade rewording).
// Pillars: Selection (air/hepa), Standards (efficiency grades), Cleanroom, OEM.
// Grade definitions are framework-level public-standard statements; no unverified numeric claims.

export interface Guide {
  slug: string;
  title: string;
  pillar: string;
  description: string;
  directAnswer: string;
  keyTakeaway: string;
  standards: string[];
  sections: { heading: string; body: string }[];
  sourcingPerspective: string;
  related: string[];
  sources: string[];
}

export const guides: Guide[] = [
  {
    slug: 'air-filter-selection',
    title: 'Engine air filters: types, materials and selection',
    pillar: 'Selection',
    description:
      'How to match engine intake air filters by form factor, efficiency and OE cross-reference.',
    directAnswer:
      'Start from the OE number or the equipment model, confirm the filter form factor against the housing, then verify media construction for the dust environment. The catalogue cross-reference is a discovery aid, not a verified fitment.',
    sections: [
      {
        heading: 'Why form factor matters first',
        body: 'Engine intake housings dictate the filter shape. Panel elements fit compact passenger and commercial vehicles; round elements fit agricultural and off-highway equipment; heavy-duty cylindrical cartridges serve trucks and construction machinery. Picking the right form factor eliminates most wrong orders before efficiency is even considered. PowerCore construction adds a compact pleated-media option for housings with limited space.',
      },
      {
        heading: 'Efficiency and dust capacity',
        body: 'Engine intake filtration is graded under ISO 5011, which measures multi-pass efficiency and dust-holding capacity together. A filter that traps particles efficiently but loads up quickly costs more in downtime than one with a balanced efficiency-to-capacity curve. In heavy-dust environments, greater media area extends service intervals more than a marginal efficiency gain.',
      },
      {
        heading: 'Reading the OE cross-reference',
        body: 'Part numbers such as 42N-62-15470 (Komatsu loader), P778989 (Mitsubishi compressor) and 1542743/8-475386 (Volvo) are catalogued as cross-reference entries. A cross-reference links a filter to an OE number; it does not by itself confirm the dimensional match. Request the spec sheet and check against the OE drawing before committing a bulk order.',
      },
    ],
    sourcingPerspective:
      'From a sourcing perspective, we recommend leading with the OE number and the equipment model, then locking the form factor to the housing before discussing media. In our experience, the single most common wrong order in engine intake comes from matching a number without confirming the form factor, because one OE family can span several housings. Our advice is to treat the catalogue cross-reference as a discovery aid and to request the spec sheet for dimensions and ISO 5011 dust capacity before committing volume — a filter that traps well but loads quickly costs more in downtime than a balanced element.',
    keyTakeaway:
      'Start from the OE number or the equipment model, confirm the filter form factor against the housing, then verify media construction for the dust environment. Treat the catalogue cross-reference as a discovery aid and check the spec sheet against the OE drawing before committing a bulk order.',
    standards: ['ISO 5011', 'ISO 16890', 'EN 779'],
    related: ['filter-efficiency-grades', 'filter-media-selection', 'hepa-cleanroom-sourcing', 'oem-procurement-process'],
    sources: [
      'ISO 5011 — engine air filter multi-pass test (industry standard reference)',
      'ISO 16890 / EN 779 — HVAC-grade references for the ventilation categories',
    ],
  },
  {
    slug: 'hepa-cleanroom-sourcing',
    title: 'Sourcing HEPA/ULPA filters and cleanroom equipment: what to verify',
    pillar: 'Selection',
    description:
      'How to match HEPA/ULPA efficiency class, seal type and FFU sizing to cleanroom requirements.',
    directAnswer:
      'Lock the efficiency class to the cleanroom ISO 14644 target, verify the seal type against the housing, and confirm whether a factory leakage-test certificate is required. For FFU selection, size the unit to the required airflow and cleanliness class rather than matching dimensions alone.',
    sections: [
      {
        heading: 'Efficiency class under EN 1822',
        body: 'HEPA and ULPA grades split into three bands. H10–H12 cover the EPA range, H13–H14 are high-efficiency HEPA, and U15–U17 are ultra-low-penetration ULPA. The choice is not a matter of higher being better — a U15 unit costs more and needs a properly graded pre-filter chain upstream to reach its rated life. Match the class to the cleanroom target, not to a marketing claim.',
      },
      {
        heading: 'Construction: separator vs mini-pleat',
        body: 'HEPA elements are built either with separator pleat-spacing or as compact mini-pleat units. Mini-pleat packs more media area into the same frame, which suits space-constrained housings. Seal type matters more than pleat style for installation: gel seals fit knife-edge housings, gasket and endless-gasket seals fit flanged housings. Frame material — aluminium, galvanised steel or stainless — follows the environment.',
      },
      {
        heading: 'Sizing and fan filter units (FFU)',
        body: 'Standard HEPA panels run from 610×610×70 mm up to 610×610×292 mm, with deeper units carrying more media area. An FFU combines a fan with a HEPA/ULPA filter in a galvanised or stainless housing; a 48"×48" double-motor unit delivers 4000–5000 CMH at Class 100. Efficiency spans F8/F9 (EN 779) through H10–H14/U15 (EN 1822), with 80 °C / 80% RH operating limits. Specify AC or EC motor and voltage (110/220 V) at inquiry.',
      },
    ],
    sourcingPerspective:
      'From a sourcing perspective, our advice is to lock the efficiency class and the seal type before anything else, because those two decisions determine whether the rated efficiency is actually delivered in your housing. We recommend confirming whether a factory leakage-test certificate is required with the order, since the certificate is the evidence the class was measured rather than claimed. In our view, matching the class to the cleanroom ISO 14644 target — not to a marketing claim — is the habit that avoids overpaying for ULPA where HEPA would do.',
    keyTakeaway:
      'Lock the efficiency class to the cleanroom ISO 14644 target and the seal type to the housing before anything else. Confirm whether a factory leakage-test certificate is required, and size any FFU to airflow and cleanliness class rather than dimensions alone.',
    standards: ['EN 1822', 'ISO 14644', 'EN 779'],
    related: ['hepa-vs-ulpa', 'cleanroom-filtration-solutions', 'air-filter-selection', 'filter-media-selection'],
    sources: [
      'EN 1822 — HEPA/ULPA efficiency classification (industry standard reference)',
      'ISO 14644 — cleanroom classification (industry standard reference)',
    ],
  },
  {
    slug: 'filter-efficiency-grades',
    title: 'Filter efficiency grades: EN 1822, ISO 16890 and MERV compared',
    pillar: 'Standards',
    description:
      'A framework-level comparison of the efficiency scales used across the catalogue — EN 1822, ISO 16890 and MERV.',
    directAnswer:
      'Different filter families carry different efficiency scales: EN 1822 grades HEPA/ULPA by MPPS penetration, ISO 16890 grades HVAC media by particle-size fraction (ePM1/ePM2.5/ePM10), and MERV grades by composite arrestance across particle bands. Read the scale in its own terms rather than treating the labels as interchangeable.',
    sections: [
      {
        heading: 'EN 1822 for HEPA and ULPA',
        body: 'EN 1822 defines HEPA and ULPA grades by penetration at the most penetrating particle size. The ladder runs H10–H12 (EPA), H13–H14 (HEPA) and U15–U17 (ULPA). This scale is used for cleanroom terminal filters and critical environments, where the question is how little penetrates at the worst particle size, not how much is arrested on average.',
      },
      {
        heading: 'ISO 16890 for HVAC media',
        body: 'ISO 16890 grades HVAC filters by their removal of particle-size fractions — ePM1, ePM2.5, ePM10 — plus a coarse class. It replaced the older EN 779 G/M/F ladder for general ventilation. The value of this scale is that it ties a filter to a real-world particle fraction, which makes it easier to reason about occupant exposure than an abstract average.',
      },
      {
        heading: 'MERV for a composite view',
        body: 'MERV, defined by ASHRAE 52.2, assigns a single number across a band of particle sizes, from coarse pre-filters up to high-efficiency grades. It is common in North American specifications. Because each scale measures a different thing, a direct one-to-one translation between MERV, ISO 16890 and EN 1822 is approximate; confirm the governing standard for the region and the equipment before quoting.',
      },
    ],
    sourcingPerspective:
      'From a sourcing perspective, we recommend reading each efficiency scale in its own terms and confirming the governing standard for the region and the equipment before quoting. Our advice is to treat any one-to-one translation between MERV, ISO 16890 and EN 1822 as approximate, because each scale measures a different thing. In our experience, the practical win is to anchor a specification to the standard the supplier actually tests against, then compare like-for-like rather than chasing an abstract higher number.',
    keyTakeaway:
      'Read each efficiency scale in its own terms — EN 1822 grades HEPA/ULPA by MPPS penetration, ISO 16890 grades HVAC media by particle fraction, and MERV grades by composite arrestance. Confirm the governing standard for the region and equipment before quoting, and treat cross-scale translation as approximate.',
    standards: ['EN 1822', 'ISO 16890', 'ASHRAE 52.2', 'MERV'],
    related: ['hepa-vs-ulpa', 'air-filter-selection', 'filter-media-selection'],
    sources: [
      'EN 1822, ISO 16890, ASHRAE 52.2 — efficiency classification standards (framework-level reference)',
    ],
  },
  {
    slug: 'hepa-vs-ulpa',
    title: 'HEPA vs ULPA: when the extra penetration class is worth it',
    pillar: 'Standards',
    description:
      'How to decide between H13/H14 HEPA and U15–U17 ULPA for a cleanroom or critical environment.',
    directAnswer:
      'ULPA removes a smaller fraction of particles at MPPS than HEPA, but it only earns its cost where the process genuinely requires the higher class — and only with a correctly graded pre-filter chain upstream. Choose by the cleanroom ISO class and the process sensitivity, not by the higher number.',
    sections: [
      {
        heading: 'The class ladder',
        body: 'HEPA spans H13–H14; ULPA spans U15–U17. Each step up reduces penetration at the most penetrating particle size. The practical difference matters in semiconductor, pharmaceutical and biosafety applications where even a small penetration gain protects yield or sterility. In a standard cleanroom, H13/H14 is usually the working point.',
      },
      {
        heading: 'Why higher is not automatically better',
        body: 'A ULPA element has a higher initial resistance and a shorter life unless it is protected by an adequate pre-filter chain. Installing ULPA where HEPA would do simply adds energy cost and replacement frequency. The correct sequence is to define the required cleanroom class first, then back out the terminal filter grade.',
      },
      {
        heading: 'Seal and certificate matter as much as class',
        body: 'The class label is only as good as the installed seal. A gel seal on a knife-edge housing, or a gasket on a flanged housing, determines whether the rated efficiency is actually achieved. Confirm whether a factory leakage-test certificate is required, since the certificate is the evidence the class was measured, not just claimed.',
      },
    ],
    sourcingPerspective:
      'From a sourcing perspective, our advice is to choose by the cleanroom ISO class and the process sensitivity, not by the higher number. We recommend defining the required cleanroom class first and then backing out the terminal filter grade, because a ULPA element only earns its cost behind a correctly graded pre-filter chain. In our view, installing ULPA where HEPA would do simply adds energy cost and replacement frequency, so the sequence — class first, then grade — is the discipline that keeps procurement honest.',
    keyTakeaway:
      'Choose by the cleanroom ISO class and the process sensitivity, not the higher number. ULPA only earns its cost behind a correctly graded pre-filter chain, and the installed seal and leakage-test certificate matter as much as the class label.',
    standards: ['EN 1822'],
    related: ['filter-efficiency-grades', 'hepa-cleanroom-sourcing', 'cleanroom-filtration-solutions'],
    sources: [
      'EN 1822 — HEPA/ULPA classification (industry standard reference)',
    ],
  },
  {
    slug: 'filter-media-selection',
    title: 'Filter media types: needle-punched, synthetic, micro-glass and carbon',
    pillar: 'Standards',
    description:
      'Choosing the raw media type for pre-filtration, HEPA and odour-control duty.',
    directAnswer:
      'Media choice follows the duty: needle-punched non-woven for coarse pre-filtration, synthetic fibre for general HVAC strength, micro-glass for HEPA efficiency, and activated carbon for gaseous odour and vapour removal. Pick the media that serves the target contaminant and the required grade before considering roll or cut size.',
    sections: [
      {
        heading: 'Coarse pre-filtration: needle-punched and synthetic',
        body: 'Needle-punched non-woven media captures large particles in HVAC pre-filtration and spray-booth duty. Synthetic fibre adds strength and washability for general ventilation. These grades trade low initial resistance for high capacity, protecting the finer stages behind them.',
      },
      {
        heading: 'Fine and HEPA: micro-glass',
        body: 'Micro-glass fibre provides the fine-fibre surface needed for HEPA and ULPA efficiency. It is less robust than synthetic media and depends on upstream pre-filtration to reach a full service life. When a spec calls for H13/H14 or higher, micro-glass is the working media, with mini-pleat or separator construction to hold the area.',
      },
      {
        heading: 'Odour and vapour: activated carbon',
        body: 'Activated carbon adsorbs gaseous odours and chemical vapours that particulate media cannot touch. It is contaminant-specific, so the target — odour, VOC or a named chemical — determines the carbon weight and contact time. Carbon media complements particulate stages; it does not replace them.',
      },
    ],
    sourcingPerspective:
      'From a sourcing perspective, we recommend stating the duty — coarse pre-filtration, HEPA or odour control — before discussing rolls, because the media type follows the duty and each type trades differently between resistance, capacity and efficiency. Our advice is to confirm roll width, grammage and any fire-rating requirement up front, and to request an efficiency curve for the target particle size rather than accepting a nominal grade. In our experience, a nominal grade does not by itself confirm performance across the size range that matters to you.',
    keyTakeaway:
      'State the duty — coarse pre-filtration, HEPA or odour control — before discussing rolls, because the media type follows the duty. Confirm roll width, grammage and any fire-rating requirement, and request an efficiency curve for the target particle size.',
    standards: ['EN 779', 'ISO 16890', 'EN 1822', 'UL 900'],
    related: ['filter-efficiency-grades', 'air-filter-selection', 'hepa-cleanroom-sourcing', 'oem-procurement-process'],
    sources: [
      'Filter-media type taxonomy: needle-punched / synthetic / micro-glass / carbon',
    ],
  },
  {
    slug: 'cleanroom-filtration-solutions',
    title: 'Cleanroom filtration: FFU, laminar flow and contamination control',
    pillar: 'Cleanroom',
    description:
      'How fan filter units, laminar-flow cabinets and pass-throughs combine into a cleanroom filtration solution.',
    directAnswer:
      'A cleanroom filtration solution starts from the ISO cleanliness class, then selects FFU airflow and coverage to hold it, backed by laminar-flow workstations, biosafety cabinets, and air showers and pass boxes for material and personnel transfer. Design the air chain end-to-end rather than specifying the HEPA filter alone.',
    sections: [
      {
        heading: 'The FFU as the ceiling engine',
        body: 'A fan filter unit generates ceiling-down laminar airflow and is sized by airflow and coverage, not by filter dimensions alone. A 48"×48" double-motor unit delivers 4000–5000 CMH at Class 100. Efficiency runs from F8/F9 (EN 779) through H10–H14/U15 (EN 1822), with 80 °C / 80% RH operating limits. AC motors suit small fleets; EC motors suit fleets over 100 units that need central control.',
      },
      {
        heading: 'Laminar flow and biosafety for the working zone',
        body: 'Vertical and horizontal laminar-flow cabinets deliver a clean working zone for laboratory and repair tasks. Biosafety cabinets add containment for biological work. These are point solutions layered on top of the room-level FFU ceiling, so the two must be specified together to hold the target class.',
      },
      {
        heading: 'Entry and transfer control',
        body: 'Air showers remove particulate from personnel at entry; pass boxes transfer materials without breaking the barrier. Together with the FFU ceiling and working-zone equipment, they form the contamination-control chain. A solution that omits entry and transfer control undercuts the cleanliness the ceiling is trying to hold.',
      },
    ],
    sourcingPerspective:
      'From a sourcing perspective, our advice is to design the air chain end-to-end rather than specifying the HEPA filter alone. We recommend starting from the cleanroom ISO class and working back to the FFU airflow and coverage, then specifying entry and transfer equipment such as air showers and pass boxes together with the ceiling FFU system. In our view, a solution that omits entry and transfer control undercuts the cleanliness the ceiling is trying to hold, so the system should be quoted as a whole, not unit by unit.',
    keyTakeaway:
      'Design the air chain end-to-end from the ISO cleanliness class, then select FFU airflow and coverage to hold it. Specify air showers and pass boxes together with the ceiling FFU system, since omitting entry and transfer control undercuts the cleanliness the ceiling is trying to hold.',
    standards: ['ISO 14644', 'EN 1822', 'EN 779'],
    related: ['hepa-cleanroom-sourcing', 'hepa-vs-ulpa', 'filter-efficiency-grades', 'oem-procurement-process'],
    sources: [
      'ISO 14644 — cleanroom classification (industry standard reference)',
    ],
  },
  {
    slug: 'oem-procurement-process',
    title: 'Automotive filter OEM manufacturing guide: from RFQ to first article',
    pillar: 'OEM',
    description:
      'A framework-level walkthrough of sourcing filters under OEM or private-label terms.',
    directAnswer:
      'OEM procurement runs from a clear RFQ — OE number, drawing, quantity, target grade and packaging — through sampling, first-article inspection against the OE drawing, and then serial production. The catalogue cross-reference is the discovery step; the drawing and first article are what lock the fitment.',
    sections: [
      {
        heading: 'The RFQ carries the fitment',
        body: 'A useful RFQ states the OE number, the equipment make/model/year, a drawing or sample, the target quantity and the efficiency or media requirement. The more of this arrives up front, the faster a supplier can quote accurately. Missing the drawing is the most common cause of a wrong first sample.',
      },
      {
        heading: 'First article against the OE drawing',
        body: 'Before serial production, request a first-article sample and check it against the OE drawing — dimensions, end-cap or seal type, and media. The catalogue cross-reference links a part to an OE number but does not confirm the dimensional match, so the first article is the real verification step.',
      },
      {
        heading: 'Serial production, packaging and lead time',
        body: 'After the first article is approved, agree on MOQ, packaging, marking and lead time. Standard sizes ship faster; custom sizes add lead time. Confirm whether private-label packaging and neutral marking are required, and put the approved sample on file as the reference for every subsequent batch.',
      },
    ],
    sourcingPerspective:
      'From a sourcing perspective, our advice is to put the drawing and the first article at the centre of the process, because the catalogue cross-reference only links a part to an OE number — it does not confirm the dimensional match. We recommend carrying the OE number, the equipment make/model/year, a drawing or sample, the target quantity and the media requirement in the RFQ, since missing the drawing is the most common cause of a wrong first sample. In our experience, the first-article check against the OE drawing is the step that converts a cross-reference into a verified fitment.',
    keyTakeaway:
      'Put the drawing and the first article at the centre of the process. Carry the OE number, the equipment make/model/year, a drawing or sample, the target quantity and the media requirement in the RFQ, and check the first article against the OE drawing before serial production.',
    standards: [],
    related: ['air-filter-selection', 'hepa-cleanroom-sourcing', 'filter-media-selection', 'cleanroom-filtration-solutions'],
    sources: [
      'OEM/ODM capability notes: media, pocket, HEPA and cleanroom lines',
    ],
  },
  {
    slug: 'cabin-vs-engine-air-filter',
    title: 'Cabin air filter vs engine air filter: two different jobs',
    pillar: 'Selection',
    description:
      'How cabin and engine intake filters differ in function, media, fitment and replacement, and why the two are never interchangeable.',
    directAnswer:
      'A cabin filter cleans the air entering the vehicle interior for occupants; an engine air filter cleans the air entering the combustion chamber for the engine. They sit in different systems, use different media grades and change intervals, and are never interchangeable.',
    sections: [
      {
        heading: 'Two systems, two failure modes',
        body: 'The engine air filter sits upstream of the combustion chamber, shielding cylinders, pistons and rings from abrasive dust in a high-velocity intake flow. It is graded under ISO 5011 and sized by the intake housing, so the failure mode is a wrong form factor or housing match. The cabin filter sits in the low-velocity HVAC plenum, protecting occupants from dust, pollen and particulates, and is graded under ISO 16890. Its failure mode is a wrong year or trim, because one OE number can span several body styles.',
      },
      {
        heading: 'Media and grade diverge',
        body: 'Engine intake media is tuned for dust capacity and intake restriction, so capacity and pressure-drop behaviour matter as much as raw efficiency. Cabin media is tuned for particle holding and, where specified, odour control through activated carbon. The two carry different efficiency scales — ISO 5011 multi-pass for engine intake, ISO 16890 particle-fraction for cabin — so their grades are not directly comparable even when the labels look similar.',
      },
      {
        heading: 'Fitment and replacement rhythm',
        body: 'An engine filter is replaced by dust loading rather than a fixed calendar, so the operating environment sets the interval. A cabin filter is replaced by time or mileage and by the occupant environment, with carbon media only worth the cost in congested urban or commercial-cab duty. Each is cross-referenced by OE number, but each must be confirmed against its own housing or vehicle application.',
      },
    ],
    sourcingPerspective:
      'The two filters fail for different reasons, so they are sourced against different checks. An engine intake element is confirmed by form factor and housing, then by media and dust capacity for the operating environment; a cabin element is confirmed by vehicle year and trim, then by particle versus carbon media. Ordering one from the other\u2019s OE family is the quickest route to a wrong part, because the reference looks similar but the housing and the duty do not transfer.',
    keyTakeaway:
      'Match each filter to its own system: the engine filter protects the combustion chamber and is sized by the intake housing, while the cabin filter protects occupants and is matched by vehicle year and trim. Confirm the OE number and the specific application for each, and state particle-only versus carbon media for the cabin element.',
    standards: ['ISO 5011', 'ISO 16890'],
    related: ['air-filter-selection', 'filter-media-selection', 'filter-efficiency-grades'],
    sources: [
      'ISO 5011 — engine air filter multi-pass test (industry standard reference)',
      'ISO 16890 — HVAC/cabin filter particle-fraction grading (industry standard reference)',
    ],
  },
  {
    slug: 'oil-filter-types',
    title: 'Oil filter types: spin-on, cartridge and element assembly',
    pillar: 'Selection',
    description:
      'How spin-on, cartridge and element-assembly oil filters differ, and how thread, gasket, bypass valve and micron rating drive selection.',
    directAnswer:
      'Oil filters come in three construction families — spin-on canisters, replaceable cartridges and element assemblies. Selection turns on the mounting thread, gasket seat, canister dimensions, and the bypass and anti-drain-back valve settings, which are engine-family-specific.',
    sections: [
      {
        heading: 'Three construction families',
        body: 'A spin-on filter is a self-contained canister that threads onto the engine, sealed by a gasket. A replaceable cartridge is an element that drops into a reusable housing, common on Volkswagen and BMW engines. An element assembly is a housing-and-element unit used in heavy equipment. Each fits a specific mounting, and the three are never interchangeable even within the same engine family.',
      },
      {
        heading: 'What the two valves do',
        body: 'Two valves govern protection beyond the media. The bypass valve opens under high pressure to keep oil flowing even if the media is blocked, and the anti-drain-back valve holds oil in the filter between starts. Both settings are engine-family-specific, which is why a number-led order without a fitment check is the main failure mode in this category.',
      },
      {
        heading: 'Micron rating and service interval',
        body: 'Micron rating, bypass-valve setting and canister dimensions are engine-family-specific. Service intervals are oil-determined, so stating the operating oil type and change interval is what lets the media grade be matched to the actual duty. Extended drain intervals need a matched media and bypass calibration that a generic element does not deliver.',
      },
    ],
    sourcingPerspective:
      'The mechanical details decide whether an oil filter fits and seals before media quality is ever considered. Thread pitch, gasket seat and canister dimensions have to be confirmed against the OE drawing, and the bypass and anti-drain-back settings should be treated as part of the selection rather than an afterthought. For extended-interval duty, the media grade and bypass calibration have to match the actual service schedule, which is why the oil type and change interval belong in the inquiry from the start.',
    keyTakeaway:
      'Confirm the mounting form — spin-on, cartridge or element assembly — the thread and gasket dimensions, and the bypass-valve setting before ordering. State the oil grade and change interval so the media grade matches the service schedule.',
    standards: ['ISO 4548'],
    related: ['air-filter-selection', 'oem-procurement-process', 'filter-media-selection'],
    sources: [
      'ISO 4548 — lubricating oil filter test methods (industry standard reference)',
    ],
  },
  {
    slug: 'efficiency-vs-pressure-drop',
    title: 'Filtration efficiency vs pressure drop: why higher is not automatically better',
    pillar: 'Standards',
    description:
      'How to weigh filtration efficiency against pressure drop, dust-holding capacity and service life when comparing filters.',
    directAnswer:
      'Filtration efficiency describes how much particulate a filter removes; pressure drop describes how hard the system has to work to push air or oil through it. A higher-efficiency filter almost always carries higher initial resistance, so the right filter balances efficiency with pressure drop, dust-holding capacity, operating conditions and service life.',
    sections: [
      {
        heading: 'What each number measures',
        body: 'Efficiency is the fraction of particles removed at a given size, graded by MPPS penetration under EN 1822, particle fraction under ISO 16890, or multi-pass under ISO 5011. Pressure drop is the resistance to flow, stated as an initial value for a clean element and a final value at terminal loading. The two move together: finer media removes more but resists more.',
      },
      {
        heading: 'The trade-off',
        body: 'Higher efficiency raises initial pressure drop, which means more fan or pump energy, or reduced flow. In continuous HVAC duty the energy cost of pressure drop over the service life often exceeds the purchase price. In engine intake, a filter that loads quickly shortens the service interval regardless of its efficiency label. The cost of the trade-off depends on the duty, not on the efficiency number alone.',
      },
      {
        heading: 'Reading it as a system',
        body: 'Judge the filter on the full curve: initial pressure drop, final pressure drop, and the dust-holding capacity between them, in the actual operating environment. A useful specification states the duty and the terminal resistance, not just the efficiency grade. This is what separates a filter that performs from one that only scores well on a single number.',
      },
    ],
    sourcingPerspective:
      'A single efficiency number, quoted without pressure drop and dust capacity, describes only part of a filter\u2019s behaviour. The useful comparison brings all three together: how much is removed, how hard the system works to move air or fluid, and how long the element lasts before terminal resistance. For continuous-duty HVAC this makes life-cycle cost the correct basis for choice; for dust-heavy engine intake it makes dust capacity and intake-restriction control the figures that schedule replacement.',
    keyTakeaway:
      'Evaluate efficiency together with pressure drop, dust-holding capacity and the operating duty. A filter that traps a high fraction of particles but loads quickly or forces high energy consumption can cost more in downtime and energy than a balanced element.',
    standards: ['EN 1822', 'ISO 16890', 'ISO 5011'],
    related: ['filter-efficiency-grades', 'filter-media-selection', 'air-filter-selection', 'hepa-vs-ulpa'],
    sources: [
      'EN 1822 / ISO 16890 / ISO 5011 — efficiency classification and multi-pass test references',
    ],
  },
  {
    slug: 'filter-moq-lead-time',
    title: 'Automotive filter MOQ, lead time and pricing: what drives them',
    pillar: 'OEM',
    description:
      'How minimum order quantity, lead time and pricing are set for automotive filters, and what to state in an inquiry to get an accurate quote.',
    directAnswer:
      'MOQ, lead time and price for automotive filters are quoted per line. They turn on whether the part is a standard or custom size, the media and packaging, and the target quantity — standard sizes ship faster, while custom sizes and private-label packaging add lead time.',
    sections: [
      {
        heading: 'Why MOQ is per line',
        body: 'Standard catalogue sizes carry lower minimums because tooling and media are shared across the range. A custom dimension or a dedicated OE match can carry a higher minimum to cover setup. Filter media is available at low minimum order quantity, from 20 rolls, which makes it a prototyping-to-production bridge for integrators who are not yet at finished-filter volumes.',
      },
      {
        heading: 'Lead time follows the specification',
        body: 'Standard sizes ship faster; custom sizes, tooling changes and private-label packaging add lead time. The approved first-article sample is put on file as the reference for every subsequent batch, which is what keeps later runs consistent. Lead time is therefore an output of the specification, not a fixed number to be quoted before the details are known.',
      },
      {
        heading: 'Pricing factors',
        body: 'Media type, efficiency grade, frame and seal construction, and quantity all move the unit price. Indicative pricing is confirmed on quotation. The catalogue cross-reference is a discovery aid, not a committed price, so a figure only becomes firm once the specification and quantity are stated.',
      },
    ],
    sourcingPerspective:
      'MOQ and lead time are outputs of the specification, not fixed numbers. A clear inquiry — OE number or drawing, target quantity, and media and packaging requirement — is what lets a supplier quote accurately, and a missing drawing is the most common cause of a wrong first sample or a delayed quote. Because standard sizes and private-label runs sit on different minimums and lead times, stating the packaging requirement up front prevents a quote that has to be reworked later.',
    keyTakeaway:
      'State the OE number or drawing, the target quantity, and whether private-label packaging is required up front. MOQ and lead time are per-line figures, so a clear specification is what converts an inquiry into an accurate quote.',
    standards: [],
    related: ['oem-procurement-process', 'air-filter-selection'],
    sources: [
      'OEM/ODM capability notes: media, pocket, HEPA and cleanroom lines',
    ],
  },
];
