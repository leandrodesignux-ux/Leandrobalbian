import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { ServicesCTA } from "@/components/sections/ServicesCTA";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services } from "@/components/sections/Services";
import { ServiceTabs } from "@/components/sections/ServiceTabs";
import { PalancasList } from "@/components/sections/PalancaTags";
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

        {/* ¿A quién ayudo? + 3 Palancas de Negocio */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left column — audience */}
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  — ¿A quién ayudo?
                </p>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                  Equipos con{" "}
                  <em className="italic text-accent">fricción</em> en su
                  plataforma.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
                  Trabajo con equipos de producto que tienen una plataforma en
                  producción, pero fricción invisible que les cuesta conversión,
                  retención o velocidad de desarrollo. Lo hice en SaaS, PropTech,
                  FinTech y Enterprise Software — la industria cambia, la causa
                  se busca igual.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                    SaaS
                  </span>
                  <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                    PropTech
                  </span>
                  <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                    FinTech
                  </span>
                  <span className="rounded-full border border-border bg-elevated/40 px-3 py-1 text-xs font-medium text-secondary">
                    Enterprise Software
                  </span>
                </div>
              </div>

              {/* Right column — leverage panel */}
              <div className="rounded-2xl border border-border bg-elevated/20 p-6 md:p-8">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  — 3 Palancas de Negocio
                </p>
                <h3 className="text-balance text-xl font-bold tracking-tight text-primary sm:text-2xl">
                  Todo lo que hago responde a una de{" "}
                  <em className="italic text-accent">tres preguntas</em>.
                </h3>
                <PalancasList className="mt-6" />
              </div>
            </div>
          </Container>
        </section>

        <Services />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
