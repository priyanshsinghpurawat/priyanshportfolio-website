
# Portfolio v2 — Full Overhaul Plan

North star: Vercel/Linear restraint expressed through the existing Fira Code mono direction. Dark first. Big type. Generous spacing. Motion that serves hierarchy, not decoration.

You picked "MensVibe only" — the 3 small JS utilities will be removed from the homepage projects list (kept in a small "Other work" strip with GitHub links so the repo history isn't lost).

---

## 1. Content rewrite (kill generic phrases)

**Files:** `src/components/hero.tsx`, `src/components/about.tsx`, `src/components/footer.tsx`, `src/lib/constants.ts`, `public/llms.txt`, `public/llms-full.txt`, `src/routes/index.tsx` meta.

Replace any instance of: *passionate*, *clean-code enthusiast*, *problem solver*, *love building*, *tech enthusiast*, *BCA student* as the lead identity.

New positioning (single source of truth in `constants.ts`):

- **Role:** Full Stack Developer
- **One-liner:** Building scalable web applications with React, Node.js, Express, and MongoDB.
- **Sub:** Production MERN systems — REST APIs, JWT auth, RBAC, Mongo schema design, Redis caching, Razorpay payments, deployment on Vercel & Render.
- **Location strip:** Jaipur, India · Open to remote & relocation

Hero will lead with role + one-liner + 3 metric chips (e.g. *4+ shipped projects · MERN · Razorpay + Redis*), then primary CTA "View MensVibe case study" and secondary "Resume / GitHub".

About becomes 3 short paragraphs: *What I build* / *How I work* / *What I'm looking for* — no fluff adjectives.

---

## 2. Projects → Case studies

Homepage `Experience` (projects grid) is replaced by a **single featured case study** for MensVibe + an "Other work" row.

### MensVibe case study (`/projects/ecommerce-mern`)

New page sections, top → bottom:

1. Hero: name, one-line problem, role, year, stack chips, live + GitHub buttons.
2. Cover screenshot (real, from you).
3. **Problem** — 2–3 sentences, business framing.
4. **Architecture** — ASCII/SVG diagram: Client (React 19 + Vite) → Express API (JWT, Zod, Helmet, rate-limit) → MongoDB + Redis cache + Cloudinary + Razorpay + Socket.io.
5. **Key decisions** — 4–6 bullets, each "decision → why → tradeoff" (e.g. *Redis read-through cache on product listings — 3× faster p95, accepted eventual consistency on stock counts*).
6. **Features** — Admin / Seller / Buyer split with bullets.
7. **Challenges** — 2–3 real engineering challenges with how you solved them.
8. **Screenshots gallery** — responsive grid, lazy-loaded, AVIF/WebP via `vite-imagetools`.
9. **Stack** — full list, grouped.
10. **Links** — Live, GitHub (client), GitHub (server), Postman collection if any.

Data model extension in `src/data/projects.ts`: add `architecture: string[]`, `decisions: {title, why, tradeoff}[]`, `challenges: {title, body}[]`, `gallery: string[]`, `liveUrl`, `serverRepo`.

**TODO from you (I'll wire placeholders meanwhile):**
- MensVibe live URL
- 4–6 screenshots dropped into `src/assets/mensvibe/` (cover + dashboard + product + checkout + admin)
- Optional: 1–2 real metrics (response time, Lighthouse, users)

### Other work
Small horizontal strip on home: Aspect Ratio Calculator, Notes App, Exchange Rate — title + 1 line + GitHub link only. No cards, no images. Keeps focus on the centerpiece without nuking your history.

---

## 3. Skills — two buckets, no bars

Replace the dual marquee with a clean static **two-column** grid (still uses the existing `react-icons/si` set, no new deps).

- **Frontend Engineering:** React, JavaScript, HTML5, CSS3, Tailwind, Bootstrap, Framer Motion, Vite
- **Backend Engineering:** Node.js, Express, MongoDB, MySQL, REST APIs, JWT, RBAC, Cloudinary, Git, GitHub, Postman, Vercel, Render

Each chip: icon + name, hover = subtle border + lift (no glow). No percentages, no progress bars, no marquee scroll. Marquee stays available as an opt-in component but is unused on home.

---

## 4. Visual refinement (keep Fira Code)

Tokens (`src/styles.css`):
- Tighten letter-spacing on display sizes (`tracking-tight` at ≥4xl, `-0.02em` at hero).
- Reduce brand glow shadows: replace `shadow-[0_10px_40px_-15px_var(--brand)]` with `shadow-[0_1px_0_0_hsl(var(--border))]` style hairlines.
- Standardize section padding: `py-24 md:py-32`, max-width `max-w-6xl`, gutter `px-6`.
- Replace teal-heavy accents in light mode with a single restrained accent; brand color used only for one CTA + active states.
- Remove `bg-hero-pattern` noise SVG (cheap-looking).
- Add hairline dividers between sections instead of large color shifts.

Components affected: `hero.tsx`, `about.tsx`, `experience.tsx`, `work-experience.tsx`, `fullstack.tsx`, `footer.tsx`, `project-card.tsx`.

---

## 5. Animation audit

- Keep: `ScrollProgress`, `Reveal` stagger, hover lift on cards.
- Cut: pulsing brand dot on status chip, scale-on-hover image zoom (replace with subtle 1px border color shift), animated gradient blobs if any.
- Add: animated counters on hero metric chips (only once, on first view).
- All motion wrapped in `prefers-reduced-motion: reduce` guard (already partial in CSS — extend to JS via Framer's `useReducedMotion`).

---

## 6. Accessibility (target ≥95)

- Audit every icon-only `<button>` / `<a>` in `header.tsx`, `theme-toggle.tsx`, `footer.tsx`, `project-card.tsx` → add `aria-label`.
- Ensure single `<main>` (currently OK in `routes/index.tsx`, verify route pages).
- Replace any `text-muted-foreground/50` style low-contrast utilities with token-only.
- Skip-to-content link in `__root.tsx`.
- Focus-visible ring on all interactive elements using existing `--ring` token.
- Heading order pass on every route.
- `alt=""` for decorative imagery, descriptive alt for screenshots.

---

## 7. Performance (target ≥95)

- Add `vite-imagetools`; convert project covers and gallery to AVIF + WebP with `<picture>` fallback.
- Preload only the hero LCP image, `fetchpriority="high"`.
- Lazy-load below-the-fold sections via dynamic `import()` for `Experience`, `WorkExperience`, `FullStack`.
- Remove unused shadcn primitives from bundle (tree-shake check; delete unused files in `src/components/ui/` that aren't imported anywhere — there are ~20 candidates).
- Audit `framer-motion` imports — use `motion/react` mini imports where possible.
- Replace `<img>` with proper `width`/`height` everywhere to prevent CLS.

---

## 8. SEO

- Update `SITE_TITLE` / `SITE_DESCRIPTION` to lead with "Full Stack Developer (MERN)".
- JSON-LD `Person` already in place — add `WebSite` + `BreadcrumbList` on case-study route.
- Single H1 per route audit.
- OG image regen with new positioning line.

---

## 9. Files: add / modify / delete

**Add**
- `src/components/case-study/*` — `Hero`, `ArchitectureDiagram`, `DecisionList`, `ChallengeList`, `Gallery`.
- `src/components/skills-grid.tsx` (replaces marquee on home).
- `src/components/other-work.tsx`.
- `src/components/metric-chips.tsx` (animated counters).
- `src/assets/mensvibe/` (you supply screenshots).

**Modify**
- `src/lib/constants.ts` — new positioning copy.
- `src/components/hero.tsx`, `about.tsx`, `footer.tsx`, `header.tsx`, `experience.tsx`, `work-experience.tsx`, `fullstack.tsx`.
- `src/data/projects.ts` — extended schema, MensVibe filled in deeply, others trimmed.
- `src/routes/projects.$slug.tsx` — render new case-study layout.
- `src/routes/index.tsx` — new section order: Hero → Metric chips → Featured case study → Skills grid → About → Work experience → Other work → Contact CTA → Footer.
- `src/styles.css` — token + spacing refinements.
- `index.html` — preload tweaks.
- `public/llms.txt`, `public/llms-full.txt` — sync new positioning.
- `vite.config.ts` — add `imagetools` plugin.

**Delete**
- Unused shadcn UI primitives (after grep confirms zero imports).
- `bg-hero-pattern` CSS block.
- Per-project full case-study data for the 3 small utilities (moved to OtherWork list).

---

## 10. Recruiter scorecard (delivered as `/RECRUITER_REVIEW.md` in repo)

A single markdown file with before/after scores across HR Recruiter, Technical Recruiter, Engineering Manager, Startup Founder, AI Screener — strengths, weaknesses, red flags, and a 30/60/90 roadmap to top-5% fresher portfolio. Lives in the repo so it's not in the user-facing app.

---

## What I need from you before / during build

1. MensVibe **live URL** (Vercel/Render). Without it I'll render a "Live demo coming soon" disabled button.
2. **4–6 screenshots** of MensVibe in `src/assets/mensvibe/` (cover, dashboard, product detail, checkout, admin, seller). Without them I'll use neutral placeholder mockups marked TODO.
3. Optional: any real numbers (response time, users, Lighthouse) for the metrics row.

I'll proceed with placeholders for #1 and #2 if not provided, clearly marked so you can swap later.

---

## Out of scope for this pass

- New backend work (case study describes existing MensVibe; doesn't rebuild it).
- Auth on the portfolio itself.
- Blog/writing redesign beyond inheriting the new tokens.
- Theme toggle removal (kept; light mode tokens get a light cleanup).
