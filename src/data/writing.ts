// Writing config: 6 pillars + grouping helpers for the Content Engine.
// Essays live in Astro Content Collections under `src/content/essays/`.
// See src/content.config.ts for the essay schema.

import type { CollectionEntry } from "astro:content";

export const PILLAR_ORDER = [
  "agentic-ai-architecture",
  "ai-governance",
  "data-infrastructure",
  "leadership",
  "human-factor",
  "field-notes",
] as const;

export type PillarSlug = (typeof PILLAR_ORDER)[number];

export interface Pillar {
  slug: PillarSlug;
  title: string;
  short: string;
  description: string;
}

export const PILLARS: Record<PillarSlug, Pillar> = {
  "agentic-ai-architecture": {
    slug: "agentic-ai-architecture",
    title: "Agentic AI & Enterprise Architecture",
    short: "Agentic AI",
    description: "Tiered maturity, deployment patterns, the agent stack for organisations that mean it.",
  },
  "ai-governance": {
    slug: "ai-governance",
    title: "AI Governance & EU AI Act",
    short: "Governance",
    description: "Explainability, accountability, audit trails, regulatory commentary at exec scale.",
  },
  "data-infrastructure": {
    slug: "data-infrastructure",
    title: "Data Infrastructure & Engineering Practice",
    short: "Infrastructure",
    description: "Real-time inference, multi-cloud, observability, the technical backbone of AI work.",
  },
  "leadership": {
    slug: "leadership",
    title: "Leadership for CTOs and CDOs",
    short: "Leadership",
    description: "Exec-level guidance for data and AI leaders. How to think about this, not just what to do.",
  },
  "human-factor": {
    slug: "human-factor",
    title: "The Human Factor",
    short: "Human Factor",
    description: "Teams, talent, transformation, capability transfer. Building people before building code.",
  },
  "field-notes": {
    slug: "field-notes",
    title: "Field Notes",
    short: "Field Notes",
    description: "Conference recaps, tool tests, sector reflections. Lighter cadence, real-time signal.",
  },
};

// Group essays by pillar; preserve canonical pillar order even when empty.
export function groupByPillar(
  essays: CollectionEntry<"essays">[],
): Map<PillarSlug, CollectionEntry<"essays">[]> {
  const grouped = new Map<PillarSlug, CollectionEntry<"essays">[]>();
  for (const p of PILLAR_ORDER) grouped.set(p, []);
  for (const e of essays) {
    grouped.get(e.data.pillar)?.push(e);
  }
  return grouped;
}

// Sort essays by publishedDate, most recent first.
export function sortByDateDesc(
  essays: CollectionEntry<"essays">[],
): CollectionEntry<"essays">[] {
  return [...essays].sort(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime(),
  );
}
