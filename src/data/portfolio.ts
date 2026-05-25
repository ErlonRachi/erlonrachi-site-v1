// Portfolio config: themes + grouping helpers.
// Cases live in Astro Content Collections under `src/content/cases/`.
// See src/content.config.ts for the case schema.

import type { CollectionEntry } from "astro:content";

export const THEME_ORDER = [
  "revenue-growth",
  "cost-reduction",
  "customer-experience",
  "risk-compliance",
  "building-scaling",
  "strategy-vision",
] as const;

export type ThemeSlug = (typeof THEME_ORDER)[number];

export interface Theme {
  slug: ThemeSlug;
  title: string;
  short: string;
  question: string;
}

export const THEMES: Record<ThemeSlug, Theme> = {
  "revenue-growth": {
    slug: "revenue-growth",
    title: "Revenue Growth & Sales Performance",
    short: "Revenue",
    question: "Have you used data and AI to grow sales, lift conversion, or increase customer retention?",
  },
  "cost-reduction": {
    slug: "cost-reduction",
    title: "Cost Reduction & Operational Efficiency",
    short: "Cost",
    question: "Have you cut infrastructure costs, automated processes, or eliminated wasted time?",
  },
  "customer-experience": {
    slug: "customer-experience",
    title: "Customer Experience & Personalization",
    short: "Customer",
    question: "Have you helped companies understand customers better and serve them more effectively?",
  },
  "risk-compliance": {
    slug: "risk-compliance",
    title: "Risk, Compliance & Governance",
    short: "Risk",
    question: "Have you helped companies meet regulatory requirements, improve security, or pass audits?",
  },
  "building-scaling": {
    slug: "building-scaling",
    title: "Building & Scaling Data/AI Organizations",
    short: "Scaling",
    question: "Have you built teams from scratch, scaled organizations, or transformed how a function operates?",
  },
  "strategy-vision": {
    slug: "strategy-vision",
    title: "Strategy, Vision & Transformation",
    short: "Strategy",
    question: "Have you set direction at the executive level, built business propositions, or pioneered new approaches?",
  },
};

// Group an array of cases (Astro Content Collection entries) by primary theme.
// Themes appear in canonical THEME_ORDER even when empty.
export function groupByTheme(
  cases: CollectionEntry<"cases">[],
): Map<ThemeSlug, CollectionEntry<"cases">[]> {
  const grouped = new Map<ThemeSlug, CollectionEntry<"cases">[]>();
  for (const t of THEME_ORDER) grouped.set(t, []);
  for (const c of cases) {
    grouped.get(c.data.primaryTheme)?.push(c);
  }
  return grouped;
}
