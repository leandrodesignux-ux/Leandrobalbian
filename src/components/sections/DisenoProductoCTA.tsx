"use client";

import { Container } from "@/components/ui/Container";
import { QualifyingForm } from "./QualifyingForm";
import { disenoProductoQuestions } from "@/lib/qualifying-questions";

export function DisenoProductoCTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container>
        <QualifyingForm
          questions={disenoProductoQuestions}
          serviceId="diseno-producto-complejo"
          serviceLabel="Diseño End-to-End"
        />
      </Container>
    </section>
  );
}
