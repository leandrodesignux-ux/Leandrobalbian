export type CaseStudySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: {
    title?: string;
    items: string[];
  };
  hasImage?: boolean;
};

export type CaseStudyData = {
  id: string;
  title: string;
  services: string;
  category: string;
  client: string;
  liveUrl: string;
  tagline: string;
  intro: string;
  metrics?: { value: string; label: string }[];
  sections: CaseStudySection[];
};

export const caseStudies: Record<string, CaseStudyData> = {
  siac: {
    id: "siac",
    title: "SIAC",
    services: "UX/UI · Sistemas de decisión",
    category: "PropTech / Seguridad industrial / IoT",
    client: "Confidencial",
    liveUrl: "https://siac-dashboard.vercel.app/",
    tagline:
      "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
    intro:
      "Un dashboard operativo que unifica dispositivos IoT, alarmas, seguimiento de activos y gestión de usuarios en una interfaz oscura, técnica y de alta densidad informativa.",
    metrics: [
      { value: "20.347", label: "Activos monitoreados" },
      { value: "1.284", label: "Alertas procesadas" },
      { value: "4.2m", label: "Tiempo de respuesta" },
      { value: "98.2%", label: "Tasa de resolución" },
    ],
    sections: [
      {
        id: "contexto",
        title: "Contexto",
        paragraphs: [
          "SIAC es una plataforma de monitoreo en tiempo real diseñada para operaciones industriales de gran escala. Unifica el estado de más de 20.000 activos críticos —cámaras, sensores, gateways, maquinaria y personal— en un solo dashboard operativo.",
        ],
        hasImage: true,
      },
      {
        id: "problema",
        title: "El problema",
        paragraphs: [
          "El sistema anterior cumplía su función técnica, pero no acompañaba la velocidad que la operación exigía. Estados poco diferenciados, tokens visuales inconsistentes y una jerarquía confusa hacían que los operadores tardaran más de lo necesario en interpretar una alerta crítica.",
        ],
        bullets: {
          title: "Fricciones detectadas",
          items: [
            "Estados de dispositivos con colores similares y poco contraste.",
            "Falta de micro-feedback: acciones sin respuesta visual inmediata.",
            "Densidad de información sin jerarquía clara.",
            "Navegación entre alarmas, mapa y activos poco fluida.",
          ],
        },
        hasImage: true,
      },
      {
        id: "investigacion",
        title: "Investigación",
        paragraphs: [
          "Hice una auditoría UX sobre el producto en uso. Revisé los flujos reales de los operadores, los tokens de diseño actuales y los puntos donde se tomaban decisiones críticas. El objetivo no era reemplazar todo, era eliminar lo que obstaculizaba la operación.",
        ],
        bullets: {
          title: "Acciones de research",
          items: [
            "Auditoría de tokens de color y estados operativos.",
            "Mapeo de flujos de alarmas, seguimiento y gestión de usuarios.",
            "Revisión de densidad UI y jerarquía tipográfica.",
            "Identificación de puntos sin feedback visual.",
          ],
        },
        hasImage: true,
      },
      {
        id: "proceso",
        title: "Proceso",
        paragraphs: [
          "Diseñé un sistema de tokens propio alineado a estados operativos reales. Reorganicé la interfaz para que la información más importante se leyera primero, las acciones frecuentes estuvieran al alcance y cada interacción diera una respuesta visual inmediata.",
        ],
        bullets: {
          title: "Decisiones clave",
          items: [
            "Definición de tokens siac-* para cada estado operativo.",
            "Tema oscuro industrial con contraste optimizado.",
            "Componentes reutilizables para KPIs, tablas, mapas y alarmas.",
            "Micro-animaciones con Framer Motion para feedback y performance percibida.",
          ],
        },
        hasImage: true,
      },
      {
        id: "solucion",
        title: "La solución",
        paragraphs: [
          "Rediseñé 8 vistas interconectadas que mantienen un mismo lenguaje visual. El dashboard da una lectura inmediata del estado general, el mapa permite localizar cualquier incidente, las alarmas se gestionan en pocos pasos y la administración de usuarios simplifica el control de permisos.",
        ],
        bullets: {
          title: "Funcionalidades destacadas",
          items: [
            "Monitoreo en tiempo real con actualización automática.",
            "Mapa interactivo con pines de estado y reproducción de CCTV simulada.",
            "Gestión de alarmas con resolución y generación de reportes.",
            "Timeline de eventos con metadatos técnicos.",
            "IAM con roles, departamentos y permisos por zonas y cámaras.",
          ],
        },
        hasImage: true,
      },
      {
        id: "impacto",
        title: "Impacto",
        paragraphs: [
          "El nuevo SIAC reduce el tiempo de respuesta, aumenta la tasa de resolución y permite procesar miles de alertas con claridad operativa. Los operadores pasan menos tiempo interpretando la interfaz y más tiempo resolviendo incidentes.",
        ],
        hasImage: true,
      },
      {
        id: "reflexion",
        title: "Reflexión",
        paragraphs: [
          "SIAC me recordó que en productos operativos el diseño se mide por lo que no pasa: errores de interpretación, demoras en la respuesta, alertas pasadas por alto. Una interfaz clara no solo se ve mejor: hace que la operación sea más confiable.",
        ],
        hasImage: true,
      },
    ],
  },
  "sentinel-os": {
    id: "sentinel-os",
    title: "Sentinel OS",
    services: "UX/UI · AI Governance",
    category: "AI Governance",
    client: "Confidencial",
    liveUrl: "#",
    tagline:
      "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
    intro:
      "Sentinel OS es un sistema de supervisión por excepción para flotas de agentes de IA. Permite a un operador humano coordinar decenas de agentes autónomos, intervenir cuando la confianza del sistema cae y trazar cada decisión hasta su origen.",
    sections: [
      {
        id: "reto",
        title: "El reto",
        paragraphs: [
          "A medida que los agentes de IA toman más decisiones operativas, los equipos humanos pierden visibilidad sobre el porqué de cada acción. Sin una interfaz de confianza trazable, los operadores no pueden intervenir a tiempo ni auditar resultados.",
          "El desafío era diseñar un sistema que mantuviera al humano en el centro sin ralentizar la autonomía de la IA: supervisión por excepción, circuit breakers y trazabilidad en cada paso.",
        ],
        hasImage: true,
      },
      {
        id: "solucion",
        title: "La solución",
        paragraphs: [
          "Diseñé una interfaz de coordinación donde cada agente muestra su estado, confianza y próxima acción. El operador puede pausar, revertir o reasignar tareas con un solo clic, y cada intervención queda registrada en un trail de auditoría.",
          "El sistema prioriza la atención humana usando circuit breakers automáticos: cuando la confianza cae por debajo de un umbral, la decisión pasa a revisión manual sin detener el resto de la flota.",
        ],
        hasImage: true,
      },
    ],
  },
};
