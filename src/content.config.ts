import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bookSchema = z.object({
  slug: z.string().optional(),
  title: z.string(),
  author: z.string(),
  status: z.enum(['want-to-read', 'reading', 'completed']).default('want-to-read'),
  rating: z.coerce.string().optional(),
  category: z.string().default('General'),
  year: z.coerce.string().optional(),
  priority: z.enum(['High', 'Medium', 'Low']).optional(),
  progress: z.coerce.string().optional(),
  link: z.string().url().optional().or(z.literal('')),
});

const booksRead = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books-read' }),
  schema: bookSchema,
});

const readingList = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reading-list' }),
  schema: bookSchema,
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    publishedDate: z.coerce.string().default('2026-01-01'),
    readTime: z.string().default('5 min read'),
    category: z.string().default('General'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { 'books-read': booksRead, 'reading-list': readingList, articles };
