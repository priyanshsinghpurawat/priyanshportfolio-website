import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { getProject } from "@/data/projects";
import { Reveal } from "./reveal";

export function FeaturedCaseStudy() {
  const p = getProject("ecommerce-mern");
  if (!p) return null;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32 border-t border-border/60"
    >
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Featured case study
            </p>
            <h2
              id="work-title"
              className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              MensVibe.
            </h2>
          </div>
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition group"
          >
            Read full case study
            <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group block relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted"
          >
            <img
              src={p.cover}
              alt="MensVibe storefront screenshot"
              loading="lazy"
              className="size-full object-cover transition-opacity duration-500 group-hover:opacity-90"
            />
          </Link>

          <div className="flex flex-col">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {p.year} · {p.role} · {p.status}
            </p>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Production MERN e-commerce platform with multi-role dashboards.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {p.tagline}
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <span className="font-mono text-foreground/40">01</span>
                JWT auth, Google OAuth, and role-based access for Admin / Seller / Buyer.
              </li>
              <li className="flex gap-2.5">
                <span className="font-mono text-foreground/40">02</span>
                Razorpay payments + Cloudinary uploads + Redis read-through cache.
              </li>
              <li className="flex gap-2.5">
                <span className="font-mono text-foreground/40">03</span>
                Socket.io for real-time admin notifications and seller coupon events.
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.stack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2.5 text-sm font-mono font-medium hover:opacity-90 transition"
              >
                Read case study <ArrowUpRight className="size-4" />
              </Link>
              {p.links.live && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-mono hover:bg-accent transition"
                >
                  <ExternalLink className="size-4" /> Live
                </a>
              )}
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-mono hover:bg-accent transition"
                >
                  <Github className="size-4" /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
