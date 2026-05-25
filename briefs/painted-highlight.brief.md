---
brief: painted-highlight
project: erlonrachi-rebuild
status: pending-confirmation
authored_via: /impeccable shape
date: 2026-05-25
references:
  - PRODUCT.md
  - DESIGN.md
---

# Design Brief: Painted Highlight (Signature Component)

## 1. Feature Summary

The painted highlight is the **signature visual gesture of the site**. A single brushstroke of EU Mustard Gold (~ #F4C430) painted behind a word, phrase, or short line of running text, marking the one point that the surrounding paragraph is built to deliver. Used sparingly (one per section, two maximum above the fold per DESIGN.md), it is the visual incarnation of the European Modernist register: institutional restraint with one moment of intentional energy.

It does for the page what Vignelli's red did for an American Airlines manual: a single chromatic event in an otherwise disciplined visual field, telling the reader where to look without breaking the editorial composure.

## 2. Primary User Action

**Recognize, in a single glance, what the surrounding paragraph is actually saying.**

The reader does not interact with the highlight. It is a passive visual element that bears the entire weight of "this matters" without any decoration around it (no icon, no rule line, no callout box, no margin shift). The highlight makes the most important phrase visually unmissable in a scan, while preserving the paragraph as a single editorial unit.

## 3. Design Direction

- **Color strategy for this surface:** Committed. The splash is the one accent in an otherwise Europa-blue + paper-gray + tinted-black system. Per DESIGN.md's Splash Rule, the gold appears nowhere else.
- **Splash hue:** EU Mustard Gold, candidate `#F4C430`. Pulls from the EU flag (geographic identity) and Star Trek: The Next Generation operations gold (optimistic-future analogue). Final value tuned in craft against the locked Europa Blue surface for ≥4.5:1 contrast with the auto-paired text color.
- **Aesthetic character:** Highlighter marker. Stroke of roughly constant thickness, slight angle, ever-so-slightly imperfect edges that read as human-hand rather than CSS rectangle. Stripe.com homepage is the closest live reference. Vignelli discipline + one degree of human imperfection.
- **Theme scene sentence:** *A senior reader scanning an essay or case study on a 13-inch laptop in afternoon light, drawn to a single golden brushstroke that marks the paragraph's claim.*
- **Anchor references:**
  1. **Stripe.com homepage** — multi-line highlight strokes that follow text flow naturally, never breaking the editorial register.
  2. **Massimo Vignelli's identity work** (American Airlines, Knoll, NYC Subway) — disciplined chromatic moments embedded in otherwise restrained visual fields.
  3. **Star Trek: The Next Generation LCARS interface** — confident, asymmetric color blocks with intentional empty space around them. The gold-on-blue chromatic pairing carries direct lineage.
- **DESIGN.md anchors:** the Splash Rule, the Vignelli Brief, the European Sobriety Rule, the Adult Rule all inform every choice.

## 4. Scope

- **Fidelity:** **Production-ready.** This component ships with the first surface that needs it.
- **Breadth:** One component, three **proportional variants** driven by content length: word / phrase / short line. Same character of stroke, scaled to fit.
- **Interactivity:** **Static.** No animation. No hover state. No state transitions. The component renders identically on every page load.
- **Time intent:** Polish until it ships. This is the signature; it justifies extra craft time on stroke endpoint character, edge texture, and the text-inversion contract.

## 5. Layout Strategy

The highlight is **inline by design.** It wraps the highlighted text in a span-level element and follows the text's natural flow. It is never a block-level container.

**Multi-stroke wrapping behavior.** When the highlighted text wraps across two or more lines (typical at narrow viewports or with longer phrases), the highlight wraps with it: each line gets its own brushstroke that follows the text exactly. Achieved via CSS `box-decoration-break: clone` (with `-webkit-` prefix for Safari coverage) combined with the chosen background-rendering technique.

**Three proportional variants** are determined by text length, not by an explicit prop:
- **Single word** (~2 to 10 characters): tight stroke, modest internal padding, slight angle/imperfection most visible at this scale.
- **Short phrase** (~10 to 40 characters): same character of stroke, proportionally scaled.
- **Short line** (~40 to 80 characters): single brushstroke that may break naturally to a second line.

**Maximum length boundary:** approximately 80 characters / 12 words / one body line at the standard reading width. Beyond that, the component is being misused: split the highlight into two separate highlights on different phrases, or remove it entirely.

**Vertical rhythm:** the highlight must not disrupt the baseline grid of the surrounding text. Its visual presence is via background, not by adjusting line-height, margin, or padding-block of the line itself.

## 6. Key States

| State | Behavior |
|---|---|
| **Default** | The only state. Highlight is always present and rendered identically on every page load. |
| **Hover** | No hover state. Highlight is not interactive. The cursor remains the text caret. |
| **Focus** | Not focusable. The highlight is not a tab stop. |
| **Wrapping edge case** | When highlighted text wraps across 2+ lines, both/all lines must show the brushstroke continuously per the multi-stroke spec. Test at 320 / 768 / 1280 / 1920 px viewport widths. |
| **Text-on-splash a11y** | Text within the painted region must contrast ≥4.5:1 against the splash. Implementation auto-pairs: each splash color has a paired text color in the design tokens (`--splash-gold` pairs with `--splash-gold-text` = tinted-black). No blend modes, no clip-path tricks unless a future variant demands them. |
| **Reduced-motion** | Identical to default. No motion exists, so trivially compliant with `prefers-reduced-motion`. |
| **Print** | Override: highlight renders as a subtle gray underline or `border-bottom` rather than a solid gold fill. Saves ink, preserves legibility. Use `@media print`. |
| **Selection** | When user selects text that includes the highlight, browser default selection styling applies. Do not override unless it produces unreadable contrast (test against the gold background). |

## 7. Interaction Model

**None.** This is a passive decorative element from the perspective of interaction. The text it highlights remains fully selectable, copyable, and accessible.

**Semantic HTML:** wrap the highlighted text in `<mark>` (semantic "marked for reference") rather than `<span>`. `<mark>` carries the right meaning for assistive tech (screen readers may announce "mark" or treat it as emphasized depending on user settings) and is the correct HTML element for this exact use case. Override default browser styling (yellow background) with the design-system token.

## 8. Content Requirements

- **Content source:** prose authored by Erlon. No microcopy invented for this component.
- **Wrapping mechanism:** the writer manually wraps text in the highlight markup (in Astro/MDX, likely a `<Highlight>` component or a markdown extension processing `==text==` notation). The system does not auto-detect what to highlight.
- **Editorial rules (carry from DESIGN.md):** one highlight per section, two maximum above the fold. Enforced through editorial discipline, not a technical limit.
- **Recommended phrases (illustrative, not prescriptive):** "Europa is the future", "building people before building code", "data and knowledge are more important than software", "trust, but verify", "useful beats clever". Each of these is voice-authentic and earns a highlight.

## 9. Recommended References (for craft)

- **DESIGN.md** sections 2 (Colors → Splash Rule, European Sobriety Rule) and 5 (Components, when populated in next pass).
- **PRODUCT.md** Brand Personality (the "trusted, efficient, human-centric" character must hold for this component) and Anti-references (the highlight must not become a tag, chip, button fill, gradient text, or marketing emphasis trope).
- **CSS technique reference:** Stripe.com homepage — inspect for the canonical multi-line highlight implementation in the wild. Note: do not copy their exact CSS verbatim; their stroke is geometrically clean rectangle, we want one degree of brush-like imperfection.

## 10. Open Questions (resolve during craft)

**Q1. Brushstroke rendering technique.** Three candidates, ordered cheapest to most authentic:
   1. **Pure CSS:** `background-image: linear-gradient(...)` with subtle `mask-image` for edge roughness. Lightest weight, most performant, least authentic brush feel.
   2. **Inline SVG asset:** a single hand-drawn brushstroke as an SVG path, applied as `background-image: url("data:image/svg+xml,...")`. More authentic, slightly heavier, fully customizable (endpoints, texture, angle). **Recommended starting point.**
   3. **CSS Houdini Paint API:** custom paint worklet that renders the stroke programmatically with controlled randomness. Most flexible, but Safari support to verify before committing.

**Q2. Stroke endpoint character.** Rounded ends? Tapered ends? Hard cut ends? Decision resolves when the SVG asset (Q1.2) is designed. Recommend: slightly tapered on both ends to suggest the start and end of a single hand motion, never perfectly square.

**Q3. Exact `#F4C430` value.** The candidate is reasonable but final tuning happens when the Europa Blue surface value is also locked, so contrast against the paired text color can be co-calibrated. Acceptable range: oklch(85% 0.13 90) to oklch(82% 0.16 87).

**Q4. Paired text color.** Tinted-black (something near `oklch(15% 0.02 250)`) provides ≥10:1 contrast against the gold and is the obvious pair. Verify in craft once the exact gold is locked.

**Q5. Possible second splash variant.** Currently the system has one splash (gold). If a future surface requires a contrasting splash (a vermillion red for urgency, for example), the same component spec extends with a second token pair (`--splash-red` + `--splash-red-text`). Not in scope for this brief; flagged for future expansion.

---

## Confirmation gate

Per `/impeccable shape`, this brief is **pending explicit confirmation** before it can hand off to `/impeccable craft`. Erlon to confirm or revise.
