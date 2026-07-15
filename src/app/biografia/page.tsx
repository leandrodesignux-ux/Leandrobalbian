import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BiografiaSection } from "@/components/sections/Biografia";

export const metadata = {
  title: "Biografía — Leandro Balbian",
  description:
    "Diseñador UX/UI Senior con más de 7 años de experiencia transformando plataformas complejas en experiencias claras.",
};

export default function BiografiaPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BiografiaSection />
      </main>
      <Footer />
    </>
  );
}
