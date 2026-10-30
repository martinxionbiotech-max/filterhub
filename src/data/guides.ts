// Buyer's guide cluster — pillar + cluster guides (procurement-grade rewording).
// Pillars: Selection (air/hepa), Standards (efficiency grades), Cleanroom, OEM.
// Grade definitions are framework-level public-standard statements; no unverified numeric claims.

export interface Guide {
  slug: string;
  title: string;
  pillar: string;
  description: string;
  directAnswer: string;
  sections: { heading: string; body: string }[];
  sourcingPerspective: string;
  related: string[];
  sources: string[];
}

export const guides: Guide[] = [
  {
    slug: 'air-filter-selection',
    title: 'Selecting engine intake air filters: panel, round and heavy-duty',
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
    related: ['filter-efficiency-grades', 'oem-procurement-process'],
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
    related: ['hepa-vs-ulpa', 'cleanroom-filtration-solutions'],
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
    related: ['hepa-vs-ulpa', 'air-filter-selection'],
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
    related: ['filter-efficiency-grades', 'hepa-cleanroom-sourcing'],
    sources: [
            'EN 1822 — HEPA/ULPA classification (industry standard reference)',
    ],
  },
  {
    slug: 'filter-media-selection',
    title: 'Filter media selection: needle-punched, synthetic, micro-glass and carbon',
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
    related: ['filter-efficiency-grades', 'air-filter-selection'],
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
    related: ['hepa-cleanroom-sourcing', 'hepa-vs-ulpa'],
    sources: [
            'ISO 14644 — cleanroom classification (industry standard reference)',
    ],
  },
  {
    slug: 'oem-procurement-process',
    title: 'OEM filter procurement: from RFQ to first article',
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
    related: ['air-filter-selection', 'hepa-cleanroom-sourcing'],
    sources: [
            'OEM/ODM capability notes: media, pocket, HEPA and cleanroom lines',
    ],
  },
];
