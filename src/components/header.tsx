import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";

type NavLink =
  | { kind: "route"; to: "/" | "/projects" | "/writing"; label: string }
  | { kind: "hash"; href: string; label: string }
  | { kind: "external"; href: string; label: string; download?: boolean };

const navLinks: NavLink[] = [
  { kind: "route", to: "/projects", label: "Projects" },
  { kind: "route", to: "/writing", label: "Writing" },
  { kind: "hash", href: "/#about", label: "About" },
  { kind: "external", href: "/resume.pdf", label: "Resume", download: true },
  { kind: "hash", href: "/#contact", label: "Contact" },
];

function NavItem({ link, onClick, className }: { link: NavLink; onClick?: () => void; className?: string }) {
  if (link.kind === "route") {
    return (
      <Link
        to={link.to}
        onClick={onClick}
        className={className}
        activeProps={{ className: "text-foreground font-medium" }}
      >
        {link.label}
      </Link>
    );
  }
  if (link.kind === "external") {
    return (
      <a href={link.href} onClick={onClick} className={className} target="_blank" rel="noopener noreferrer" download={link.download}>
        {link.label}
      </a>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-center pt-4 sm:pt-6 pb-4 px-4 pointer-events-none transition-transform">
      <div className="pointer-events-auto flex items-center justify-between bg-card/75 backdrop-blur-xl border border-border/50 rounded-full px-4 sm:px-5 h-14 w-full max-w-[1750px] shadow-xl shadow-black/5 dark:shadow-black/20 ring-1 ring-white/10 dark:ring-white/5">
        
        {/* Brand Logo */}
        <Link to="/" className="font-display text-lg tracking-tight shrink-0 flex items-center gap-2 hover:opacity-80 transition">
          <span className="size-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_var(--color-brand)]" />
          priyansh<span className="text-brand">.</span>
        </Link>
        
        {/* Desktop Links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {navLinks.map((l, i) => (
            <NavItem
              key={i}
              link={l}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200"
            />
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div className="hidden sm:flex items-center gap-1 mr-1 sm:mr-2 sm:border-r border-border/50 sm:pr-2">
            <a href="https://github.com/priyanshsinghpurawat" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"><Github className="size-[1.125rem]" /></a>
            <a href="https://www.linkedin.com/in/priyansh-singh-purawat/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"><Linkedin className="size-[1.125rem]" /></a>
          </div>
          
          <ThemeToggle />
          
          {/* Mobile Menu Drawer */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-muted-foreground hover:bg-muted/60 hover:text-foreground transition ml-0.5"
              >
                <Menu className="size-[1.125rem]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card/95 backdrop-blur-2xl border-l-border/50">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="font-display text-xl flex items-center gap-2">
                  <span className="size-2 rounded-full bg-brand" />
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navLinks.map((l, i) => (
                  <NavItem
                    key={i}
                    link={l}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
