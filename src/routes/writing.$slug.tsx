import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { getPost } from "@/data/writing";

import { SITE_URL } from "@/lib/constants";

export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Post not found" }] };
    const title = `${p.title} — Priyansh Singh Purawat`;
    const url = `${SITE_URL}/writing/${p.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: p.date },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            url,
            author: { "@type": "Person", name: "Priyansh Singh Purawat" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl">Post not found</h1>
        <Link
          to="/writing"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-accent transition"
        >
          <ArrowLeft className="size-4" /> Back to writing
        </Link>
      </main>
      <Footer />
    </div>
  ),
  component: PostDetail,
});

function PostDetail() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10 sm:py-16">
          <Link
            to="/writing"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand transition mb-8"
          >
            <ArrowLeft className="size-4" /> All writing
          </Link>

          <Reveal>
            <p className="text-xs font-mono uppercase tracking-wider text-brand">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </article>
      </motion.main>
      <Footer />
    </div>
  );
}
