import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { getProject, Project } from "@/data/projects";
import { Reveal } from "./reveal";

export function FeaturedCaseStudy() {
  const featuredSlugs = ["ecommerce-mern", "jobdekho"];
  const featuredProjects = featuredSlugs
    .map((slug) => getProject(slug))
    .filter((p): p is Project => p !== undefined);

  if (featuredProjects.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-border/50 space-y-20"
    >
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-medium">
              Featured Case Studies
            </p>
            <h2
              id="work-title"
              className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            >
              Production Systems & Architecture.
            </h2>
          </div>
        </div>
      </Reveal>

      {featuredProjects.map((p, index) => (
        <Reveal key={p.slug} delay={0.08 * (index + 1)}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-brand/40 transition-all hover:shadow-xl group">
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-md group-hover:shadow-lg transition-all"
            >
              <img
                src={p.cover}
                alt={`${p.name} screenshot`}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </Link>

            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                    {p.year} • {p.role}
                  </span>
                  <span className="font-mono text-xs text-brand font-semibold">{p.status}</span>
                </div>

                <h3 className="mt-4 font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-foreground/80 leading-relaxed">
                  {p.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.problem}
                </p>

                <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {p.approach.slice(0, 3).map((bullet, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="font-mono text-brand/70 font-bold">0{i + 1}</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 7).map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border/60 bg-muted/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-5 py-3 text-sm font-mono font-medium hover:opacity-90 transition shadow-md"
                  >
                    Read case study <ArrowUpRight className="size-4" />
                  </Link>
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 hover:bg-accent px-4 py-3 text-sm font-mono transition"
                    >
                      <ExternalLink className="size-4" /> Live
                    </a>
                  )}
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 hover:bg-accent px-4 py-3 text-sm font-mono transition"
                    >
                      <Github className="size-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
