import { LiveClock } from "./live-clock";
import { ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-10 sm:pt-20 pb-16 sm:pb-24">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 sm:mb-8">
        <span className="size-1.5 rounded-full bg-brand" />
        Available for work
      </div>
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
        <strong className="font-display font-bold">Priyansh Singh</strong> — <br />
        <span className="italic text-muted-foreground"><strong className="font-semibold">full-stack developer</strong></span> crafting <br />
        thoughtful web things.
      </h1>
      <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
        <strong className="text-foreground font-semibold">BCA student at JECRC University</strong> focused on the
        <strong className="text-foreground font-semibold"> modern JavaScript stack</strong> —
        <strong className="text-foreground font-semibold"> React</strong>,
        <strong className="text-foreground font-semibold"> Node.js</strong>, and the messy beautiful glue between them.
        I build <strong className="text-foreground font-semibold">responsive interfaces</strong> and ship
        <strong className="text-foreground font-semibold"> end-to-end MERN applications</strong>.
      </p>
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
        >
          Get in touch
          <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <a
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent transition"
        >
          See my work
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent transition"
        >
          <Download className="size-4" />
          Resume
        </a>
        <div className="w-full sm:w-auto sm:ml-auto"><LiveClock /></div>
      </div>
    </section>
  );
}
