"use client";

import { Container } from "@/components/ui/Container";
import { QualifyingForm } from "./QualifyingForm";
import { consultoriaQuestions } from "@/lib/qualifying-questions";

export function ConsultoriaCTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container>
        <QualifyingForm
          questions={consultoriaQuestions}
          serviceId="consultoria-ux"
          serviceLabel="Diagnóstico de Producto"
        />
      </Container>
    </section>
  );
}
