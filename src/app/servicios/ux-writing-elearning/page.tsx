import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ServiceTabs } from "@/components/sections/ServiceTabs";

export const metadata = {
  title: "UX Writing & E-learning — Leandro Balbian",
  description:
    "Próximamente: contenido orientado a usuario, video-cápsulas educativas y narrativa visual para productos digitales.",
};

export default function UXWritingElearningPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="flex flex-1 items-center justify-center py-24">
          <Container className="text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              Próximamente
            </p>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
              UX Writing & E-learning
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-secondary">
              Estamos preparando el contenido de este servicio. Mientras tanto,
              podés explorar los otros servicios o proyectos.
            </p>
            <div className="mt-12">
              <ServiceTabs current="ux-writing-elearning" />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
