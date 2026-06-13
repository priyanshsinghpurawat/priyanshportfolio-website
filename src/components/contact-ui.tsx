import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const endpoint = (import.meta.env.VITE_CONTACT_API_URL as string) || "http://localhost:5000/api/contact";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("ok");
        form.reset();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Network error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:max-w-xl">
      {/* bot protection check */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5">
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Name</span>
          <input
            name="name"
            required
            maxLength={100}
            className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</span>
          <input
            type="email"
            name="email"
            required
            maxLength={255}
            className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
            placeholder="you@email.com"
          />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Message</span>
        <textarea
          name="message"
          required
          maxLength={2000}
          rows={5}
          className="rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand resize-y"
          placeholder="Tell me about your project, idea, or role…"
        />
      </label>

      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="size-4" /> Send message
            </>
          )}
        </button>
        {status === "ok" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-brand">
            <CheckCircle2 className="size-4" /> Thanks — I'll get back to you soon.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-destructive">{error ?? "Failed to send."}</span>
        )}
      </div>
    </form>
  );
}
