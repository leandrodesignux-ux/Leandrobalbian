import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisenoIAHero } from "@/components/sections/DisenoIAHero";
import { DisenoIASection01 } from "@/components/sections/DisenoIASection01";
import { DisenoIASection02 } from "@/components/sections/DisenoIASection02";
import { DisenoIAWhy } from "@/components/sections/DisenoIAWhy";
import { DisenoIASection03 } from "@/components/sections/DisenoIASection03";
import { DisenoIAFAQ } from "@/components/sections/DisenoIAFAQ";
import { DisenoIACTA } from "@/components/sections/DisenoIACTA";

export const metadata = {
  title: "Design Engineering — Leandro Balbian",
  description:
    "Prototipado funcional en código real y diseño de capa de confianza para sistemas de IA. Velocidad de desarrollo sin riesgo, con track record de +25% de eficiencia.",
};

export default function DisenoIAPage() {
  return (
    <>
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
