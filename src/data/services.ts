export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  detail: string;
  tags: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type SuccessCase = {
  id: string;
  name: string;
  logoType: "image" | "text";
  logoSrc?: string;
  result: string;
  metricLabel: string;
  shortDescription: string;
  story: {
    problem: string;
    research: string;
    finding: string;
    lever: string;
    impact: string;
  };
  industry: string;
};

export type Principle = {
  number: string;
  text: string;
};

export type ImpactMetric = {
  value: string;
  numericValue: number;
  suffix?: string;
  label: string;
};

export const marqueeItems = [
  "Diagnóstico Causal",
  "Sistema de Verdad Única",
  "Vibe Coding",
  "Investigación Cross-Funcional",
  "Palancas Ejecutables",
  "Prototipado Funcional",
  "GA4 · SQL · Clarity",
  "Decision Design",
  "Human-in-the-Loop",
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Reencuadre del problema",
    description:
      "Tomo un encargo ambiguo y lo traduzco en una pregunta concreta y medible. No salgo a tocar botones hasta entender qué decisión de negocio estamos intentando mover.",
    detail:
      "Cuando el encargo fue 'cuestioná el marketplace en su totalidad', no salí a tocar botones. Reencuadré el problema: no '¿qué mejoro en la web?' sino '¿por qué el marketplace pierde las visitas que ya consiguió?'. Empiezo por definir bien la pregunta antes de buscar respuestas.",
    tags: ["Briefing estratégico", "Definición de problema", "Pregunta correcta"],
  },
  {
    number: "02",
    title: "Sistema de medición",
    description:
      "Antes de sacar conclusiones, armo la infraestructura de datos: comportamiento en el sitio, bases de negocio y grabaciones de sesión, cruzadas para seguir al usuario de punta a punta.",
    detail:
      "Crucé tres fuentes —comportamiento en el sitio, base de negocio y grabaciones de sesión— para poder seguir a un usuario de punta a punta, algo que antes no se podía. Esto permitió detectar errores de medición antes de optimizar sobre bases falsas.",
    tags: ["GA4", "SQL", "Clarity", "Datos de negocio"],
  },
  {
    number: "03",
    title: "Cruce con la realidad",
    description:
      "Los números dicen qué pasa; la gente que opera cada área dice por qué. Hago 1:1 con stakeholders para entender la fricción desde adentro, no solo desde la tabla.",
    detail:
      "Hice 1:1 con cada stakeholder (chatbot, Supply, algoritmo/web) para entender la fricción desde adentro, no solo desde la tabla. Los números dicen QUÉ pasa; la gente que opera cada parte dice POR QUÉ.",
    tags: ["Entrevistas", "Stakeholder mapping", "Diagnóstico operativo"],
  },
  {
    number: "04",
    title: "Palancas ejecutables",
    description:
      "De todo el mapa, destilo una palanca contundente, sistémica y ejecutable. Cada propuesta viene con hipótesis, métrica y fecha. Separo lo que sirve para ver mejor de lo que mueve la aguja.",
    detail:
      "De todo el mapa, destilo UNA palanca contundente, sistémica, que puedo ejecutar yo, y la blindo con hipótesis + métrica + fecha. Separo la medición de la palanca: distinguo lo que sirve para ver mejor de lo que mueve la aguja.",
    tags: ["Priorización", "Hipótesis", "Roadmap", "Impacto medible"],
  },
  {
    number: "05",
    title: "Comunicación efectiva",
    description:
      "Adapto el lenguaje a cada audiencia: negocio para el CEO, técnico para los equipos. Cuido el territorio ajeno, anticipo preguntas y llevo reuniones con objetivo claro.",
    detail:
      "Adapto el lenguaje a cada audiencia. Con el CEO hablo de negocio, no de jerga UX. Con equipos técnicos, al revés. Cuido el territorio ajeno: enmarco mi propuesta como 'sumar a lo que ya existe', no 'reemplazar'. Y anticipo las preguntas antes de presentar.",
    tags: ["Presentaciones", "Documentación", "Reuniones", "Lenguaje por audiencia"],
  },
  {
    number: "06",
    title: "Diseño y construcción",
    description:
      "Diseño en Figma, prototipo en código cuando una idea necesita sentirse real, y entrego sistemas de diseño documentados. Cuando el proyecto lo permite, paso directamente al producto funcional.",
    detail:
      "Diseño en Figma y, cuando una idea necesita sentirse real, construyo prototipos funcionales en código (Next.js). El Supply Agent de WhatsApp se construyó como simulación interactiva, no como mockup estático. Entrego sistemas de diseño documentados para que el equipo pueda escalar.",
    tags: ["Figma", "Next.js", "Design systems", "Handoff"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Reencuadro el encargo",
    description:
      "Traduzco el pedido ambiguo en un problema concreto y medible. La pregunta correcta ahorra semanas de trabajo equivocado.",
  },
  {
    number: "02",
    title: "Construyo el sistema para medirlo",
    description:
      "Antes de sacar conclusiones, armo la infraestructura que me permite seguir al usuario de punta a punta.",
  },
  {
    number: "03",
    title: "Cruzo el dato con la realidad",
    description:
      "Hago 1:1 con cada área para entender el 'por qué' detrás de los números. La operación siempre sabe algo que la tabla no dice.",
  },
  {
    number: "04",
    title: "Aterrizo en una palanca ejecutable",
    description:
      "Destilo una palanca contundente, sistémica y ejecutable, blindada con hipótesis + métrica + fecha.",
  },
  {
    number: "05",
    title: "Divido el trabajo para no ahogarme",
    description:
      "Organizo espacios especializados (datos, estrategia, presentaciones) con un chat general que orquesta, sin contaminar.",
  },
  {
    number: "06",
    title: "Cierro el ciclo y sincronizo",
    description:
      "Cada resultado vuelve al panorama general para decidir el siguiente paso. Mantengo una única fuente de verdad.",
  },
];

export const successCases: SuccessCase[] = [
  {
    id: "spot2",
    name: "Spot2",
    logoType: "text",
    result: "+",
    metricLabel: "Conversión del marketplace",
    shortDescription:
      "Rediseño del ecosistema SaaS PropTech con foco en decisiones basadas en datos y sistemas de diseño escalables.",
    story: {
      problem:
        "Encargo ambiguo: 'cuestioná el marketplace en su totalidad'. Reencuadre el problema a: '¿por qué el marketplace pierde las visitas que ya consiguió?'.",
      research:
        "Crucé tres fuentes —comportamiento en el sitio, base de negocio y grabaciones de sesión— para seguir al usuario de punta a punta. Hice 1:1 con cada área (chatbot, Supply, algoritmo/web).",
      finding:
        "La caída grande no estaba en conseguir el contacto, sino en que la visita agendada se concretara. Depende de factores predecibles del inventario: tipo de dueño, frescura y sector. La mitad del catálogo activo llevaba +90 días sin actualizar.",
      lever:
        "Ordenar el listado por probabilidad de visita realizada, sumando una señal nueva al algoritmo existente — sin construir un sistema nuevo y sin pisar a nadie.",
      impact:
        "Reorienté el foco de 'optimizar botones' a 'atacar la causa de las cancelaciones'. Además, desactivé un error de medición del 94,6% en el traspaso a WhatsApp que evitó optimizar sobre una base falsa.",
    },
    industry: "PropTech · SaaS",
  },
  {
    id: "impact",
    name: "IMPACT",
    logoType: "text",
    result: "+30%",
    metricLabel: "Satisfacción del usuario",
    shortDescription:
      "Liderazgo del departamento UX para plataformas de e-learning en banca digital, minería y telecomunicaciones.",
    story: {
      problem:
        "Plataformas de e-learning con baja satisfacción del usuario y alta complejidad en flujos de capacitación corporativa.",
      research:
        "Investigación de usuarios, pruebas de usabilidad y análisis de flujos de aprendizaje en contextos regulados.",
      finding:
        "La fricción no estaba en el contenido, sino en la navegación y la arquitectura de información de los cursos y evaluaciones.",
      lever:
        "Rediseño de la experiencia de aprendizaje con foco en accesibilidad, claridad de navegación y componentes reutilizables.",
      impact:
        "Aumento del 30% en la satisfacción del usuario y consolidación de un sistema de diseño reusable para múltiples clientes.",
    },
    industry: "E-learning · Banca",
  },
  {
    id: "copec",
    name: "Arcoprime · Copec",
    logoType: "text",
    result: "+",
    metricLabel: "Adopción del software",
    shortDescription:
      "Diseño y producción de video cápsulas educativas para Sckuba, transformando funciones técnicas en aprendizaje claro.",
    story: {
      problem:
        "Software de administración y gestión de tiendas con aplicación móvil, difícil de adoptar por usuarios no técnicos.",
      research:
        "Análisis de funciones críticas del sistema y mapeo de puntos de fricción en el onboarding de usuarios.",
      finding:
        "Los usuarios necesitaban formatos de aprendizaje breves y visuales para funciones técnicas del software.",
      lever:
        "Producción de video cápsulas educativas animadas con narrativa visual clara y centrada en el usuario.",
      impact:
        "Mejora en la comprensión y adopción del software entre clientes y equipos de ventas.",
    },
    industry: "Retail · Capacitación",
  },
  {
    id: "sqm",
    name: "SQM · Clear Ticket",
    logoType: "text",
    result: "+",
    metricLabel: "Adopción de plataforma interna",
    shortDescription:
      "Auditoría de plataforma interna para identificar fricciones críticas y levantar un plan de mejora ejecutable.",
    story: {
      problem:
        "Plataforma interna de ticketing con baja adopción y alto costo de soporte en operaciones mineras.",
      research:
        "Auditoría UX, entrevistas con operadores y mapeo de flujos críticos de reporte y seguimiento.",
      finding:
        "La plataforma tenía información dispersa, estados poco diferenciados y falta de feedback en acciones críticas.",
      lever:
        "Plan de mejora priorizado con rediseño de flujos principales, estados operativos claros y sistema de notificaciones.",
      impact:
        "Reducción de consultas de soporte y aumento de la autonomía de los operadores en el uso de la plataforma.",
    },
    industry: "Minería · Enterprise",
  },
];

export const principles: Principle[] = [
  { number: "01", text: "El dato manda, pero la causa lo explica." },
  { number: "02", text: "Ejecutar antes que analizar de más." },
  { number: "03", text: "Honestidad con los números, aunque incomode." },
  { number: "04", text: "Aportar sin invadir el territorio de otro equipo." },
  { number: "05", text: "Cada audiencia tiene su lenguaje." },
  { number: "06", text: "Distinguir siempre lo que mueve la aguja de lo que es ruido." },
];

export const impactMetrics: ImpactMetric[] = [
  { value: "7+", numericValue: 7, suffix: "+", label: "Años de experiencia" },
  { value: "30%", numericValue: 30, suffix: "%", label: "Más satisfacción de usuario" },
  { value: "25%", numericValue: 25, suffix: "%", label: "Eficiencia del equipo con IA" },
  { value: "4", numericValue: 4, label: "Industrias principales" },
];
