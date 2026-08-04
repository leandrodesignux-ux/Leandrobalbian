import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { caseStudies } from "@/data/case-studies";
import { projectsList } from "@/data/projects-list";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "SIAC",
  description:
    "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
  path: "/proyectos/siac",
  type: "article",
});

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "SIAC",
  headline: "SIAC — Monitoreo de activos críticos en tiempo real",
  description:
    "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
  url: "https://leandrobalbian.com/proyectos/siac",
  author: {
    "@type": "Person",
    name: "Leandro Balbian",
    url: "https://leandrobalbian.com",
  },
  genre: "PropTech / Seguridad industrial / IoT",
  keywords: "UX, UI, monitoreo, IoT, PropTech, dashboard operativo",
  inLanguage: "es-AR",
};

export default function SiacPage() {
  const study = caseStudies["siac"];
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
