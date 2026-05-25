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

const PILLAR_SLUGS = [
  "agentic-ai-architecture",
  "ai-governance",
  "data-infrastructure",
  "leadership",
  "human-factor",
  "field-notes",
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

const essays = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pillar: z.enum(PILLAR_SLUGS),
    publishedDate: z.coerce.date(),
    originalSource: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cases, essays };
