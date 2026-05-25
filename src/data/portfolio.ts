// Portfolio data — themes + sample cases for the layout comparison.
// 8 cases covering all 6 themes. Anonymized per `[on] Public Portfolio 32-cases.md`.
// Real data lives in `[on] Portfolio-Projects-by-business-theme.md` (internal).
// Once a layout is chosen, this migrates to src/content/cases/*.md (Content Collections).

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

export interface CaseEntry {
  slug: string;
  title: string;
  client: string;
  year: string;
  primaryTheme: ThemeSlug;
  secondaryThemes?: ThemeSlug[];
  metric: string;
}

// Sample subset — 8 cases across the 6 themes. Production will have all 32.
export const CASES: CaseEntry[] = [
  {
    slug: "ai-product-recommendations-100k-retailers",
    title: "AI-Powered Product Recommendations Across 100,000 Retailers",
    client: "Global CPG leader, Brazil operations",
    year: "2020",
    primaryTheme: "revenue-growth",
    metric: "Revenue from AI-driven recommendations exceeded projected targets by 4×.",
  },
  {
    slug: "adtech-campaign-effectiveness",
    title: "AdTech Campaign Effectiveness, From Intuition to Evidence",
    client: "Italian AdTech firm",
    year: "2026",
    primaryTheme: "revenue-growth",
    metric: "15% conversion-rate uplift across analysed campaigns.",
  },
  {
    slug: "hrtech-scaleup-10x-architecture",
    title: "Re-Architecting an HR-Tech Scale-Up for 10× Growth",
    client: "Brazilian HR Tech scale-up",
    year: "2026",
    primaryTheme: "cost-reduction",
    secondaryThemes: ["strategy-vision"],
    metric: "10× scalability headroom; 30% infrastructure cost cut; 66% drop in shipping errors.",
  },
  {
    slug: "simplifying-1000-kpis",
    title: "Simplifying 1,000 KPIs Into a Coherent Story",
    client: "Global beverage company, Brazil",
    year: "2018",
    primaryTheme: "cost-reduction",
    metric: "1,000+ operational KPIs reduced to an executive-relevant set via factorial analysis.",
  },
  {
    slug: "marketing-spend-to-revenue",
    title: "Connecting Marketing Spend to Revenue, Properly",
    client: "Global online gaming and sports-betting platform",
    year: "2022–2025",
    primaryTheme: "customer-experience",
    secondaryThemes: ["revenue-growth"],
    metric: "8× lift in campaign ROI and customer retention across 20+ markets.",
  },
  {
    slug: "regulator-compliance-automation",
    title: "Compliance Automation for a Safety-Critical National Regulator",
    client: "National regulator, safety-critical sector",
    year: "2026",
    primaryTheme: "risk-compliance",
    secondaryThemes: ["cost-reduction"],
    metric: "90% reduction in analyst review time on automated workflows.",
  },
  {
    slug: "unified-data-ai-function",
    title: "Founding a Unified Data & AI Function in a Multinational",
    client: "Global online gaming and sports-betting platform",
    year: "2022–2025",
    primaryTheme: "building-scaling",
    metric: "Team scope 14×, headcount 2.5×, stakeholder NPS to 92.",
  },
  {
    slug: "country-mood-impeachment",
    title: "Reading a Country's Mood During a Constitutional Crisis",
    client: "Emerging data enterprise, political sentiment",
    year: "2016",
    primaryTheme: "strategy-vision",
    metric: "Correctly predicted all four voting rounds of an impeachment process.",
  },
];

// Helper: group cases by primary theme, preserve theme order.
export function casesByTheme(): Map<ThemeSlug, CaseEntry[]> {
  const grouped = new Map<ThemeSlug, CaseEntry[]>();
  for (const t of THEME_ORDER) grouped.set(t, []);
  for (const c of CASES) {
    grouped.get(c.primaryTheme)?.push(c);
  }
  return grouped;
}
