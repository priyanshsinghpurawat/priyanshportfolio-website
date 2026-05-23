import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Full Stack E-Commerce",
    stack: "React · Node.js · Express · MongoDB · JWT",
    desc: "A complete full-stack e-commerce platform with a React frontend, Node.js/Express backend, MongoDB database, JWT authentication, and payment integration. Built end-to-end with a focus on scalable architecture.",
    status: "In Progress",
  },
  {
    name: "Aspect Ratio Calculator",
    stack: "HTML · CSS · JavaScript",
    desc: "A responsive single-page utility for calculating and converting screen resolutions and aspect ratios. Continuous deployment via Netlify + GitHub.",
  },
  {
    name: "Notes Taking App",
    stack: "HTML5 · CSS · JavaScript",
    desc: "A clean vanilla-JS notes app — create, save, and delete notes with persistent local storage. Built with a focus on simplicity.",
  },
  {
    name: "Exchange Rate App",
    stack: "HTML5 · CSS · JavaScript",
    desc: "A real-time currency converter focused on live data fetching and responsive web design principles.",
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
          <h2 className="mt-3 font-display text-3xl">Things I've built.</h2>
          <div className="mt-8 flex md:flex-col gap-1 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
            {projects.map((proj, i) => (
              <button
                key={proj.name}
                onClick={() => setActive(i)}
                className={`text-left text-sm px-3 py-2 rounded-md border-l-2 transition flex items-center gap-2 whitespace-nowrap shrink-0 md:shrink ${
                  active === i
                    ? "border-brand text-foreground bg-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{proj.name}</span>
                {proj.status && (
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-brand">
                    ● {proj.status}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 min-h-[280px]">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs text-brand">{p.stack}</p>
            {p.status && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand">
                <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                {p.status}
              </span>
            )}
          </div>
          <h3 className="mt-3 font-display text-2xl flex items-center gap-2">
            {p.name}
            <ArrowUpRight className="size-5 text-muted-foreground" />
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
        </div>
      </div>
    </section>
  );
}
