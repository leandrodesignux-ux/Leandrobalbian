import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UxWritingHero } from "@/components/sections/UxWritingHero";
import { UxWritingSection01 } from "@/components/sections/UxWritingSection01";
import { UxWritingSection02 } from "@/components/sections/UxWritingSection02";
import { UxWritingWhy } from "@/components/sections/UxWritingWhy";
import { UxWritingFAQ } from "@/components/sections/UxWritingFAQ";
import { UxWritingCTA } from "@/components/sections/UxWritingCTA";

export const metadata = {
  title: "UX Writing, Onboarding & E-learning — Leandro Balbian",
  description:
    "Traduzco funciones técnicas complejas en comunicación clara: interfaces, onboarding y cápsulas educativas para productos digitales.",
};

export default function UXWritingElearningPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <UxWritingHero />
        <UxWritingSection01 />
        <UxWritingSection02 />
        <UxWritingWhy />
        <UxWritingFAQ />
        <UxWritingCTA />
      </main>
      <Footer />
    </>
  );
}
