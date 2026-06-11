# Portfolio v2 — Big Upgrade Plan

Goal: take the site from "solid one-pager" to a portfolio that actually sells you. Fix the empty-gap rhythm, add real visual anchors, give projects room to breathe on dedicated pages, and add the credibility layers (testimonials, writing) that recruiters actually scan for.

---

## Act 1 — Fix what's broken (visual rhythm + density)

1. **Tighten section spacing globally**
   - Reduce vertical padding on every section from `py-16 sm:py-24` → `py-10 sm:py-16`.
   - Standardize section dividers (subtle top border + uppercase eyebrow label) so transitions feel intentional, not empty.

2. **Verify & polish the SkillsMarquee**
   - Confirm icons render in preview (currently invisible in screenshot).
   - Make it more compact (single row, not two), faster initial paint, brand-color glow on hover only.

3. **Remove redundant MERN section**
   - Now that SkillsMarquee exists, the standalone Mern component is duplicative. Delete it and its route reference.

---

## Act 2 — Hero gets a face

4. **Add hero portrait / signature visual**
   - Two-column hero on desktop (`lg:grid-cols-[1.2fr_1fr]`), text left, portrait/avatar right.
   - Generate a stylized portrait illustration (or accept user upload) with subtle blue accent glow + grain texture behind it.
   - Mobile stays single-column with portrait above text.

5. **Add subtle hero background texture**
   - Faint noise/grain SVG overlay + soft radial gradient anchored to brand color. Improves depth without distraction.

---

## Act 3 — Projects become real

6. **New `/projects` route — index page**
   - Route file: `src/routes/projects.tsx`.
   - Grid of project cards with thumbnails, role, stack chips, and 1-line outcome metric.
   - Header nav gets a real "Projects" link (replaces `#experience` anchor).

7. **New `/projects/$slug` route — case study pages**
   - Route file: `src/routes/projects.$slug.tsx`.
   - Each case study: hero image, problem → approach → outcome structure, tech stack, screenshots, live/GitHub links.
   - Per-route `head()` with unique title, description, og:image (the project hero).
   - Start with 3 case studies (use existing Experience entries as source).

8. **Project data file**
   - `src/data/projects.ts` — typed array of `Project` (slug, title, role, stack, problem, approach, outcome, metrics, links, images). Single source of truth shared by index + detail + home preview.

9. **Update homepage Experience section**
   - Show top 3 projects as preview cards linking to `/projects/$slug`, with "See all projects →" CTA to `/projects`.

---

## Act 4 — Credibility layers

10. **Testimonials section on home**
    - New `src/components/testimonials.tsx` — 2–3 short endorsement cards (professor, peer, internship lead). Avatar + quote + name + role.
    - Placeholder copy initially; user fills in real quotes.

11. **Writing / Notes section**
    - New `/writing` route as a simple MDX-free list (markdown content stored as TS strings initially, or simple `.md` import).
    - 2 starter posts: one technical (e.g. "Why I switched from CRA to Vite"), one reflective ("BCA + self-taught MERN: my stack journey").
    - Each post is `/writing/$slug` with full `head()` SEO.

12. **Metrics on project cards**
    - Add 1 quantifiable outcome per project ("auth flow handles X users", "reduced bundle by Y%", "shipped in Z weeks").

---

## Act 5 — Motion + polish

13. **Scroll-triggered reveal animations**
    - Wrap section content in a reusable `<Reveal>` component using Framer Motion `whileInView` (fade + slight y-translate, stagger children).
    - Apply to About, FullStack, Experience preview, Testimonials.

14. **Header improvements**
    - Real route links (`/projects`, `/writing`, `/about`, `/contact`) instead of all-hash anchors.
    - Active route highlight via `activeProps`.
    - Add subtle scroll progress bar at top of header.

15. **Footer expansion**
    - Add a 3-column layout: nav links / social / "currently" status block (now playing, reading, building).

---

## Act 6 — SEO + sharing

16. **Per-route metadata**
    - Each new route (`/projects`, `/projects/$slug`, `/writing`, `/writing/$slug`) gets unique title, description, og:image (project hero for case studies, writing cover for posts).
    - Update sitemap.xml generator to include all new routes.

17. **JSON-LD per case study**
    - `CreativeWork` schema on each project page with author, datePublished, image, description.

---

## Technical notes (for implementation)

- **Routing**: Use TanStack `createFileRoute` with dot-separated filenames (`projects.tsx`, `projects.$slug.tsx`, `writing.tsx`, `writing.$slug.tsx`). No nested folders.
- **Data fetching**: Projects/writing arrays are static TS — no loader needed, just import. If later moved to Cloud, switch to `createServerFn` + `useSuspenseQuery`.
- **Images**: Generate project thumbnails + hero portrait via imagegen (premium for portrait, fast for thumbnails). Store in `src/assets/`.
- **Components to create**: `Reveal`, `Testimonials`, `ProjectCard`, `ProjectHero`, `CaseStudyLayout`, `WritingCard`, `ScrollProgress`.
- **Components to delete**: `Mern` (redundant after marquee).
- **Files touched**: ~15 new files, ~6 edited.

---

## Out of scope (explicit non-goals)

- No Lovable Cloud / database / auth (everything stays static).
- No CMS — project + writing content lives in TS files.
- No i18n, no theme customizer, no contact form backend changes.

---

## Suggested execution order (if you want to split into rounds)

1. **Round 1 (foundation)**: Acts 1 + 2 — spacing, marquee fix, hero portrait. Quick visual win.
2. **Round 2 (projects)**: Act 3 — projects routes + case studies. Biggest content lift.
3. **Round 3 (credibility + polish)**: Acts 4 + 5 + 6 — testimonials, writing, motion, SEO.

Want me to do all three rounds in one go, or stop after Round 1 for your review?
