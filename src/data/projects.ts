import ecommerceImg from "@/assets/project-ecommerce.png";
import jobdekhoImg from "@/assets/project-jobdekho.png";
import aspectImg from "@/assets/project-aspect.jpg";
import notesImg from "@/assets/project-notes.jpg";
import exchangeImg from "@/assets/project-exchange.jpg";
import type { Project } from "@/types";

export type { Project, Decision, Challenge } from "@/types";

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
    year: "2026",
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
      live: "https://mensvibe-website.onrender.com",
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
  },
  {
    slug: "jobdekho",
    name: "JobDekho",
    tagline:
      "Full-stack Job Portal and HRMS platform — JWT auth, Cloudinary uploads, role-based dashboards for job seekers and HR teams.",
    role: "Full Stack Developer (Team of 4)",
    stack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Multer",
    ],
    status: "Shipped",
    year: "2025",
    cover: jobdekhoImg,
    metric: "JWT auth · Cloudinary uploads · 2 user roles · Team of 4",
    problem:
      "Job portals are fragmented — seekers bounce between job boards while HR teams juggle spreadsheets for attendance and leave. JobDekho unifies both sides: job discovery for candidates and employee management for HR, in one MERN application.",
    approach: [
      "Built responsive dashboards for both job seekers and HR managers with role-based routing and dynamic 404 handling via a polished ComingSoon component.",
      "Developed secure RESTful APIs under a versioned /api/v1 namespace for auth, profile management, and file uploads.",
      "Integrated Cloudinary with Multer middleware to handle multipart form data — profile images and PDF resumes upload to cloud storage, only optimized URLs persist in MongoDB.",
      "Implemented JWT-based auth with access and refresh tokens for stateless, secure session management.",
      "Standardized API calls with environment variables and built a robust frontend routing structure that gracefully captures missing routes.",
    ],
    outcome:
      "A collaborative group project that shipped a functional dual-portal application — demonstrating team coordination, cross-stack debugging, and production-grade auth patterns.",
    links: {
      github: "https://github.com/priyanshsinghpurawat",
    },
    architecture: [
      "Client (React.js + Vite + Tailwind CSS)",
      "↓ HTTPS + JWT (access + refresh tokens)",
      "Express.js API — /api/v1 namespace · Multer middleware · role guards",
      "↓",
      "MongoDB (users, jobs, applications) · Cloudinary (resumes, profile images)",
    ],
    decisions: [
      {
        title: "Cloudinary over local file storage",
        why: "Parsing multipart uploads locally and serving them burns server memory. Cloudinary handles optimization, CDN delivery, and cleanup — we only store URLs.",
        tradeoff: "Adds a third-party dependency and slight upload latency vs local disk.",
      },
      {
        title: "Versioned API namespace (/api/v1)",
        why: "With four developers pushing routes, a strict namespace convention prevented collisions and makes future API versioning trivial.",
      },
      {
        title: "Dynamic 404 with ComingSoon fallback",
        why: "With a team building features at different speeds, unfinished routes showed ugly errors. A polished catch-all keeps users engaged and signals the app is intentionally scoped.",
      },
    ],
    challenges: [
      {
        title: "Complex multipart file uploads",
        body: "Handling both images and PDFs in a single form required Multer to temporarily parse files on the server, then pipe them to Cloudinary. Only the returned URLs are stored in MongoDB, keeping the database lean and the uploads scalable.",
      },
      {
        title: "Routing consistency across multiple user roles",
        body: "Job Seekers and HR users see completely different dashboards. We built a role-aware routing layer that redirects unauthorized access and dynamically renders the correct layout based on the JWT payload.",
      },
    ],
    features: [
      {
        audience: "Job Seeker",
        items: [
          "Profile builder with skills, education, and bio",
          "Resume and profile image upload via Cloudinary",
          "Job search and application flow",
          "JWT-secured registration and login",
        ],
      },
      {
        audience: "HR / Admin",
        items: [
          "Employee attendance and leave management",
          "Job posting and applicant review",
          "Dashboard with team overview",
          "Role-based access control",
        ],
      },
    ],
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
    problem: "Wanted to internalize CRUD against the DOM before reaching for React abstractions.",
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
    outcome:
      "A tiny app I actually use. Taught me the patterns I reach for in every data-fetching hook.",
    links: {
      github: "https://github.com/priyanshsinghpurawat",
      live: "https://priyanshsinghpurawat.github.io/Exchange-Rate/",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
