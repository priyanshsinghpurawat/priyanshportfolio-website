import { Briefcase, Calendar } from "lucide-react";
import { Reveal } from "./reveal";

type Job = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

const jobs: Job[] = [
  {
    company: "CollageDekho",
    role: "Full-Stack Developer Intern",
    period: "May 2026 – Present",
    points: [
      "Developed full-stack applications using MERN stack.",
      "Participated in Agile ceremonies.",
      "Improved application performance and scalability.",
    ],
  },
];

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-border/50"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-medium">
          Professional Journey
        </p>
        <h2
          id="experience-title"
          className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
        >
          Work Experience.
        </h2>
      </Reveal>

      <div className="mt-12 max-w-4xl">
        {jobs.map((job, idx) => (
          <Reveal key={job.company + idx} delay={idx * 0.1}>
            <div className="relative pl-8 pb-4 last:pb-0 border-l border-border/80 last:border-l-transparent">
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-2 size-3 rounded-full bg-brand ring-4 ring-background" />

              <div className="group rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm p-8 hover:border-brand/40 transition-all shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-foreground font-bold flex items-center gap-2.5">
                      <Briefcase className="size-5 text-brand" />
                      {job.company}
                    </h3>
                    <p className="mt-1 text-base font-medium text-brand">{job.role}</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-4 py-1.5 font-mono text-xs text-muted-foreground">
                    <Calendar className="size-3.5 text-brand" />
                    {job.period}
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {job.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="text-brand font-bold mt-1 select-none">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
