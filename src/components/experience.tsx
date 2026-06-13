import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

export function Experience() {
  const featured = projects[0];
  const others = projects.slice(1, 4);

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-[1750px] px-6 sm:px-12 md:px-16 py-10 sm:py-16 border-t border-border"
    >
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Selected work
            </p>
            <h2 id="experience-title" className="mt-3 font-display text-3xl sm:text-4xl">
              Things I've <span className="italic text-brand">built</span>.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand transition group"
          >
            See all projects
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Reveal>

      {/* Featured Project Showcase */}
      <Reveal delay={0.1}>
        <div className="mt-10 group relative grid md:grid-cols-2 items-center gap-8 lg:gap-12 rounded-[2rem] border border-border bg-card/40 p-6 sm:p-8 overflow-hidden hover:border-brand/40 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-2xl">
            <img
              src={featured.cover}
              alt={`${featured.name} Showcase`}
              loading="lazy"
              className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {featured.status && (
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-background/90 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-brand shadow-lg">
                <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                {featured.status}
              </span>
            )}
          </div>

          <div className="relative flex flex-col justify-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {featured.name}{" "}
              <span className="text-muted-foreground font-normal">— Full Stack E-Commerce</span>
            </h3>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              A production-ready boutique platform built with the MERN stack, featuring real-time
              analytics, glassmorphic UI, and LRU caching for high performance.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#00B9AE]/10 text-[#00B9AE] border border-[#00B9AE]/20 px-3 py-1 text-xs font-mono font-medium shadow-sm">
                React 19
              </span>
              <span className="rounded-full bg-[#339933]/10 text-[#339933] border border-[#339933]/20 px-3 py-1 text-xs font-mono font-medium shadow-sm">
                Node.js
              </span>
              <span className="rounded-full bg-[#47A248]/10 text-[#47A248] border border-[#47A248]/20 px-3 py-1 text-xs font-mono font-medium shadow-sm">
                MongoDB
              </span>
              <span className="rounded-full bg-[#DC382D]/10 text-[#DC382D] border border-[#DC382D]/20 px-3 py-1 text-xs font-mono font-medium shadow-sm">
                Redis
              </span>
              <span className="rounded-full bg-[#38B2AC]/10 text-[#38B2AC] border border-[#38B2AC]/20 px-3 py-1 text-xs font-mono font-medium shadow-sm">
                Tailwind 4
              </span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-2">
                <span className="text-brand">▹</span> Admin and Seller Dashboards
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand">▹</span> Razorpay Payment Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand">▹</span> Socket.io Real-Time Notifications
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center gap-2 rounded-lg bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-sm"
              >
                View Live <ArrowUpRight className="size-4" />
              </Link>
              <a
                href={featured.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent hover:bg-accent hover:text-accent-foreground px-5 py-2.5 text-sm font-semibold transition"
              >
                <Github className="size-4" /> Source Code
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08 + 0.2}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
