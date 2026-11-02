// Knowledge articles shown in the "Technical background" section of each category page.
export const categoryKnowledge: Record<string, readonly [string, string]> = {
  'air-filters': [
    'filter-class-by-application',
    'air-filters-same-efficiency-different-performance',
  ],
  'cabin-filters': [
    'air-filter-surface-area-vs-media-thickness',
    'filter-form-factor-selection',
  ],
  'oil-filters': ['air-filter-performance', 'filter-class-by-application'],
  'fuel-filters': [
    'initial-vs-final-pressure-drop-air-filter',
    'air-filter-dust-holding-capacity',
  ],
  'hydraulic-filters': ['filter-class-by-application', 'filter-fan-energy-lifecycle-cost'],
  'transmission-filters': [
    'filter-form-factor-selection',
    'air-filter-surface-area-vs-media-thickness',
  ],
  'hvac-filters': ['hvac-filtration-staging', 'filter-fan-energy-lifecycle-cost'],
  'hepa-filters': ['hepa-ulpa-system-tradeoff', 'hepa-ulpa-integrity-testing'],
  'pocket-filters': ['filter-form-factor-selection', 'hvac-filtration-staging'],
  'activated-carbon': ['filtration-application-boundaries', 'filter-class-by-application'],
  'filter-media': ['air-filter-surface-area-vs-media-thickness', 'read-filter-test-report'],
  'liquid-cartridges': ['filtration-application-boundaries', 'filter-class-by-application'],
  'cleanroom-equipment': ['cleanroom-classification-filtration', 'terminal-filtration-selection'],
};
