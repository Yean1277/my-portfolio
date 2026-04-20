import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['Projects', 'Anime', 'Notes', 'Design']),
    wordCount: z.number(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    isEncrypted: z.boolean().optional(),
  }),
});

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    animeList: z.array(
      z.object({
        title: z.string(),
        poster: z.string(),
      })
    ).optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  pageData: pagesCollection,
};
