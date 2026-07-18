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
  initials: string;
  badge: string;
  isMetric: boolean;
  shortDescription: string;
  story: {
    problem: string;
    whatIDid: string;
    result: string;
  };
  tags: string[];
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
    initials: "S2",
    badge: "Diagnóstico causal",
    isMetric: false,
    shortDescription:
      "Reencuadré 'cuestioná el marketplace' en un diagnóstico causal: la caída real estaba en visitas no concretadas, no en contacto perdido.",
    story: {
      problem:
        "Encargo ambiguo ('cuestioná el marketplace en su totalidad'), reencuadrado a '¿por qué se pierden las visitas que ya se consiguieron?'.",
      whatIDid:
        "Crucé comportamiento en el sitio + base de negocio + grabaciones de sesión para seguir al usuario de punta a punta. Detecté que una fuga aparente del 94,6% en el traspaso a WhatsApp era en realidad un error de medición, no abandono real. Encontré que la mitad del catálogo llevaba +90 días sin actualizar, y que eso predecía las cancelaciones de visita.",
      result:
        "Propuse ordenar el listado por probabilidad de visita realizada como palanca ejecutable, y prototipé en Next.js un Supply Agent de WhatsApp para validar el flujo antes de construirlo.",
    },
    tags: ["PropTech", "SaaS"],
  },
  {
    id: "impact",
    name: "IMPACT",
    initials: "IM",
    badge: "+30% satisfacción",
    isMetric: true,
    shortDescription:
      "Lideré el equipo de UX para plataformas de e-learning en banca digital, minería y telecomunicaciones.",
    story: {
      problem:
        "Interfaces de e-learning para banca digital, minería y telecomunicaciones con baja adopción y satisfacción.",
      whatIDid:
        "Dirigí el departamento de UX, diseñé, prototipé y testeé soluciones UI/UX, e introduje integración de IA en los procesos de diseño del equipo (25% más de eficiencia). Promoví accesibilidad y pruebas de usabilidad.",
      result:
        "+30% de satisfacción del usuario y aceleración del tiempo de comercialización de nuevos productos.",
    },
    tags: ["E-learning", "Banca"],
  },
  {
    id: "copec",
    name: "Arcoprime / Copec",
    initials: "AC",
    badge: "Adopción de software",
    isMetric: false,
    shortDescription:
      "Transformé funciones técnicas de un software de gestión de tiendas en video-cápsulas animadas fáciles de aprender.",
    story: {
      problem:
        "Sckuba (software de administración y gestión de tiendas con app móvil) requería capacitar a equipos de venta y clientes en funciones técnicas complejas.",
      whatIDid:
        "Diseñé y produje video-cápsulas educativas animadas, aplicando principios de diseño centrado en el usuario y narrativa visual para maximizar comprensión.",
      result:
        "Transformación de funciones técnicas en aprendizaje claro para clientes y equipos de ventas.",
    },
    tags: ["Retail", "Capacitación"],
  },
  {
    id: "sqm",
    name: "SQM",
    initials: "SQ",
    badge: "Vista unificada",
    isMetric: false,
    shortDescription:
      "Rediseñé la gestión de certificaciones industriales: de procesos fragmentados a un registro claro por trabajador.",
    story: {
      problem:
        "Sin seguimiento del progreso de capacitación, sin visibilidad de vencimientos de certificaciones, mallas curriculares complejas de asignar, sin vista unificada del perfil profesional.",
      whatIDid:
        "Implementé un rediseño con metodologías de arquitectura de información y diseño de sistemas complejos: dashboard de mallas de aprendizaje, perfil de trabajador con certificados y ranking.",
      result:
        "Plataforma que simplifica la gestión de certificaciones manteniendo un registro claro y accesible del desarrollo profesional de cada trabajador.",
    },
    tags: ["Minería", "Enterprise"],
  },
  {
    id: "clear-ticket",
    name: "Clear Ticket",
    initials: "CT",
    badge: "Autenticación por rol",
    isMetric: false,
    shortDescription:
      "Simplifiqué la asignación de tarjetas eliminando los puntos de fricción entre usuarios y administradores.",
    story: {
      problem:
        "Interfaz sobrecargada sin filtros relevantes, sin distinción entre asignación individual y masiva, alta probabilidad de error por falta de validaciones.",
      whatIDid:
        "Implementé un sistema de login que reconoce rol y permisos, con lógica que personaliza automáticamente el universo de tarjetas disponibles, validaciones contextuales, y una interfaz de búsqueda con filtros y sugerencias automáticas.",
      result:
        "Proceso de asignación más rápido y con menos errores.",
    },
    tags: ["Fintech", "Operaciones"],
  },
  {
    id: "siac",
    name: "SIAC",
    initials: "SI",
    badge: "Monitoreo en tiempo real",
    isMetric: false,
    shortDescription:
      "Rediseñé la estructura de monitoreo de activos críticos en tiempo real, de datos fragmentados a un dashboard cohesivo.",
    story: {
      problem:
        "Información fragmentada en múltiples pantallas sin jerarquía, dificultad para identificar alertas críticas, visualización confusa en mapas y tablas.",
      whatIDid:
        "Diseñé un mapa interactivo expandible con tabla flotante de eventos recientes, sistema de iconografía diferenciada por tipo de dispositivo, y código de colores para estados.",
      result:
        "Reducción del tiempo de respuesta ante incidentes y mejora en la toma de decisiones.",
    },
    tags: ["Seguridad", "Enterprise"],
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
