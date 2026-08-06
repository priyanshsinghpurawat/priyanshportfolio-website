import { useState } from "react";
import { Mail, Copy, Check, Phone, ArrowUpRight, Sparkles } from "lucide-react";

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const email = "priyanshsinghpurawatji@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-10 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 hover:border-brand/40 transition-all shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-mono text-brand font-medium mb-3">
            <Sparkles className="size-3.5" />
            <span>Fast response within 24 hours</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
            Get in touch directly
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Open for Full Stack, Backend, or Software Engineering roles.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${email}?subject=Inquiry%20regarding%20Full%20Stack%20Role`}
            className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-5 py-3 text-sm font-mono font-medium hover:opacity-90 transition shadow-md"
          >
            <Mail className="size-4 text-brand" /> Send Email
            <ArrowUpRight className="size-4" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/80 px-4 py-3 text-sm font-mono text-foreground hover:bg-accent transition"
          >
            {copied ? (
              <>
                <Check className="size-4 text-emerald-500" /> Copied!
              </>
            ) : (
              <>
                <Copy className="size-4 text-muted-foreground" /> Copy Email
              </>
            )}
          </button>

          <a
            href="tel:+919460177215"
            className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/80 px-4 py-3 text-sm font-mono text-foreground hover:bg-accent transition"
          >
            <Phone className="size-4 text-muted-foreground" /> Call
          </a>
        </div>
      </div>
    </div>
  );
}
