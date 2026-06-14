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
      return { meta: [{ title: "Project not found" }] };
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
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent transition"
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
        <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition mb-10"
          >
            <ArrowLeft className="size-3.5" /> All projects
          </Link>

          {/* Header */}
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {p.year} · {p.role} {p.status ? `· ${p.status}` : ""}
            </p>
            <h1
              className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {p.name}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {p.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {p.links.live ? (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2.5 text-sm font-mono font-medium hover:opacity-90 transition"
                >
                  <ExternalLink className="size-4" /> Live demo
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 text-sm font-mono text-muted-foreground">
                  Live demo · coming soon
                </span>
              )}
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-mono hover:bg-accent transition"
                >
                  <Github className="size-4" /> Source code
                </a>
              )}
              {p.links.server && (
                <a
                  href={p.links.server}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-mono hover:bg-accent transition"
                >
                  <Github className="size-4" /> Server repo
                </a>
              )}
            </div>
          </Reveal>

          {/* Cover */}
          <Reveal delay={0.08}>
            <div className="mt-12 overflow-hidden rounded-xl border border-border bg-muted">
              <img src={p.cover} alt={`${p.name} cover`} width={1280} height={800} className="w-full" />
            </div>
          </Reveal>

          {/* Problem */}
          <Reveal delay={0.12}>
            <Section kicker="01" title="Problem">
              <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
            </Section>
          </Reveal>

          {/* Architecture */}
          {p.architecture && (
            <Reveal delay={0.16}>
              <Section kicker="02" title="Architecture">
                <pre className="overflow-x-auto rounded-lg border border-border bg-card/60 p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-foreground">
                  {p.architecture.join("\n")}
                </pre>
              </Section>
            </Reveal>
          )}

          {/* Key decisions */}
          {p.decisions && p.decisions.length > 0 && (
            <Reveal delay={0.18}>
              <Section kicker="03" title="Key decisions">
                <ul className="divide-y divide-border/60 border-y border-border/60">
                  {p.decisions.map((d) => (
                    <li key={d.title} className="py-5">
                      <p className="font-display text-base font-medium text-foreground">
                        {d.title}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/60 mr-2">
                          Why
                        </span>
                        {d.why}
                      </p>
                      {d.tradeoff && (
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/60 mr-2">
                            Tradeoff
                          </span>
                          {d.tradeoff}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </Section>
            </Reveal>
          )}

          {/* Approach (also doubles as the build narrative for shallow projects) */}
          {!p.decisions && (
            <Reveal delay={0.18}>
              <Section kicker="02" title="Approach">
                <ol className="space-y-3">
                  {p.approach.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-mono text-xs text-muted-foreground pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </Section>
            </Reveal>
          )}

          {/* Features */}
          {p.features && (
            <Reveal delay={0.2}>
              <Section kicker="04" title="Features">
                <div className="grid gap-6 sm:grid-cols-3">
                  {p.features.map((f) => (
                    <div key={f.audience} className="rounded-lg border border-border bg-card/60 p-5">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-foreground">
                        {f.audience}
                      </p>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                        {f.items.map((it) => (
                          <li key={it} className="leading-relaxed">— {it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            </Reveal>
          )}

          {/* Challenges */}
          {p.challenges && p.challenges.length > 0 && (
            <Reveal delay={0.22}>
              <Section kicker="05" title="Engineering challenges">
                <div className="space-y-6">
                  {p.challenges.map((c) => (
                    <div key={c.title}>
                      <p className="font-display text-base font-medium text-foreground">{c.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </Reveal>
          )}

          {/* Gallery */}
          {p.gallery && p.gallery.length > 0 && (
            <Reveal delay={0.24}>
              <Section kicker="06" title="Screenshots">
                <div className="grid gap-4 sm:grid-cols-2">
                  {p.gallery.map((g) => (
                    <div key={g.src} className="overflow-hidden rounded-lg border border-border bg-muted">
                      <img src={g.src} alt={g.alt} loading="lazy" className="w-full" />
                    </div>
                  ))}
                </div>
              </Section>
            </Reveal>
          )}

          {/* Stack */}
          <Reveal delay={0.26}>
            <Section kicker="07" title="Stack">
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Section>
          </Reveal>

          {/* Outcome */}
          <Reveal delay={0.28}>
            <Section kicker="08" title="Outcome">
              <p className="text-muted-foreground leading-relaxed">{p.outcome}</p>
            </Section>
          </Reveal>

          {/* Next */}
          <Reveal delay={0.32}>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="mt-20 group flex items-center justify-between gap-4 rounded-lg border border-border bg-card/40 p-5 hover:border-foreground/30 transition"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Next case study
                </p>
                <p className="mt-1 font-display text-lg group-hover:text-foreground transition">
                  {next.name}
                </p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>
          </Reveal>
        </article>
      </motion.main>
      <Footer />
    </div>
  );
}

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {kicker}
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
