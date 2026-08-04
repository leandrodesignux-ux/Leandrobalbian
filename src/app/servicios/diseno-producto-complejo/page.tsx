import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisenoProductoHero } from "@/components/sections/DisenoProductoHero";
import { DisenoProductoSection01 } from "@/components/sections/DisenoProductoSection01";
import { DisenoProductoSection02 } from "@/components/sections/DisenoProductoSection02";
import { DisenoProductoWhy } from "@/components/sections/DisenoProductoWhy";
import { DisenoProductoFAQ } from "@/components/sections/DisenoProductoFAQ";
import { DisenoProductoCTA } from "@/components/sections/DisenoProductoCTA";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Diseño End-to-End",
  description:
    "Diseño end-to-end de plataformas operativas densas. Arquitectura de información con datos reales, sistemas de diseño documentados y prototipos funcionales para eliminar la fricción que genera churn.",
  path: "/servicios/diseno-producto-complejo",
  image: "/END TO END.png",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño End-to-End",
  provider: {
    "@type": "Person",
    name: "Leandro Balbian",
    url: "https://leandrobalbian.com",
  },
  description:
    "Diseño end-to-end de plataformas operativas densas. Arquitectura de información con datos reales, sistemas de diseño documentados y prototipos funcionales para eliminar la fricción que genera churn.",
  areaServed: {
    "@type": "Place",
    name: "Latinoamérica",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Founders y CPO de SaaS con plataformas densas",
  },
};

export default function DisenoProductoComplejoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <DisenoProductoHero />
        <DisenoProductoSection01 />
        <DisenoProductoSection02 />
        <DisenoProductoWhy />
        <DisenoProductoFAQ />
        <DisenoProductoCTA />
      </main>
      <Footer />
    </>
  );
}
