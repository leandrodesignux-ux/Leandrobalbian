import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultoriaHero } from "@/components/sections/ConsultoriaHero";
import { ConsultoriaSection01 } from "@/components/sections/ConsultoriaSection01";
import { ConsultoriaSection02 } from "@/components/sections/ConsultoriaSection02";
import { ConsultoriaWhy } from "@/components/sections/ConsultoriaWhy";
import { ConsultoriaFAQ } from "@/components/sections/ConsultoriaFAQ";
import { ConsultoriaCTA } from "@/components/sections/ConsultoriaCTA";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Diagnóstico de Producto",
  description:
    "Diagnóstico causal para founders y Product Leads de SaaS LATAM. Encontrá por qué tu producto pierde conversión antes de invertir en un rediseño.",
  path: "/servicios/consultoria-ux",
  image: "/diagnostico-de-producto.png",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diagnóstico de Producto",
  provider: {
    "@type": "Person",
    name: "Leandro Balbian",
    url: "https://leandrobalbian.com",
  },
  description:
    "Diagnóstico causal para founders y Product Leads de SaaS LATAM. Encontrá por qué tu producto pierde conversión antes de invertir en un rediseño.",
  areaServed: {
    "@type": "Place",
    name: "Latinoamérica",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Founders y Product Leads de SaaS LATAM",
  },
};

export default function ConsultoriaUXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ConsultoriaHero />
        <ConsultoriaSection01 />
        <ConsultoriaSection02 />
        <ConsultoriaWhy />
        <ConsultoriaFAQ />
        <ConsultoriaCTA />
      </main>
      <Footer />
    </>
  );
}
