import type { APIRoute } from 'astro';
import { categories } from '../data/categories';
import { guides } from '../data/guides';
import { categorySlug, products, skuSlug } from '../data/products';
import { getKnowledgeEntries } from '../lib/knowledge';

type EntryType = 'product' | 'knowledge' | 'guide' | 'category' | 'page';

interface Entry {
  url: string;
  title: string;
  desc: string;
  type: EntryType;
  tags: string[];
}

const MAX_DESCRIPTION_LENGTH = 160;

const categoryTags: Record<string, string[]> = {
  'air-filters': ['automotive'],
  'cabin-filters': ['automotive'],
  'oil-filters': ['automotive'],
  'fuel-filters': ['automotive'],
  'hydraulic-filters': ['automotive'],
  'transmission-filters': ['automotive'],
  'hvac-filters': ['hvac'],
  'hepa-filters': ['cleanroom'],
  'pocket-filters': ['hvac'],
  'activated-carbon': ['hvac'],
  'filter-media': ['media'],
  'liquid-cartridges': ['liquid'],
  'cleanroom-equipment': ['cleanroom'],
};

const seriesTags: Record<string, string[]> = {
  'air-filter-performance': ['automotive'],
  'filter-quality-verification': ['quality'],
  'oem-supplier-risk': ['oem'],
  'hvac-hepa-cleanroom': ['hvac', 'cleanroom'],
};

const guideTags: Record<string, string[]> = {
  'air-filter-selection': ['automotive'],
  'hepa-cleanroom-sourcing': ['cleanroom'],
  'filter-efficiency-grades': ['automotive', 'hvac', 'cleanroom'],
  'hepa-vs-ulpa': ['cleanroom'],
  'filter-media-selection': ['media'],
  'cleanroom-filtration-solutions': ['cleanroom'],
  'oem-procurement-process': ['oem'],
  'cabin-vs-engine-air-filter': ['automotive'],
  'oil-filter-types': ['automotive'],
  'efficiency-vs-pressure-drop': ['automotive', 'hvac'],
  'filter-moq-lead-time': ['oem'],
};

const keyPages: Entry[] = [
  {
    url: '/products/',
    title: 'Filter products',
    desc: 'Browse the full filter catalogue — 104 SKUs across 13 product categories.',
    type: 'page',
    tags: [],
  },
  {
    url: '/knowledge/',
    title: 'Filter knowledge base',
    desc: 'In-depth technical articles on filter performance, quality verification and supplier risk.',
    type: 'page',
    tags: [],
  },
  {
    url: '/pillars/',
    title: 'Content pillars',
    desc: 'Five commercial and technical pillars connecting product selection, verification and sourcing.',
    type: 'page',
    tags: [],
  },
  {
    url: '/oem/',
    title: 'OEM filter manufacturing',
    desc: 'OEM filter manufacturing, custom specifications, private label and wholesale supply.',
    type: 'page',
    tags: ['oem'],
  },
  {
    url: '/wholesale/',
    title: 'Wholesale filters',
    desc: 'Wholesale filter supply for distributors and buyers, with MOQ and lead time quoted per line.',
    type: 'page',
    tags: ['oem'],
  },
  {
    url: '/private-label/',
    title: 'Private-label filters',
    desc: 'Private-label filters under your brand, from packaging and first article to production.',
    type: 'page',
    tags: ['oem'],
  },
  {
    url: '/rfq/',
    title: 'Request a quotation',
    desc: 'Request a filter quotation with your SKU, OE reference, specification and target quantity.',
    type: 'page',
    tags: ['oem'],
  },
  {
    url: '/company/',
    title: 'Company and legal entity',
    desc: 'Company registration, legal entity and operating relationship behind China Filter Hub.',
    type: 'page',
    tags: [],
  },
  {
    url: '/factory/',
    title: 'Factory and quality control',
    desc: 'Factory and quality-control information for the filter manufacturing operation.',
    type: 'page',
    tags: [],
  },
  {
    url: '/contact/',
    title: 'Contact',
    desc: 'Contact the filter team for product, OEM, wholesale and technical questions.',
    type: 'page',
    tags: [],
  },
];

function normalizeDescription(value: string | null | undefined, fallback: string): string {
  const normalized = (value ?? '').replace(/\s+/g, ' ').trim() || fallback;
  if (normalized.length <= MAX_DESCRIPTION_LENGTH) return normalized;

  const clipped = normalized.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  const lastSpace = clipped.lastIndexOf(' ');
  const cutAt = lastSpace > 100 ? lastSpace : clipped.length;
  return `${clipped.slice(0, cutAt).trimEnd()}…`;
}

function firstSentence(value: string | null | undefined, fallback: string): string {
  const normalized = (value ?? '').replace(/\s+/g, ' ').trim();
  const sentence = normalized.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? normalized;
  return normalizeDescription(sentence, fallback);
}

export const GET: APIRoute = async () => {
  const knowledgeEntries = await getKnowledgeEntries();

  const productEntries: Entry[] = products.map((product) => {
    const category = categorySlug(product.category);
    return {
      url: `/products/${category}/${skuSlug(product.url_slug || product.sku)}/`,
      title: product.name,
      desc: firstSentence(product.description, product.name),
      type: 'product',
      tags: categoryTags[category] ?? [],
    };
  });

  const knowledgeIndexEntries: Entry[] = knowledgeEntries.map((entry) => ({
    url: `/knowledge/${entry.data.slug}/`,
    title: entry.data.title,
    desc: normalizeDescription(entry.data.description, entry.data.title),
    type: 'knowledge',
    tags: seriesTags[entry.data.series] ?? [],
  }));

  const guideEntries: Entry[] = guides.map((guide) => ({
    url: `/guides/${guide.slug}/`,
    title: guide.title,
    desc: normalizeDescription(guide.description, guide.title),
    type: 'guide',
    tags: guideTags[guide.slug] ?? [],
  }));

  const categoryEntries: Entry[] = categories.map((category) => ({
    url: `/products/${category.slug}/`,
    title: category.name,
    desc: normalizeDescription(category.summary, category.name),
    type: 'category',
    tags: categoryTags[category.slug] ?? [],
  }));

  const entries = [
    ...productEntries,
    ...knowledgeIndexEntries,
    ...guideEntries,
    ...categoryEntries,
    ...keyPages,
  ];

  return new Response(JSON.stringify(entries), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
