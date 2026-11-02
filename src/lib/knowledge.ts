import { getCollection, type CollectionEntry } from 'astro:content';

export type KnowledgeEntry = CollectionEntry<'knowledge'>;

export interface KnowledgeSeries {
  slug: string;
  title: string;
  pillar: KnowledgeEntry;
  clusters: KnowledgeEntry[];
}

export const knowledgeCategorySlugs = [
  'hvac-filters',
  'pocket-filters',
  'hepa-filters',
  'filter-media',
] as const;

export async function getKnowledgeEntries(): Promise<KnowledgeEntry[]> {
  const entries = await getCollection('knowledge');

  for (const entry of entries) {
    const filename = entry.id.replace(/\.(md|mdx)$/, '');
    if (filename !== entry.data.slug) {
      throw new Error(`Knowledge slug "${entry.data.slug}" does not match filename "${filename}".`);
    }
  }

  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getSeriesList(): Promise<KnowledgeSeries[]> {
  const entries = await getKnowledgeEntries();
  const grouped = new Map<string, KnowledgeEntry[]>();

  for (const entry of entries) {
    const seriesEntries = grouped.get(entry.data.series) ?? [];
    seriesEntries.push(entry);
    grouped.set(entry.data.series, seriesEntries);
  }

  const seriesList = Array.from(grouped.entries()).map(([slug, seriesEntries]) => {
    const pillars = seriesEntries.filter((entry) => entry.data.isPillar);
    if (pillars.length !== 1) {
      throw new Error(`Knowledge series "${slug}" must contain exactly one pillar article.`);
    }

    const title = seriesEntries[0].data.seriesTitle;
    const inconsistentTitle = seriesEntries.find((entry) => entry.data.seriesTitle !== title);
    if (inconsistentTitle) {
      throw new Error(
        `Knowledge series "${slug}" has inconsistent seriesTitle values: "${title}" and "${inconsistentTitle.data.seriesTitle}".`,
      );
    }

    return {
      slug,
      title,
      pillar: pillars[0],
      clusters: seriesEntries
        .filter((entry) => !entry.data.isPillar)
        .sort((a, b) => a.data.order - b.data.order),
    };
  });

  return seriesList.sort(
    (a, b) => a.pillar.data.order - b.pillar.data.order || a.title.localeCompare(b.title),
  );
}

export function countWords(markdown: string): number {
  return markdown
    .replace(/^---[\s\S]*?\n---\n/, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s*\|?[\s:|-]+\|?\s*$/gm, ' ')
    .replace(/[|#*_`$]/g, ' ')
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

export function readingMinutes(markdown: string): number {
  return Math.max(1, Math.ceil(countWords(markdown) / 200));
}

export function entryEyebrow(entry: KnowledgeEntry): string {
  if (entry.data.isPillar) return `${entry.data.seriesTitle} · Pillar`;
  return `Part ${entry.data.order} of ${entry.data.seriesTitle}`;
}
