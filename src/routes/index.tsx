import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FullStack } from "@/components/fullstack";
import { About } from "@/components/about";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Experience } from "@/components/experience";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import ogImage from "@/assets/og-image.jpg";

const SITE_URL = "https://id-preview--3218ca56-d2fc-4821-99e5-23d5de4d23e2.lovable.app";
const OG_IMAGE = SITE_URL + ogImage;

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
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:card", content: "summary_large_image" },
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
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <FullStack />
        <About />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
