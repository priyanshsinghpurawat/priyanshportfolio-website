import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

export function Experience() {
  const featured = projects.slice(0, 3);
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-5xl px-6 py-10 sm:py-16 border-t border-border"
    >
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
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

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
