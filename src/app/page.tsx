import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Proyectos } from "@/components/sections/Proyectos";
import { Trayectoria } from "@/components/sections/Trayectoria";
import { LoQueResuelvo } from "@/components/sections/LoQueResuelvo";
import { Proceso } from "@/components/sections/Proceso";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Proyectos />
        <Trayectoria />
        <LoQueResuelvo />
        <Proceso />
      </main>
      <Footer />
    </>
  );
}
