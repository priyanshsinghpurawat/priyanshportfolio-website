import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "./reveal";

export function OtherWork() {
  const others = projects.filter((p) => p.slug !== "ecommerce-mern");
  return (
    <section
      id="other"
      aria-labelledby="other-title"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32 border-t border-border/60"
    >
      <Reveal>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Other work
        </p>
        <h2
          id="other-title"
          className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Smaller things.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Vanilla-JS utilities I built while learning fundamentals. Lightweight, hosted on GitHub Pages.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="mt-10 divide-y divide-border/60 border-y border-border/60">
          {others.map((p) => {
            const href = p.links.live ?? p.links.github ?? "#";
            return (
              <li key={p.slug}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_2fr_auto] items-center gap-4 py-5 hover:bg-card/40 transition-colors px-2 -mx-2 rounded-md"
                >
                  <div>
                    <p className="font-display text-base sm:text-lg font-medium text-foreground group-hover:text-foreground">
                      {p.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {p.year} · {p.stack.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                  <p className="hidden sm:block text-sm text-muted-foreground">{p.tagline}</p>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
