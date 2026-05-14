const skills = [
  { label: "Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React", "Responsive UI", "DOM"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Netlify", "VS Code"] },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h2 className="mt-3 font-display text-3xl">A bit about me.</h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground">BCA student at JECRC, Jaipur</span>,
            specializing in Full Stack Development. I like turning rough ideas into
            tangible, responsive web apps — and I care about the small details that
            make software feel intentional.
          </p>
          <p>
            Outside of coursework I dig into Data Structures, ship side projects, and
            collaborate on group builds focused on scalable web tooling.
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
      </div>
    </section>
  );
}
