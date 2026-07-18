import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ServicesCTA } from "@/components/sections/ServicesCTA";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services } from "@/components/sections/Services";
import { ServiceTabs } from "@/components/sections/ServiceTabs";

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
        <section className="border-y border-border bg-bg py-10 md:py-14">
          <Container>
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-secondary">
              — Explorá por servicio
            </p>
            <ServiceTabs current="" />
          </Container>
        </section>
        <Services />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
