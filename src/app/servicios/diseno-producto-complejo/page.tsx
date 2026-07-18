import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisenoProductoHero } from "@/components/sections/DisenoProductoHero";
import { DisenoProductoSection01 } from "@/components/sections/DisenoProductoSection01";
import { DisenoProductoSection02 } from "@/components/sections/DisenoProductoSection02";
import { DisenoProductoWhy } from "@/components/sections/DisenoProductoWhy";
import { DisenoProductoFAQ } from "@/components/sections/DisenoProductoFAQ";
import { DisenoProductoCTA } from "@/components/sections/DisenoProductoCTA";

export const metadata = {
  title: "Diseño End-to-End — Leandro Balbian",
  description:
    "Diseño end-to-end de plataformas operativas densas. Arquitectura de información con datos reales, sistemas de diseño documentados y prototipos funcionales para eliminar la fricción que genera churn.",
};

export default function DisenoProductoComplejoPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <DisenoProductoHero />
        <DisenoProductoSection01 />
        <DisenoProductoSection02 />
        <DisenoProductoWhy />
        <DisenoProductoFAQ />
        <DisenoProductoCTA />
      </main>
      <Footer />
    </>
  );
}
