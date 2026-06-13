import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { posts } from "@/data/writing";

import { SITE_URL } from "@/lib/constants";
const TITLE = "Writing — Priyansh Singh Purawat";
const DESCRIPTION =
  "Notes on full-stack development, the MERN journey, and lessons learned from shipping side projects as a BCA student.";

export const Route = createFileRoute("/writing/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/writing" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/writing" }],
  }),
  component: WritingPage,
});

function WritingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <motion.main
        className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-20"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Writing</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight">
            Notes & <span className="italic text-brand">essays</span>.
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Short pieces on what I'm learning, building, and rethinking.
          </p>
        </Reveal>

        <ul className="mt-12 divide-y divide-border">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <li>
                <Link
                  to="/writing/$slug"
                  params={{ slug: post.slug }}
                  className="group block py-6 hover:bg-accent/30 -mx-3 px-3 rounded-lg transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {post.readingTime}
                      </p>
                      <h2 className="mt-2 font-display text-xl group-hover:text-brand transition">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </motion.main>
      <Footer />
    </div>
  );
}
