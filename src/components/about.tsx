import { Reveal } from "./reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32 border-t border-border/60"
    >
      <Reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              About
            </p>
            <h2
              id="about-title"
              className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              About.
            </h2>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                What I build
              </p>
              <p className="mt-3 text-sm sm:text-base">
                End-to-end web applications on the MERN stack — from MongoDB schema and
                Express APIs to React interfaces. Recent work includes MensVibe, a
                production e-commerce platform with multi-role dashboards, Razorpay
                payments, Redis-cached product reads, and Socket.io notifications.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                How I work
              </p>
              <p className="mt-3 text-sm sm:text-base">
                Design the data model first, expose a versioned REST surface, then
                build UI against it. Validate inputs with Zod, enforce auth with JWT
                and role-based access, and keep the hot path measurable. Ship to
                Vercel and Render, monitor what breaks, iterate.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                What I'm looking for
              </p>
              <p className="mt-3 text-sm sm:text-base">
                A Full Stack or Backend role on a small, shipping team where I can own
                features end-to-end and learn from engineers who care about
                correctness as much as velocity. Remote or relocation, both fine.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
