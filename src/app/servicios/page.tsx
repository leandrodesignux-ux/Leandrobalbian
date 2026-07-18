import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesCTA } from "@/components/sections/ServicesCTA";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services } from "@/components/sections/Services";

export const metadata = {
  title: "Servicios — Leandro Balbian",
  description:
    "Metodología, herramientas e impacto. Diseño de plataformas operativas, gobernanza de IA y productos de compliance.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ServicesHero />
        <Services />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
