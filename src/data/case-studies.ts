export type CaseStudyData = {
  id: string;
  title: string;
  services: string;
  category: string;
  client: string;
  liveUrl: string;
  tagline: string;
  intro: string;
  challenge: {
    title: string;
    paragraphs: string[];
  };
  solution: {
    title: string;
    paragraphs: string[];
  };
  metrics?: { value: string; label: string }[];
};

export const caseStudies: Record<string, CaseStudyData> = {
  siac: {
    id: "siac",
    title: "SIAC",
    services: "UX/UI · Sistemas de decisión",
    category: "PropTech",
    client: "Confidencial",
    liveUrl: "#",
    tagline: "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
    intro:
      "[Breve introducción del proyecto: contexto del cliente, el sistema existente y el objetivo del rediseño. Será completado proyecto por proyecto.]",
    challenge: {
      title: "El reto",
      paragraphs: [
        "[Descripción del problema que enfrentaba el cliente antes del rediseño. Cómo afectaba la operación, los usuarios y los resultados de negocio.]",
        "[Segundo párrafo opcional: detalles específicos de fricciones, errores recurrentes o feedback de usuarios.]",
      ],
    },
    solution: {
      title: "La solución",
      paragraphs: [
        "[Descripción de la solución de diseño implementada: enfoque metodológico, decisiones clave de arquitectura de información e interacción.]",
        "[Segundo párrafo opcional: impacto medible, adopción por parte del equipo y resultados operativos.]",
      ],
    },
    metrics: [
      { value: "1.284", label: "Alertas procesadas" },
      { value: "4.2m", label: "Tiempo de respuesta" },
      { value: "98.2%", label: "Tasa de resolución" },
    ],
  },
  "sentinel-os": {
    id: "sentinel-os",
    title: "Sentinel OS",
    services: "UX/UI · AI Governance",
    category: "AI Governance",
    client: "Confidencial",
    liveUrl: "#",
    tagline: "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
    intro:
      "[Breve introducción del proyecto: contexto del cliente, el sistema existente y el objetivo del rediseño. Será completado proyecto por proyecto.]",
    challenge: {
      title: "El reto",
      paragraphs: [
        "[Descripción del problema que enfrentaba el cliente antes del rediseño. Cómo afectaba la operación, los usuarios y los resultados de negocio.]",
        "[Segundo párrafo opcional: detalles específicos de fricciones, errores recurrentes o feedback de usuarios.]",
      ],
    },
    solution: {
      title: "La solución",
      paragraphs: [
        "[Descripción de la solución de diseño implementada: enfoque metodológico, decisiones clave de arquitectura de información e interacción.]",
        "[Segundo párrafo opcional: impacto medible, adopción por parte del equipo y resultados operativos.]",
      ],
    },
  },
};
