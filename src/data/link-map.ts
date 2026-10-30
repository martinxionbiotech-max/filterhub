// Internal-link intent map (optim2): resolves the 8 keyword-group three-way
// competition by wiring each layer to the layer below it in intent hierarchy.
//
//   guide  (process knowledge)  ->  category (generic product hub)  ->  SKU (model)
//
// categoryGuides  : category slug -> guide slugs (rendered on category + SKU pages)
// guideCategories : guide slug   -> category slugs (rendered on guide pages)
//
// Both maps are derived from one source-of-truth table so the two directions can
// never drift apart.

const LINKS: Record<string, string[]> = {
  'air-filters': ['air-filter-selection', 'filter-efficiency-grades'],
  'cabin-filters': ['filter-efficiency-grades', 'oem-procurement-process'],
  'oil-filters': ['oem-procurement-process'],
  'fuel-filters': ['oem-procurement-process'],
  'hydraulic-filters': ['oem-procurement-process'],
  'transmission-filters': ['oem-procurement-process'],
  'hvac-filters': ['filter-efficiency-grades'],
  'hepa-filters': ['hepa-cleanroom-sourcing', 'hepa-vs-ulpa', 'filter-efficiency-grades'],
  'activated-carbon': ['filter-media-selection'],
  'pocket-filters': ['filter-efficiency-grades'],
  'filter-media': ['filter-media-selection'],
  'liquid-cartridges': ['oem-procurement-process'],
  'cleanroom-equipment': ['cleanroom-filtration-solutions', 'hepa-cleanroom-sourcing'],
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
