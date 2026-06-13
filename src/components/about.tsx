import { Reveal } from "./reveal";

const skills = [
  { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React", "Tailwind", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Databases", items: ["MongoDB", "Mongoose", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Netlify", "VS Code"] },
  { label: "Core", items: ["DSA", "Full Stack Architecture"] },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-5xl px-6 py-10 sm:py-16 border-t border-border"
    >
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 id="about-title" className="mt-3 font-display text-3xl sm:text-4xl">
              A bit <span className="italic text-brand">about me</span>.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground">Full Stack Developer</span> and{" "}
              <span className="text-foreground">BCA student based in Jaipur</span>, specializing in
              the <span className="text-foreground">MERN stack</span> with a focus on clean,
              optimized code. I build responsive web applications end-to-end — from architectural
              planning to deployment.
            </p>
            <p>
              I care about the small details that make software feel intentional, and I'm dedicated
              to solving complex logic problems while delivering high-performance interfaces.
              Outside coursework I dig into Data Structures and ship side projects.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
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
        </div>
      </Reveal>
    </section>
  );
}
