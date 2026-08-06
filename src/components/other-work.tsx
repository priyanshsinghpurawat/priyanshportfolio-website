import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "./reveal";

export function OtherWork() {
  const others = projects.filter((p) => !["ecommerce-mern", "jobdekho"].includes(p.slug));
  return (
    <section
      id="other"
      aria-labelledby="other-title"
      className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-border/50"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-medium">
          Other Projects
        </p>
        <h2
          id="other-title"
          className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
        >
          Vanilla JS & Tools.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
          Lightweight utilities and tools built with core web technologies.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {others.map((p) => {
            const href = p.links.live ?? p.links.github ?? "#";
            return (
              <a
                key={p.slug}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 hover:border-brand/40 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand font-medium">
                      {p.year}
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-brand transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.tagline}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border/60 bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

