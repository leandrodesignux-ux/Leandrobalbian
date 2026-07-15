export type ResuelvoItem = {
  badge: string;
  number: string;
  title: string;
  body: string;
  idealPara: string;
  ctaText: string;
  ctaHref: string;
};

export const resuelvoItems: ResuelvoItem[] = [
  {
    badge: "Plataformas operativas",
    number: "01",
    title: "Diseño de sistemas de decisión crítica",
    body: "Cuando un operador necesita tomar decisiones correctas en segundos — con 1.000+ alertas en pantalla. Rediseño la arquitectura de información para que lo crítico sea imposible de ignorar.",
    idealPara: "PropTech · Minería · Control rooms · Supervisión industrial",
    ctaText: "SIAC es un ejemplo de esto",
    ctaHref: "/proyectos/siac",
  },
  {
    badge: "Gobernanza IA",
    number: "02",
    title: "Interfaces para sistemas con agentes IA",
    body: "Cuando tienes IA autónoma tomando decisiones y necesitas que un humano mantenga el control real. Diseño los puntos de supervisión, intervención y auditoría que los frameworks de IA exigen.",
    idealPara: "Enterprise AI · FinTech regulado · Banca digital · Legal tech",
    ctaText: "Sentinel OS es un ejemplo de esto",
    ctaHref: "/proyectos/sentinel-os",
  },
  {
    badge: "Diagnóstico & Rescate",
    number: "03",
    title: "Auditoría de plataformas que nadie usa",
    body: "Cuando invirtieron en desarrollo pero la adopción es baja, el equipo pide capacitación constante o los errores operativos siguen ocurriendo. Encuentro exactamente dónde se rompe la experiencia y lo resuelvo.",
    idealPara: "Cualquier industria con plataforma interna · SaaS B2B · Apps enterprise",
    ctaText: "Mi SQM y Clear Ticket son ejemplos de esto",
    ctaHref: "/proyectos/sqm",
  },
];
