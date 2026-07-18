"use client";

import { Container } from "@/components/ui/Container";
import { QualifyingForm } from "./QualifyingForm";
import { hubQuestions } from "@/lib/qualifying-questions";

export function ServicesCTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container>
        <QualifyingForm
          questions={hubQuestions}
          serviceId="hub"
          serviceLabel="Servicios"
        />
      </Container>
    </section>
  );
}
