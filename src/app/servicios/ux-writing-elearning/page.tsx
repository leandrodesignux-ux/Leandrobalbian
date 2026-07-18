import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserFlowsHero } from "@/components/sections/UserFlowsHero";
import { UserFlowsSection01 } from "@/components/sections/UserFlowsSection01";
import { UserFlowsSection02 } from "@/components/sections/UserFlowsSection02";
import { UserFlowsWhy } from "@/components/sections/UserFlowsWhy";
import { UserFlowsFAQ } from "@/components/sections/UserFlowsFAQ";
import { UserFlowsCTA } from "@/components/sections/UserFlowsCTA";

export const metadata = {
  title: "User Flows & Onboarding — Leandro Balbian",
  description:
    "Diseño el flujo y el lenguaje que convierten un registro en un usuario activo — onboarding, activación y cápsulas educativas para productos digitales.",
};

export default function UXWritingElearningPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <UserFlowsHero />
        <UserFlowsSection01 />
        <UserFlowsSection02 />
        <UserFlowsWhy />
        <UserFlowsFAQ />
        <UserFlowsCTA />
      </main>
      <Footer />
    </>
  );
}
