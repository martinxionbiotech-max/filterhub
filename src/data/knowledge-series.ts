import type { KnowledgeSeries } from '../lib/knowledge';

export interface KnowledgeSeriesCard {
  slug: string;
  title: string;
  description: string;
  href: string;
  count: number;
}

const seriesCardCopy = [
  {
    slug: 'air-filter-performance',
    title: 'Air filter performance',
    description: 'Efficiency, pressure drop, dust capacity, airflow and service life',
  },
  {
    slug: 'filter-quality-verification',
    title: 'Filter quality and verification',
    description: 'Test standards, reports, samples, batch consistency, quality agreements',
  },
  {
    slug: 'filter-supplier-selection',
    title: 'OEM sourcing and supplier risk',
    description: 'Screening, factory audits, first article, tooling, change control',
  },
  {
    slug: 'hvac-hepa-cleanroom-selection',
    title: 'HVAC, HEPA and cleanroom',
    description: 'System-level selection, staging, terminal filtration, cleanroom classes',
  },
] as const;

export function buildKnowledgeSeriesCards(seriesList: KnowledgeSeries[]): KnowledgeSeriesCard[] {
  return seriesCardCopy.map((copy) => {
    const series = seriesList.find((item) => item.pillar.data.slug === copy.slug);
    if (!series) {
      throw new Error(`Knowledge series "${copy.slug}" was not found.`);
    }

    return {
      ...copy,
      href: `/knowledge/${series.pillar.data.slug}/`,
      count: series.clusters.length + 1,
    };
  });
}
