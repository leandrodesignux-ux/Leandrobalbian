import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { caseStudies } from "@/data/case-studies";
import { projectsList } from "@/data/projects-list";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sentinel OS",
  description:
    "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
  path: "/proyectos/sentinel-os",
  type: "article",
});

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Sentinel OS",
  headline: "Sentinel OS — Supervisión por excepción para flotas de IA",
  description:
    "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
  url: "https://leandrobalbian.com/proyectos/sentinel-os",
  author: {
    "@type": "Person",
    name: "Leandro Balbian",
    url: "https://leandrobalbian.com",
  },
  genre: "AI Governance",
  keywords: "UX, UI, IA, agentes autónomos, AI Governance, human-in-the-loop",
  inLanguage: "es-AR",
};

export default function SentinelOsPage() {
  const study = caseStudies["sentinel-os"];
  const related = projectsList
    .filter((p) => p.id !== study.id && !p.isPlaceholder)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(caseStudyJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <CaseStudy study={study} related={related} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
