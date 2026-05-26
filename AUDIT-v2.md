# Audit v2 — erlonrachi.com in production

**Date:** 2026-05-26
**Target:** https://erlonrachi.com (DNS cutover from Wix → Netlify completed 2026-05-24)
**Method:** `/impeccable audit` on Astro 5 + Tailwind v4 build, live HTML for 9 representative routes, source review for Layout, global.css, every page in `src/pages/`, components.
**Routes sampled:** `/`, `/work`, `/work/all`, `/work/data-finops`, `/story`, `/work-with-me`, `/writing`, `/writing/from-input-output-to-intent`, `/contact`.
**Compared against:** `PRODUCT.md` (Europa Modernist register, 90-second qualification, dual-archetype) and `DESIGN.md` (Splash Rule, Vignelli Brief, Adult Rule, Flat-by-Default Rule).

This is a v2-planning audit. v1 just shipped. The goal is to surface improvements, not relitigate v1 decisions.

---

## Audit Health Score

| # | Dimension | Score | Key finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3/4 | Semantic HTML excellent, reduced-motion solid; portrait alt thin, no skip-link, one side-stripe ban hit |
| 2 | Performance | 3/4 | Astro SSG + Netlify Edge cache solid; one layout-property animation, Google Fonts loaded external |
| 3 | Theming | 4/4 | Full token system, 12 alpha tokens centralized, zero hard-coded color values in production output |
| 4 | Responsive | 4/4 | Fluid clamps, sane breakpoints, no fixed widths, no touch-target violations |
| 5 | Anti-patterns | 2/4 | DevNav scaffolding still in production (P0), dev-copy leaks in footers, em-dash titles, side-stripe ban hit |
| **Total** | | **16/20** | **Good — address weak dimensions before claiming v1 done** |

**Honest read:** the design system is solid. The shipping discipline is not. v1 went live with developer scaffolding visible to every visitor, and with `noindex` on every page. Fixing those two things is the entire short-path to a strong v2.

---

## Anti-Patterns Verdict

**Does this look AI-generated?** No — when you ignore the scaffolding. The committed Europa Blue surface, the antique-gold painted-highlight signature, the editorial duotone portrait, and the spec-sheet pattern are distinctive and intentional. There is no SaaS-cream, no gradient text, no hero-metric template, no glassmorphism, no icon+heading+text card grid.

**Tells that ARE present, all leftover-scaffolding category:**
1. Visible "DEV NAV" header on every route (P0 — see #2 below)
2. Footer copy reading "Sample subset · production loads all 32 from Content Collections" (P1 — see #5)
3. Default fallback `<title>` reads "erlonrachi.com — painted highlight demo" (P2 — see #14)
4. `<meta name="robots" content="noindex">` on every page (P0 — see #1)

These are not aesthetic AI tells. They are operational tells: code that thinks it's still in staging.

---

## Executive Summary

- **Audit Health Score:** 16/20 (Good)
- **Issues by severity:** P0 ×2, P1 ×7, P2 ×6, P3 ×7 (22 total)
- **Top 5 critical issues:**
  1. **`noindex` on every page** → site invisible to Google, undoes the entire content strategy
  2. **`DevNav` scaffolding rendered on every page** → first thing every visitor sees is "DEV NAV"
  3. **Zero global navigation once DevNav is removed** → users on a case page have no way to reach `/story` or `/writing` except via `← back to work`
  4. **Zero Open Graph metadata** → LinkedIn shares (the site's primary distribution channel per `PRODUCT.md`) render with no preview card
  5. **`/contact` is a mailto stub** → form is the qualification mechanism; without it, the "90 seconds to a qualified conversation" principle from `PRODUCT.md` has no surface to live on

**Recommended next move:** ship a v2.0 "make v1 actually live" patch that fixes the two P0s and the four most-visible P1s (#3, #4, #5, #6 below) before any new feature work. Time-box that to one session. Then plan v2.1 (form backend, OG cards, sitemap, RSS) as a discrete deliverable.

---

## Detailed Findings by Severity

### P0 — Blocking

#### 1. Every production page emits `<meta name="robots" content="noindex">`
- **Location:** `src/layouts/Layout.astro:21`
- **Category:** SEO / shipping discipline
- **Impact:** Google, Bing, and every crawler are explicitly told not to index any page. The entire 32-case portfolio, 21 essays, and personal story page are invisible in organic search. This single line erases the SEO value of every redirect we configured in `netlify.toml`.
- **Standard:** SEO baseline. Not a WCAG issue.
- **Root cause:** the meta was added when the build lived on `erlon-personal.netlify.app` to avoid SEO bleed onto the temp domain. After the DNS cutover it should have been removed. We forgot.
- **Recommendation:** delete line 21 in `Layout.astro`. Optionally gate behind `import.meta.env.PROD` for future preview branches, but the simpler fix is: just remove it.
- **Suggested command:** `/impeccable harden`

#### 2. `DevNav` scaffolding component is rendered on every production page
- **Location:** `src/components/DevNav.astro` + imported by all 9 pages
- **Category:** Anti-pattern / shipping discipline
- **Impact:** the FIRST thing every visitor sees is a sticky black bar reading "DEV NAV" followed by 8 internal links including "Work / sample case" and "Writing / sample essay". This is unambiguously scaffolding. It contradicts the "Adult Rule" and "Premium by subtraction" principles in `PRODUCT.md`. A recruiter or CTO landing here from a LinkedIn DM sees the dev tooling before they see the painted-highlight headline.
- **The DevNav file itself even says so** (line 2): `Temporary dev nav: cross-links between the layout variants + signature component demo. Removed once one layout is picked.`
- **Recommendation:** remove `DevNav` from every page and replace with a real production navigation (see #3 below — these two are coupled).
- **Suggested command:** `/impeccable craft` (replacing DevNav is a small feature, not a polish)

### P1 — Major

#### 3. Zero global navigation once `DevNav` is removed
- **Location:** all pages (the entire site)
- **Category:** Architecture / IA
- **Impact:** every page currently uses `DevNav` as its only global nav. When we remove `DevNav` (which we must, per #2), the site has no global header, no menu, nothing. Users on `/work/data-finops` would have only `← back to work` and a footer link to "All projects · Work with me". No path from a case page to `/story`, `/writing`, or `/`. This breaks the dual-archetype journey from `PRODUCT.md` (Buyer 30–60s, Recruiter <30s) — both archetypes need to navigate across the site, not down one path.
- **Recommendation:** before removing DevNav, design and ship a minimal global header. Editorial pattern, not a SaaS menubar. Probably: logotype-left (a single Fraunces "ER" or "Erlon Rachi"), 4 links right (`Work`, `Writing`, `Story`, `Engage`), no dropdowns, no hamburger expansion until ≤640px. Keeps the Vignelli/European Sobriety register.
- **Suggested command:** `/impeccable shape` first (decide the IA), then `/impeccable craft` (build it)

#### 4. Dev-copy leaks in `/work` and `/work/all` footers
- **Location:**
  - `src/pages/work/index.astro:87-90`: *"Sample subset: 32 of 32 cases · drill-down per theme pending"* and *"Production version loads all 32 from Content Collections. Theme detail pages route at /work/&lt;theme-slug&gt;."*
  - `src/pages/work/all.astro:47`: *"Sample subset · production loads all 32 from Content Collections"*
- **Category:** Anti-pattern / copy
- **Impact:** brand erosion. A visitor sees "Sample subset", "Production version", "Theme detail pages route at /work/&lt;theme-slug&gt;" and reads this as: this site is unfinished. Compounds the DevNav damage.
- **Recommendation:** delete those footers entirely, or replace with a single mono-label like "32 cases · 11 years · 27+ markets" that mirrors the proof line on the homepage.
- **Suggested command:** `/impeccable clarify`

#### 5. Zero Open Graph and Twitter Card metadata
- **Location:** `src/layouts/Layout.astro` (head)
- **Category:** SEO / brand
- **Impact:** the site's primary distribution channel is LinkedIn (per `PRODUCT.md` content engine). When Erlon shares `erlonrachi.com/work/data-finops` in a DM or post, LinkedIn fetches the URL and renders... nothing. No preview image, no title card, no description card. This silently degrades every share. For a brand site the OG card is the share.
- **Recommendation:** add per-page `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `twitter:card`, `twitter:image`. Build a small server-rendered OG image template (Astro can do this via `astro-og-canvas` or a `[og].png.ts` endpoint) — image should be Europa Blue surface, Fraunces title, painted-highlight on a key phrase. One template, dynamic per page.
- **Suggested command:** `/impeccable craft` (this is a real feature)

#### 6. Missing `/sitemap.xml` and `/robots.txt`
- **Location:** Astro config + project root
- **Category:** SEO
- **Impact:** combined with #1, search engines have neither permission to crawl nor a map of what to crawl. Even after we remove `noindex`, indexing will be slow without a sitemap to submit to Google Search Console.
- **Recommendation:** install `@astrojs/sitemap`, configure with `site: 'https://erlonrachi.com'` in `astro.config.mjs`. Add a one-line `public/robots.txt` referencing the sitemap. Submit sitemap to GSC once #1 is fixed.
- **Suggested command:** `/impeccable harden`

#### 7. Missing `/favicon.ico` (only `.svg` shipped)
- **Location:** `public/`
- **Category:** Compatibility / brand
- **Impact:** Safari (especially iOS), Firefox in some configurations, and several feed readers/bookmarking tools fall back to requesting `/favicon.ico` and ignore the SVG declaration. They get a 404 and display either nothing or a broken-image glyph in the tab/bookmark.
- **Recommendation:** add a 32×32 PNG `favicon-32.png`, a `favicon.ico` (multi-resolution ICO), and an `apple-touch-icon.png` (180×180) to `public/`. Reference all three in `Layout.astro`. The favicon design should be a single antique-gold glyph on Europa Blue — a small painted-highlight rectangle, or the "ER" monogram in Fraunces.
- **Suggested command:** `/impeccable harden`

#### 8. Side-stripe border ban violation on `/contact`
- **Location:** `src/pages/contact.astro:76` — `.contact__tier { border-left: 2px solid var(--splash); }`
- **Category:** Anti-pattern (impeccable shared design law)
- **Impact:** this is the exact pattern the impeccable spec calls out as "never intentional" — a thicker side stripe used as a colored accent. Reads as Bootstrap-alert.
- **Recommendation:** rewrite the tier-context block. Options: (a) full 1px `var(--accent-soft)` border on all four sides; (b) background-tint only, no border; (c) leading mono "Tier of interest" label inline with the tier name, no container at all. Option (c) is most aligned with the Vignelli/spec-sheet pattern used elsewhere on the site.
- **Suggested command:** `/impeccable polish`

#### 9. `/contact` form is a mailto stub
- **Location:** `src/pages/contact.astro:39-46`
- **Category:** Conversion / product
- **Impact:** the page literally says "Form coming soon" in production. This is the primary qualification surface for both Track A (Fractional) and Track B (Builder) CTAs. The PRODUCT.md principle "site has one job: turn cold attention into a qualified conversation within 90 seconds" cannot be measured or honored without a form. Also: `mailto:` opens whatever mail client the visitor has configured (or nothing on mobile), which is a known friction.
- **Recommendation:** ship a Netlify Function form, mirroring the pattern from Iarandu's `lead.ts`. Fields: name, email, tier-of-interest (pre-filled from `?tier=` query param), problem statement (textarea), preferred contact window. Same anti-bot honeypot. Forward to `erlonrachi@gmail.com` via Resend (you already have a Resend account from Iarandu).
- **Suggested command:** `/impeccable craft`

### P2 — Minor

#### 10. Layout-property animation on `/work-with-me` tier CTA
- **Location:** `src/pages/work-with-me.astro:593-604` — `.tier__cta` has `transition: padding 140ms` and `:hover { padding-right: 12px; border-bottom-width: 3px; }`
- **Category:** Performance / impeccable design law
- **Impact:** animating `padding` triggers layout on every frame of the hover transition. Same for `border-bottom-width`. The impeccable spec explicitly bans this. Visible cost is small (button-sized layout area), but it violates the rule.
- **Recommendation:** replace with `transform: translateX(4px)` for the forward motion + keep the static border thickness, OR use a `::after` pseudo-element with `transform: scaleY(2)` for the underline emphasis.
- **Suggested command:** `/impeccable animate` (or `/impeccable polish`)

#### 11. Every page title uses em-dash separator
- **Location:** every page's `<Layout title=...>` prop. Pattern: `${title} — Erlon Rachi`
- **Category:** Copy / brand voice
- **Impact:** Erlon's explicit style rule (saved to memory): "Os travessões não são meu estilo. Podem ser trocados por ':', ',', '.' dependendo do caso." The impeccable shared design law also bans em-dashes. The title is the most-quoted string on the site (browser tab, search snippet, social share).
- **Recommendation:** switch to a thinner separator. Options: `${title} · Erlon Rachi` (interpunct, matches the proof bar separators on the homepage), `${title} | Erlon Rachi` (pipe, classic), or `${title}, Erlon Rachi` (comma). Recommend the interpunct for consistency with the site's existing micro-typography.
- **Suggested command:** `/impeccable clarify`

#### 12. Page titles also use em-dash inside the descriptive part
- **Location:** `src/pages/index.astro:29` — `title="Erlon Rachi — Senior data and AI leadership and execution"`; `src/pages/work/index.astro:13` — `title="Work — erlonrachi.com"`; `src/pages/work/all.astro:13` — `title="All projects — erlonrachi.com"`
- **Category:** Copy / brand voice
- **Impact:** same as #11, but inside the page-specific title segment.
- **Recommendation:** swap em-dashes for colons or interpuncts here too. Suggested home title: `"Erlon Rachi · Senior data and AI leadership"`.
- **Suggested command:** `/impeccable clarify`

#### 13. Default Layout fallback title/description still reads as a demo
- **Location:** `src/layouts/Layout.astro:10-11`
- **Current values:** `"erlonrachi.com — painted highlight demo"` / `"Signature component for erlonrachi.com. Single inline gesture, used sparingly."`
- **Category:** Polish / shipping discipline
- **Impact:** if any future page is added without a `title=` prop (or with an undefined fallback path), the visitor sees the dev placeholder. Latent bug.
- **Recommendation:** change defaults to `"Erlon Rachi · Senior data and AI leadership"` / `"Senior data and AI work across 27+ markets. 32 case studies. Two productized engagement tracks."`
- **Suggested command:** `/impeccable clarify`

#### 14. Portrait alt text is bare
- **Location:** `src/pages/story.astro:48` — `alt="Erlon Rachi"`
- **Category:** Accessibility
- **Impact:** screen reader users on `/story` hear "Erlon Rachi" with no context. The portrait carries editorial intent (duotone, Europa Blue treatment, single hero image on the entire site). Bare alt undersells the page.
- **Recommendation:** `alt="Portrait of Erlon Rachi, duotone editorial treatment in Europa Blue."` (or similar — short, descriptive, doesn't restate the heading).
- **Suggested command:** `/impeccable clarify`

#### 15. Bare `mailto:` is the primary CTA on `/contact`
- **Location:** `src/pages/contact.astro:20`, 46
- **Category:** UX
- **Impact:** opens the visitor's default mail client (variable on desktop, often broken on mobile webmail-only users). Conversion friction.
- **Recommendation:** mostly resolved by #9 (ship the form). Until then, keep the mailto but supplement with a `Copy email address` button (one-line clipboard write).
- **Suggested command:** rolled into #9

### P3 — Polish

#### 16. Google Fonts loaded via external stylesheet
- **Location:** `src/layouts/Layout.astro:26-29`
- **Category:** Performance / privacy
- **Impact:** every visitor hits `fonts.googleapis.com` (DNS + TLS handshake) before any text renders in its real font. Mild FOUT. Also: GDPR considerations for EU visitors (Erlon is Milan-based — clientele likely EU-heavy).
- **Recommendation:** self-host the three families via `@fontsource-variable/fraunces`, `@fontsource-variable/inter-tight`, `@fontsource/jetbrains-mono`. Subset to Latin + Latin-Ext only. Drops external DNS + improves LCP.
- **Suggested command:** `/impeccable optimize`

#### 17. `Cache-Control: public,max-age=0,must-revalidate` on every HTML page
- **Location:** Netlify default for HTML
- **Category:** Performance
- **Impact:** every page request goes back to origin (or Netlify Edge) for revalidation. The pages are static and rarely change. Could use `stale-while-revalidate` for faster perceived loads after the first hit.
- **Recommendation:** add `Cache-Control: public, max-age=3600, stale-while-revalidate=86400` to `[[headers]]` in `netlify.toml` for HTML routes. Astro builds are immutable per deploy; safe to cache for an hour client-side, a day stale-while-revalidate.
- **Suggested command:** `/impeccable optimize`

#### 18. No "skip to main content" link
- **Location:** `src/layouts/Layout.astro`
- **Category:** Accessibility (AAA-aligned)
- **Impact:** screen reader and keyboard users have to tab through DevNav (or future global nav) on every page before reaching content. WCAG AA passes without it; AAA recommends it.
- **Recommendation:** add `<a href="#main" class="skip-link">Skip to content</a>` immediately after `<body>` opens, with a CSS class that's `position: absolute; left: -9999px; top: -9999px; &:focus { left: 0; top: 0; }`. Each page wraps `<main id="main">`.
- **Suggested command:** `/impeccable harden`

#### 19. `paper-muted` at `#A0A8B3` is ~6.5:1 on Europa Blue (AA pass, AAA fail)
- **Location:** `src/styles/global.css:21`
- **Category:** Accessibility (AAA)
- **Impact:** comment in `global.css` notes the deliberate AA-target tuning. AAA target is 7:1 for small text. Could nudge to `#A8B0BC` for ~7.1:1 if AAA matters for the personal-brand audience.
- **Recommendation:** decide whether AAA is in scope for v2. If not, this is fine. If yes, retune to `#A8B0BC` and verify with a contrast checker.
- **Suggested command:** `/impeccable polish`

#### 20. No RSS feed
- **Location:** site-wide
- **Category:** Content distribution
- **Impact:** Erlon publishes 21 essays. Readers who use feed readers (a real cohort among the dual-archetype audience — CTOs, technical recruiters) cannot subscribe.
- **Recommendation:** add `@astrojs/rss` and a `src/pages/writing/rss.xml.ts` endpoint. Reference from `Layout.astro` head: `<link rel="alternate" type="application/rss+xml" title="Erlon Rachi — Writing" href="/writing/rss.xml" />` (note: em-dash here too — use interpunct per #11).
- **Suggested command:** `/impeccable craft`

#### 21. No JSON-LD structured data
- **Location:** site-wide
- **Category:** SEO
- **Impact:** Google rich snippets won't render for "Erlon Rachi" personal searches (no Person card). Missed opportunity for brand surface in SERPs.
- **Recommendation:** add a `<script type="application/ld+json">` block to `Layout.astro` describing `@type: Person` (name, jobTitle, url, sameAs LinkedIn, address Milan). On case pages, add `@type: Article`.
- **Suggested command:** `/impeccable harden`

#### 22. `<meta name="theme-color">` set but site is not a PWA
- **Location:** `src/layouts/Layout.astro:31` — `<meta name="theme-color" content="#0F2545">`
- **Category:** Half-applied feature
- **Impact:** iOS Safari uses theme-color when installed as PWA. Currently not a PWA. The meta is harmless but signals incomplete intent. Either commit to a Web App Manifest (real PWA, works offline) or leave it as a harmless hint.
- **Recommendation:** decide direction. Likely: leave as-is (mobile Safari respects it on the tab chrome anyway, modest benefit). Revisit when v2 has a manifest decision.
- **Suggested command:** none (decision pending)

---

## Patterns & Systemic Issues

1. **Shipping discipline gap.** Three of the top five findings (DevNav, noindex, dev-copy footers) are the same kind of issue: scaffolding that thinks it's still in staging. A pre-launch checklist would have caught all three. Worth committing one to the repo (`SHIP-CHECKLIST.md` or a `pre-deploy.mjs` script that greps the dist output for "DEV NAV", "noindex", "Production version loads", etc., and fails the build).
2. **Single-page navigation model still implicit.** The site was designed and shipped page-by-page; the cross-navigation model was carried by DevNav as a placeholder. v2 needs a deliberate IA decision, not just "remove DevNav".
3. **OG metadata and sitemap belong in the Layout, not as one-off pages.** Both are head-level concerns that should be added once at the Layout level and inherit per route. The current Layout is lean (good) but incomplete (bad).
4. **`/contact` is a stub everywhere it's referenced.** Every "request a quote" CTA in `/work-with-me` (six of them, one per tier) lands at a "Form coming soon" page. The qualification path leaks at six different entry points.

---

## Positive Findings

These are working and should be preserved through v2.

- **Semantic HTML is exemplary.** Every page uses `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`, `<figure>`, `<dl>/<dt>/<dd>`, `<details>/<summary>` correctly. Heading hierarchy is one `<h1>` per page, descending. This is rare on static sites and noticeably better than the Wix predecessor.
- **Reduced-motion handling is site-wide.** `global.css:145-154` wipes all transitions/animations under `prefers-reduced-motion: reduce`. WCAG-aligned, no per-component opt-in needed.
- **Token system is complete.** 12 alpha-derived surface and accent tokens in `:root`, theme variables imported via `@theme`. The comment `If a value is not here, it should not be in a page` is honored in practice — production CSS contains essentially zero raw rgba/hex values outside the token block.
- **Painted highlight is a real signature.** Inline SVG data URI, antique-gold path, `box-decoration-break: clone` for multi-line, print-degraded to border-bottom. Used sparingly (1–3 per page). This is the kind of committed visual gesture that the impeccable brand register asks for.
- **Editorial duotone portrait is committed.** Inline `<filter id="duotone-europa">` with `feColorMatrix` + `feComponentTransfer`. Maps the grayscale of one source photo to Europa Blue Deeper / Paper-soft. Distinctive, not stock.
- **Spec-sheet pattern is reusable and on-brand.** The `<dl>` + label-mono + Fraunces value pattern appears on `/story`, `/work`, `/work-with-me`, `/contact`, `/writing` — same DNA, page-local proportions. Vignelli-compliant.
- **Wix migration was clean.** 9 explicit 301 redirects in `netlify.toml`, including the two trickiest "Wix-default slug" mappings. www → apex redirect works. No 404 surface from the old `/projects-1/*` URL space.
- **Security headers are set correctly.** HSTS (1y), X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy `interest-cohort=()`. Long cache on `/_astro/*` assets.
- **Touch targets are adequate.** Every interactive element (track summary, tier summary, path card, theme card, essay row, spec-sheet links) measures ≥44×44px at every breakpoint. No need for any adapt work on mobile interaction.

---

## Recommended Actions

Priority order. P0 first, then the most visible P1s, then the SEO/distribution P1s, then polish.

1. **[P0]** `/impeccable harden` — Remove `noindex` from `Layout.astro:21`. Add `/robots.txt` and `@astrojs/sitemap`. The two-line fix that makes the site exist on Google.
2. **[P0 / P1]** `/impeccable shape` — Design the production global header. Editorial pattern, 4 links, no hamburger above 640px. Resolves DevNav removal (#2) and zero-nav gap (#3) together.
3. **[P0 / P1]** `/impeccable craft` — Build the global header decided in step 2 and remove `DevNav` from all 9 page imports.
4. **[P1]** `/impeccable clarify` — Fix dev-copy leaks in `/work` and `/work/all` footers (#4). Fix em-dash titles (#11–13). Improve portrait alt (#14). Bundle as one copy pass.
5. **[P1]** `/impeccable craft` — Ship the `/contact` Netlify Function form (#9). Mirror Iarandu's `lead.ts`. Resend forward to gmail.
6. **[P1]** `/impeccable craft` — OG image template + per-page OG/Twitter metadata in `Layout.astro` (#5). One Astro endpoint, dynamic per route.
7. **[P1]** `/impeccable harden` — Favicon family: `.ico`, `apple-touch-icon`, 32px PNG (#7).
8. **[P1]** `/impeccable polish` — Rewrite `.contact__tier` to drop the side-stripe border (#8). Consider option (c): no container at all.
9. **[P2]** `/impeccable animate` — Replace `padding`/`border-width` transition on tier CTAs with `transform`/`scaleY` (#10).
10. **[P3]** `/impeccable optimize` — Self-host Google Fonts via `@fontsource-variable` (#16). Tune Netlify HTML cache-control (#17).
11. **[P3]** `/impeccable craft` — RSS feed (#20). JSON-LD Person + Article schemas (#21).
12. **[P3]** `/impeccable harden` — Skip-to-content link (#18). AAA contrast tune if in scope (#19).
13. **[Final]** `/impeccable polish` — Whole-site pass after all of the above. Re-run `/impeccable audit` and confirm the score moves to 19–20/20.

---

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `/impeccable audit` after fixes to see your score improve.
