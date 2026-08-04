import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserFlowsHero } from "@/components/sections/UserFlowsHero";
import { UserFlowsSection01 } from "@/components/sections/UserFlowsSection01";
import { UserFlowsSection02 } from "@/components/sections/UserFlowsSection02";
import { UserFlowsWhy } from "@/components/sections/UserFlowsWhy";
import { UserFlowsFAQ } from "@/components/sections/UserFlowsFAQ";
import { UserFlowsCTA } from "@/components/sections/UserFlowsCTA";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "User Flows & Onboarding",
  description:
    "Diseño el flujo y el lenguaje que convierten un registro en un usuario activo — onboarding, activación y cápsulas educativas para productos digitales.",
  path: "/servicios/ux-writing-elearning",
  image: "/SERVICIOS.png",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "User Flows & Onboarding",
  provider: {
    "@type": "Person",
    name: "Leandro Balbian",
    url: "https://leandrobalbian.com",
  },
  description:
    "Diseño el flujo y el lenguaje que convierten un registro en un usuario activo — onboarding, activación y cápsulas educativas para productos digitales.",
  areaServed: {
    "@type": "Place",
    name: "Latinoamérica",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Equipos de producto digitales",
  },
};

export default function UXWritingElearningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <UserFlowsHero />
        <UserFlowsSection01 />
        <UserFlowsSection02 />
        <UserFlowsWhy />
        <UserFlowsFAQ />
        <UserFlowsCTA />
      </main>
      <Footer />
    </>
  );
}
