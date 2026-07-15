import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsContent } from "@/components/sections/ProjectsContent";

export const metadata = {
  title: "Proyectos — Leandro Balbian",
  description:
    "Plataformas en producción, no mockups. Casos de diseño UX/UI para sistemas complejos.",
};

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ProjectsContent />
      </main>
      <Footer />
    </>
  );
}
