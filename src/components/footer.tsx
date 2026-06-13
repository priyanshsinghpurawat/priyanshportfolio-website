import { Link } from "@tanstack/react-router";
import { ContactForm } from "./contact-ui";

export function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden mx-auto max-w-[1750px] px-6 sm:px-12 md:px-16 pt-16 sm:pt-20 pb-10 border-t border-border"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
      <h2
        id="contact-title"
        className="mt-3 font-display text-3xl sm:text-5xl md:text-6xl leading-tight break-words"
      >
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
            <li>
              <Link to="/" className="hover:text-foreground transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-foreground transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/writing" className="hover:text-foreground transition">
                Writing
              </Link>
            </li>
            <li>
              <a href="/#about" className="hover:text-foreground transition">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Elsewhere</p>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>
              <a
                href="https://github.com/priyanshsinghpurawat"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/priyansh-singh-purawat/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href="mailto:priyanshsinghpurawatji@gmail.com"
                className="hover:text-foreground transition"
              >
                Email
              </a>
            </li>
            <li>
              <a href="tel:+919460177215" className="hover:text-foreground transition">
                +91 94601 77215
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brand mb-3">Currently</p>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>
              <span className="text-foreground">Building:</span> Full-Stack Web Products
            </li>
            <li>
              <span className="text-foreground">Learning:</span> Advanced React & Node.js
              Architecture
            </li>
            <li>
              <span className="text-foreground">Degree:</span> BCA Student
            </li>
            <li>
              <span className="text-foreground">Based in:</span> Jaipur, IN
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Priyansh Singh Purawat. Handcrafted with React & Vite.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-brand transition-colors flex items-center gap-1 group cursor-pointer"
        >
          back_to_top <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
        </button>
      </div>

      {/* Decorative footer glow */}
      <div className="absolute bottom-0 right-0 -z-10 size-80 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
    </footer>
  );
}
