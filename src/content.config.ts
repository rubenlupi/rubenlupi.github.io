import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AREAS } from './site';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topics: z.array(z.enum(AREAS.map((a) => a.name) as [string, ...string[]])).default([]),
    series: z.enum(['break-and-change']).optional(),
    book: z.object({ title: z.string(), author: z.string(), year: z.number().int() }).optional(),
    editorialDate: z.coerce.date().optional(),
    selfContained: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }).refine((d) => !d.series || (d.book && d.editorialDate !== undefined) || d.draft, {
    message: 'Published Break & Change articles need `book` and `editorialDate` (see docs/EDITORIAL_POLICY.md)',
  }),
});

export const collections = { posts };
