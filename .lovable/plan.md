## Scope
Implement three portfolio improvements:
1. Mobile navigation (hamburger menu)
2. Smooth scroll for anchor links
3. Resume download CTA in hero

## Changes

### 1. Mobile nav — `src/components/header.tsx`
- Add a hamburger button (lucide `Menu` icon) visible only on `sm:hidden`.
- Use the existing shadcn `Sheet` component (`src/components/ui/sheet.tsx`) as a slide-in drawer from the right.
- Drawer contains the same 4 links (MERN, About, Work, Contact) stacked vertically, large tap targets.
- Clicking a link closes the sheet (controlled `open` state) and lets the browser jump to the anchor.
- Keep the existing desktop nav untouched (`hidden sm:flex`).

### 2. Smooth scroll — `src/styles.css`
- Add `html { scroll-behavior: smooth; }`.
- Add `scroll-margin-top: 4rem` on section anchors so the sticky header doesn't cover the heading.

### 3. Resume CTA — `src/components/hero.tsx`
- Add a third button next to "Get in touch" / "See my work": **Download Resume** with `Download` icon.
- Link to `/resume.pdf` with `download` attribute (you'll drop your PDF into `public/resume.pdf`).
- Style: outline variant matching "See my work" so primary CTA stays singular.

## Out of scope
Brand color unification, project screenshots, SEO meta, avatar — separate passes.

## After implementation
You'll need to:
- Add your CV file at `public/resume.pdf` (Lovable serves `public/` at site root).
- Connect GitHub via the + menu so the changes push automatically.
