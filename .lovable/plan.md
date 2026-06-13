# Two small changes

## 1. Remove all "JECRC University" mentions

Found in 7 files. For each, drop the school name and rephrase so the sentence still reads cleanly (don't leave dangling "BCA student at." fragments).

- `src/components/hero.tsx` — "BCA student at JECRC University focused on…" → "BCA student focused on…"
- `src/routes/index.tsx` — meta description, JSON-LD `alumniOf`, keywords
- `src/components/about.tsx`
- `src/components/testimonials.tsx`
- `src/data/writing.ts`
- `public/llms.txt`, `public/llms-full.txt`

## 2. Switch typography to Fira Code style (monospace everywhere)

Make the whole site read like a code editor.

- Add Fira Code via Google Fonts in `index.html` (weights 400/500/600/700, with ligatures).
- Update `tailwind.config.ts`: set `fontFamily.sans`, `fontFamily.mono`, and `fontFamily.display` all to `["Fira Code", "ui-monospace", "monospace"]`.
- `src/styles.css`: set `body { font-family: 'Fira Code', monospace; font-feature-settings: "calt" 1, "liga" 1; }` to enable ligatures (`=>`, `!=`, `->` render as glyphs).
- Replace remaining `font-display` / serif italic usage in components (hero headline, section titles) with Fira Code. Italic stays but renders as the mono italic.
- Slightly tighten letter-spacing on large display sizes (mono fonts feel wide at big sizes): `tracking-tight` → `tracking-tighter` on h1/h2.

Nothing else changes — same layout, same dark theme, same Venn-less hero you have now. Just the two edits.

Approve and I'll make the changes.
