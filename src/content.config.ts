import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const trips = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/trips' }),
  schema: z.object({
    // title: z.string().optional(),
    date: z.coerce.date(),
    date_end: z.coerce.date().optional(),
    description: z.string().optional(),
    youtube: z.string().optional(),
    photos: z.array(z.string()).optional(),
    distance: z.number().optional(),
    elevation: z.number().optional(),
  }),
});

export const collections = { trips };
