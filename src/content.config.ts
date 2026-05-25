import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const THEME_SLUGS = [
  "revenue-growth",
  "cost-reduction",
  "customer-experience",
  "risk-compliance",
  "building-scaling",
  "strategy-vision",
] as const;

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.string(),
    primaryTheme: z.enum(THEME_SLUGS),
    secondaryThemes: z.array(z.enum(THEME_SLUGS)).default([]),
    metric: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cases };
