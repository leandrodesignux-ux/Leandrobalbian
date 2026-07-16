import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { caseStudies } from "@/data/case-studies";
import { projectsList } from "@/data/projects-list";

export const metadata = {
  title: "Sentinel OS — Leandro Balbian",
  description:
    "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
};

export default function SentinelOsPage() {
  const study = caseStudies["sentinel-os"];
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
