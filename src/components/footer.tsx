export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
      <h2 className="mt-3 font-display text-3xl sm:text-5xl md:text-6xl leading-tight break-words">
        Got an idea? <br />
        <a
          href="mailto:priyanshsinghpurawatji@gmail.com"
          className="italic text-brand underline decoration-brand/30 underline-offset-8 hover:decoration-brand transition"
        >
          let's talk →
        </a>
      </h2>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Priyansh Singh Purawat</p>
        <div className="flex gap-6">
          <a href="https://github.com/priyanshsinghpurawat" target="_blank" rel="noreferrer" className="hover:text-foreground transition">GitHub</a>
          <a href="https://www.linkedin.com/in/priyansh-singh-purawat/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">LinkedIn</a>
          <a href="tel:+919460177215" className="hover:text-foreground transition">+91 94601 77215</a>
        </div>
      </div>
    </footer>
  );
}
