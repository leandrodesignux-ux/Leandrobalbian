import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { caseStudies } from "@/data/case-studies";
import { projectsList } from "@/data/projects-list";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CertifyX",
  description:
    "Sistema de gestión de certificaciones y competencias para empresas industriales chilenas.",
  path: "/proyectos/certifyx",
  type: "article",
});

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "CertifyX",
  headline: "CertifyX — Gestión de certificaciones y competencias industriales",
  description:
    "Sistema de gestión de certificaciones y competencias para empresas industriales chilenas.",
  url: "https://leandrobalbian.com/proyectos/certifyx",
  author: {
    "@type": "Person",
    name: "Leandro Balbian",
    url: "https://leandrobalbian.com",
  },
  genre: "Industrial / Compliance",
  keywords: "UX, UI, compliance, SENCE, certificaciones, industria chilena",
  inLanguage: "es-AR",
};

export default function CertifyxPage() {
  const study = caseStudies["certifyx"];
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
