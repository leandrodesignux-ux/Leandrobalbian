"use client";

import { Container } from "@/components/ui/Container";
import { QualifyingForm } from "./QualifyingForm";
import { userFlowsQuestions } from "@/lib/qualifying-questions";

export function UserFlowsCTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container>
        <QualifyingForm
          questions={userFlowsQuestions}
          serviceId="ux-writing-elearning"
          serviceLabel="User Flows & Onboarding"
        />
      </Container>
    </section>
  );
}
