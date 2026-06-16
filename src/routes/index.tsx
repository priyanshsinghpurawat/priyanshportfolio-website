import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { FeaturedCaseStudy } from "@/components/featured-case-study";
import { SkillsGrid } from "@/components/skills-grid";
import { About } from "@/components/about";
import { WorkExperience } from "@/components/work-experience";
import { OtherWork } from "@/components/other-work";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import ogImage from "@/assets/og-image.jpg";

import { SITE_URL, AUTHOR_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";
const OG_IMAGE = SITE_URL + ogImage;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Priyansh Singh, Priyansh Singh Purawat, full stack developer, MERN developer, React developer, Node.js, Express, MongoDB, Jaipur developer, web developer portfolio",
      },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: AUTHOR_NAME,
          alternateName: "Priyansh Singh",
          url: SITE_URL,
          image: OG_IMAGE,
          jobTitle: "Full Stack Developer",
          description: SITE_DESCRIPTION,
          email: "mailto:priyanshsinghpurawatji@gmail.com",
          telephone: "+91-94601-77215",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
          knowsAbout: [
            "Full Stack Development",
            "MERN Stack",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "JWT Authentication",
            "Role-Based Access Control",
            "Redis",
            "Razorpay",
            "Tailwind CSS",
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

import { Helmet } from "react-helmet-async";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={SITE_URL + "/"} />
      </Helmet>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-foreground focus:text-background focus:px-3 focus:py-2 focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <motion.main
        id="main"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <FeaturedCaseStudy />
        <SkillsGrid />
        <About />
        <WorkExperience />
        <OtherWork />
      </motion.main>
      <Footer />
    </div>
  );
}
