# Make the site more AI-crawler-friendly

Goal: improve how LLM crawlers (ChatGPT, Claude, Perplexity, Gemini, etc.) discover, parse, and cite your portfolio.

## 1. Fix the canonical domain
`public/robots.txt` and `public/sitemap.xml` currently point to `https://https-priyanshportfolio-website-vercel-app.lovable.app` (broken — has "https-" baked into the host). Replace with your real production domain (Vercel URL or custom domain). Used in: robots `Sitemap:`, sitemap `<loc>`, canonical + og:url meta tags.

## 2. Per-route head metadata
Today only `index.html` has title/description. Add `head()` in `src/routes/index.tsx` (and any future routes) with:
- unique `title`, `description`
- `og:title`, `og:description`, `og:url`, `og:type=website`
- `<link rel="canonical">` on the leaf route

## 3. JSON-LD structured data (biggest AI-citation win)
Add `<script type="application/ld+json">` via route `head().scripts`:
- **Person** schema (name, jobTitle, url, sameAs: GitHub/LinkedIn, email, alumniOf: JECRC University, knowsAbout: React/Node/MERN/TypeScript)
- **WebSite** schema with `potentialAction` SearchAction
- **BreadcrumbList** for navigation
- Optional **CreativeWork**/**SoftwareApplication** entries per project in the "Things I've built" section

## 4. Expand `public/llms.txt`
Current file is minimal. Add sections:
- `## Skills` — concrete tech list (React, Next, Node, Express, MongoDB, Postgres, Tailwind, TypeScript, REST, auth, deployment)
- `## Projects` — each project name + 1-line description + live URL + repo URL
- `## Experience` — roles, dates, summaries
- `## Education` — JECRC University, BCA, dates
- `## Optional` — blog/longer-form links if any

Also add a richer `public/llms-full.txt` with the full bio + project write-ups in plain markdown (the convention many crawlers now check).

## 5. Semantic HTML pass
Audit `hero.tsx`, `fullstack.tsx`, `mern.tsx`, `about.tsx`, `experience.tsx`, `contact-form.tsx`, `footer.tsx`:
- exactly one `<h1>` (hero), correct `<h2>`/`<h3>` order
- wrap sections in `<section aria-labelledby="...">` with `id`s (`#about`, `#projects`, `#contact`)
- `<nav>`, `<main>`, `<footer>` landmarks
- `alt` text on every image; descriptive link text (no "click here")

## 6. Open Graph image
Generate a branded 1200×630 OG image (name + role + accent) and wire it into `og:image` + `twitter:image`. Crawlers and link unfurlers both use it.

## 7. Sitemap completeness
Once sections become routes (or if you keep them as anchors), list `/`, `/#about`, `/#projects`, `/#contact` — or better, split Projects/About into real routes (`/projects`, `/about`, `/contact`) so they get their own metadata and sitemap entries.

## 8. Robots.txt polish
- Add `Allow: /` under each named bot block (already done — good)
- Add `User-agent: Applebot-Extended`, `Bytespider`, `Amazonbot`, `Diffbot` (explicit allow)
- Keep `Sitemap:` pointing at the fixed domain

## 9. Performance / accessibility signals
Crawlers weight fast, accessible pages:
- preload key fonts (already partial)
- add `<html lang="en">` (present), `prefers-reduced-motion` respected in marquee (done)
- ensure color contrast in both themes
- add `aria-label` to icon-only buttons (theme toggle, social links)

## 10. RSS / contact discoverability
- Add `<link rel="me" href="https://github.com/...">` and LinkedIn in `__root.tsx` head for verified identity
- Add `mailto:` link with your address (crawlable)

---

### Recommended order to implement
1. Fix domain in robots/sitemap/canonical (blocks everything else)
2. Per-route head() + JSON-LD Person/WebSite
3. Expand llms.txt + add llms-full.txt
4. Semantic HTML audit + section ids
5. OG image
6. Bot list + identity links

Tell me which of these you want to ship now (e.g. "all of 1–4" or "just 1, 2, 3") and I'll switch to build mode and execute.
