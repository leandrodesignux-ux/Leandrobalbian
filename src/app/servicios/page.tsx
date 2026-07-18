import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
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
        <CTA />
      </main>
      <Footer />
    </>
  );
}
