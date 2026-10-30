// Internal-link intent map (optim2 -> optim3): resolves the 8 keyword-group
// three-way competition by wiring each layer to the layer below it in intent
// hierarchy, and closes the pillar/cluster bidirectional graph so no guide is
// an isolated node.
//
//   guide  (process knowledge)  ->  category (generic product hub)  ->  SKU (model)
//
// categoryGuides      : category slug -> guide slugs (rendered on category + SKU pages)
// guideCategories     : guide slug   -> category slugs (rendered on guide pages)
// guideSkus           : guide slug   -> top SKU codes (rendered on guide pages)
// guideCommercialLinks: guide slug   -> commercial pages (OEM process -> /oem/)
//
// categoryGuides/guideCategories are derived from one source-of-truth table so
// the two directions can never drift apart.

const LINKS: Record<string, string[]> = {
  'air-filters': ['air-filter-selection', 'filter-efficiency-grades', 'cabin-vs-engine-air-filter'],
  'cabin-filters': ['filter-efficiency-grades', 'oem-procurement-process', 'cabin-vs-engine-air-filter'],
  'oil-filters': ['oem-procurement-process', 'oil-filter-types'],
  'fuel-filters': ['oem-procurement-process'],
  'hydraulic-filters': ['oem-procurement-process'],
  'transmission-filters': ['oem-procurement-process'],
  'hvac-filters': ['filter-efficiency-grades', 'efficiency-vs-pressure-drop'],
  'hepa-filters': ['hepa-cleanroom-sourcing', 'hepa-vs-ulpa', 'filter-efficiency-grades', 'cleanroom-filtration-solutions'],
  'activated-carbon': ['filter-media-selection'],
  'pocket-filters': ['filter-efficiency-grades'],
  'filter-media': ['filter-media-selection', 'air-filter-selection', 'efficiency-vs-pressure-drop'],
  'liquid-cartridges': ['oem-procurement-process'],
  'cleanroom-equipment': ['cleanroom-filtration-solutions', 'hepa-cleanroom-sourcing', 'hepa-vs-ulpa'],
};

/** category slug -> guide slugs */
export const categoryGuides: Record<string, string[]> = LINKS;

/** guide slug -> category slugs (reverse of categoryGuides) */
export const guideCategories: Record<string, string[]> = (() => {
  const out: Record<string, string[]> = {};
  for (const [cat, guides] of Object.entries(LINKS)) {
    for (const g of guides) {
      (out[g] ??= []).push(cat);
    }
  }
  return out;
})();

/**
 * guide slug -> top SKU codes (rendered on guide pages as "Featured SKUs").
 * Selection and standards guides surface 2-3 representative top models so a
 * buyer can move from process knowledge straight to a catalogue record. SKU
 * codes must exist in src/data/products.json (no fabricated references).
 */
export const guideSkus: Record<string, string[]> = {
  'air-filter-selection': ['42N-62-15470', '1542743', 'P822768'],
  'hepa-cleanroom-sourcing': ['AIRY-GEL-HEPA', 'EAWAY-HEPA-61061070'],
  'filter-efficiency-grades': ['AIRY-GEL-HEPA', 'KLC-HT-SEPARATOR', 'EAWAY-HEPA-61061070'],
  'hepa-vs-ulpa': ['AIRY-GEL-HEPA', 'EAWAY-HEPA-61061070'],
  'filter-media-selection': ['AIRY-NEEDLE-COTTON', 'AIRY-HT-FIBERGLASS', 'AIRY-AC-MEDIA'],
  'cleanroom-filtration-solutions': ['EAWAY-FFU-4848', 'KLC-CLEAN-BENCH', 'KLC-BIOSAFETY'],
  'oem-procurement-process': ['15208-AD200', '23401-1441', 'SH66279'],
};

/**
 * guide slug -> commercial/static pages (non-category, non-SKU destinations).
 * Rendered on guide pages after the category links.
 */
export const guideCommercialLinks: Record<string, { label: string; href: string }[]> = {
  'oem-procurement-process': [
    { label: 'OEM / Private Label', href: '/oem/' },
    { label: 'Product Centre', href: '/products/' },
  ],
  'filter-moq-lead-time': [
    { label: 'OEM / Private Label', href: '/oem/' },
    { label: 'Contact & RFQ', href: '/contact/' },
  ],
};
