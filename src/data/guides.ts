// Buyer's guide cluster — Phase 2 seed guides (original rewording from the 5-site corpus).
// Pillar structure: air-filter-selection / hepa-cleanroom-sourcing / oem-private-label.

export interface Guide {
  slug: string;
  title: string;
  pillar: string;
  description: string;
  directAnswer: string;
  sections: { heading: string; body: string }[];
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
    sources: [
      '5-site crawl corpus (docs/sites/), 2026-10-29',
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
        body: 'HEPA and ULPA grades split into three bands. H10–H12 cover the EPA range, H13–H14 are high-efficiency HEPA (≥99.95% at MPPS), and U15–U17 are ultra-low-penetration ULPA. The choice is not a matter of higher being better — a U15 unit costs more and needs a properly graded pre-filter chain upstream to reach its rated life. Match the class to the cleanroom target, not to a marketing claim.',
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
    sources: [
      '5-site crawl corpus (docs/sites/), 2026-10-29',
      'EN 1822 — HEPA/ULPA efficiency classification (industry standard reference)',
      'ISO 14644 — cleanroom classification (industry standard reference)',
    ],
  },
];
