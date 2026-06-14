import ecommerceImg from "@/assets/project-ecommerce.jpg";
import aspectImg from "@/assets/project-aspect.jpg";
import notesImg from "@/assets/project-notes.jpg";
import exchangeImg from "@/assets/project-exchange.jpg";

export type Decision = { title: string; why: string; tradeoff?: string };
export type Challenge = { title: string; body: string };

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
  links: { github?: string; live?: string; server?: string };
  // Case-study extensions (optional — only the featured project fills these)
  architecture?: string[];
  decisions?: Decision[];
  challenges?: Challenge[];
  features?: { audience: string; items: string[] }[];
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "ecommerce-mern",
    name: "MensVibe",
    tagline:
      "Production MERN e-commerce platform with multi-role dashboards, Razorpay payments, Redis caching, and real-time admin notifications.",
    role: "Solo Full Stack Developer",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Socket.io",
      "JWT",
      "Zod",
      "Razorpay",
      "Cloudinary",
      "Helmet",
    ],
    status: "Shipped",
    year: "2025",
    cover: ecommerceImg,
    metric: "Redis cache · Razorpay payments · Socket.io · 3 user roles",
    problem:
      "Boutique fashion brands need a single platform that handles three distinct workflows — admins overseeing the catalog, sellers managing their own inventory and coupons, and buyers checking out securely — without stitching together SaaS tools.",
    approach: [
      "Modeled the domain in MongoDB with Mongoose: users (with role discriminator), products with variants, orders with embedded line items, and coupon documents scoped per seller.",
      "Built a stateless Express API with JWT access tokens, Google OAuth handoff, and Zod schemas validating every request body before it reaches a handler.",
      "Added a Redis read-through cache on product listings and category pages — the hot path that recruiters' devtools see first.",
      "Integrated Razorpay for the checkout flow and Cloudinary for responsive image uploads, both behind server-side signed requests.",
      "Pushed real-time events (new orders, low stock, coupon redemptions) through Socket.io to admin and seller dashboards.",
      "Locked the surface down with Helmet, express-rate-limit, and role-checking middleware on every protected route.",
    ],
    outcome:
      "A working multi-role e-commerce platform I own end-to-end — schema, API, UI, and deployment — that demonstrates the patterns recruiters look for in a junior full-stack hire.",
    links: {
      github: "https://github.com/priyanshsinghpurawat",
      // TODO: add live URL when ready
      // live: "https://mensvibe.example.com",
    },
    architecture: [
      "Client (React 19 + Vite + Tailwind 4)",
      "↓ HTTPS + JWT",
      "Express.js API — Zod validation · Helmet · rate-limit · role middleware",
      "↓",
      "MongoDB (products, users, orders) · Redis (read-through cache) · Cloudinary (media) · Razorpay (payments)",
      "↓ WebSocket",
      "Socket.io → Admin & Seller dashboards (live notifications)",
    ],
    decisions: [
      {
        title: "Read-through Redis cache on product listings",
        why: "Product browse is the highest-frequency read path. Cache hits return in single-digit ms vs ~80ms uncached Mongo queries.",
        tradeoff: "Accepted eventual consistency on stock counts; cache invalidated on writes.",
      },
      {
        title: "Role discriminator on a single users collection",
        why: "Admin / Seller / Buyer share 80% of profile fields. One collection keeps auth simple and lets me JOIN-free in Mongo.",
        tradeoff: "Role-specific fields are optional, so the schema is wider than ideal.",
      },
      {
        title: "Zod schemas at the API boundary",
        why: "Validation co-located with route handlers makes bad input a 400, not a 500, and gives me typed request bodies for free.",
      },
      {
        title: "Socket.io over polling for dashboards",
        why: "Sellers and admins keep dashboards open for hours; polling burned bandwidth and showed stale data.",
        tradeoff: "Added a persistent connection per dashboard user — fine at this scale.",
      },
    ],
    challenges: [
      {
        title: "Stock race conditions at checkout",
        body: "Two buyers could simultaneously check out the last unit of a variant. Solved by moving the decrement into a MongoDB transaction with a $inc guard ({ stock: { $gte: qty } }) — if the update matches zero documents, the order fails cleanly with a 409.",
      },
      {
        title: "Cache invalidation across product writes",
        body: "Admin and seller writes both touch products, but from different routes. Centralized invalidation in a single repository layer so every write path goes through one DEL — no orphan cache keys.",
      },
      {
        title: "Razorpay webhook idempotency",
        body: "Webhooks can fire twice. Stored Razorpay payment IDs as unique in the orders collection so the second insert errors instead of double-fulfilling.",
      },
    ],
    features: [
      {
        audience: "Buyer",
        items: [
          "Filterable catalog with variant pickers",
          "Cart + Razorpay checkout",
          "Order history with status timeline",
          "Google OAuth sign-in",
        ],
      },
      {
        audience: "Seller",
        items: [
          "Own product CRUD with Cloudinary uploads",
          "Coupon creation scoped to seller",
          "Real-time order notifications via Socket.io",
          "Revenue summary",
        ],
      },
      {
        audience: "Admin",
        items: [
          "Platform-wide product & user moderation",
          "Sales analytics dashboard",
          "Live order feed",
          "Role assignment",
        ],
      },
    ],
    // gallery: [
    //   { src: "/mensvibe/dashboard.png", alt: "Admin dashboard" },
    //   { src: "/mensvibe/product.png", alt: "Product detail" },
    //   ...
    // ],
  },
  {
    slug: "aspect-ratio-calculator",
    name: "Aspect Ratio Calculator",
    tagline: "Single-file resolution and aspect-ratio converter — vanilla JS, no dependencies.",
    role: "Solo developer",
    stack: ["HTML5", "CSS", "JavaScript"],
    status: "Live",
    year: "2024",
    cover: aspectImg,
    metric: "Zero dependencies · <10KB JS",
    problem:
      "Every online aspect-ratio calculator is buried under ads. I wanted a focused tool that loads instantly.",
    approach: [
      "Vanilla JS, no framework, no build step.",
      "Two-way bound width/height inputs.",
      "Responsive single-page layout, mobile-first.",
    ],
    outcome: "A 10KB tool on GitHub Pages with zero hosting cost.",
    links: { github: "https://github.com/priyanshsinghpurawat" },
  },
  {
    slug: "notes-app",
    name: "Notes App",
    tagline: "Persistent notes with localStorage — vanilla-JS CRUD fundamentals.",
    role: "Solo developer",
    stack: ["HTML5", "CSS", "JavaScript", "LocalStorage"],
    status: "Live",
    year: "2024",
    cover: notesImg,
    metric: "Survives refresh · 0 backend",
    problem:
      "Wanted to internalize CRUD against the DOM before reaching for React abstractions.",
    approach: [
      "DOM-driven create/read/update/delete loop.",
      "localStorage persistence so notes survive a reload.",
      "Deliberately minimal UI.",
    ],
    outcome: "Live on GitHub Pages. Built the muscle memory React later abstracts over.",
    links: {
      github: "https://github.com/priyanshsinghpurawat",
      live: "https://priyanshsinghpurawat.github.io/Notes-APP/",
    },
  },
  {
    slug: "exchange-rate",
    name: "Exchange Rate App",
    tagline: "Live currency conversion against a public REST API.",
    role: "Solo developer",
    stack: ["HTML5", "CSS", "JavaScript", "REST API"],
    status: "Live",
    year: "2024",
    cover: exchangeImg,
    metric: "150+ currencies · live rates",
    problem: "Wanted to practice consuming a real third-party API end-to-end.",
    approach: [
      "Live rates with proper loading and error states.",
      "Two-currency UI with swap button.",
      "Responsive-first as a mobile lookup tool.",
    ],
    outcome: "A tiny app I actually use. Taught me the patterns I reach for in every data-fetching hook.",
    links: {
      github: "https://github.com/priyanshsinghpurawat",
      live: "https://priyanshsinghpurawat.github.io/Exchange-Rate/",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
