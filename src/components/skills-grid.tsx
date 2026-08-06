import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPostman,
  SiHtml5,
  SiCss,
  SiVite,
  SiVercel,
  SiRender,
  SiJsonwebtokens,
  SiCloudinary,
} from "react-icons/si";
import { Shield, Network } from "lucide-react";
import type { IconType } from "react-icons";
import { Reveal } from "./reveal";

type Skill = { name: string; Icon: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>> };

const frontend: Skill[] = [
  { name: "React", Icon: SiReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Vite", Icon: SiVite },
];

const backend: Skill[] = [
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "REST APIs", Icon: Network },
  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "RBAC", Icon: Shield },
  { name: "Cloudinary", Icon: SiCloudinary },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Postman", Icon: SiPostman },
  { name: "Vercel", Icon: SiVercel },
  { name: "Render", Icon: SiRender },
];

function Chip({ Icon, name }: Skill) {
  return (
    <li className="group flex items-center gap-2.5 rounded-lg border border-border bg-card/60 px-3.5 py-2.5 transition-colors hover:border-foreground/30">
      <Icon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
      <span className="font-mono text-xs text-foreground">{name}</span>
    </li>
  );
}

function Column({ title, kicker, items }: { title: string; kicker: string; items: Skill[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {kicker}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((s) => (
          <Chip key={s.name} {...s} />
        ))}
      </ul>
    </div>
  );
}

export function SkillsGrid() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-border/50"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand font-medium">
          Tech Stack
        </p>
        <h2
          id="skills-title"
          className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
        >
          Tools & Capabilities.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
          Technologies I utilize to build scalable, full-stack web applications.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm shadow-sm hover:border-brand/30 transition-all">
            <Column title="Frontend Development" kicker="Client-Side" items={frontend} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm shadow-sm hover:border-brand/30 transition-all">
            <Column title="Backend & Infrastructure" kicker="Server & Database" items={backend} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

