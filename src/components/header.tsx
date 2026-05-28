import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        <Link to="/" className="font-display text-xl tracking-tight shrink-0">
          priyansh<span className="text-brand">.</span>
        </Link>
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
          <a href="https://github.com/priyanshsinghpurawat" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition"><Github className="size-4" /></a>
          <a href="https://www.linkedin.com/in/priyansh-singh-purawat/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="size-4" /></a>
          <a href="mailto:priyanshsinghpurawatji@gmail.com" aria-label="Email" className="hover:text-foreground transition"><Mail className="size-4" /></a>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="sm:hidden inline-flex items-center justify-center size-8 rounded-md hover:bg-accent hover:text-foreground transition"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="font-display text-lg">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base text-foreground hover:bg-accent transition"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
