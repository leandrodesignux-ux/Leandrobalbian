import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisenoIAHero } from "@/components/sections/DisenoIAHero";
import { DisenoIASection01 } from "@/components/sections/DisenoIASection01";
import { DisenoIASection02 } from "@/components/sections/DisenoIASection02";
import { DisenoIAWhy } from "@/components/sections/DisenoIAWhy";
import { DisenoIASection03 } from "@/components/sections/DisenoIASection03";
import { DisenoIAFAQ } from "@/components/sections/DisenoIAFAQ";
import { DisenoIACTA } from "@/components/sections/DisenoIACTA";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Design Engineering",
  description:
    "Prototipado funcional en código real y diseño de capa de confianza para sistemas de IA. Velocidad de desarrollo sin riesgo, con track record de +25% de eficiencia.",
  path: "/servicios/diseno-ia",
  image: "/Design Engineering.png",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Design Engineering",
  provider: {
    "@type": "Person",
    name: "Leandro Balbian",
    url: "https://leandrobalbian.com",
  },
  description:
    "Prototipado funcional en código real y diseño de capa de confianza para sistemas de IA. Velocidad de desarrollo sin riesgo, con track record de +25% de eficiencia.",
  areaServed: {
    "@type": "Place",
    name: "Latinoamérica",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Equipos de producto con sistemas de IA",
  },
};

export default function DisenoIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <DisenoIAHero />
        <DisenoIASection01 />
        <DisenoIASection02 />
        <DisenoIASection03 />
        <DisenoIAWhy />
        <DisenoIAFAQ />
        <DisenoIACTA />
      </main>
      <Footer />
    </>
  );
}
