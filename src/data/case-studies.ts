export type CaseStudySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: {
    title?: string;
    items: string[];
  }[];
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
        bullets: [
          {
            title: "Fricciones detectadas",
            items: [
              "Estados de dispositivos con colores similares y poco contraste.",
              "Falta de micro-feedback: acciones sin respuesta visual inmediata.",
              "Densidad de información sin jerarquía clara.",
              "Navegación entre alarmas, mapa y activos poco fluida.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "investigacion",
        title: "Investigación",
        paragraphs: [
          "Hice una auditoría UX sobre el producto en uso. Revisé los flujos reales de los operadores, los tokens de diseño actuales y los puntos donde se tomaban decisiones críticas. El objetivo no era reemplazar todo, era eliminar lo que obstaculizaba la operación.",
        ],
        bullets: [
          {
            title: "Acciones de research",
            items: [
              "Auditoría de tokens de color y estados operativos.",
              "Mapeo de flujos de alarmas, seguimiento y gestión de usuarios.",
              "Revisión de densidad UI y jerarquía tipográfica.",
              "Identificación de puntos sin feedback visual.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "proceso",
        title: "Proceso",
        paragraphs: [
          "Diseñé un sistema de tokens propio alineado a estados operativos reales. Reorganicé la interfaz para que la información más importante se leyera primero, las acciones frecuentes estuvieran al alcance y cada interacción diera una respuesta visual inmediata.",
        ],
        bullets: [
          {
            title: "Decisiones clave",
            items: [
              "Definición de tokens siac-* para cada estado operativo.",
              "Tema oscuro industrial con contraste optimizado.",
              "Componentes reutilizables para KPIs, tablas, mapas y alarmas.",
              "Micro-animaciones con Framer Motion para feedback y performance percibida.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "solucion",
        title: "La solución",
        paragraphs: [
          "Rediseñé 8 vistas interconectadas que mantienen un mismo lenguaje visual. El dashboard da una lectura inmediata del estado general, el mapa permite localizar cualquier incidente, las alarmas se gestionan en pocos pasos y la administración de usuarios simplifica el control de permisos.",
        ],
        bullets: [
          {
            title: "Funcionalidades destacadas",
            items: [
              "Monitoreo en tiempo real con actualización automática.",
              "Mapa interactivo con pines de estado y reproducción de CCTV simulada.",
              "Gestión de alarmas con resolución y generación de reportes.",
              "Timeline de eventos con metadatos técnicos.",
              "IAM con roles, departamentos y permisos por zonas y cámaras.",
            ],
          },
        ],
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
    liveUrl: "https://sentinel-os-pearl.vercel.app/",
    tagline:
      "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
    intro:
      "Sentinel OS es un sistema de supervisión por excepción para flotas de agentes de IA. Fue diseñado para un escenario donde decenas de agentes autónomos toman decisiones operativas en paralelo —ventas, gestión de activos, mantenimiento y evaluación de inquilinos— mientras un único operador humano mantiene el control estratégico.",
    metrics: [
      { value: "50", label: "Agentes coordinados" },
      { value: "6", label: "Estados operativos" },
      { value: "4", label: "Tipos de agente" },
      { value: "3", label: "Escenarios de riesgo" },
      { value: "4", label: "Niveles de circuit breaker" },
      { value: "segundos", label: "Tiempo de intervención" },
    ],
    sections: [
      {
        id: "contexto",
        title: "Contexto",
        paragraphs: [
          "Sentinel OS es un sistema de supervisión por excepción para flotas de agentes de IA. Fue diseñado para un escenario donde decenas de agentes autónomos toman decisiones operativas en paralelo —ventas, gestión de activos, mantenimiento y evaluación de inquilinos— mientras un único operador humano mantiene el control estratégico.",
          "La interfaz nace de una pregunta concreta: ¿cómo puede una persona coordinar, confiar y corregir a 50 agentes de IA sin perderse en el ruido?",
        ],
        hasImage: true,
      },
      {
        id: "problema",
        title: "El problema",
        paragraphs: [
          "A medida que los agentes de IA toman más decisiones operativas, los equipos humanos pierden visibilidad sobre el porqué de cada acción. Sin una interfaz de confianza trazable, los operadores no pueden saber qué agente está tomando qué decisión en este momento, entender por qué un agente cambió de estado, intervenir a tiempo sin detener toda la operación ni auditar el origen de una decisión crítica.",
        ],
        bullets: [
          {
            title: "Fricciones detectadas",
            items: [
              "Exceso de autonomía opaco: los agentes actúan sin mostrar su confianza ni sus fuentes.",
              "Falta de jerarquía de atención: todo alerta con la misma intensidad, nada prioriza al operador.",
              "Sin trazabilidad operativa: cuando algo falla, no se puede reconstruir el camino de la decisión.",
              "Intervención binaria: solo se puede dejar correr o parar todo; no existe un control gradual.",
              "Riesgo en cascada invisible: un agente con datos corruptos puede propagar errores a toda la flota.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "investigacion",
        title: "Investigación",
        paragraphs: [
          "Hice una investigación orientada a entender el modelo mental de un operador humano en sistemas de IA autónoma. El objetivo no era diseñar una consola más compleja, sino una superficie de confianza: la interfaz debe decirle al operador dónde mirar, por qué importa y qué puede hacer.",
        ],
        bullets: [
          {
            title: "Acciones de research",
            items: [
              "Mapeo de los 6 estados operativos del agente y sus transiciones posibles.",
              "Análisis de los 4 perfiles de agente y sus umbrales de riesgo diferenciados.",
              "Diseño de reglas de escalación por confianza, riesgo económico y dependencias cruzadas.",
              "Definición de 3 escenarios críticos de demo para testear intervención humana.",
              "Estudio de patrones de supervisión por excepción (exception-based monitoring) y circuit breakers.",
              "Revisión de necesidades de auditoría XAI: pasos, fuentes, confianza, impacto.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "proceso",
        title: "Proceso",
        paragraphs: [
          "Diseñé un sistema de estados y tokens que traduce la incertidumbre de la IA en señales visuales claras. Cada decisión se mide por confianza, riesgo económico y radio de impacto, y la interfaz prioriza automáticamente lo que requiere atención humana.",
        ],
        bullets: [
          {
            title: "Decisiones clave",
            items: [
              "Estados operativos diferenciados: idle, running, monitoring, intervention_required, circuit_open, suspended.",
              "Autonomy dial global: un control para ajustar cuánta autonomía delega el operador.",
              "Circuit breakers individuales: 4 niveles de contención por agente (solo leer, congelar, sin acceso, suspender).",
              "Supervisión por excepción: solo se muestran decisiones que cruzan el umbral de confianza o riesgo.",
              "Audit trail visual: cada decisión se descompone en pasos, fuentes, tokens y confianza histórica.",
              "Diseño oscuro técnico: paleta de alto contraste, componentes de alta densidad, micro-feedback con Framer Motion.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "solucion",
        title: "La solución",
        paragraphs: [
          "Diseñé una interfaz de coordinación con 6 secciones interconectadas que mantienen un mismo lenguaje visual.",
        ],
        bullets: [
          {
            title: "Secciones interconectadas",
            items: [
              "Panel principal: lectura inmediata del estado de toda la flota.",
              "Mis agentes: flota visualizada por tipo, estado, confianza y riesgo económico.",
              "Para revisar: cola de excepciones priorizada por impacto económico, con aprobación en un clic.",
              "Historial de decisiones: línea de tiempo de cada paso, fuentes consultadas y confianza histórica.",
              "Configuración: control de autonomía, circuit breakers, escenarios de demo y parada de emergencia.",
              "Cómo lo construí: documentación del proceso dentro del producto.",
            ],
          },
          {
            title: "Funcionalidades destacadas",
            items: [
              "Monitoreo en tiempo real de 12+ agentes con simulación de ticks cada 2 segundos.",
              "Score de confianza por agente con sparklines y umbrales visuales.",
              "Gestión de excepciones con aprobación individual y revertido.",
              "Decision audit / XAI: trazabilidad completa del porqué de cada decisión.",
              "Circuit breakers por agente y parada de emergencia por scope.",
              "Escenarios de riesgo en vivo: price loop, screening bias, retry storm.",
              "Intervención human-in-the-loop sin detener la flota completa.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "impacto",
        title: "Impacto",
        paragraphs: [
          "Sentinel OS reduce la incertidumbre del operador al gobernar una flota de IA. La atención se concentra en lo que realmente necesita revisión, mientras el sistema mantiene trazabilidad y control granular sobre cada agente.",
        ],
        hasImage: true,
      },
      {
        id: "reflexion",
        title: "Reflexión",
        paragraphs: [
          "Sentinel OS me recordó que el diseño de IA no se trata de hacer que la máquina parezca humana, sino de hacer transparente lo que la máquina está haciendo. La confianza en sistemas autónomos no nace de la autonomía total, sino de la capacidad de recuperar el control en el momento justo.",
          "Una interfaz clara en AI Governance no es solo un dashboard: es el contrato visual entre el operador y la flota.",
        ],
        hasImage: true,
      },
    ],
  },
  certifyx: {
    id: "certifyx",
    title: "CertifyX",
    services: "UX/UI · Desarrollo full-stack",
    category: "Industrial / Compliance",
    client: "Proyecto personal",
    liveUrl: "https://certify-ten-gamma.vercel.app/dashboard",
    tagline: "Del papel al panel, sin fricción.",
    intro:
      "Sistema de gestión de certificaciones y competencias laborales para empresas industriales chilenas. Centraliza certificaciones SENCE, mallas curriculares, compliance legal y vencimientos en un dashboard operativo intuitivo.",
    metrics: [
      { value: "20", label: "Trabajadores demo" },
      { value: "60", label: "Certificaciones" },
      { value: "8", label: "Páginas funcionales" },
      { value: "40+", label: "Componentes" },
    ],
    sections: [
      {
        id: "contexto",
        title: "Contexto",
        paragraphs: [
          "CertifyX es una plataforma de gestión de certificaciones y competencias laborales orientada al ecosistema industrial chileno: minería, construcción y agroindustria. Reúne en un solo dashboard el control de certificaciones SENCE, mallas curriculares, compliance legal y vencimientos, reemplazando el caos de Excels y papeles por un panel de control en tiempo real.",
        ],
        hasImage: true,
      },
      {
        id: "problema",
        title: "El problema",
        paragraphs: [
          "Las empresas industriales chilenas controlan certificaciones y competencias de forma reactiva. Los vencimientos se detectan tarde, los Excels se desactualizan entre áreas y la falta de visibilidad real expone a la organización a riesgos legales, multas y paradas operativas.",
        ],
        bullets: [
          {
            title: "Fricciones detectadas",
            items: [
              "Certificaciones vencidas que generan riesgo legal y operativo.",
              "Excels desactualizados y dispersos entre RRHH, operaciones y seguridad.",
              "Multas por incumplimiento normativo (SENCE, ACHS, Mutual, etc.).",
              "Falta de visibilidad del estado real de competencias de los trabajadores.",
              "Dificultad para planificar capacitaciones y renovaciones a tiempo.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "investigacion",
        title: "Investigación",
        paragraphs: [
          "Hice un mapeo del flujo de compliance industrial chileno: qué certificaciones exige SENCE, cómo las controlan actualmente las áreas de RRHH y seguridad, y qué puntos de decisión generan demoras o errores. El objetivo fue diseñar una única fuente de verdad que alerte antes de que algo se venza.",
        ],
        bullets: [
          {
            title: "Acciones de research",
            items: [
              "Análisis de certificaciones SENCE y normativas asociadas (ACHS, Mutual, IST, CChC).",
              "Mapeo de estados de certificación: vigente, próxima a vencer, vencida, pendiente.",
              "Definición de alertas críticas y reglas de escalación por riesgo legal.",
              "Estudio de flujos de RRHH y operaciones para planificar renovaciones.",
              "Prototipado de dashboard con KPIs visibles y acciones prioritarias.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "proceso",
        title: "Proceso",
        paragraphs: [
          "Diseñé y desarrollé CertifyX como una aplicación completa con un sistema de diseño tokenizado y una arquitectura desacoplada. Cada vista responde a una necesidad operativa concreta: monitorear, gestionar, planificar y reportar. La prioridad fue mantener la claridad visual en un producto de alta densidad informativa.",
        ],
        bullets: [
          {
            title: "Decisiones clave",
            items: [
              "Stack moderno: React 19, TypeScript, Vite, Tailwind CSS y Framer Motion.",
              "Estado global con Zustand y React Query para datos desacoplados.",
              "Sistema de diseño tokenizado con paleta azul/navy y estados semánticos.",
              "Más de 40 componentes reutilizables construidos desde cero.",
              "Datos demo realistas para 3 empresas, 20 trabajadores y ~60 certificaciones.",
              "Lazy loading y responsive para performance en cualquier dispositivo.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "solucion",
        title: "La solución",
        paragraphs: [
          "CertifyX entrega una aplicación de 8 páginas interconectadas que mantienen un mismo lenguaje visual. Desde el dashboard operativo hasta los reportes exportables, cada pantalla permite tomar decisiones de compliance con claridad.",
        ],
        bullets: [
          {
            title: "Funcionalidades destacadas",
            items: [
              "Dashboard con KPIs, gauge de compliance, gráficos y alertas de vencimiento.",
              "Gestión de trabajadores con vista grid/tabla, perfiles y timeline de certificaciones.",
              "Certificaciones con filtros, tabs por estado, ordenación y exportación a CSV.",
              "Mallas curriculares con calendario, progreso y rutas de aprendizaje visuales.",
              "Reportes de cumplimiento con gráficos y exportación de resumen SENCE.",
              "Command palette, atajos de teclado, toasts y accesibilidad con focus-visible.",
            ],
          },
        ],
        hasImage: true,
      },
      {
        id: "impacto",
        title: "Impacto",
        paragraphs: [
          "CertifyX demuestra que un producto de compliance industrial puede ser claro, escalable y listo para producción. El sistema reduce el tiempo de búsqueda de certificaciones, anticipa vencimientos y da a los responsables una visión unificada del estado de competencias.",
        ],
        hasImage: true,
      },
      {
        id: "reflexion",
        title: "Reflexión",
        paragraphs: [
          "CertifyX me confirmó que la complejidad normativa no tiene por qué verse como complejidad visual. La clave está en traducir estados abstractos —vigente, por vencer, vencido— en señales claras y acciones inmediatas. Un buen producto de compliance no solo organiza datos: anticipa problemas antes de que se conviertan en riesgos.",
        ],
        hasImage: true,
      },
    ],
  },
};
