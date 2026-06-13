import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiMongoose,
  SiTailwindcss, SiFramer, SiJavascript, SiGit, SiGithub,
  SiNetlify, SiPostman, SiHtml5, SiCss, SiDocker, SiVercel,
  SiRender, SiJest, SiVitest, SiGithubactions, SiSocketdotio,
  SiRedis, SiReactquery, SiZod, SiCloudinary
} from "react-icons/si";
import { Webhook, Table } from "lucide-react";
import type { IconType } from "react-icons";
import { Reveal } from "./reveal";

type Skill = { name: string; Icon: IconType | React.ComponentType<any>; color: string };

const clientSkills: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#E94BB1" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
  { name: "Zod", Icon: SiZod, color: "#3E67B1" },
  { name: "TanStack Table", Icon: Table, color: "#E45B25" },
  { name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
  { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", Icon: SiVercel, color: "currentColor" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "currentColor" },
];

const serverSkills: Skill[] = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#888888" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", Icon: SiMongoose, color: "#880000" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Socket.io", Icon: SiSocketdotio, color: "#010101" },
  { name: "WebSockets", Icon: Webhook, color: "#009688" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
  { name: "Vitest", Icon: SiVitest, color: "#729B1B" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Render", Icon: SiRender, color: "#46E3B7" },
];

function SkillChip({ Icon, name, color }: Skill) {
  return (
    <div className="group shrink-0 mx-2 flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 transition-all duration-300 hover:border-brand/50 hover:shadow-[0_0_16px_-4px_var(--brand)]">
      <Icon
        className="size-5 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
        aria-hidden="true"
      />
      <span className="text-xs font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  );
}

function Track({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
  const doubledItems = [...items, ...items];
  return (
    <div
      className="flex w-max"
      style={{
        animation: `marquee-x 60s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {doubledItems.map((s, i) => (
        <SkillChip key={`${s.name}-${i}`} {...s} />
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto max-w-[1750px] py-10 sm:py-16 border-t border-border overflow-hidden"
    >
      <Reveal>
        <div className="text-center mb-10 px-6 sm:px-12 md:px-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Toolbox</p>
          <h2 id="skills-title" className="mt-3 font-display text-3xl sm:text-4xl">
            Skills & <span className="italic text-brand">Technologies</span>.
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col gap-5">
        {/* Row 1: Client side/frontend */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <Track items={clientSkills} />
        </div>

        {/* Row 2: Server side/backend (scrolling in reverse direction) */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <Track items={serverSkills} reverse />
        </div>
      </div>
    </section>
  );
}
