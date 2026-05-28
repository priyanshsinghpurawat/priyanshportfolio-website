import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiMongoose,
  SiTailwindcss, SiFramer, SiJavascript, SiTypescript, SiGit, SiGithub,
  SiNetlify, SiPostman, SiHtml5, SiCss,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType; color: string };

const skills: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#888888" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", Icon: SiMongoose, color: "#880000" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#E94BB1" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "currentColor" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
];

function SkillCard({ Icon, name, color }: Skill) {
  return (
    <div className="group shrink-0 mx-3 flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-4 min-w-[7rem] transition-all duration-300 hover:border-brand/50 hover:shadow-[0_0_20px_-5px_var(--brand)] hover:-translate-y-1">
      <Icon
        className="size-8 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
        aria-hidden="true"
      />
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
}

function Track({ reverse = false, duration = 40 }: { reverse?: boolean; duration?: number }) {
  const items = [...skills, ...skills];
  return (
    <div
      className="flex w-max"
      style={{
        animation: `marquee-x ${duration}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((s, i) => (
        <SkillCard key={`${s.name}-${i}`} {...s} />
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24 border-t border-border overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Toolbox</p>
          <h2 id="skills-title" className="mt-3 font-display text-3xl sm:text-4xl">
            Skills & <span className="italic text-brand">Technologies</span>.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
            A snapshot of the languages, frameworks, and tools I use day to day.
          </p>
        </div>

        <div
          className="relative space-y-4"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          <Track duration={40} />
          <Track duration={55} reverse />
        </div>
      </motion.div>
    </section>
  );
}
