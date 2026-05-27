# Continue AI-crawler hardening (items 5–8)

Items 1–4 are already live (domain, per-route head + JSON-LD, llms.txt, llms-full.txt). Next batch:

## 5. Semantic HTML audit
Pass over each section component to give crawlers a clean outline:
- `hero.tsx` — ensure single `<h1>`; wrap in `<section id="home" aria-labelledby="hero-title">`.
- `fullstack.tsx`, `mern.tsx`, `experience.tsx`, `about.tsx`, `contact-form.tsx` — convert wrapping `<div>`s to `<section aria-labelledby="…">` with stable ids (`#fullstack`, `#projects`, `#experience`, `#about`, `#contact`). Enforce `<h2>` → `<h3>` order.
- `header.tsx` — wrap nav in `<nav aria-label="Primary">`, add `aria-label` to icon-only buttons (theme toggle, socials).
- `footer.tsx` — confirm `<footer>` landmark and descriptive link text.
- `routes/index.tsx` — wrap page body in `<main>`.
- Add `alt` text to any `<img>` missing one; descriptive (no "image of").

## 6. Open Graph image
- Generate a branded 1200×630 PNG via imagegen (premium tier for legible text): name "Priyansh Singh", role "Full-stack Developer · MERN", dark gradient matching site theme, subtle accent.
- Save to `src/assets/og-image.png` and import in `src/routes/__root.tsx` + `src/routes/index.tsx` so the URL is hashed/served by Vite. Wire into `og:image`, `og:image:width=1200`, `og:image:height=630`, `twitter:image`.

## 7. Route split (Projects / About / Contact)
Promote in-page anchors into real routes so each gets its own metadata + sitemap entry:
- `src/routes/projects.tsx` — renders `<Mern />` + project content + own `head()`.
- `src/routes/about.tsx` — renders `<About />` + `<Experience />` + `<Fullstack />` + own `head()`.
- `src/routes/contact.tsx` — renders `<ContactForm />` + footer CTA + own `head()`.
- Update `header.tsx` nav `<Link to="/projects">` etc. (keep hash anchors as fallback on `/`).
- Update `public/sitemap.xml` with `/projects`, `/about`, `/contact`.
- Each leaf route gets canonical, og:url, JSON-LD `BreadcrumbList`.

## 8. Robots polish
Already mostly done — verify `Applebot-Extended`, `Bytespider`, `Diffbot`, `Amazonbot`, `meta-externalagent`, `cohere-ai`, `YouBot`, `OAI-SearchBot` blocks all present and allowed.

## Technical notes
- Canonical only on leaf routes (TanStack concatenates `links`).
- og:image only on leaf routes — never `__root.tsx` — to avoid overriding per-page images.
- Keep one `<h1>` per route after split (the hero `<h1>` only renders on `/`; projects/about/contact get their own `<h1>`).
- No business-logic changes; all edits are markup + metadata.

Order: 8 → 5 → 6 → 7 (cheapest first, route split last since it touches nav + sitemap).