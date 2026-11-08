import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Ein Beitrag liegt als src/content/posts/de/<slug>.md und src/content/posts/en/<slug>.md,
// mit demselben <slug> in beiden Sprachen (geprüft von scripts/check-translations.mjs).
const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
