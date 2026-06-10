# inbox — drop new articles here

This is the drop folder for **future essays**. Put a new article here and tell Claude
"publish the new article" — it gets cleaned, filed into `src/content/essays/`, built
locally, and held for your review before any commit/push.

## How to drop one

1. Copy `_TEMPLATE.md`, rename it to something descriptive (e.g. `my-new-essay.md`).
2. Fill in as much of the frontmatter as you want — **title is the only one I truly need**;
   I'll infer/propose the rest (slug, description, tagline, pillar, date).
3. Paste the body below the frontmatter. Rough is fine — don't polish.

You can also just **paste raw text into chat** or hand over a file path / URL. Markdown is
ideal (it's the target format), but `.txt` / `.docx` work too. Avoid PDF — extraction is lossy.

## What happens next (the publish flow)

1. **Clean** — prose normalized: em dashes (`—`) become `:`, `,`, or `.` (visual separators
   only — your voice stays untouched).
2. **File** — moved to `src/content/essays/<slug>.md` with valid frontmatter.
3. **Build** — `npm run build` runs locally to confirm it compiles and routes.
4. **Stop for review** — nothing is committed or pushed until you say so.

## Frontmatter reference

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | The headline. |
| `description` | optional | ~1–2 sentence summary (SEO / card blurb). I'll draft if blank. |
| `tagline` | optional | Short line shown under the title. |
| `pillar` | ✅ | One of: `agentic-ai-architecture`, `ai-governance`, `data-infrastructure`, `leadership`, `human-factor`, `field-notes`. I'll suggest one if unsure. |
| `publishedDate` | ✅ | `YYYY-MM-DD`. Defaults to publish day. |
| `originalSource` | optional | URL if it ran elsewhere first (LinkedIn, etc.). |
| `draft` | optional | `true` keeps it out of the live build. |

> Files in this folder are working drafts — they are **not** published from here.
> Publishing only happens once a cleaned copy lands in `src/content/essays/`.
