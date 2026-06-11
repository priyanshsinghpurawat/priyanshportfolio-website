import { Link } from "@tanstack/react-router";
import { ContactForm } from "./contact-form";

export function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-5xl px-6 pt-16 sm:pt-20 pb-10 border-t border-border"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
      <h2 id="contact-title" className="mt-3 font-display text-3xl sm:text-5xl md:text-6xl leading-tight break-words">
        Got an idea? <br />
        <a
          href="mailto:priyanshsinghpurawatji@gmail.com"
          className="italic text-brand underline decoration-brand/30 underline-offset-8 hover:decoration-brand transition"
        >
          let's talk →
        </a>
      </h2>

      <ContactForm />

      <div className="mt-16 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Navigate</p>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li><Link to="/projects" className="hover:text-foreground transition">Projects</Link></li>
            <li><Link to="/writing" className="hover:text-foreground transition">Writing</Link></li>
            <li><a href="/#about" className="hover:text-foreground transition">About</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Elsewhere</p>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><a href="https://github.com/priyanshsinghpurawat" target="_blank" rel="noreferrer" className="hover:text-foreground transition">GitHub ↗</a></li>
            <li><a href="https://www.linkedin.com/in/priyansh-singh-purawat/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">LinkedIn ↗</a></li>
            <li><a href="mailto:priyanshsinghpurawatji@gmail.com" className="hover:text-foreground transition">Email</a></li>
            <li><a href="tel:+919460177215" className="hover:text-foreground transition">+91 94601 77215</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Currently</p>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><span className="text-foreground">Building:</span> MERN e-commerce</li>
            <li><span className="text-foreground">Reading:</span> Designing Data-Intensive Apps</li>
            <li><span className="text-foreground">Learning:</span> System design fundamentals</li>
            <li><span className="text-foreground">Based in:</span> Jaipur, IN</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Priyansh Singh Purawat — built with React & TanStack.</p>
        <p className="font-mono">v2.0</p>
      </div>
    </footer>
  );
}
