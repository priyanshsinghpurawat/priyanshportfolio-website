## Goal
Fix mobile layout issues — primarily the **Selected Work** card cutting off — and tighten spacing/alignment across all sections. No content rewrites yet (About / Contact / Resume come in 2 days per your note).

## Changes

### 1. `src/components/experience.tsx` — fix card overflow
The right-side project card overflows on mobile because:
- The header row (`stack` text + status pill) is forced onto one line with `justify-between`, and the long mono stack string (`React · Node.js · Express · MongoDB · JWT`) pushes the pill off-screen.
- The project title (`text-2xl`) + arrow icon can wrap awkwardly.

Fixes:
- Header row: `flex-wrap gap-2` so the status pill drops below the stack on narrow screens.
- Stack text: add `break-words` / smaller leading on mobile.
- Title: `text-xl sm:text-2xl`, allow wrapping.
- Card padding: `p-5 sm:p-8` (currently `p-6 sm:p-8`).
- Section vertical padding: `py-16 sm:py-24` (currently `py-24` everywhere — too heavy on mobile).
- Tabs list: keep horizontal scroll on mobile (already works), but add subtle right fade so it's clear there's more.

### 2. `src/components/mern.tsx`, `src/components/about.tsx`
- Section padding `py-24` → `py-16 sm:py-24` for tighter mobile rhythm.
- About skills grid: keep `grid-cols-2 sm:grid-cols-3` (fine), just verify gap.

### 3. `src/components/hero.tsx`
- Heading is `text-4xl` on mobile — fine, but reduce top padding `pt-12` → `pt-10`.
- CTA row: the 3 buttons + LiveClock can crowd. Make LiveClock its own row on mobile (`w-full sm:w-auto sm:ml-auto` already does this — verify it renders cleanly).

### 4. `src/components/header.tsx`
- Quick check: ensure mobile sheet trigger sits flush with right edge, header has proper `px-4 sm:px-6`.

### 5. Reminder note (no code)
I'll add a TODO comment block to `.lovable/plan.md` listing the 2-day items so we don't lose them:
- Update About section copy
- Drop in new resume PDF at `/public/resume.pdf`
- Expand Contact section: more details + feedback form + work images

(I can't trigger a real time-based reminder, but the note will surface next session and I'll proactively bring it up.)

## Out of scope (per your message)
- About section rewrite
- Contact section build-out + feedback form + work images
- Resume PDF swap

Want me to proceed with these mobile polish changes?
