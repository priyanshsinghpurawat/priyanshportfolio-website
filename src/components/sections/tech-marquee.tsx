import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiVite,
  SiCloudinary,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";

const techItems = [
  { name: "React 19", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS 4", Icon: SiTailwindcss },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Vite", Icon: SiVite },
  { name: "Cloudinary", Icon: SiCloudinary },
  { name: "JWT Auth", Icon: SiJsonwebtokens },
  { name: "Postman", Icon: SiPostman },
  { name: "Git & GitHub", Icon: SiGit },
];

export function TechMarquee() {
  return (
    <div className="w-full py-6 border-y border-border/40 bg-card/30 backdrop-blur-sm overflow-hidden select-none">
      <div className="marquee-wrapper marquee-mask">
        <div className="marquee-track">
          {/* Double items for seamless infinite loop */}
          {[...techItems, ...techItems].map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-xs font-mono text-muted-foreground shadow-sm hover:border-brand/40 hover:text-foreground transition-all"
              >
                <Icon className="size-4 text-brand/80" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
