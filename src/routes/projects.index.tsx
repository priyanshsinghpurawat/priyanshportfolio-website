import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { projects } from "@/data/projects";

const SITE_URL = "https://id-preview--3218ca56-d2fc-4821-99e5-23d5de4d23e2.lovable.app";
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
      <ScrollProgress />
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight">
            Things I've <span className="italic text-brand">built</span>.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            A handful of projects I'm proud of — each with a problem worth solving and a story
            worth telling. Click any card for the full case study.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
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
