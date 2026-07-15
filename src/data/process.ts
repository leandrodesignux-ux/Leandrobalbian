export type ProcessPhase = {
  number: string;
  name: string;
  headline: string;
  duration: string;
  impact: string;
  activities: { title: string; description: string }[];
};

export const phases: ProcessPhase[] = [
  {
    number: "/01",
    name: "Diagnóstico",
    headline: "Encuentro exactamente dónde se rompe.",
    duration: "3–5 días",
    impact: "20–40%",
    activities: [
      {
        title: "Entrevista de contexto",
        description:
          "Entiendo el sistema, los usuarios reales y los puntos de fricción que más cuestan.",
      },
      {
        title: "Auditoría de experiencia",
        description:
          "Mapeo dónde los usuarios abandonan, se equivocan o piden ayuda innecesariamente.",
      },
      {
        title: "Diagnóstico con costo estimado",
        description:
          "Te digo qué está fallando y cuánto te está costando en tiempo operativo, errores y rotación.",
      },
    ],
  },
  {
    number: "/02",
    name: "Diseño",
    headline: "Diseño la solución que tu equipo realmente va a usar.",
    duration: "1–2 semanas",
    impact: "60%",
    activities: [
      {
        title: "Arquitectura de decisión",
        description:
          "Reorganizo la información para que lo crítico sea visible y lo secundario no interrumpa.",
      },
      {
        title: "Sistema visual coherente",
        description: "Diseño componentes que escalan — no pantallas sueltas.",
      },
      {
        title: "Prototipo navegable con usuarios reales",
        description:
          "Valido antes de construir. Cada iteración aquí ahorra semanas de desarrollo.",
      },
    ],
  },
  {
    number: "/03",
    name: "Producción",
    headline: "Lo construyo, no solo lo entrego en un PDF.",
    duration: "1–3 semanas",
    impact: "70%",
    activities: [
      {
        title: "Vibe coding aplicado",
        description:
          "Para proyectos que lo requieren, paso del diseño al producto funcional directamente.",
      },
      {
        title: "Design system documentado",
        description:
          "Tu equipo de desarrollo recibe especificaciones exactas, no interpretaciones.",
      },
      {
        title: "Optimización de flujos críticos",
        description:
          "Me enfoco en los 3–5 flujos que más impactan la operación diaria.",
      },
    ],
  },
  {
    number: "/04",
    name: "Entrega",
    headline: "Mides el impacto. No solo recibes archivos.",
    duration: "2–3 días",
    impact: "90 días",
    activities: [
      {
        title: "Presentación ejecutiva",
        description:
          "Documento el antes/después con métricas concretas para que puedas mostrar el ROI internamente.",
      },
      {
        title: "Handoff completo",
        description:
          "Archivos, sistema de diseño y documentación lista para escalar.",
      },
      {
        title: "Soporte post-entrega",
        description:
          "2 semanas de acompañamiento para ajustes tras el lanzamiento real.",
      },
    ],
  },
];

export const impactLabels: Record<string, string> = {
  "/01": "productividad operativa recuperable",
  "/02": "menos retrabajo de desarrollo",
  "/03": "menos tiempo de entrenamiento",
  "/04": "para recuperar la inversión",
};
