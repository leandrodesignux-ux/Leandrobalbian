"use client";

import { Container } from "@/components/ui/Container";
import { QualifyingForm } from "./QualifyingForm";
import { disenoIAQuestions } from "@/lib/qualifying-questions";

export function DisenoIACTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container>
        <QualifyingForm
          questions={disenoIAQuestions}
          serviceId="diseno-ia"
          serviceLabel="Design Engineering"
        />
      </Container>
    </section>
  );
}
