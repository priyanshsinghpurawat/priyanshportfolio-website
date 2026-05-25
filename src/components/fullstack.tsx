import { motion } from "framer-motion";

const layers = [
  {
    title: "Frontend",
    desc: "The interface users see and interact with — responsive, accessible, and performant.",
    items: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    desc: "The engine powering logic, APIs, and data flow behind the scenes.",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    desc: "Persistent storage designed for speed, scale, and reliable data retrieval.",
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: "DevOps",
    desc: "Shipping, hosting, and maintaining applications with modern tooling.",
    items: ["Git", "GitHub", "Netlify"],
  },
];

export function FullStack() {
  return (
    <section id="fullstack" className="mx-auto max-w-5xl px-6 py-16 sm:py-24 border-t border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Overview</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Full Stack <span className="italic text-brand">Development</span>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              Building an application is like constructing a building — every layer has a purpose.
              From the visible interface down to the database, each piece must work in harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-5 hover:border-brand/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand font-display text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg text-foreground">{layer.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{layer.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
