## Plan

### 1. Remove "MERN" from header nav
- `src/components/header.tsx`: drop `{ href: "#mern", label: "MERN" }` from `navLinks`. About/Work/Contact remain.

### 2. Add animated skills marquee section
- Create `src/components/skills-marquee.tsx`: a new section `id="skills"` that renders a continuously-scrolling row of skill icons (and a second slower row in reverse) using `simple-icons` SVG paths via the `react-icons/si` package (already a common dep — verify; if not, install `react-icons`).
- Skills shown (pulled from existing Fullstack/MERN data): React, Node.js, Express, MongoDB, MySQL, Mongoose, Tailwind CSS, Framer Motion, JavaScript, TypeScript, Git, GitHub, Netlify, REST APIs (Postman icon).
- Animation: pure CSS keyframe marquee (`@keyframes scroll-x`) added to `src/styles.css`, duplicated track for seamless loop, `prefers-reduced-motion` disables it. Each icon card uses `hover-scale` + subtle glow on hover. Optional Framer Motion stagger fade-in on mount.
- Each icon is a rounded card with the brand-colored icon + label below; uses semantic tokens (`bg-card`, `border-border`, `text-foreground`).

### 3. Wire into homepage
- `src/routes/index.tsx`: import `<SkillsMarquee />` and place it between `<Mern />` and `<FullStack />` (or right after Hero — leaning between Mern and FullStack so the narrative flows stack → skills → layers).

### 4. Skip
- No business-logic, route, or SEO changes. Skills section gets a stable `id="skills"` so future nav/JSON-LD can reference it, but nav stays as-is per request.

### Technical notes
- If `react-icons` not installed, run `bun add react-icons` before importing.
- Marquee uses two tracks (`animate-[scroll-x_30s_linear_infinite]` and a slower reverse one) wrapped in `overflow-hidden` with edge fade masks via `mask-image` linear gradients.
- All colors via tokens; icon brand colors inlined per-icon (acceptable since they represent the actual brand identity, not theme color).
