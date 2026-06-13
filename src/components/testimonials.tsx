import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

type Endorsement = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const endorsements: Endorsement[] = [
  {
    quote:
      "Priyansh approaches problems like a senior engineer — he isolates the bug, fixes the root cause, and writes the code so the next person doesn't trip on it.",
    name: "Peer review",
    role: "Group project collaborator",
    initials: "PR",
  },
  {
    quote:
      "Clear communicator, ships fast, and surprisingly opinionated about UX for a backend-leaning developer. Easy to recommend.",
    name: "Project collaborator",
    role: "MERN study group",
    initials: "PC",
  },
  {
    quote:
      "He treats a portfolio project with the same seriousness as a paid client engagement — that's rare and it shows in the work.",
    name: "Mentor feedback",
    role: "Full-stack mentorship cohort",
    initials: "MF",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="mx-auto max-w-5xl px-6 py-10 sm:py-16 border-t border-border"
    >
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Endorsements</p>
        <h2 id="testimonials-title" className="mt-3 font-display text-3xl sm:text-4xl">
          What people <span className="italic text-brand">say</span>.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {endorsements.map((e, i) => (
          <Reveal key={e.name + i} delay={i * 0.08}>
            <figure className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col">
              <Quote className="size-5 text-brand mb-4" aria-hidden="true" />
              <blockquote className="text-sm leading-relaxed text-foreground/90 flex-grow">
                "{e.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 pt-4 border-t border-border/50">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-medium">
                  {e.initials}
                </span>
                <div className="text-xs">
                  <p className="font-medium text-foreground">{e.name}</p>
                  <p className="text-muted-foreground">{e.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
