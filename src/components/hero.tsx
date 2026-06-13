import { LiveClock } from "./live-clock";
import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--brand)_0%,transparent_45%)] opacity-[0.08]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-10 sm:pt-16 pb-12 sm:pb-20 grid gap-10 lg:gap-14 lg:grid-cols-[1.3fr_1fr] items-center">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 sm:mb-7">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" aria-hidden="true" />
            Available for work
          </div>
          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight"
          >
            <strong className="font-display font-bold">Priyansh Singh</strong> — <br />
            <span className="italic text-muted-foreground">
              <strong className="font-semibold">full-stack developer</strong>
            </span>{" "}
            crafting <br />
            thoughtful web things.
          </h1>
          <p className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-semibold">BCA student</strong>{" "}
            focused on the{" "}
            <strong className="text-foreground font-semibold">modern JavaScript stack</strong> —{" "}
            <strong className="text-foreground font-semibold">React</strong>,{" "}
            <strong className="text-foreground font-semibold">Node.js</strong>, and the messy
            beautiful glue between them. I build{" "}
            <strong className="text-foreground font-semibold">responsive interfaces</strong> and
            ship{" "}
            <strong className="text-foreground font-semibold">end-to-end MERN applications</strong>.
          </p>
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Get in touch
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent transition"
            >
              See my work
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent transition"
            >
              <Download className="size-4" />
              Resume
            </a>
          </div>
          <div className="mt-7"><LiveClock /></div>
        </div>

        <div className="relative order-first lg:order-last">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, var(--brand), transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto w-56 sm:w-72 lg:w-full max-w-sm">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand/40 via-transparent to-transparent blur-xl opacity-60" aria-hidden="true" />
            <img
              src={portrait}
              alt="Stylized portrait of Priyansh Singh Purawat"
              width={896}
              height={1152}
              className="relative rounded-3xl border border-border bg-card/40 backdrop-blur-sm"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
