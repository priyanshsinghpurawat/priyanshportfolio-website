import ecommerceImg from "@/assets/project-ecommerce.jpg";
import aspectImg from "@/assets/project-aspect.jpg";
import notesImg from "@/assets/project-notes.jpg";
import exchangeImg from "@/assets/project-exchange.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  stack: string[];
  status?: "In Progress" | "Shipped" | "Live";
  year: string;
  cover: string;
  metric: string;
  problem: string;
  approach: string[];
  outcome: string;
  links: { github?: string; live?: string };
};

export const projects: Project[] = [
  {
    slug: "ecommerce-mern",
    name: "Full Stack E-Commerce",
    tagline: "End-to-end MERN store with auth, cart, and checkout.",
    role: "Solo developer",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    status: "In Progress",
    year: "2025",
    cover: ecommerceImg,
    metric: "12+ REST endpoints · JWT auth · role-based access",
    problem:
      "Most tutorial e-commerce builds skip the messy parts — real auth, persistent carts, admin tooling. I wanted to ship the whole loop, not a demo.",
    approach: [
      "Modeled users, products, carts, and orders in MongoDB with Mongoose schemas and indexed queries.",
      "Built a stateless Express API with JWT access tokens and role-guarded admin routes.",
      "Wired React + Context for cart state, with optimistic updates and a single source of truth on the server.",
      "Deployed the API and client separately so each can scale and ship independently.",
    ],
    outcome:
      "A real store you can sign into, browse, buy, and admin — not a click-through prototype. Setting the foundation I'll reuse on every future MERN build.",
    links: { github: "https://github.com/priyanshsinghpurawat" },
  },
  {
    slug: "aspect-ratio-calculator",
    name: "Aspect Ratio Calculator",
    tagline: "A quick utility for converting resolutions and ratios.",
    role: "Solo developer",
    stack: ["HTML5", "CSS", "JavaScript"],
    status: "Live",
    year: "2024",
    cover: aspectImg,
    metric: "Zero dependencies · <10KB JS · instant calc",
    problem:
      "Every time I resized a video or design canvas I'd reach for some bloated online calculator with ads. I wanted something fast and focused.",
    approach: [
      "Pure vanilla JS — no framework, no build step, no dependencies.",
      "Two-way bound inputs so editing width or height recalculates the other instantly.",
      "Responsive single-page layout that works the same on phone and desktop.",
    ],
    outcome:
      "A 10KB tool that loads instantly and does exactly one thing well. Lives on GitHub Pages with zero hosting cost.",
    links: { github: "https://github.com/priyanshsinghpurawat" },
  },
  {
    slug: "notes-app",
    name: "Notes Taking App",
    tagline: "Persistent notes with local storage — vanilla JS.",
    role: "Solo developer",
    stack: ["HTML5", "CSS", "JavaScript", "LocalStorage"],
    status: "Live",
    year: "2024",
    cover: notesImg,
    metric: "Survives refresh · 0 backend · CRUD complete",
    problem:
      "I wanted to internalize CRUD and DOM manipulation without leaning on a framework — the kind of muscle memory that makes the React stuff feel obvious later.",
    approach: [
      "Built the create/read/update/delete loop directly against the DOM.",
      "Persisted state with localStorage so notes survive a reload.",
      "Kept the UI deliberately minimal — text, a save button, and a delete affordance per card.",
    ],
    outcome:
      "Shipped live on GitHub Pages. More importantly, gave me the foundation to reason about React state by knowing what it abstracts over.",
    links: {
      github: "https://github.com/priyanshsinghpurawat",
      live: "https://priyanshsinghpurawat.github.io/Notes-APP/",
    },
  },
  {
    slug: "exchange-rate",
    name: "Exchange Rate App",
    tagline: "Real-time currency conversion with a live API.",
    role: "Solo developer",
    stack: ["HTML5", "CSS", "JavaScript", "REST API"],
    status: "Live",
    year: "2024",
    cover: exchangeImg,
    metric: "150+ currencies · live rates · responsive",
    problem:
      "Wanted to practice consuming a real third-party API end-to-end — request, error handling, loading states, the works.",
    approach: [
      "Fetched live rates from a public exchange API with proper loading and error states.",
      "Built a focused two-currency UI with a swap button and instant recalc.",
      "Made it responsive-first so it works as a quick mobile lookup.",
    ],
    outcome:
      "A tiny app I actually use. Taught me the patterns I'd later reach for in every React data-fetching hook.",
    links: {
      github: "https://github.com/priyanshsinghpurawat",
      live: "https://priyanshsinghpurawat.github.io/Exchange-Rate/",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
