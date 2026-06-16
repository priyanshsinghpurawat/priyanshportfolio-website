import { ArrowUpRight, Github, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import portraitAvif from "@/assets/portrait.png?format=avif&quality=70&w=896&imagetools";
import portraitWebp from "@/assets/portrait.png?format=webp&quality=75&w=896&imagetools";
import portraitFallback from "@/assets/portrait.png?format=jpg&quality=80&w=896&imagetools";
import {
  ROLE,
  ONE_LINER,
  SUB_LINE,
  LOCATION,
  METRICS,
  GITHUB_URL,
} from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative border-b border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 grid gap-14 lg:grid-cols-[1.4fr_1fr] items-center">
        <div className="flex flex-col">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {LOCATION}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground"
            style={{ letterSpacing: "-0.02em" }}
          >
            {ROLE}.
            <br />
            <span className="text-muted-foreground">{ONE_LINER}</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {SUB_LINE}
          </p>

          {/* Metric chips */}
          <dl className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-border bg-card/60 px-3 py-3"
              >
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </dt>
                <dd className="mt-1 font-mono text-sm font-semibold text-foreground truncate">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/projects/$slug"
              params={{ slug: "ecommerce-mern" }}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-5 py-3 text-sm font-mono font-medium hover:opacity-90 transition"
            >
              View MensVibe case study
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent hover:bg-accent hover:text-accent-foreground px-5 py-3 text-sm font-mono transition"
            >
              <FileText className="size-4" /> Resume
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent hover:bg-accent hover:text-accent-foreground px-5 py-3 text-sm font-mono transition"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="relative mx-auto lg:mx-0 lg:ml-auto w-56 sm:w-72 lg:w-full max-w-sm">
            <picture>
              <source type="image/avif" srcSet={portraitAvif} />
              <source type="image/webp" srcSet={portraitWebp} />
              <img
                src={portraitFallback}
                alt={`Portrait of ${ROLE} Priyansh Singh Purawat`}
                width={896}
                height={1152}
                className="relative rounded-2xl border border-border bg-card"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
