import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Proyectos } from "@/components/sections/Proyectos";
import { Trayectoria } from "@/components/sections/Trayectoria";
import { Services } from "@/components/sections/Services";
import { Proceso } from "@/components/sections/Proceso";
import { Testimonios } from "@/components/sections/Testimonios";
import { FAQ } from "@/components/sections/FAQ";
import { Contacto } from "@/components/sections/Contacto";
import { CTA } from "@/components/sections/CTA";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Senior Product Designer",
  description:
    "Diseño plataformas complejas para que decisiones críticas tomen segundos, no minutos.",
  path: "/",
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://leandrobalbian.com/#person",
      name: "Leandro Balbian",
      jobTitle: "Senior Product Designer",
      url: "https://leandrobalbian.com",
      sameAs: [
        "https://www.linkedin.com/in/leandrobalbian",
        "https://github.com/leandrodesignux-ux",
      ],
      description:
        "Diseñador de producto con más de 7 años de experiencia transformando plataformas complejas en experiencias claras para SaaS, PropTech, FinTech y Enterprise Software.",
      knowsAbout: [
        "Diseño UX/UI",
        "Product Design",
        "Design Engineering",
        "Sistemas de diseño",
        "Arquitectura de información",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://leandrobalbian.com/#website",
      url: "https://leandrobalbian.com",
      name: "Leandro Balbian",
      publisher: { "@id": "https://leandrobalbian.com/#person" },
      inLanguage: "es-AR",
    },
    {
      "@type": "WebPage",
      "@id": "https://leandrobalbian.com/#webpage",
      url: "https://leandrobalbian.com",
      name: "Leandro Balbian — Senior Product Designer",
      isPartOf: { "@id": "https://leandrobalbian.com/#website" },
      about: { "@id": "https://leandrobalbian.com/#person" },
      inLanguage: "es-AR",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(homeJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Proyectos />
        <Services />
        <Trayectoria />
        <Proceso />
        <Testimonios />
        <FAQ />
        <Contacto />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
