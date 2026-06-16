# Lighthouse push to >95

Profile + code review surfaced a small, well-bounded set of fixes. No design or content changes.

## Findings

**Performance (currently weakest)**
- `src/assets/portrait.png` is **795 KB** and served as PNG. It's the LCP-adjacent hero image.
- `react-icons/si` barrel ships **1.9 MB** of JS because we import from `"react-icons/si"`. Subpath imports tree-shake to ~1 KB per icon.
- `src/components/skills-marquee.tsx` is unused (replaced by `skills-grid`) but still imports the same barrel — dead code to delete.
- Google Fonts stylesheet is render-blocking. Use the `media="print" onload` swap pattern (kept SSR-safe with a `<noscript>` fallback) to make it non-blocking.
- Add `<link rel="preload" as="image">` for the optimized portrait.

**Accessibility**
- **Duplicate `id="work"`**: both `featured-case-study.tsx` and `work-experience.tsx` use it (plus duplicate `aria-labelledby="work-title"`). Rename the experience section to `id="experience"` / `aria-labelledby="experience-title"`.
- **No skip-to-content link**. Add one in `src/routes/__root.tsx` (or `routes/index.tsx`) pointing to `#main`, and put `id="main"` on the `<motion.main>`.
- **Focus-visible rings missing** on most custom anchors/buttons (hero CTAs, header nav items, theme toggle, footer links, other-work rows). Add a project-wide base rule in `src/styles.css`:
  ```css
  @layer base {
    :focus-visible {
      outline: 2px solid var(--color-ring);
      outline-offset: 2px;
      border-radius: 4px;
    }
  }
  ```
  This catches every interactive element without touching each component.
- **Header brand pulse dot** has no `prefers-reduced-motion` guard. Wrap `animate-pulse` so it's disabled when the user prefers reduced motion (Tailwind handles this via `motion-safe:animate-pulse`).
- Hero portrait `alt` currently reads "Portrait of Full Stack Developer Priyansh Singh Purawat" — keep but verify after rename.

**Best practices / SEO**
- Add `<meta name="theme-color">` (light + dark) to `index.html` for browser chrome.
- Add `<link rel="canonical" href="/">` at the document level (relative — no site URL baked in).
- `index.html` is fine otherwise; per-route head meta already comes from TanStack Router `head()`.

## Changes by file

**`src/components/work-experience.tsx`** — rename `id="work"` → `id="experience"`, `aria-labelledby="work-title"` → `"experience-title"`, and the `<h2 id>`.

**`src/routes/index.tsx`** — add `id="main"` on `<motion.main>`. Add a visually-hidden-until-focus skip link at the top: `<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-foreground focus:text-background focus:px-3 focus:py-2">Skip to content</a>`.

**`src/styles.css`** — add `:focus-visible` base rule (above). Remove now-unused `.bg-hero-pattern` block (dead code).

**`src/components/header.tsx`** — change `animate-pulse` to `motion-safe:animate-pulse` on the brand dot. Add `focus-visible:ring-2 focus-visible:ring-ring` on the icon links (defensive — base rule covers it, but matches the visual style).

**`src/components/skills-grid.tsx`** — switch to subpath imports:
```ts
import SiReact from "react-icons/si/SiReact";
import SiNodedotjs from "react-icons/si/SiNodedotjs";
// …one per icon
```
This is the single biggest perf win.

**Delete `src/components/skills-marquee.tsx`** — confirm no remaining imports first (`rg "skills-marquee"`); only the file itself should match.

**`src/assets/portrait.png`** — replace with an optimized image pipeline:
- Add `vite-imagetools` to `vite.config.ts`.
- In `src/components/hero.tsx`, import three variants:
  ```ts
  import portraitAvif from "@/assets/portrait.png?format=avif&quality=70&w=896";
  import portraitWebp from "@/assets/portrait.png?format=webp&quality=75&w=896";
  import portraitFallback from "@/assets/portrait.png?format=jpg&quality=80&w=896";
  ```
  Wrap `<img>` in `<picture>` with `<source type="image/avif">`, `<source type="image/webp">`, fallback `<img src={portraitFallback}>`. Keep `width={896} height={1152} fetchPriority="high" loading="eager"`. Expected drop: 795 KB → ~60-90 KB.

**`index.html`**
- Replace blocking Fira Code `<link rel="stylesheet">` with:
  ```html
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" /></noscript>
  ```
- Add `<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f0fbf9">` and a dark variant `content="#0d1117"`.
- Add `<link rel="canonical" href="/">`.

## Out of scope

- Refactoring `bun.lock` / running `bun add vite-imagetools` will happen in build mode.
- Not touching content, fonts, color palette, animations beyond the reduced-motion guard.
- Per-route `<main>` for `/projects` and `/writing` is not addressed here; flag if you want it next.

## Verification

After build mode applies:
1. Re-run `browser--performance_profile` and confirm portrait size dropped and `react-icons_si.js` is gone.
2. Tab through the page — confirm visible focus ring on every interactive element + working skip link.
3. Confirm no duplicate `id="work"` (DOM grep).
