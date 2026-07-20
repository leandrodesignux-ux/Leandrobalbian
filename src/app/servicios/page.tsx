import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { ServicesCTA } from "@/components/sections/ServicesCTA";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services } from "@/components/sections/Services";
import { ServiceTabs } from "@/components/sections/ServiceTabs";
import { PalancasStrip } from "@/components/sections/PalancaTags";
import { marqueeItems } from "@/data/services";

export const metadata = {
  title: "Servicios — Leandro Balbian",
  description:
    "Diagnóstico de producto, diseño end-to-end, design engineering y user flows para founders y CPO de SaaS LATAM.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ServicesHero />

        {/* Marquee */}
        <Marquee items={marqueeItems} />

        {/* Explorá por servicio */}
        <section className="border-b border-border bg-bg py-10 md:py-14">
          <Container>
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-secondary">
              — Explorá por servicio
            </p>
            <ServiceTabs current="" />
          </Container>
        </section>

        {/* ¿A quién ayudo? */}
        <section className="border-t border-border py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                — ¿A quién ayudo?
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                CPO, CTO o Founder de{" "}
                <em className="font-serif not-italic text-accent">
                  SaaS LATAM
                </em>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
                Trabajo con startups en etapa growth (Serie A-B) que tienen
                equipo de producto o diseño pero necesitan dirección estratégica
                basada en causa, no en corazonada. Mi foco: plataformas
                operativas, gobernanza de IA, compliance, dashboards y sistemas
                de monitoreo.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                  SaaS
                </span>
                <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                  LATAM
                </span>
                <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                  Growth Stage
                </span>
                <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                  Serie A-B
                </span>
                <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                  Equipos 10-50
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 Palancas de Negocio */}
        <section className="border-y border-border bg-elevated/10 py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                — 3 Palancas de Negocio
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                Todo lo que hago responde a una de{" "}
                <em className="font-serif not-italic text-accent">
                  tres preguntas
                </em>
              </h2>
              <p className="mt-5 mb-10 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
                No importa el proyecto. Siempre vuelvo a estas tres palancas.
                Si no mueve ninguna, no deberíamos estar haciéndolo.
              </p>
            </div>
            <PalancasStrip />
          </Container>
        </section>

        <Services />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
