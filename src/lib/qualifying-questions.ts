import type { Question } from "@/components/sections/QualifyingForm";

export const hubQuestions: Question[] = [
  {
    id: "need",
    question: "¿Qué necesitás resolver?",
    type: "dropdown",
    options: [
      { label: "Diagnóstico de Producto (conversión)", value: "diagnostico" },
      { label: "Diseño End-to-End (retención)", value: "end-to-end" },
      { label: "Design Engineering (velocidad de desarrollo)", value: "design-engineering" },
      { label: "User Flows & Onboarding (activación)", value: "user-flows" },
      { label: "No estoy seguro todavía", value: "unsure", isOther: true },
    ],
  },
  {
    id: "urgency",
    question: "¿Por qué ahora es el momento de resolverlo?",
    type: "pills",
    options: [
      { label: "Estamos por levantar ronda", value: "fundraising" },
      { label: "Es prioridad del equipo de liderazgo", value: "leadership" },
      { label: "Ya perdimos suficiente como para actuar", value: "lost-enough" },
      { label: "Estamos escalando y no queremos arrastrar el problema", value: "scaling" },
    ],
  },
];

export const consultoriaQuestions: Question[] = [
  {
    id: "challenge",
    question: "¿Cuál es el mayor desafío que estás tratando de resolver ahora mismo?",
    type: "pills",
    options: [
      { label: "La conversión se cae y no sabemos por qué", value: "conversion-drop" },
      { label: "Los datos de distintas áreas no se hablan entre sí", value: "data-silos" },
      { label: "Necesitamos una segunda opinión externa antes de invertir más", value: "second-opinion" },
    ],
  },
  {
    id: "tried",
    question: "¿Qué ya intentaron?",
    type: "pills",
    options: [
      { label: "Cambios puntuales de UI que no movieron la métrica", value: "ui-patches" },
      { label: "Contratar más herramientas de analytics", value: "more-analytics" },
      { label: "Nada todavía, recién lo detectamos", value: "nothing-yet" },
    ],
  },
  {
    id: "urgency",
    question: "¿Por qué ahora es el momento de resolverlo?",
    type: "pills",
    options: [
      { label: "Estamos por levantar ronda", value: "fundraising" },
      { label: "Es prioridad del CEO / liderazgo", value: "ceo-priority" },
      { label: "Ya perdimos suficiente como para actuar", value: "lost-enough" },
    ],
  },
];

export const disenoProductoQuestions: Question[] = [
  {
    id: "challenge",
    question: "¿Cuál es el mayor desafío que estás tratando de resolver ahora mismo?",
    type: "pills",
    options: [
      { label: "Una plataforma que nadie en el equipo quiere tocar", value: "untouchable-platform" },
      { label: "Costo de soporte alto por confusión de usuarios", value: "high-support-cost" },
      { label: "Inconsistencia entre web y app", value: "inconsistency" },
    ],
  },
  {
    id: "tried",
    question: "¿Qué ya intentaron?",
    type: "pills",
    options: [
      { label: "Parches puntuales sin rediseñar la base", value: "patches" },
      { label: "Sumar más personas al equipo de soporte", value: "more-support" },
      { label: "Nada, es la primera vez que lo encaramos en serio", value: "first-time" },
    ],
  },
  {
    id: "urgency",
    question: "¿Por qué ahora es el momento de resolverlo?",
    type: "pills",
    options: [
      { label: "Estamos escalando el equipo o la operación", value: "scaling" },
      { label: "Un cliente grande lo pidió explícitamente", value: "client-request" },
      { label: "El roadmap del próximo trimestre depende de esto", value: "roadmap" },
    ],
  },
];

export const disenoIAQuestions: Question[] = [
  {
    id: "challenge",
    question: "¿Cuál es el mayor desafío que estás tratando de resolver ahora mismo?",
    type: "pills",
    options: [
      { label: "Fricción constante entre diseño e ingeniería", value: "design-eng-friction" },
      { label: "No sabemos cómo auditar las decisiones de un agente de IA", value: "ai-audit" },
      { label: "El roadmap se atrasa validando ideas antes de construirlas", value: "slow-validation" },
    ],
  },
  {
    id: "tried",
    question: "¿Qué ya intentaron?",
    type: "pills",
    options: [
      { label: "Mockups estáticos en Figma que ingeniería reinterpreta", value: "figma-mockups" },
      { label: "Documentación extensa de specs", value: "long-docs" },
      { label: "Nada, primera vez que lo encaramos así", value: "first-time" },
    ],
  },
  {
    id: "urgency",
    question: "¿Por qué ahora es el momento de resolverlo?",
    type: "pills",
    options: [
      { label: "Vamos a llevar un agente de IA a producción", value: "ai-to-production" },
      { label: "Necesitamos acelerar el roadmap ya", value: "accelerate-roadmap" },
      { label: "El equipo de ingeniería está cuestionando el proceso actual", value: "eng-questioning" },
    ],
  },
];

export const userFlowsQuestions: Question[] = [
  {
    id: "challenge",
    question: "¿Cuál es el mayor desafío que estás tratando de resolver ahora mismo?",
    type: "pills",
    options: [
      { label: "Buena adquisición, mala activación", value: "acquisition-not-activation" },
      { label: "Onboarding que casi nadie termina", value: "broken-onboarding" },
      { label: "Un feature que construimos pero nadie adopta", value: "unadopted-feature" },
    ],
  },
  {
    id: "tried",
    question: "¿Qué ya intentaron?",
    type: "pills",
    options: [
      { label: "Tooltips o guías dentro del producto", value: "tooltips" },
      { label: "Emails de onboarding", value: "onboarding-emails" },
      { label: "Nada todavía", value: "nothing-yet" },
    ],
  },
  {
    id: "urgency",
    question: "¿Por qué ahora es el momento de resolverlo?",
    type: "pills",
    options: [
      { label: "La tasa de activación bajó este trimestre", value: "activation-dropped" },
      { label: "Vamos a lanzar un feature clave pronto", value: "key-feature-launch" },
      { label: "La retención está por debajo del objetivo", value: "retention-below-target" },
    ],
  },
];
