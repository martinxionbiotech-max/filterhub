import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: z.object({
    title: z.string().min(1),
    metaTitle: z.string().min(1),
    description: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    keyword: z.string().min(1),
    order: z.number().int().min(0),
    isPillar: z.boolean(),
    pillarSlug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    published: z.coerce.date(),
  }),
});

export const collections = { knowledge };
