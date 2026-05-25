---
project: erlonrachi-rebuild
register: brand
audit_date: 2026-05-24
target: https://erlonrachi.com
target_stack: Wix (Thunderbolt renderer, React-based runtime)
auditor: Claude / impeccable
output_language: en
---

# Audit — erlonrachi.com

> Technical quality audit of Erlon's personal site before a full rebuild off Wix. Focus: what's measurably wrong, missing, or limiting — not subjective design critique. No fixes applied; this is a diagnostic.

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | **1/4** | One `<h1>` on the entire page, zero `<h2>`-`<h6>`. No heading hierarchy; screen-reader navigation collapses. |
| 2 | Performance | **0/4** | 404 KB of HTML, 60 `<script>` tags, full React+ReactDOM+lodash bundles loaded for a static bio page. |
| 3 | Responsive Design | **0/4** | Mobile viewport hardcoded `width=320` — broken on every phone made since 2016. Wix serves a separate mobile HTML, 57 KB heavier than desktop. |
| 4 | Theming | **1/4** | Wix design tokens (`font_3`) exist but are overridden by 38 inline `style="..."` attributes. No dark mode. |
| 5 | Anti-Patterns | **1/4** | Footer reads "© 2025 by **Maya Nelson**" — Wix template author name was never replaced. `og:site_name` is literally "My Site". |
| **Total** | | **3/20** | **CRITICAL — fundamental rebuild required** |

## Anti-Patterns Verdict

**FAIL — looks like an abandoned template.**

Specific tells:

1. **Footer copyright credits "Maya Nelson"**, not Erlon. This is the demo author name from whichever Wix template was used. It has been live in production for at least a year (sitemap dates to 2025-06-04).
2. **`<meta property="og:site_name" content="My Site">`** — the literal default placeholder. Anyone sharing a link to the site on LinkedIn/Slack/WhatsApp sees the preview labeled "My Site".
3. **"Powered and secured by Wix"** badge present in footer.
4. **Hidden link to wix.com** in the markup (`wix.com/?utm_campaign=vir_created_with`) plus an auto-injected link to Wix's own LinkedIn company page. Free-tier Wix branding active.
5. **Navigation tooltip** "Use tab to navigate through the menu items." is verbatim Wix default text — never customized.
6. **`/copy-of-companies` and `/copy-of-projects`** are publicly indexed in the sitemap. These are Wix's auto-generated duplicates left over from editing — Google sees them.

The cumulative signal is "personal site built quickly in Wix and never finished." For someone positioning as a Data & Tech Exec with 20+ years of experience, this materially undermines authority.

## Executive Summary

- **Audit Health Score:** 3/20 (CRITICAL)
- **Issues found:** 4 P0, 9 P1, 7 P2, 4 P3 (24 total)
- **Top 5 critical issues:**
  1. **P0** — Broken mobile viewport (`width=320`); site is unusable on modern phones without manual zoom.
  2. **P0** — `/services` page returns HTTP 404 but is linked from the primary nav on every page.
  3. **P0** — Footer attributes the site to "Maya Nelson" (Wix template author), not Erlon.
  4. **P0** — Zero meta description on the homepage; SEO snippet on Google is auto-extracted gibberish.
  5. **P1** — 404 KB initial HTML + 60 scripts (React, lodash, multiple Thunderbolt bundles, Sentry) loaded for a bio + 4 links. Likely > 2 MB total page weight.
- **Recommended next step:** Stop iterating on Wix. Define rebuild context (`/impeccable teach` → PRODUCT.md) and start a fresh stack (Astro/Eleventy/plain HTML — anything but a hosted page-builder).

---

## Detailed Findings by Severity

### P0 — Blocking

#### [P0] Mobile viewport hardcoded to 320px
- **Location:** `homepage-mobile.html` line ~6 — `<meta name="viewport" content="width=320, user-scalable=yes" id="wixMobileViewport">`
- **Category:** Responsive
- **Impact:** Wix serves a separate mobile-only HTML document with a fixed-width viewport of 320 CSS pixels. No iPhone has been 320px wide since the iPhone 5 (2012). On a modern phone (375-430px) the layout either renders zoomed-out (text microscopic) or zoomed-in with horizontal scroll. WCAG 1.4.10 (Reflow) fails.
- **Standard:** WCAG 2.1 SC 1.4.10 (Level AA)
- **Recommendation:** Use a single responsive HTML with `<meta name="viewport" content="width=device-width, initial-scale=1">`. This is unfixable inside Wix's "Mobile Editor" model.
- **Suggested command:** `/impeccable adapt` (after rebuild begins)

#### [P0] `/services` link in nav returns 404
- **Location:** Primary navigation, all pages → `https://erlonrachi.com/services` returns HTTP 404 (2 KB error page).
- **Category:** Anti-Pattern (broken UX)
- **Impact:** Anyone clicking "SERVICES" — which is one of only 6 menu items, presumably one of the most commercially important — gets a dead-end error page. This is the single highest-conversion menu item for a consultant site.
- **Recommendation:** Either build the page (preferred — services definition is foundational positioning) or remove the link from the nav.
- **Suggested command:** `/impeccable shape` to define services taxonomy, then `/impeccable craft` to build.

#### [P0] Footer attribution to wrong person ("Maya Nelson")
- **Location:** Footer, all pages — `© 2025 by Maya Nelson. Powered and secured by Wix`
- **Category:** Anti-Pattern
- **Impact:** Visitors see another person's name credited as the site owner. For a personal brand positioning around credibility and seniority, this is unsalvageable trust damage.
- **Recommendation:** Hardcoded in the new build, no template defaults to inherit.
- **Suggested command:** `/impeccable craft` (footer is part of layout)

#### [P0] No `<meta name="description">`
- **Location:** `homepage-raw.html` — confirmed via `grep 'name="description"' → 0 matches`
- **Category:** Anti-Pattern (SEO/discovery)
- **Impact:** Google generates the search snippet from whatever text it can find on the page. Currently this means the snippet is unpredictable and almost certainly does not lead with the positioning Erlon would choose. No control over how the site appears in search results, LinkedIn previews, or Slack unfurls.
- **Recommendation:** Per-page hand-written meta descriptions, ~155 chars, lead with positioning + outcome.
- **Suggested command:** `/impeccable clarify` for the copy itself; `/impeccable craft` for the meta infrastructure.

### P1 — Major

#### [P1] Flat heading hierarchy (only `<h1>`, no `<h2>` through `<h6>`)
- **Location:** Homepage — `grep -c '<h[1-6]'` returns 1.
- **Category:** Accessibility
- **Impact:** Screen-reader users navigating by heading jumps land only on "Erlon Rachi" and cannot skim the page structurally. Sighted users see visual hierarchy through font sizing — but assistive tech sees a flat document. Also weakens SEO (Google uses heading structure for entity understanding).
- **Standard:** WCAG 2.1 SC 1.3.1 (Info and Relationships)
- **Recommendation:** Hero h1 = name + role; section h2s for "About", "Work", "Companies", "Contact"; sub-h3s within each.
- **Suggested command:** `/impeccable typeset` after rebuild scaffold exists.

#### [P1] H1 sized 30px (desktop) / 22px (mobile) via inline styles
- **Location:** `<h1 style="font-size:30px; line-height:1.2em; text-align:center;">` desktop, `22px` mobile
- **Category:** Theming / Typography
- **Impact:** Inline styles override Wix's `font_3` token (which presumably is what the theme meant to set). 30px is small for a personal brand h1 (typical: 40-72px). 22px on mobile makes the most important text smaller than the body copy on some screens.
- **Suggested command:** `/impeccable typeset`

#### [P1] 60 scripts loaded for a static bio
- **Location:** Homepage HTML — includes React 18, React DOM, full lodash, core-js polyfills, multiple `wix-thunderbolt` bundles, Sentry error tracking, Wix tag manager, focus-within polyfill.
- **Category:** Performance
- **Impact:** First Contentful Paint and Time-to-Interactive on 4G mobile will be measured in seconds. The page has ~150 words of text — none of the JS is required to render it.
- **Recommendation:** A rebuilt static site can deliver this page in < 20 KB total (HTML + CSS + a couple images). Reduction in transferred bytes: ~98%.
- **Suggested command:** `/impeccable optimize` (not applicable until rebuild)

#### [P1] Separate mobile HTML document served (Wix adaptive split)
- **Location:** Two different HTML documents returned based on UA — desktop 404 KB, mobile 463 KB.
- **Category:** Responsive / Performance
- **Impact:** Double the maintenance surface (any change must be replicated in two editors). The mobile document is *heavier* than the desktop one, defeating the purpose. Modern responsive design serves one HTML with CSS adaptations.
- **Recommendation:** Single responsive HTML in the rebuild.

#### [P1] 38 inline `style="..."` attributes in homepage HTML
- **Location:** Throughout `homepage-raw.html`
- **Category:** Theming
- **Impact:** No CSS caching benefit (every page re-downloads the same styles inlined). Impossible to apply consistent design tokens — any token change requires editing every page individually. Hostile to dark mode, theming, or future redesigns.
- **Suggested command:** `/impeccable extract` (post-rebuild, to formalize token system)

#### [P1] Page `<title>` is just "Erlon Rachi"
- **Location:** `<title>Erlon Rachi</title>`
- **Category:** Anti-Pattern (SEO)
- **Impact:** Wastes prime SEO real estate. Should describe positioning, not just the name. The name belongs in the title but not alone — e.g., "Erlon Rachi — Data & AI Executive Advisor".
- **Suggested command:** `/impeccable clarify`

#### [P1] `og:site_name` set to default "My Site"
- **Location:** `<meta property="og:site_name" content="My Site"/>`
- **Category:** Anti-Pattern
- **Impact:** Every social share / link preview labels the site as "My Site". Cumulative reputation damage at every share.

#### [P1] Sitemap exposes leftover `copy-of-*` pages
- **Location:** `pages-sitemap.xml` includes `/copy-of-companies` and `/copy-of-projects`
- **Category:** Anti-Pattern (SEO/hygiene)
- **Impact:** Google indexes the duplicates → SEO dilution + visitors may land on stale orphan pages with no nav back. Also signals "unfinished" to any technical visitor who inspects.
- **Recommendation:** Will not exist in clean rebuild.

#### [P1] Hero tagline is generic consultant-speak
- **Location:** Hero — "My purpose is to help companies and professionals get the value of Data and AI"
- **Category:** Anti-Pattern (positioning)
- **Impact:** Indistinguishable from 10,000 other consultant bios. "Get the value of Data and AI" says nothing about what Erlon specifically does, for whom, with what outcome.
- **Suggested command:** `/impeccable clarify` (with `/impeccable teach` first to fix the upstream PRODUCT.md)

### P2 — Minor

#### [P2] Sentry error tracking on a static personal site
- **Location:** `browser.sentry-cdn.com/.../modulemetadata.es5.min.js` loaded on every page
- **Category:** Performance
- **Impact:** Sentry is Wix's internal error reporting — useful for them, zero benefit to Erlon, adds ~50 KB to every page load.

#### [P2] Hero profile photo 205×205px AVIF
- **Location:** Hero image
- **Impact:** AVIF format is good; 205px is too small for retina (renders fuzzy on 2x displays). Should be 410×410 source served via `srcset`.
- **Suggested command:** `/impeccable optimize` post-rebuild.

#### [P2] Bio paragraph is a single 75-word run-on
- **Location:** Body section — "Italian and EU citizen, Brazilian born, with over 20 years of global leadership experience in the European, US and Brazilian markets. Seasoned in both Consultant and Executive roles, Data and AI Expert, Researcher, Public Speaker, Mentor, MSc Data Science and Analytics. Passionate using data to solve business problems."
- **Category:** Anti-Pattern (copy quality)
- **Impact:** Lists credentials in dense prose rather than structuring them. The most concrete fact (20 years experience) is buried mid-sentence. "Passionate using data to solve business problems" is grammatically broken ("about using"). Generic close.
- **Suggested command:** `/impeccable clarify`

#### [P2] Footer email is `@gmail.com`
- **Location:** `mailto:erlonrachi@gmail.com`
- **Category:** Anti-Pattern (positioning)
- **Impact:** A 20-year executive with a personal domain (`erlonrachi.com`) using a gmail address signals "didn't bother to set up email forwarding". Trivial to fix: `hello@erlonrachi.com` or `me@erlonrachi.com` forwarded to Gmail.

#### [P2] Sitemap last updated 2025-06-04 (almost a year stale)
- **Location:** `pages-sitemap.xml` `<lastmod>2025-06-04</lastmod>`
- **Category:** Anti-Pattern (SEO/freshness)
- **Impact:** Tells Google nothing has changed in nearly a year. Mild SEO penalty, plus reinforces "abandoned site" signal.

#### [P2] Only 2 ARIA landmarks (`role="region"`) on the page
- **Location:** Homepage — `grep 'role="' → 2 matches`
- **Category:** Accessibility
- **Impact:** Screen-reader users have no `main`, `navigation`, `contentinfo` (footer) landmarks to jump between. Standard nav-by-landmark is broken.
- **Standard:** WCAG 2.1 SC 1.3.6 (Identify Purpose, AAA) — also affects practical AA usage.

#### [P2] No favicon variants (only single `favicon.ico` at 1150 bytes)
- **Location:** `/favicon.ico` 200 OK, 1.1 KB
- **Impact:** No retina icon, no Apple touch icon, no PWA manifest. Looks low-res on tab bars and home-screen pins.

### P3 — Polish

#### [P3] Image alt for social icons is "Medium   " with trailing whitespace
- **Location:** `<img alt="Medium   ">`
- **Category:** Accessibility
- **Impact:** Trivial — but signals that nobody proofread the alt text either.

#### [P3] Wix vanity attribution link still on
- **Location:** Hidden footer link `wix.com/?utm_campaign=vir_created_with`
- **Impact:** Wix free tier; removable with paid plan. Will disappear in rebuild.

#### [P3] `<meta http-equiv="X-UA-Compatible" content="IE=edge">`
- **Location:** HTML head
- **Impact:** Targeting Internet Explorer in 2026. Inert but archaic.

#### [P3] Skype toolbar meta `<meta name="skype_toolbar" content="skype_toolbar_parser_compatible">`
- **Location:** HTML head
- **Impact:** Disabling a Skype browser plugin that was relevant in 2010. Inert but archaic.

---

## Patterns & Systemic Issues

1. **Template defaults left in production.** Maya Nelson credit, "My Site" og tag, Wix navigation tooltips, leftover `copy-of-*` pages — the site was set up in a Wix template, content was added, but template metadata and orphan pages were never cleaned. Pattern indicates a "set it up, never came back" lifecycle.

2. **Wix architecture is structurally incompatible with the goals of the site.** A personal bio page does not need React 18, lodash, Sentry, Wix Thunderbolt, or any client-side runtime. The chosen platform imposes 60 scripts and 400+ KB of HTML on what could be a 5 KB static page. No amount of polishing inside Wix removes this.

3. **Content is undercooked for the persona.** "Data & Tech Exec" with 20 years' experience but: no case studies surfaced, no notable companies named, no speaking/publication links beyond a Medium icon, no service definitions (services page is 404), no testimonials, no clear ICP. The site is a placeholder for a CV that never got transcribed.

4. **SEO basics absent.** No meta description, generic title, stale sitemap, indexed orphan pages. Combined effect: Google cannot rank or describe the site competitively.

5. **Mobile experience is broken at a foundational level.** The `width=320` viewport is so old that no current responsive testing tool would flag it as "fixable" — the entire mobile rendering pipeline is wrong, not just a CSS bug.

---

## Positive Findings

- **HTTPS + redirect chain works** (1 redirect, fast TLS).
- **`lang="en"`** correctly set on `<html>`.
- **All 3 images have alt text** (content quality of alt text is weak, but the attribute is present).
- **AVIF used for hero image** — modern format, good base for a rebuild's image strategy.
- **Robots.txt and sitemap.xml exist** at standard locations, return 200.
- **Google site verification meta** present — so Google Search Console is wired up; analytics history will survive a migration if the domain stays.
- **Bio content is strong material** — Italian/EU/Brazilian, 20 years, MSc Data Science, consultant + executive — that's distinctive positioning if rewritten with intent.
- **LinkedIn profile linked correctly** with the right href.

---

## Recommended Actions

The rebuild path. Order matters — early steps unblock later ones.

1. **[P0] `/impeccable teach`** — Define PRODUCT.md (positioning, ICP, voice, anti-references) and DESIGN.md (color, type, surface system) for the rebuild. Without this, every later step guesses. **Required before any UI work.**

2. **[P0] `/impeccable shape` — services taxonomy** — Define what Erlon actually offers (advisory, fractional CDO, workshops, ...) so the 404 nav link can be backed by real content.

3. **[P0] `/impeccable craft` — site scaffold** — New stack (suggestion: Astro for the markdown/MDX content model + static output; ~5 KB per page is achievable). Replace Wix entirely. Hardcode footer + meta + OG tags from PRODUCT.md.

4. **[P1] `/impeccable clarify`** — Rewrite the hero tagline, bio paragraph, page title, all meta descriptions. Inputs: PRODUCT.md voice, current strong material (20 years, three markets, MSc).

5. **[P1] `/impeccable typeset`** — Build proper heading hierarchy in the new components. H1 sized appropriately (no inline overrides).

6. **[P1] `/impeccable adapt`** — Confirm responsive behavior across viewport widths. Single HTML, no UA-split.

7. **[P2] `/impeccable optimize`** — Image strategy (srcset, retina, lazy load), font loading, total page-weight budget.

8. **[P2] `/impeccable extract`** — Once the rebuild has 3+ pages, formalize tokens into DESIGN.md.

9. **[P2 final] `/impeccable polish`** — Final pass before DNS cutover from Wix.

**Pre-launch operational tasks** (outside `/impeccable` scope, flag for separate work):
- Domain email forwarding (`me@erlonrachi.com` → Gmail) to retire the `@gmail.com` contact link.
- DNS migration from Wix nameservers to new host.
- 301 redirects from `/copy-of-*` and any other Wix URLs to relevant new pages.
- Re-submit sitemap to Google Search Console after cutover.

---

You can ask me to run these one at a time, all at once, or in any order you prefer.

Re-run `/impeccable audit` after fixes to see your score improve.

---

# Portfolio Sub-Audit (added 2026-05-24)

> The initial audit treated `/portfolio` as a sub-page and scored it on weight alone. Erlon then clarified: **the portfolio is the most relevant part of the site** — currently 27 projects, target 32. This section is a deeper pass with that priority in mind.

## Reframing

The original audit's information-architecture assumption (personal site = hero + bio + services + portfolio + contact) is wrong. The correct framing is:

> **The portfolio IS the product.** Hero, bio, and services exist to drive a visitor into the portfolio. The 27 (→32) projects spanning 2013–2025 ARE the credibility evidence. Everything else is supporting context.

This changes the rebuild's center of gravity. The single most important component is not the hero — it's the **portfolio card** and the **project detail page template**. Get those two right and the rest of the site follows.

## Portfolio Findings

### [P0] Every project card shows the Wix placeholder image

- **Location:** `/portfolio` — all 27 cards display `Image-empty-state.png`
- **Category:** Anti-Pattern (worst possible for a portfolio)
- **Impact:** A portfolio with placeholder images IS the entire content of the page above the fold. The visual centerpiece of the most important page on the site is currently 27 identical empty squares. A visitor scanning the page sees zero project differentiation, zero visual interest, zero proof.
- **Recommendation:** Three viable design directions for the rebuild — to be decided in `/impeccable shape`:
  1. **Real visuals** — diagrams, screenshots, architecture sketches per project. Highest signal, highest effort.
  2. **Intentional typographic cards** — no images at all; cards rendered as editorial composition (large title + client one-liner + year + outcome metric). Lowest effort, distinctive, defensible.
  3. **Abstract iconography** — one generative motif per project category (5 categories → 5 motifs, recombined). Medium effort, on-brand for "Data & Tech Exec".
- The placeholder state cannot ship in the new site.

### [P0] Two projects still have leftover Wix template URLs

- **Location:**
  - "Data Finops" → URL is `/projects-1/desert-wildlife-conservation`
  - "Season Analysis" → URL is `/projects-1/rainforest-action-initiative`
- **Category:** Anti-Pattern
- **Impact:** Same family as the Maya Nelson footer — Wix shipped the template with placeholder project URLs ("Desert Wildlife Conservation", "Rainforest Action Initiative") and the slug was never updated when the project content was overwritten. Any inspecting visitor (or recruiter who hovers a link) sees URLs that contradict the project titles. Google indexes them under the wrong terms.
- **Recommendation:** Hardcoded clean slugs in the new build, generated from titles. Plan 301 redirects from old URLs.

### [P0] 18 of 27 projects have no date

- **Location:** Portfolio cards — "Undated" projects include Data Governance, Customer Mindset Analytics, GA4 Migration, and 15 others. Only 9 projects show Q+year.
- **Category:** Anti-Pattern (positioning)
- **Impact:** A 12-year track record (2013-2025 per Erlon) loses its strongest selling point — longevity, breadth, recency — without dates. A visitor cannot tell if "Enterprise Data Governance" was last year or in 2015. The portfolio reads as a single undifferentiated blob.
- **Recommendation:** Required field per project. Format normalized (suggest: `YYYY Q1-Q4` or `YYYY-YYYY` for multi-year engagements). The 9 projects with dates should be normalized to the same format.

### [P0] Count mismatch — site shows 27, current reality is 32

- **Location:** Portfolio page shows 27 unique project hrefs; Erlon states current count should be 32.
- **Category:** Anti-Pattern (content freshness)
- **Impact:** Five projects from the last ~12 months never made it onto the site. For a portfolio meant to demonstrate active engagement, a year-stale list undermines the "still in the game" signal.
- **Recommendation:** Content backfill of the 5 missing projects is a discrete pre-launch task. Frictionless updates (markdown file commit, not Wix editor click-through) should be a core requirement of the rebuilt CMS.

### [P1] URL structure is Wix's internal collection name

- **Location:** All project URLs prefixed `/projects-1/` — Wix's auto-generated collection name; the `-1` suffix means a previous "projects" collection existed and was duplicated.
- **Category:** Anti-Pattern (URL quality, SEO)
- **Impact:** `/projects-1/data-governance` is a worse URL than `/work/data-governance` or `/case-studies/data-governance` on every axis: readability, share-ability, SEO. The `-1` suffix also confirms (as with `/copy-of-companies`) that the site has unresolved duplicate-content debt.
- **Recommendation:** New URL scheme — proposed `/work/<slug>` or `/cases/<slug>`. Plan 301 from `/projects-1/<slug>` for every project to preserve any backlinks.

### [P1] URL slugs contain parentheses, dates, and double dashes

- **Location:** Examples — `/projects-1/data-driven-product-launch--(q2-2019)` (double dash), `/projects-1/cpg-data-driven-digital-transformation-(q4-2018---q3-2021)` (3 dashes + parens + 2 dates)
- **Category:** Anti-Pattern (URL quality)
- **Impact:** Parentheses in URLs break some shareable contexts (markdown link parsing especially). Dates in slugs mean a re-publication or year correction requires a redirect. Project titles in slugs work; dates should live in metadata.
- **Recommendation:** Slugs from title only, no dates, no parens — e.g., `/work/data-driven-product-launch`, `/work/cpg-data-driven-digital-transformation`.

### [P1] Category taxonomy is oversaturated

- **Location:** 5 categories — `Strategic Data & AI Leadership` / `Infrastructure & Data Engineering` / `Advanced Analytics & AI-Driven Innovation` / `Customer Insights Experience & Operational Optimization` / `Digital Transformation & Cultural Change`. Most projects are tagged in 2–3 of them.
- **Category:** Anti-Pattern (information architecture)
- **Impact:** When a project belongs to 3 of 5 categories, filtering by category becomes noisy (almost every project shows up in almost every filter). The categories also overlap conceptually — "Strategic Data & AI Leadership" and "Digital Transformation & Cultural Change" describe overlapping work. The taxonomy needs to be either fewer + exclusive, or accepted as multi-tag but with category labels visible on every card.
- **Recommendation:** During `/impeccable shape`, redesign taxonomy. Two viable shapes:
  1. **3 exclusive categories** (each project gets exactly one): e.g., Strategy / Build / Analytics. Filter becomes meaningful.
  2. **Multi-tag with primary** — one primary category determines visual treatment, secondary categories shown as small chips.

### [P1] Category labels exposed on cards are verbose

- **Location:** Card display — e.g., "Customer Insights Experience & Operational Optimization" is 7 words.
- **Category:** Anti-Pattern (copy + layout)
- **Impact:** Long category labels on small cards force wrapping, dominate the visual hierarchy, push the project title down. A card should communicate "what" (title) faster than "what bucket".
- **Recommendation:** Short labels (1–2 words max). e.g., "Customer Insights" or "CX".

### [P1] No metric or outcome on cards

- **Location:** Cards display title + categories only.
- **Category:** Anti-Pattern (scanning)
- **Impact:** A consulting portfolio's strongest hook is outcomes — "doubled X", "saved $Y/yr", "migrated 50TB". None of that surfaces on the card; visitors must click in to find it. For a 32-card grid, this means the page is browseable but not skim-able.
- **Recommendation:** Card model = `[title] / [client one-liner] / [year] / [one metric or outcome verb-phrase]`. Example: "CPG Data Driven Digital Transformation / Global beverage company / 2018–2021 / cut analyst response time 60%."

### [P1] Client anonymization is bland

- **Location:** Sample project ("Enterprise Data Governance") — client referred to as just "company" / "enterprise-scale organization".
- **Category:** Anti-Pattern (positioning)
- **Impact:** "Company" tells the reader nothing. Anonymization is fine and often required by NDA, but richer anonymization is allowed and is the entire skill of writing a case study: "Global European retail bank, 30M+ customers" or "Top-3 Brazilian CPG, $1B+ revenue" gives scale and stakes without naming.
- **Recommendation:** Per-project anonymization brief — sector + region + scale signal. Treat as a required field in the content model.

### [P2] Single static portfolio page; no pagination or category routes

- **Location:** `/portfolio` renders all 27 cards in one document.
- **Category:** Performance / Navigation
- **Impact:** At 32 (and growing) projects, a single static page means: page weight grows linearly, no deep-linkable category URL (filter is client-side JS only), no projects-by-year view, no related-project recommendation possible from the URL.
- **Recommendation:** Rebuild with category and year as URL-level routes — e.g., `/work?category=infrastructure`, `/work?year=2023`. Each filter has its own URL, shareable, indexable.

### [P2] No featured-project mechanism

- **Location:** All 27 projects rendered with equal weight in the grid.
- **Category:** Information architecture
- **Impact:** Erlon has no way to highlight 3–5 anchor projects that represent his strongest work. The grid democratizes everything, including projects that are weaker on the page.
- **Recommendation:** Add a `featured: true` flag per project. Featured projects render in a hero strip above the full grid, or in larger card sizes within the grid.

### [P2] Sample project page lacks structure

- **Location:** `/projects-1/data-governance` (representative sample)
- **Category:** Content model
- **Impact:** The project page has decent content (DAMA framework, Databricks Unity Catalog, Data Governance Office chaired by CTO, exabyte-scale data) but no structural template. A reader can't quickly find "outcome", "tech stack", "team size", "duration" — they have to read continuous prose.
- **Recommendation:** Define a project page schema in `/impeccable shape`: hero (title + client signal + year + duration), problem, approach (with tech tags), outcome (with at least one quantified metric), team/role (Erlon as lead/advisor/etc.), related projects. Markdown frontmatter for all metadata.

### [P3] WebFetch initially miscounted at 28

- **Note:** My first portfolio fetch reported 28 projects; the raw HTML `<a>` count confirms 27 unique project URLs. Erlon's count of 27 (current) is correct. This is operator note, not a site finding.

## Portfolio Content Inventory — Captured

| # | Title (on card) | URL slug | Year(s) | Notes |
|---|---|---|---|---|
| 1 | Social Listening and Public Opinion Sentiment | `social-listening-and-online-public-opinion-sentiment-(q2-2016)` | Q2 2016 | Oldest dated entry |
| 2 | Optimizing Business Levers and Reducing Operational KPIs | `operations-kpi-optimization-(q2-2018)` | Q2 2018 | |
| 3 | Banking - Data Driven Customer Service | `banking---data-driven-customer-service-(q3-2018)` | Q3 2018 | 3 dashes in slug |
| 4 | Data Digital Transformation Business Proposition | `data-digital-transformation-business-proposition-(q4-2020)` | Q4 2020 | |
| 5 | Product Recommendation Algorithm | `product-recommendation-algorithm-(q4-2020)` | Q4 2020 | |
| 6 | B2B Digitalization Drive | `b2b-digitalization-drive-(q2-2020)` | Q2 2020 | |
| 7 | Data Driven Product Launch | `data-driven-product-launch--(q2-2019)` | Q2 2019 | Double dash |
| 8 | Out Of Stock Forecasting | `out-of-stock-forecasting-(q2-2020)` | Q2 2020 | |
| 9 | CPG Data Driven Digital Transformation | `cpg-data-driven-digital-transformation-(q4-2018---q3-2021)` | Q4 2018–Q3 2021 | Multi-year, 3-year engagement |
| 10 | Setting up the Data Practice for EMEA | `-setting-up-the-data-practice-for-emea` | Undated | Leading dash in slug |
| 11 | CPG Sales Tech Control Ecosystem | `cpg-sales-tech-ecosystem-(q2-2023)` | Q2 2023 | |
| 12 | Big Data Strategy Development | `big-data-strategy-development-(q3-2023)` | Q3 2023 | |
| 13 | Data Security and Disaster Recovery | `data-security-and-disaster-recovery` | Undated | |
| 14 | Responsible Online Behaviour | `responsible-online-behaviour` | Undated | |
| 15 | Social Data Features | `social-data-features` | Undated | |
| 16 | Enterprise Data Governance | `data-governance` | Undated | Sample inspected — strong content |
| 17 | Migration of legacy Big Data Infrastructure stack | `migration-to-new-cloud-based-tenant` | Undated | |
| 18 | Crafting Comprehensive Strategy for Data Infrastructure | `data-infrastructure-strategy` | Undated | |
| 19 | CRM Campaign Effectiveness Analysis | `crm-campaign-effectiveness-analysis` | Undated | |
| 20 | Build up the Brazilian Development Center | `build-up-the-brazilian-development-center` | Undated | |
| 21 | Customer Data Platform (CDP) Architecture | `customer-data-platform-cdp-architecture` | Undated | |
| 22 | Customer Mindset Analytics | `customer-mindset-analytics` | Undated | |
| 23 | Customer Experience Expansion | `customer-experience-expansion-timeline-of-facts` | Undated | |
| 24 | Set up the area of Technology, Big Data, Business Analytics and AI | `set-up-technology-big-data-business-analytics-ai` | Undated | |
| 25 | **Data Finops** | **`desert-wildlife-conservation`** | Undated | ⚠️ Wix template default slug |
| 26 | GA4 Migration | `ga4-migration` | Undated | |
| 27 | **Season Analysis** | **`rainforest-action-initiative`** | Undated | ⚠️ Wix template default slug |
|   | _(5 more pending Erlon's backfill)_ | _to come_ | _2024–2026?_ | Target total = 32 |

## Updated Recommended Actions (with portfolio priority)

Replaces the original recommendation order:

1. **[P0] `/impeccable teach`** — Define PRODUCT.md leading with **portfolio as the centerpiece**, not as a sub-page. ICP, voice, anti-references.
2. **[P0] `/impeccable shape` — portfolio content model** — Decide: card design direction (real visuals / typographic / iconography); project page schema (problem → approach → outcome → metadata); category taxonomy (3 exclusive or multi-tag-with-primary); URL scheme (`/work/<slug>` proposed); featured-project mechanism.
3. **[P0] `/impeccable shape` — services taxonomy** — Define services so `/services` 404 link is backed by real content.
4. **[P0] `/impeccable craft` — content model & build** — Astro Content Collections (one markdown file per project, frontmatter for all metadata). Project page template. Portfolio index page. Hero/bio pages. Footer hardcoded.
5. **[P1] Content backfill** — 5 missing projects (32 - 27). Per-project anonymization brief (sector + region + scale). Date every project. Quantified outcome per project.
6. **[P1] `/impeccable clarify`** — Rewrite hero tagline, bio, page titles, meta descriptions. Card copy (client one-liner, outcome verb-phrase). Category short labels.
7. **[P1] `/impeccable typeset`** — Heading hierarchy; project-page composition; card typography (the single most important typographic decision in the rebuild).
8. **[P1] `/impeccable adapt`** — Responsive across viewport widths. Portfolio grid layout: 1/2/3/4 columns by viewport. Card touch targets.
9. **[P2] `/impeccable optimize`** — Image strategy (per-project visuals, lazy loading, srcset). Lighthouse budget for portfolio page < 50KB without images.
10. **[P2] `/impeccable extract`** — Tokens to DESIGN.md once 3+ pages exist.
11. **[P2 final] `/impeccable polish`** — Pre-launch.

**Pre-launch operational additions:**
- 301 redirects: `/projects-1/<old-slug>` → `/work/<new-slug>` for all 27 projects.
- 301 redirects: `/projects-1/desert-wildlife-conservation` → `/work/data-finops` and `/projects-1/rainforest-action-initiative` → `/work/season-analysis` (correct the leftover template slugs).
- Category filter URLs must be Google-indexable.

---

# Canonical Portfolio Source — added 2026-05-24

> Erlon delivered the full anonymized portfolio in a single markdown file. This supersedes the scrape of `/portfolio` for all rebuild content decisions. The Wix portfolio is now historical reference only.

## Source file

`C:\Users\erlon\projects\claude-code-playground\erlonrachi-rebuild\[on] Public Portfolio 32-cases.md`

647 lines. 32 cases, each in two formats:
- **In brief** — Situation / Complication / Resolution / Impact (4 paragraphs, ~150 words)
- **The longer story** — discursive essay (~300-400 words, opinionated, voice-driven)

Erlon's framing in the preface: *"Each case is presented twice. Read either or both."* This dual-format is itself a design decision — it must be preserved as a UX pattern on each project page.

## Canonical era structure

The portfolio organizes naturally as a career arc — not by capability (the 5 Wix categories the audit flagged as oversaturated). Era is the primary axis:

| Era | Span | Role | Cases | Count |
|---|---|---|---|---|
| Contractor | 2025-26 | Lead Consultant / Co-Founder, Iarandu | 1-5 | 5 |
| Director, Data & AI | 2022-25 | Director of Technology, Data & AI — global online gaming/sports-betting platform | 6-20 | 15 |
| Senior Director, Data Sci & AI | 2022-23 | Senior Director — global digital-transformation consultancy | 21-23 | 3 |
| Senior Manager, Data Sci | 2018-21 | Senior Manager — global consultancy serving CPG / banking | 24-31 | 8 |
| Director of Technology | 2016 | Emerging data enterprise (political sentiment) | 32 | 1 |

This is the spine for the rebuild's portfolio navigation. Cases group by era, dates sort within era, capability tags become secondary metadata (filterable but not primary).

## Anonymization quality (already done — no copy work needed)

Erlon delivered rich anonymization in the source file. Examples:
- "Brazilian HR Tech scale-up"
- "National regulator in a safety-critical sector"
- "Italian AdTech firm"
- "UK-based RegTech / process-mining startup"
- "Global online gaming and sports-betting platform"
- "Three major UK enterprises — automotive, healthcare, FMCG"
- "Fortune 500 food multinational"
- "Global CPG leader (Brazil operations)"
- "Leading Latin American bank"
- "Global beverage company (Brazil)"

Each carries sector + region + scale signal. The AUDIT P1 finding "client anonymization is bland" is **resolved** — Erlon already did the work.

## Per-case quantified outcomes (card metric source)

Every case has at least one quantified or named outcome. The original AUDIT recommendation "card model = title / client one-liner / year / metric" is now trivially achievable from this source. Examples:

- "10x scalability, 30% infra cost cut, 66% drop in shipping errors"
- "90% reduction in analyst review time on automated workflows"
- "15% conversion-rate uplift"
- "430% increase in monthly digital sales volume"
- "Revenue exceeded projected targets by a factor of four"
- "20.7 million product-location combinations / 15% lost-sales reduction"
- "USD 50 million in annual recurring business impact / several billion in client impact"
- "Four correct predictions across four voting rounds"

## Card-design direction — decided

The audit listed three options (real visuals / typographic / iconography) and deferred the call to `/impeccable shape`. With the source file's content density (rich anonymization + quantified outcomes + era marker + role + distinctive titles), **typographic cards are the clear winner**:

- Real visuals would need 32 bespoke images and would compete with the typography for attention. High effort, lower signal than the content itself.
- Iconography would homogenize 32 distinct stories into 5 reused motifs. Loss of distinction.
- Typographic composition lets each case's actual material (title, client signal, era, metric) BE the visual.

Decision to confirm in `/impeccable shape`, but the source file removes the ambiguity. Type-first cards are the answer this content asks for.

## Voice and copy-handling rules

- **Em-dash normalization required.** Erlon's source uses `—` heavily as a visual separator in drafting. Per his confirmation (2026-05-24): normalize to `:`, `,`, or `.` based on context when prose lands in the rendered UI. This aligns with /impeccable house style — no conflict.
- **Preface is reusable as homepage opener.** Erlon's preface ("These thirty-two projects... For my employers, clients, partners, mentors and friends, I will be forever grateful. Nothing that is worth doing can be done alone.") is editorial-grade and on-voice. Strong candidate as the bio/hero anchor of the rebuilt site.
- **The "longer story" essays carry the strongest voice.** They contain the memorable observations ("Useful beats clever, every time", "Detection without intervention is detection theatre", "Hours are linear; products compound"). These are the differentiation versus 10,000 other consultant sites. Surface them; don't hide them behind a click if avoidable.

## Resolved AUDIT findings

The canonical portfolio file fixes several findings without further work:

| Audit finding | Status |
|---|---|
| [P0] Count mismatch (27 → 32) | ✅ Erlon delivered the 5 missing |
| [P0] 18 of 27 undated | ✅ All 32 carry year(s) in era markers |
| [P0] Two leftover template slugs (`desert-wildlife-conservation`, `rainforest-action-initiative`) | ✅ Cases 7 and 9 in the file are "Data FinOps" and "A Season's Worth of Sport, Decoded" — no template residue |
| [P1] Bland client anonymization | ✅ Rich sector + region + scale signals throughout |
| [P1] No metric on cards | ✅ Quantified outcomes per case |
| [P1] Verbose category labels | ⏳ Resolved by switching primary axis to era (1-2 word labels) |
| [P1] Bio is a 75-word run-on | ⏳ Preface offers replacement material on-voice |

## What this changes in the recommended actions

Updated order (replaces the previous "Updated Recommended Actions" list):

1. **[P0] `/impeccable teach`** — Build PRODUCT.md with portfolio as centerpiece. Source material is the canonical file. Voice already established by Erlon's prose.
2. **[P0] `/impeccable shape` — portfolio + project page** — Confirm typographic card design, era-primary navigation, dual-format project page template. Less open-ended than originally scoped because content already constrains the answers.
3. **[P0-removed] ~~`/impeccable shape` services taxonomy~~** — May be unnecessary. With 32 case studies as the centerpiece, "Services" as a separate section becomes redundant: the portfolio IS the proof of services. To decide in `/impeccable teach` when defining IA.
4. **[P0] `/impeccable craft`** — Astro scaffold. Content Collections from the source file (one MD per case, frontmatter for era/year/role/sector/scale/metric). Portfolio index. Project page template. Homepage with preface as anchor.
5. **[P1] `/impeccable clarify`** — Hero positioning + page titles + meta descriptions. Note: case study copy itself does not need clarify — Erlon's prose is publishable as-is after em-dash normalization.
6. **[P1] `/impeccable typeset`** — Most important typographic decisions: era labels, card composition, case-page hierarchy (brief / story), preface treatment.
7. **[P1] `/impeccable adapt`** — Responsive grid 1/2/3/4 columns by viewport. Touch targets on cards.
8. **[P2] `/impeccable optimize`** — Image strategy minimal (per typographic decision). Font loading critical (Fraunces or equivalent + Inter Tight feasible budget).
9. **[P2] `/impeccable extract`** — Tokens to DESIGN.md.
10. **[P2] `/impeccable polish`** — Pre-launch.
