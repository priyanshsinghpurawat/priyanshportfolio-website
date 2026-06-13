import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      data-cursor="view"
      className="group block rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-brand/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_var(--brand)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={p.cover}
          alt={`${p.name} cover`}
          width={1280}
          height={800}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {p.status && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-brand">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            {p.status}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              {p.year} · {p.role}
            </p>
            <h3 className="mt-2 font-display text-xl text-foreground group-hover:text-brand transition-colors">
              {p.name}
            </h3>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
          {p.metric.split("·").map((m, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded bg-brand/5 border border-brand/20 px-2 py-0.5 text-[10px] font-mono text-brand"
            >
              {m.trim()}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
