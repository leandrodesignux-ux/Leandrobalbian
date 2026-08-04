import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsContent } from "@/components/sections/ProjectsContent";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Proyectos",
  description:
    "Plataformas en producción, no mockups. Casos de diseño UX/UI para sistemas complejos.",
  path: "/proyectos",
});

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Proyectos — Leandro Balbian",
  description:
    "Plataformas en producción, no mockups. Casos de diseño UX/UI para sistemas complejos.",
  url: "https://leandrobalbian.com/proyectos",
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "SIAC",
      url: "https://leandrobalbian.com/proyectos/siac",
    },
    {
      "@type": "CreativeWork",
      name: "Sentinel OS",
      url: "https://leandrobalbian.com/proyectos/sentinel-os",
    },
    {
      "@type": "CreativeWork",
      name: "CertifyX",
      url: "https://leandrobalbian.com/proyectos/certifyx",
    },
  ],
};

export default function ProyectosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(projectsJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ProjectsContent />
      </main>
      <Footer />
    </>
  );
}
