import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultoriaHero } from "@/components/sections/ConsultoriaHero";
import { ConsultoriaSection01 } from "@/components/sections/ConsultoriaSection01";
import { ConsultoriaSection02 } from "@/components/sections/ConsultoriaSection02";
import { ConsultoriaWhy } from "@/components/sections/ConsultoriaWhy";
import { ConsultoriaFAQ } from "@/components/sections/ConsultoriaFAQ";
import { ConsultoriaCTA } from "@/components/sections/ConsultoriaCTA";

export const metadata = {
  title: "Consultoría UX & Diagnóstico de Producto — Leandro Balbian",
  description:
    "Diagnóstico de producto especializado para founders y Product Leads. Entendé por qué tu plataforma pierde conversión antes de rediseñar nada.",
};

export default function ConsultoriaUXPage() {
  return (
    <>
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
