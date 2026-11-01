import { getCollection, type CollectionEntry } from 'astro:content';

export type KnowledgeEntry = CollectionEntry<'knowledge'>;

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
  if (entry.data.isPillar) return 'Pillar';
  return `Cluster ${entry.data.order} · Part ${entry.data.order} of the Air Filter Performance series`;
}
