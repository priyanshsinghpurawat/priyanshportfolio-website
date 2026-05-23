import { motion } from "framer-motion";

const stack = [
  { k: "M", name: "MongoDB", desc: "Document database", color: "var(--mern-m)" },
  { k: "E", name: "Express", desc: "Web framework", color: "var(--mern-e)" },
  { k: "R", name: "React", desc: "UI library", color: "var(--mern-r)" },
  { k: "N", name: "Node.js", desc: "JS runtime", color: "var(--mern-n)" },
];

export function Mern() {
  return (
    <section id="mern" className="mx-auto max-w-5xl px-6 py-24 border-t border-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-12 md:grid-cols-[1fr_2fr] items-center"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The Stack</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            About <span className="italic text-brand">MERN</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            Four pieces, one rhythm. JavaScript end-to-end — from the database, through the server,
            up to the browser.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {stack.map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-card p-3">
                <p className="font-display text-2xl" style={{ color: s.color }}>{s.k}</p>
                <p className="text-sm font-medium text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <svg viewBox="0 0 400 360" className="w-full max-w-md" aria-label="MERN Venn diagram">
            <defs>
              <style>{`
                .v { opacity: 0.55; transition: opacity .3s; }
                .v:hover { opacity: 0.85; }
                .lbl { font-family: var(--font-display), serif; font-size: 28px; font-weight: 600; }
                .sub { font-family: var(--font-mono), monospace; font-size: 9px; letter-spacing: 0.15em; }
              `}</style>
            </defs>
            {/* 4-circle venn */}
            <circle className="v mix-blend-multiply dark:mix-blend-screen" cx="140" cy="140" r="100" fill="var(--mern-m)" />
            <circle className="v mix-blend-multiply dark:mix-blend-screen" cx="260" cy="140" r="100" fill="var(--mern-e)" />
            <circle className="v mix-blend-multiply dark:mix-blend-screen" cx="140" cy="220" r="100" fill="var(--mern-r)" />
            <circle className="v mix-blend-multiply dark:mix-blend-screen" cx="260" cy="220" r="100" fill="var(--mern-n)" />

            {/* labels */}
            <text x="108" y="100" className="lbl" fill="var(--mern-m)">M</text>
            <text x="268" y="100" className="lbl" fill="var(--mern-e)">E</text>
            <text x="100" y="275" className="lbl" fill="var(--mern-r)">R</text>
            <text x="275" y="275" className="lbl" fill="var(--mern-n)">N</text>

            {/* center label */}
            <text x="200" y="180" textAnchor="middle" className="sub" fill="var(--color-foreground)" style={{ fontSize: 11, letterSpacing: "0.3em" }}>
              FULL · STACK
            </text>
            <text x="200" y="198" textAnchor="middle" className="sub" fill="var(--color-foreground)" style={{ fontSize: 9 }}>
              JS EVERYWHERE
            </text>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
