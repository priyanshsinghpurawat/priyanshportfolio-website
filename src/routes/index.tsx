import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FullStack } from "@/components/fullstack";
import { About } from "@/components/about";
import { Mern } from "@/components/mern";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

const SITE_URL = "https://id-preview--3218ca56-d2fc-4821-99e5-23d5de4d23e2.lovable.app";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a6097cd1-4090-43ca-a1cd-e12d7f26ac6c/id-preview-3a4b997b--3218ca56-d2fc-4821-99e5-23d5de4d23e2.lovable.app-1779691765487.png";

const TITLE = "Priyansh Singh Purawat — Full Stack Developer (MERN, React, Node.js)";
const DESCRIPTION =
  "Portfolio of Priyansh Singh Purawat — full-stack developer and BCA student at JECRC University, Jaipur. Building responsive web apps with React, Node.js, Express, MongoDB, and TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "Priyansh Singh, Priyansh Singh Purawat, full stack developer, MERN developer, React developer, Node.js, JECRC University, Jaipur developer, web developer portfolio" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Priyansh Singh Purawat",
          alternateName: "Priyansh Singh",
          url: SITE_URL,
          image: OG_IMAGE,
          jobTitle: "Full Stack Developer",
          description: DESCRIPTION,
          email: "mailto:priyanshsinghpurawatji@gmail.com",
          telephone: "+91-94601-77215",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "JECRC University",
            address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressCountry: "IN" },
          },
          knowsAbout: [
            "Full Stack Development",
            "MERN Stack",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TypeScript",
            "Tailwind CSS",
            "REST APIs",
            "JWT Authentication",
          ],
          sameAs: [
            "https://github.com/priyanshsinghpurawat",
            "https://www.linkedin.com/in/priyansh-singh-purawat/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Priyansh Singh Purawat — Full Stack Development",
          url: SITE_URL,
          areaServed: "Worldwide",
          serviceType: "Full Stack Web Development",
          provider: { "@type": "Person", name: "Priyansh Singh Purawat" },
        }),
      },
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
        <FullStack />
        <Mern />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
