import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Siddharth Ganjoo'),
    readTime: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  })
});

export const collections = {
  'blog': blogCollection,
};
