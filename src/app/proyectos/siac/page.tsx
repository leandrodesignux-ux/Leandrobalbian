import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { caseStudies } from "@/data/case-studies";
import { projectsList } from "@/data/projects-list";

export const metadata = {
  title: "SIAC — Leandro Balbian",
  description:
    "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
};

export default function SiacPage() {
  const study = caseStudies["siac"];
  const related = projectsList
    .filter((p) => p.id !== study.id && !p.isPlaceholder)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <CaseStudy study={study} related={related} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
