import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Mern } from "@/components/mern";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Mern />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
