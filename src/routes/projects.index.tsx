import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

import { SITE_URL } from "@/lib/constants";
const TITLE = "Projects — Priyansh Singh Purawat";
const DESCRIPTION =
  "Selected full-stack projects by Priyansh Singh Purawat — MERN apps, utilities, and shipped side projects with case-study write-ups.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/projects" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-medium">Portfolio</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
            All Projects & Systems.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Full-stack MERN applications, production case studies, and engineering utilities built with problem-driven focus.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard p={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
