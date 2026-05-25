import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Full Stack E-Commerce",
    stack: "React · Node.js · Express · MongoDB · JWT",
    desc: "A complete full-stack e-commerce platform with React, Node/Express, MongoDB, JWT auth, and payment integration.",
    status: "In Progress",
    githubUrl: "https://github.com/priyanshsinghpurawat",
    liveUrl: "#",
  },
  {
    name: "Aspect Ratio Calculator",
    stack: "HTML · CSS · JavaScript",
    desc: "A responsive single-page utility for calculating and converting screen resolutions and aspect ratios.",
    githubUrl: "https://github.com/priyanshsinghpurawat",
    liveUrl: "#",
  },
  {
    name: "Notes Taking App",
    stack: "HTML5 · CSS · JavaScript",
    desc: "A clean vanilla-JS notes app — create, save, and delete notes with persistent local storage.",
    githubUrl: "https://github.com/priyanshsinghpurawat",
    liveUrl: "https://priyanshsinghpurawat.github.io/Notes-APP/",
  },
  {
    name: "Exchange Rate App",
    stack: "HTML5 · CSS · JavaScript",
    desc: "A real-time currency converter focused on live data fetching and responsive web design principles.",
    githubUrl: "https://github.com/priyanshsinghpurawat",
    liveUrl: "https://priyanshsinghpurawat.github.io/Exchange-Rate/",
  },
];

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col min-h-[260px] transition-colors hover:border-brand/50">
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[11px] text-brand truncate">{p.stack}</p>
        {p.status && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand shrink-0">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            {p.status}
          </span>
        )}
      </div>

      <a
        href={p.liveUrl !== "#" ? p.liveUrl : p.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="group mt-3 inline-flex items-start gap-2 w-fit"
      >
        <h3 className="font-display text-xl group-hover:text-brand transition-colors">{p.name}</h3>
        <ArrowUpRight className="size-5 mt-1 shrink-0 text-muted-foreground group-hover:text-brand transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">{p.desc}</p>

      <div className="mt-5 flex gap-4 pt-4 border-t border-border/50">
        {p.githubUrl && (
          <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github className="size-4" />
            Code
          </a>
        )}
        {p.liveUrl !== "#" && (
          <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ExternalLink className="size-4" />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export function Experience() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...projects, ...projects];

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-5xl px-6"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
        <h2 className="mt-3 font-display text-3xl">Things I've built.</h2>
        <p className="mt-2 text-sm text-muted-foreground">Hover to pause.</p>
      </motion.div>

      <div className="marquee-wrapper marquee-mask mt-10 overflow-hidden">
        <div className="marquee-track flex gap-6 pl-6">
          {loop.map((p, i) => (
            <ProjectCard key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
