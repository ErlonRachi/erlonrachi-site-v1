---
name: erlonrachi.com
description: Personal portfolio for Erlon Rachi. European modernist register, Europa-blue committed surface, painted-highlight accent, serif display + sans body.
---

<!-- SEED — re-run /impeccable document once there's code to capture the actual tokens and components. -->

# Design System: erlonrachi.com

## 1. Overview

**Creative North Star: "Europa, Modernist"**

The site reads as a piece of European institutional design. Deep Europa blue is the resting surface; light gray and tinted black carry text and structural layering; a single vibrant accent appears only as a painted highlight behind the words that matter. The visual lineage is Massimo Vignelli and Unimark: rigorous grid, strict typographic hierarchy, color used with economy and intention. The temperament is Stripe Press for the typography, Star Trek: The Next Generation and SpaceX for the optimistic-future framing, and the EU institutional palette for the geographic identity. Per Erlon's own framing: "Europa is the future and I carry its spirit."

The system rejects the visual vocabulary of corporate consulting (Accenture and the Big Four lookalikes: purple gradients, busy infographics, stock office photography, "transform your business" copy). It also rejects every SaaS-landing-page reflex carried over from PRODUCT.md's anti-references: glassmorphism, hero-metric templates, decorative card grids, gradient text. The reader is treated as an adult, in Erlon's literal phrasing. No hand-holding, no marketing fluff, no decoration without function.

**Key Characteristics:**
- Europa blue is the dominant surface (30 to 60 percent of every page).
- Serif display anchors editorial moments; sans body carries every running text.
- One vibrant accent. It appears as a painted brush stroke behind text, never as a fill, never as decoration. This is the signature pattern.
- Strict modernist grid. Breathable margins. Vignelli would approve or send it back.
- Motion is restrained: state changes only. The 90-second scan is honored.
- Flat by default. Depth is conveyed through tonal layering of blues, not through shadows.

## 2. Colors

**The European Sobriety Rule.** Europa blue is the surface and the rest state. The page sits in deep blue with disciplined gray and tinted-black supporting roles. Color does not negotiate for attention; the type does.

**The Splash Rule.** The vibrant accent exists in exactly one form: as a painted brush stroke laid behind a word, a phrase, or a short line of running text. Never as a button fill. Never as a background block. Never as decoration. The painted highlight is reserved for the single point a paragraph is trying to make. If a page has more than two splashes above the fold, one of them is wrong.

**The Adult Rule.** The palette treats the reader as an adult. No reassuring pastels. No "approachable" gradients. The color choices say: this person is serious, the work is serious, your time is respected.

### Palette direction (hex values resolve during implementation)

**Primary surface — Europa Blue family**
- A deep institutional blue, cooler and more sober than the EU flag blue, in the deep-navy register: somewhere in the territory of `oklch(20–25% 0.05–0.07 250)`. The exact value resolves in the next pass when the typography is paired against it for contrast. Multiple tonal steps are anticipated (a deeper variant for footer / contrast surfaces, a slightly lighter variant for cards / inset blocks). `[to be resolved during implementation]`

**Neutrals — Paper Gray and Tinted Black**
- Light gray, warm-cool neutral, for body text on the blue surface. Likely two steps: a stronger gray for body, a softer gray for secondary metadata. `[to be resolved during implementation]`
- Tinted black, tinted *toward* blue (never `#000`), for accents and the heaviest emphasis text. `[to be resolved during implementation]`

**Accent — The Splash**
- A single vibrant warm, sitting in the red, vermillion, or warm-orange family. Vignelli's American Airlines / Knoll red and SpaceX's launch orange both live in this neighborhood. The exact hue resolves once the deep blue is locked, by what registers as most kinetic against it. Yellow (EU-flag mustard) is a fallback candidate worth testing if the warm reads as too commercial. `[to be resolved during implementation]`
- Explicitly not in scope: purple (anti-Accenture), teal/aqua (anti-tech-cliché), pastels (anti-Adult-Rule).

## 3. Typography

**Display Font:** serif, editorial. `[font pairing to be chosen at implementation]` — candidate territory: Fraunces (variable, open-source), Tiempos (premium), GT Sectra. The display must carry both headlines and the painted-highlight phrases without losing dignity at large sizes.

**Body Font:** sans, humanist or warm-technical. `[font pairing to be chosen at implementation]` — candidate territory: Inter, Inter Tight, Söhne, Geist. The body face must read effortlessly at long-form essay length (Content Engine pillar pages will run 1500-3000 words).

**Label/Mono Font:** mono, for timestamps, era markers in the portfolio, and the occasional inline code. `[font pairing to be chosen at implementation]` — candidate territory: Berkeley Mono (premium), JetBrains Mono (free), GT America Mono.

**Character:** the pairing reads as a serious editorial book that happens to live on a screen. Stripe Press is the closest analogue. The serif holds the weight; the sans carries the volume; the mono signals precision when it appears.

### Hierarchy

- **Display** — hero headlines, case-study titles, painted-highlight phrases. Reserved for one anchor moment per page.
- **Headline** — section openers within long pages (the three beats of `/about`, the era markers in the portfolio).
- **Title** — card titles, case-study briefs.
- **Body** — running prose. Cap line length at 65 to 75 ch on essay surfaces. Pillar pages and case-study longer-stories carry the most body text on the site.
- **Label** — small uppercase or small mono. Used for tier badges, dates, era markers, navigation. Disciplined letter-spacing.

### Named Rules

**The Vignelli Brief.** Every page passes the test: could this be a page from a Vignelli-designed publication, sent to a client without apology? Strict grid alignment, named hierarchy, no decoration without function. If the answer requires hedging, the page is not done.

**The One Display Rule.** A given page surfaces the display face at one moment, not five. The portfolio index uses display for the page title; the era markers use headline. The case-study detail page uses display for the case title; the section openers use headline. Display abundance kills display impact.

## 4. Elevation

The system is flat by default. Depth is conveyed through tonal layering of the Europa Blue family: a slightly deeper blue marks footer or contrast surfaces, a slightly lighter blue marks cards or inset blocks. No drop shadows on resting surfaces.

**The Flat-by-Default Rule.** Surfaces are flat at rest. The exception is a single subtle shadow recipe reserved for state-driven elevation: a card or button that has been hovered or focused may lift with a soft, low-ambient shadow tinted toward the deeper blue (never gray, never black). The shadow's role is to acknowledge interaction, not to suggest a physical object.

## 5. Components

*Omitted in seed mode — no components exist yet.*

Note for `/impeccable shape` and `/impeccable craft`: the signature component to design first is the **painted highlight** mechanism. This is not optional ornamentation; it is the single most distinctive visual gesture in the system, and it should be designed before any other component because it determines the color value chosen for the splash, the paint texture asset format (SVG hand-stroke vs. CSS-only blob), and the typography behavior when text crosses the painted stroke. Get the painted highlight right and the rest of the system arranges itself around it.

## 6. Do's and Don'ts

### Do:

- **Do** treat Europa Blue as the resting surface. Let it carry the weight. Resist the urge to break it up with white panels or cards.
- **Do** use the painted highlight only on the single phrase or word that a paragraph is built to deliver. One per section, two maximum above the fold.
- **Do** tint every neutral toward the blue or warm-gray family. Never `#000`, never `#fff`.
- **Do** hold a strict modernist grid. Vignelli-tight margins, generous gutter rhythm.
- **Do** keep body text within 65 to 75 ch on every essay surface.
- **Do** treat the reader as an adult. The copy already does this; the layout must too. No tooltips that explain the obvious, no decorative "Learn more" affordances when a real link suffices.
- **Do** honor `prefers-reduced-motion: reduce`. State changes only when the OS flag is set. No exceptions.
- **Do** preserve em-dash normalization on Erlon's prose: replace `—` with `:`, `,`, or `.` per context when copy crosses into UI.

### Don't:

- **Don't** use the splash as a button fill, a card background, a divider stripe, or anything other than a painted highlight behind text. This is the signature; everything else dilutes it.
- **Don't** import the Accenture / Big Four / consulting-firm visual vocabulary. Purple gradients, busy infographics, stock photos of diverse people at a whiteboard, "We transform your business" hero copy. The site exits this lane entirely.
- **Don't** ship boxed-in, soulless design (Erlon's literal phrase). If a section reads like it was assembled from a SaaS template, scrap it.
- **Don't** use SaaS marketing tropes from PRODUCT.md: hero-metric template (Big Number / Small Label), gradient text, glassmorphism, decorative card grids with icon-title-blurb.
- **Don't** show a large smiling executive portrait above the fold. PRODUCT.md is explicit: "even a good photo undercuts the editorial register."
- **Don't** use skills-bar graphics, certifications grids, or LinkedIn-clone career timelines. Erlon's explicit ban: "they aged badly five years ago."
- **Don't** converge on the category default ("dark blue + sans-serif + center-aligned hero"). Europa Blue is the surface, but the typography and the painted highlight take the page out of the cliché.
- **Don't** use purple. Anywhere. It triggers the Accenture association and breaks the European modernist register.
- **Don't** display prices. Every tier carries a "request a quote" CTA per PRODUCT.md.
- **Don't** add a section called "Layout Principles", "Motion", or "Responsive Behavior" to this file. Fold that content where it belongs. The six sections above are the structure.

---

*Seeded via `/impeccable document` (seed mode), 2026-05-25. Hex values, font names, and component primitives resolve in the next pass once `/impeccable shape` produces the first surface.*
