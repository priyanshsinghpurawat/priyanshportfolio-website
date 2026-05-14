import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyansh Singh — Full Stack Developer" },
      { name: "description", content: "Portfolio of Priyansh Singh Purawat — full-stack developer and BCA student from Jaipur building modern web applications with React, Node, and JavaScript." },
      { property: "og:title", content: "Priyansh Singh — Full Stack Developer" },
      { property: "og:description", content: "Full-stack developer crafting web things from Jaipur." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
