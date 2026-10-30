// Five-pillar landing-page data (Phase 3-4). Single source of truth for the
// pillar landing pages (/pillars/{slug}/) and the homepage pillar sections.
//
// Discipline (per transformation-brief):
// - China Filter Hub is the platform brand; Qinghe Huiying is the core
//   AUTOMOTIVE filter manufacturing and supply entity.
// - Industrial / HVAC / HEPA / ULPA / liquid filtration are PLATFORM content
//   (multi-source industry reference), never presented as Huiying-manufactured.
// - Every pillar carries an explicit `boundary` note so the platform-vs-
//   manufacturer distinction stays visible.

export interface PillarTopic {
  label: string;
  href: string;
}

export interface Pillar {
  key: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  positioning: string;
  intent: string;
  topics: PillarTopic[];
  conclusions: string[];
  categories: string[]; // category slugs (resolved to category pages)
  guides: string[]; // guide slugs (resolved to guide pages)
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  boundary: string;
}

export const pillars: Pillar[] = [
  {
    key: 'p1',
    slug: 'automotive-filters',
    name: 'Automotive Filters',
    shortName: 'Automotive',
    eyebrow: 'Pillar 1 · Vehicle & equipment filtration',
    positioning:
      'Automotive filters protect the engine, transmission, hydraulic circuit and occupants of vehicles and heavy equipment. This pillar groups engine intake, cabin, oil, fuel, hydraulic and transmission filtration — the six categories where selection turns on fitment first, then media and duty.',
    intent:
      'Category discovery, selection and OE cross-reference for automotive and heavy-duty filtration.',
    topics: [
      { label: 'Engine air filters', href: '/products/air-filters/' },
      { label: 'Cabin air filters', href: '/products/cabin-filters/' },
      { label: 'Oil filters', href: '/products/oil-filters/' },
      { label: 'Fuel filters', href: '/products/fuel-filters/' },
      { label: 'Hydraulic filters', href: '/products/hydraulic-filters/' },
      { label: 'Transmission filters', href: '/products/transmission-filters/' },
      { label: 'Engine air filters: types, materials and selection', href: '/guides/air-filter-selection/' },
      { label: 'Cabin air filter vs engine air filter', href: '/guides/cabin-vs-engine-air-filter/' },
      { label: 'Oil filter types', href: '/guides/oil-filter-types/' },
    ],
    conclusions: [
      'Fitment precedes efficiency. Form factor, thread and gasket dimensions, and mounting form decide whether a filter works at all, before media performance is even relevant.',
      'An OE number is a discovery aid, not a verified fitment — the housing and the OE drawing lock the match, not the number alone.',
      'Higher efficiency is not automatically better. Dust-holding capacity and intake-restriction control set service life in dust-heavy duty, so the two are judged together.',
    ],
    categories: [
      'air-filters',
      'cabin-filters',
      'oil-filters',
      'fuel-filters',
      'hydraulic-filters',
      'transmission-filters',
    ],
    guides: ['air-filter-selection', 'cabin-vs-engine-air-filter', 'oil-filter-types'],
    ctaPrimary: { label: 'Explore automotive filter categories', href: '/products/' },
    ctaSecondary: { label: 'Discuss an OEM project', href: '/oem/' },
    boundary:
      'Automotive filters are the core manufacturing range of Qinghe Huiying, the operating entity behind this platform. The six automotive categories here are Huiying-manufactured; industrial, HVAC, HEPA/ULPA and liquid products catalogued elsewhere on the site are not.',
  },
  {
    key: 'p2',
    slug: 'filter-technology',
    name: 'Filter Technology',
    shortName: 'Technology',
    eyebrow: 'Pillar 2 · Cross-category technical knowledge',
    positioning:
      'Filter technology is the cross-category layer that makes the rest of the catalogue comparable: media types, efficiency scales, pressure drop and dust-holding capacity. It applies to automotive, HVAC and cleanroom filtration alike, and answers how a filter performs before any specific part is chosen.',
    intent:
      'Technical explanation of media, efficiency grades, pressure drop and capacity for informed selection.',
    topics: [
      { label: 'Filter media', href: '/products/filter-media/' },
      { label: 'Filter media types: needle-punched, synthetic, micro-glass and carbon', href: '/guides/filter-media-selection/' },
      { label: 'Filter efficiency grades compared', href: '/guides/filter-efficiency-grades/' },
      { label: 'Filtration efficiency vs pressure drop', href: '/guides/efficiency-vs-pressure-drop/' },
    ],
    conclusions: [
      'Each efficiency scale measures a different thing — EN 1822 grades HEPA/ULPA by MPPS penetration, ISO 16890 grades HVAC media by particle fraction, and MERV by composite arrestance. Read the scale in its own terms.',
      'Efficiency quoted without pressure drop and dust capacity describes only part of a filter. A filter that traps well but loads quickly, or forces high energy consumption, can cost more than a balanced element.',
      'Media choice follows the duty, not the material name: needle-punched for coarse pre-filtration, micro-glass for HEPA efficiency, activated carbon for a named contaminant.',
    ],
    categories: ['filter-media'],
    guides: ['filter-efficiency-grades', 'filter-media-selection', 'efficiency-vs-pressure-drop'],
    ctaPrimary: { label: 'Read the selection guides', href: '/guides/' },
    ctaSecondary: { label: 'Explore filter media', href: '/products/filter-media/' },
    boundary:
      'Filter technology content is platform-level and cross-category. It applies to automotive, HVAC and cleanroom filtration, and does not imply that any single manufacturer produces every media type covered here.',
  },
  {
    key: 'p3',
    slug: 'industrial-hvac',
    name: 'Industrial & HVAC Filtration',
    shortName: 'Industrial & HVAC',
    eyebrow: 'Pillar 3 · Industrial, HVAC & cleanroom (platform content)',
    positioning:
      'Industrial and HVAC filtration spans staged air filtration, HEPA/ULPA terminal filters, cleanroom equipment and liquid cartridges. This is platform content — a consolidated multi-source industry reference — covering how these systems are graded, selected and sourced.',
    intent:
      'Category discovery, grade selection and sourcing for industrial air, HVAC, cleanroom and liquid filtration.',
    topics: [
      { label: 'HVAC filters', href: '/products/hvac-filters/' },
      { label: 'HEPA / ULPA filters', href: '/products/hepa-filters/' },
      { label: 'Activated carbon filters', href: '/products/activated-carbon/' },
      { label: 'Pocket / bag filters', href: '/products/pocket-filters/' },
      { label: 'Liquid filter cartridges', href: '/products/liquid-cartridges/' },
      { label: 'Cleanroom equipment', href: '/products/cleanroom-equipment/' },
      { label: 'Sourcing HEPA/ULPA and cleanroom equipment', href: '/guides/hepa-cleanroom-sourcing/' },
      { label: 'HEPA vs ULPA', href: '/guides/hepa-vs-ulpa/' },
      { label: 'Cleanroom filtration solutions', href: '/guides/cleanroom-filtration-solutions/' },
    ],
    conclusions: [
      'For continuous-duty HVAC filters, life-cycle cost beats face price — the fan energy consumed against pressure drop over the service life usually outweighs the unit cost.',
      'HEPA/ULPA class has to match the cleanroom ISO target and the installed seal, not a marketing claim. A higher class only earns its cost behind a correctly graded pre-filter chain.',
      'Cleanroom filtration is a system, not a single filter: FFU ceiling airflow, entry and transfer control have to be specified together to hold the target class.',
    ],
    categories: [
      'hvac-filters',
      'hepa-filters',
      'activated-carbon',
      'pocket-filters',
      'liquid-cartridges',
      'cleanroom-equipment',
    ],
    guides: ['hepa-cleanroom-sourcing', 'hepa-vs-ulpa', 'cleanroom-filtration-solutions'],
    ctaPrimary: { label: 'Explore industrial & HVAC categories', href: '/products/' },
    ctaSecondary: { label: 'Submit an RFQ', href: '/contact/' },
    boundary:
      'This pillar is platform content. Industrial, HVAC, HEPA/ULPA and liquid filtration products are catalogued as a multi-source industry reference; they are not presented as manufactured by Qinghe Huiying, whose manufacturing range is automotive filters.',
  },
  {
    key: 'p4',
    slug: 'oem-wholesale',
    name: 'OEM & Wholesale Sourcing',
    shortName: 'OEM & Wholesale',
    eyebrow: 'Pillar 4 · Procurement, private label & RFQ',
    positioning:
      'OEM and wholesale sourcing covers how to buy filters under your own brand or in bulk: the RFQ that carries the fitment, first-article verification, private-label packaging, and the MOQ, lead time and pricing that follow from the specification.',
    intent:
      'Procurement process, private label, MOQ/lead time and RFQ preparation for OEM and wholesale buyers.',
    topics: [
      { label: 'OEM & private label', href: '/oem/' },
      { label: 'Private-label supply', href: '/private-label/' },
      { label: 'Wholesale & distributor cooperation', href: '/wholesale/' },
      { label: 'Request a quotation', href: '/rfq/' },
      { label: 'Automotive filter OEM manufacturing guide', href: '/guides/oem-procurement-process/' },
      { label: 'Automotive filter MOQ, lead time and pricing', href: '/guides/filter-moq-lead-time/' },
      { label: 'Contact', href: '/contact/' },
    ],
    conclusions: [
      'The RFQ carries the fitment — OE number, drawing, target quantity and media requirement — and the drawing is what locks the match, not the cross-reference.',
      'First-article inspection against the OE drawing is the step that converts a cross-reference into a verified fitment before serial production.',
      'MOQ and lead time are quoted per line. Standard sizes ship faster; custom sizes and private-label packaging add lead time, so the packaging requirement belongs in the first inquiry.',
    ],
    categories: [],
    guides: ['oem-procurement-process', 'filter-moq-lead-time'],
    ctaPrimary: { label: 'Discuss an OEM project', href: '/oem/' },
    ctaSecondary: { label: 'Submit an RFQ', href: '/contact/' },
    boundary:
      'OEM and private-label manufacturing is offered through Qinghe Huiying for automotive filters and filter media at low minimum order quantities. Industrial, HVAC, HEPA/ULPA and liquid products are not presented as Huiying-manufactured.',
  },
  {
    key: 'p5',
    slug: 'qinghe-huiying',
    name: 'Qinghe Huiying Manufacturing & Commercial Solutions',
    shortName: 'Manufacturers',
    eyebrow: 'Pillar 5 · Core manufacturing & commercial partner',
    positioning:
      'Qinghe Huiying is the core automotive filter manufacturing and supply entity behind China Filter Hub — the operating legal entity, its automotive filter range, factory framework and commercial terms for OEM, private label and wholesale cooperation.',
    intent:
      'Manufacturer verification, automotive filter supply and commercial cooperation.',
    topics: [
      { label: 'Company & legal entity', href: '/company/' },
      { label: 'Factory & quality control', href: '/factory/' },
      { label: 'OEM & private label', href: '/oem/' },
      { label: 'Private-label supply', href: '/private-label/' },
      { label: 'Wholesale & distributor cooperation', href: '/wholesale/' },
      { label: 'Automotive filter products', href: '/products/air-filters/' },
      { label: 'Request a quotation', href: '/rfq/' },
      { label: 'Contact', href: '/contact/' },
    ],
    conclusions: [
      'Qinghe Huiying is the operating legal entity of China Filter Hub — the same entity behind carfilterspro.com — with registration details disclosed in full on the company page.',
      'The manufacturing range is automotive: engine intake, cabin, oil, fuel, hydraulic and transmission filters, plus filter media at low MOQ. Industrial and HVAC finished products sit outside that scope.',
      'Factory and quality detail is kept honest: the production framework is described as an industry reference, and certifications are disclosed only when independently verified.',
    ],
    categories: [
      'air-filters',
      'cabin-filters',
      'oil-filters',
      'fuel-filters',
      'hydraulic-filters',
      'transmission-filters',
    ],
    guides: [],
    ctaPrimary: { label: 'Discuss an OEM project', href: '/oem/' },
    ctaSecondary: { label: 'Contact us', href: '/contact/' },
    boundary:
      'Qinghe Huiying manufactures automotive filters. Industrial, HVAC, HEPA/ULPA, cleanroom and liquid filtration products catalogued on this platform are not presented as Huiying-manufactured — that distinction is kept explicit throughout the site.',
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

/** Resolve the pillar a category belongs to (primary pillar wins: p1 before p5). */
export function pillarForCategory(slug: string): Pillar | undefined {
  return pillars.find((p) => p.categories.includes(slug));
}

/** Resolve the pillar a guide belongs to. */
export function pillarForGuide(slug: string): Pillar | undefined {
  return pillars.find((p) => p.guides.includes(slug));
}

/**
 * Whether a category is an automotive (Huiying-manufactured) category.
 * Only the six P1 categories are Huiying-manufactured; industrial/HVAC/HEPA/ULPA
 * and liquid categories are platform content and must NOT be linked to Huiying
 * manufacturing pages.
 */
export function isAutomotiveCategory(slug: string): boolean {
  return pillars.find((p) => p.key === 'p1')?.categories.includes(slug) ?? false;
}
