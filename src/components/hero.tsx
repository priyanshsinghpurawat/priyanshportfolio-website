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
        <div className="absolute inset-0 opacity-[0.04] bg-hero-pattern" />
      </div>

      <div className="mx-auto max-w-[1750px] px-6 sm:px-12 md:px-16 pt-10 sm:pt-16 pb-12 sm:pb-20 grid gap-10 lg:gap-14 lg:grid-cols-[1.3fr_1fr] items-center">
        <div className="flex flex-col space-y-4">
          {/* Terminal Window Card */}
          <div className="w-full bg-card/65 backdrop-blur-md border border-border rounded-xl shadow-2xl overflow-hidden">
            {/* Header Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/40 border-b border-border/50 font-mono text-[11px] text-muted-foreground select-none">
              <div className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-[#FF5F56] border border-black/10" />
                <span className="size-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                <span className="size-3 rounded-full bg-[#27C93F] border border-black/10" />
              </div>
              <span className="font-semibold tracking-wide">MAIN_PROCESS.EXE</span>
              <div className="w-12" /> {/* Spacer to balance dots */}
            </div>

            {/* Window Body */}
            <div className="p-6 sm:p-8 flex flex-col space-y-6">
              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-brand">
                  <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                  <span className="font-semibold uppercase tracking-wider">STATUS: ONLINE</span>
                </div>
              </div>

              {/* Brand / Heading */}
              <div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                  Full Stack Developer
                </h1>
                <p className="mt-2 font-display text-base sm:text-lg text-brand font-semibold tracking-tight">
                  &lt;priyansh singh /&gt;
                </p>
              </div>

              {/* Quote/Description block */}
              <div className="relative pl-4 border-l-2 border-brand/40">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  BCA student and Full-Stack Developer specializing in the modern JavaScript ecosystem. I build fast, scalable applications using React, Node.js, and MongoDB.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  aria-label="View Projects"
                  title="View Projects"
                  data-cursor="projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand text-brand-foreground px-5 py-2.5 text-xs font-mono font-bold hover:opacity-90 transition shadow-sm"
                >
                  &gt; view_projects
                </Link>
                <a
                  href="#contact"
                  aria-label="Contact Me"
                  title="Contact Me"
                  data-cursor="contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent hover:bg-accent hover:text-accent-foreground px-5 py-2.5 text-xs font-mono font-bold transition"
                >
                  &gt; contact_me
                </a>
              </div>
            </div>
          </div>

          {/* Sub-card CLI details */}
          <div className="flex items-center mt-3 px-1 font-mono text-xs text-muted-foreground">
            <a href="/resume.pdf" download title="Download Resume (.pdf)" data-cursor="download" className="hover:text-brand transition flex items-center gap-1.5">
              <span className="text-brand">$</span> download resume.pdf
            </a>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, var(--brand), transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto lg:mx-0 lg:ml-auto w-56 sm:w-72 lg:w-full max-w-sm">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand/40 via-transparent to-transparent blur-xl opacity-60" aria-hidden="true" />
            <img
              src={portrait}
              alt="Stylized portrait of Priyansh Singh Purawat"
              width={896}
              height={1152}
              data-cursor="hello!"
              className="relative rounded-3xl border border-border bg-card/40 backdrop-blur-sm"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
