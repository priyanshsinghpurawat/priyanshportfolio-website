import { Link } from "@tanstack/react-router";
import { ContactForm } from "./contact-ui";

export function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32 pb-10 border-t border-border/60"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        Contact
      </p>
      <h2
        id="contact-title"
        className="mt-2 font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-tight"
        style={{ letterSpacing: "-0.02em" }}
      >
        Hiring for a Full Stack role?
        <br />
        <a
          href="mailto:priyanshsinghpurawatji@gmail.com"
          className="text-muted-foreground underline decoration-border underline-offset-8 hover:text-foreground hover:decoration-foreground transition"
        >
          Let's talk →
        </a>
      </h2>

      <ContactForm />

      <div className="mt-20 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Navigate
          </p>
          <ul className="space-y-1.5 text-muted-foreground font-mono text-xs">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li><Link to="/projects" className="hover:text-foreground transition">Projects</Link></li>
            <li><Link to="/writing" className="hover:text-foreground transition">Writing</Link></li>
            <li><a href="/#about" className="hover:text-foreground transition">About</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Elsewhere
          </p>
          <ul className="space-y-1.5 text-muted-foreground font-mono text-xs">
            <li>
              <a href="https://github.com/priyanshsinghpurawat" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/priyansh-singh-purawat/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href="mailto:priyanshsinghpurawatji@gmail.com" className="hover:text-foreground transition">
                priyanshsinghpurawatji@gmail.com
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
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Currently
          </p>
          <ul className="space-y-1.5 text-muted-foreground font-mono text-xs">
            <li><span className="text-foreground">Building</span> · MERN web products</li>
            <li><span className="text-foreground">Open to</span> · Full Stack roles, remote or relocation</li>
            <li><span className="text-foreground">Based in</span> · Jaipur, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <p>© {new Date().getFullYear()} Priyansh Singh Purawat</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="hover:text-foreground transition-colors"
        >
          back to top ↑
        </button>
      </div>
    </footer>
  );
}
