import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const createEditorialCollection = (base: string) => defineCollection({
  loader: glob({ base, pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(), description: z.string(), cover: image(), coverAlt: z.string(),
    tags: z.array(z.string()).default([]), publishedAt: z.coerce.date(), updatedAt: z.coerce.date().optional(),
    lang: z.enum(['en', 'mk']).default('en'), translationKey: z.string().optional(), draft: z.boolean().default(false),
    seoTitle: z.string().optional(), seoDescription: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    inlineImage: z.string().optional(), inlineImageAlt: z.string().optional(),
    inlineImageAfterParagraph: z.number().int().positive().optional(),
    inlineImageLayout: z.enum(['paired']).optional(),
  }),
});

const blog = createEditorialCollection('./src/content/blog');
const news = createEditorialCollection('./src/content/news');

export const collections = { blog, news };
