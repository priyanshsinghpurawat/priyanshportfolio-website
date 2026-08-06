import { Reveal } from "./reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-border/50"
    >
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-medium">
              Background
            </p>
            <h2
              id="about-title"
              className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            >
              Engineering Philosophy.
            </h2>
          </div>
          <div className="grid gap-6 text-muted-foreground leading-relaxed">
            <div className="p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-semibold">
                What I build
              </p>
              <p className="mt-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                End-to-end web applications on the MERN stack — from MongoDB schema design and
                Express RESTful APIs to high-performance React user interfaces. Key production work
                includes MensVibe (multi-role e-commerce with Razorpay and Redis) and JobDekho (HRMS
                job portal with JWT auth and Cloudinary).
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-semibold">
                How I work
              </p>
              <p className="mt-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                Model domain data cleanly first, build typed and versioned RESTful surfaces, then
                craft intuitive interfaces. Validate inputs with Zod, enforce strict role-based
                access (RBAC) with JWT, and keep read paths fast with read-through caching.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-semibold">
                What I'm looking for
              </p>
              <p className="mt-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                Full Stack, Software Engineer, or Backend roles in fast-moving engineering teams
                where I can take ownership of features, solve real business problems, and push clean
                code to production.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
