import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      data-cursor="view"
      className="group block rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={p.cover}
          alt={`${p.name} cover`}
          width={1280}
          height={800}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {p.status && (
          <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-background/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-brand font-semibold shadow-sm">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            {p.status}
          </span>
        )}
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-brand font-medium">
              {p.year} • {p.role}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground group-hover:text-brand transition-colors">
              {p.name}
            </h2>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>
        
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="rounded-md border border-border/60 bg-muted/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        
        <div className="mt-5 pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
          {p.metric.split("·").map((m, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-md bg-brand/10 border border-brand/20 px-2.5 py-1 text-[10px] font-mono font-medium text-brand"
            >
              {m.trim()}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

