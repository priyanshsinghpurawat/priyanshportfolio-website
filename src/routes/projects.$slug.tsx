import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { getProject, projects } from "@/data/projects";

import { SITE_URL } from "@/lib/constants";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) {
      return {
        meta: [{ title: "Project not found" }],
      };
    }
    const title = `${p.name} — Case Study | Priyansh Singh Purawat`;
    const description = p.tagline;
    const ogImage = SITE_URL + p.cover;
    const url = `${SITE_URL}/projects/${p.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: ogImage },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.name,
            description: p.tagline,
            image: ogImage,
            url,
            datePublished: p.year,
            author: { "@type": "Person", name: "Priyansh Singh Purawat" },
            keywords: p.stack.join(", "),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl">Project not found</h1>
        <p className="mt-3 text-muted-foreground">That case study doesn't exist (yet).</p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-accent transition"
        >
          <ArrowLeft className="size-4" /> Back to projects
        </Link>
      </main>
      <Footer />
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand transition mb-8"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>

          <Reveal>
            <p className="text-xs font-mono uppercase tracking-wider text-brand">
              {p.year} · {p.role}
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              {p.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{p.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {p.links.live && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                >
                  <ExternalLink className="size-4" /> Live demo
                </a>
              )}
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-accent transition"
                >
                  <Github className="size-4" /> Code
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <img
                src={p.cover}
                alt={`${p.name} cover`}
                width={1280}
                height={800}
                className="w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Key Highlights & Metrics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.metric.split("·").map((m, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-lg border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-mono text-brand"
                    >
                      {m.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <section className="mt-14">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Problem</p>
              <h2 className="mt-2 font-display text-2xl">What I set out to solve.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.problem}</p>
            </section>
          </Reveal>

          <Reveal delay={0.25}>
            <section className="mt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Approach</p>
              <h2 className="mt-2 font-display text-2xl">How I built it.</h2>
              <ol className="mt-4 space-y-3">
                {p.approach.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="inline-flex shrink-0 size-7 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal delay={0.3}>
            <section className="mt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Outcome</p>
              <h2 className="mt-2 font-display text-2xl">Where it landed.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.outcome}</p>
            </section>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="mt-16 group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 hover:border-brand/50 transition"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Next case study</p>
                <p className="mt-1 font-display text-lg group-hover:text-brand transition">{next.name}</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>
          </Reveal>
        </article>
      </motion.main>
      <Footer />
    </div>
  );
}
