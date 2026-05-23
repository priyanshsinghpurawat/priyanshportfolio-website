import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        <Link to="/" className="font-display text-xl tracking-tight shrink-0">
          priyansh<span className="text-brand">.</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#mern" className="hover:text-foreground transition">MERN</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#experience" className="hover:text-foreground transition">Work</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
          <a href="https://github.com/priyanshsinghpurawat" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition"><Github className="size-4" /></a>
          <a href="https://www.linkedin.com/in/priyansh-singh-purawat/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="size-4" /></a>
          <a href="mailto:priyanshsinghpurawatji@gmail.com" aria-label="Email" className="hover:text-foreground transition"><Mail className="size-4" /></a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
