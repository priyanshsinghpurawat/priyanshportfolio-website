import { motion } from "framer-motion";

const skills = [
  { label: "Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React", "Responsive UI", "DOM"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Netlify", "VS Code"] },
  { label: "Core", items: ["DSA", "Full Stack Architecture"] },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 border-t border-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-12 md:grid-cols-[1fr_2fr]"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h2 className="mt-3 font-display text-3xl">A bit about me.</h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground">Full Stack Developer</span> and{" "}
            <span className="text-foreground">BCA student at JECRC, Jaipur</span>, specializing in
            the <span className="text-foreground">MERN stack</span> with a focus on clean,
            optimized code. I build responsive web applications end-to-end — from architectural
            planning to deployment.
          </p>
          <p>
            I care about the small details that make software feel intentional, and I'm dedicated
            to solving complex logic problems while delivering high-performance interfaces.
            Outside coursework I dig into Data Structures and ship side projects.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6">
            {skills.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs uppercase tracking-wider text-brand mb-2">{s.label}</p>
                <ul className="space-y-1 text-sm text-foreground">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
