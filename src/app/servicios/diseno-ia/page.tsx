import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisenoIAHero } from "@/components/sections/DisenoIAHero";
import { DisenoIASection01 } from "@/components/sections/DisenoIASection01";
import { DisenoIASection02 } from "@/components/sections/DisenoIASection02";
import { DisenoIAWhy } from "@/components/sections/DisenoIAWhy";
import { DisenoIAFAQ } from "@/components/sections/DisenoIAFAQ";
import { DisenoIACTA } from "@/components/sections/DisenoIACTA";

export const metadata = {
  title: "Diseño con IA — Prototipado Funcional — Leandro Balbian",
  description:
    "Prototipo con IA generativa en código real. Valida flujos complejos antes de que ingeniería invierta una sola hora en construirlos.",
};

export default function DisenoIAPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <DisenoIAHero />
        <DisenoIASection01 />
        <DisenoIASection02 />
        <DisenoIAWhy />
        <DisenoIAFAQ />
        <DisenoIACTA />
      </main>
      <Footer />
    </>
  );
}
