export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export type SuccessCase = {
  name: string;
  result: string;
  metricLabel: string;
  description: string;
  industry: string;
};

export type ImpactMetric = {
  value: string;
  label: string;
};

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Reencuadre del problema",
    description:
      "Tomo un encargo ambiguo y lo traduzco en una pregunta concreta y medible. No salgo a tocar botones hasta entender qué decisión de negocio estamos intentando mover.",
    tags: ["Briefing estratégico", "Definición de problema", "Pregunta correcta"],
  },
  {
    number: "02",
    title: "Sistema de medición",
    description:
      "Antes de sacar conclusiones, armo la infraestructura de datos: comportamiento en el sitio, bases de negocio y grabaciones de sesión, cruzadas para seguir al usuario de punta a punta.",
    tags: ["GA4", "Clarity", "SQL", "Datos de negocio"],
  },
  {
    number: "03",
    title: "Cruce con la realidad",
    description:
      "Los números dicen qué pasa; la gente que opera cada área dice por qué. Hago 1:1 con stakeholders para entender la fricción desde adentro, no solo desde la tabla.",
    tags: ["Entrevistas", "Stakeholder mapping", "Diagnóstico operativo"],
  },
  {
    number: "04",
    title: "Palancas ejecutables",
    description:
      "De todo el mapa, destilo una palanca contundente, sistémica y ejecutable. Cada propuesta viene con hipótesis, métrica y fecha. Separo lo que sirve para ver mejor de lo que mueve la aguja.",
    tags: ["Priorización", "Hipótesis", "Roadmap", "Impacto medible"],
  },
  {
    number: "05",
    title: "Comunicación efectiva",
    description:
      "Adapto el lenguaje a cada audiencia: negocio para el CEO, técnico para los equipos. Cuido el territorio ajeno, anticipo preguntas y llevo reuniones con objetivo claro.",
    tags: ["Presentaciones", "Documentación", "Reuniones", "Lenguaje por audiencia"],
  },
  {
    number: "06",
    title: "Diseño y construcción",
    description:
      "Diseño en Figma, prototipo en código cuando una idea necesita sentirse real, y entrego sistemas de diseño documentados. Cuando el proyecto lo permite, paso directamente al producto funcional.",
    tags: ["Figma", "Next.js", "Design systems", "Handoff"],
  },
];

export const successCases: SuccessCase[] = [
  {
    name: "Spot2",
    result: "+",
    metricLabel: "Conversión del marketplace",
    description:
      "Rediseño del ecosistema SaaS PropTech con foco en decisiones basadas en datos y sistemas de diseño escalables.",
    industry: "PropTech · SaaS",
  },
  {
    name: "IMPACT",
    result: "+30%",
    metricLabel: "Satisfacción del usuario",
    description:
      "Liderazgo del departamento UX para plataformas de e-learning en banca digital, minería y telecomunicaciones.",
    industry: "E-learning · Banca",
  },
  {
    name: "Arcoprime · Copec",
    result: "+",
    metricLabel: "Adopción del software",
    description:
      "Diseño y producción de video cápsulas educativas para Sckuba, transformando funciones técnicas en aprendizaje claro.",
    industry: "Retail · Capacitación",
  },
  {
    name: "SQM · Clear Ticket",
    result: "+",
    metricLabel: "Adopción de plataforma interna",
    description:
      "Auditoría de plataforma interna para identificar fricciones críticas y levantar un plan de mejora ejecutable.",
    industry: "Minería · Enterprise",
  },
];

export const impactMetrics: ImpactMetric[] = [
  { value: "7+", label: "Años de experiencia" },
  { value: "30%", label: "Más satisfacción de usuario" },
  { value: "25%", label: "Eficiencia del equipo con IA" },
  { value: "4", label: "Industrias principales" },
];
