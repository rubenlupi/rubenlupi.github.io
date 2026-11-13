import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AREAS } from './site';
// Keep in sync with scripts/lib/archive.mjs
const CATEGORIES = [
  'Systems, Execution & Organizational Design', 'Change & Transformation', 'Product & Customer Discovery',
  'Creativity & Innovation', 'Architecture & Engineering', 'AI & Technology', 'Communication',
] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topics: z.array(z.enum(AREAS.map((a) => a.name) as [string, ...string[]])).default([]),
    series: z.enum(['break-and-change']).optional(),
    book: z.object({
      title: z.string(), author: z.string(), year: z.number().int(),
      category: z.enum(CATEGORIES as unknown as [string, ...string[]]).optional(),
    }).optional(),
    editorialDate: z.coerce.date().optional(),
    selfContained: z.boolean().default(false),
    seriesPart: z.object({
      title: z.string(), slug: z.string(), number: z.number().int(), total: z.number().int(),
      stage: z.enum(['BREAK', 'CHANGE', 'EXPERIENCE', 'CHALLENGE', 'QUESTION']).optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }).refine((d) => !d.series || (d.book && d.editorialDate !== undefined) || d.draft, {
    message: 'Published Break & Change articles need `book` and `editorialDate` (see docs/EDITORIAL_POLICY.md)',
  }),
});

export const collections = { posts };
