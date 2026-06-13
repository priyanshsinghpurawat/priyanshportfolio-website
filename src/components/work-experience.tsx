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
      id="work"
      aria-labelledby="work-title"
      className="mx-auto max-w-[1750px] px-6 sm:px-12 md:px-16 py-10 sm:py-16 border-t border-border"
    >
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Professional Journey
        </p>
        <h2 id="work-title" className="mt-3 font-display text-3xl sm:text-4xl">
          Where I've <span className="italic text-brand">worked</span>.
        </h2>
      </Reveal>

      <div className="mt-10 max-w-3xl">
        {jobs.map((job, idx) => (
          <Reveal key={job.company + idx} delay={idx * 0.1}>
            <div className="relative pl-8 pb-4 last:pb-0 border-l border-border/80 last:border-l-transparent">
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-brand ring-4 ring-background" />

              <div className="group rounded-2xl border border-border bg-card/40 p-6 hover:border-brand/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-foreground font-semibold flex items-center gap-2">
                      <Briefcase className="size-5 text-brand" />
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{job.role}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-mono text-muted-foreground">
                    <Calendar className="size-3.5 text-brand" />
                    {job.period}
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {job.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-brand mt-1 select-none">▹</span>
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
