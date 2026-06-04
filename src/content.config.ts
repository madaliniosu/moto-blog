import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const trips = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/trips' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    youtube: z.string().optional(),
    photos: z.array(z.string()).optional(),
  }),
});

export const collections = { trips };
