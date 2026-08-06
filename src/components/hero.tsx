import { ArrowUpRight, Github, FileText, Sparkles } from "lucide-react";
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
      className="relative border-b border-border/50 overflow-hidden bg-gradient-to-b from-brand/5 via-transparent to-transparent"
    >
      {/* Background glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-auto absolute -top-40 right-0 -z-10 size-[500px] rounded-full bg-brand/10 blur-[120px] opacity-70"
      />

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-16 pb-24 sm:pt-24 sm:pb-32 grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
        <div className="flex flex-col">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-foreground w-fit mb-6 shadow-sm backdrop-blur-md">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span>{LOCATION}</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-brand font-medium">Open for Opportunities</span>
          </div>

          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-foreground"
          >
            {ROLE}.
            <br />
            <span className="text-muted-foreground font-normal text-3xl sm:text-5xl lg:text-6xl mt-2 block">
              {ONE_LINER}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {SUB_LINE}
          </p>

          {/* Metric chips */}
          <dl className="mt-8 grid grid-cols-3 gap-4 max-w-2xl">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border/80 bg-card/80 backdrop-blur-sm px-4 py-3.5 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
              >
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </dt>
                <dd className="mt-1 font-mono text-sm sm:text-base font-semibold text-foreground truncate">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects/$slug"
              params={{ slug: "ecommerce-mern" }}
              className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-mono font-medium hover:opacity-90 transition shadow-lg shadow-foreground/10"
            >
              <Sparkles className="size-4 text-brand" />
              View MensVibe case study
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground px-5 py-3.5 text-sm font-mono transition"
            >
              <FileText className="size-4" /> Resume
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground px-5 py-3.5 text-sm font-mono transition"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="relative mx-auto lg:mx-0 lg:ml-auto w-64 sm:w-80 lg:w-full max-w-md">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand/40 via-teal-500/20 to-transparent blur-xl opacity-60" />
            <picture>
              <source type="image/avif" srcSet={portraitAvif} />
              <source type="image/webp" srcSet={portraitWebp} />
              <img
                src={portraitFallback}
                alt={`Portrait of ${ROLE} Priyansh Singh Purawat`}
                width={896}
                height={1152}
                className="relative rounded-2xl border border-border/80 bg-card/90 shadow-2xl size-full object-cover"
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

