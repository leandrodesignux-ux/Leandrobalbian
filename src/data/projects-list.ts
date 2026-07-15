export type ProjectListItem = {
  id: string;
  label: string;
  sector: string;
  title: string;
  description: string;
  stats?: { value: string; label: string }[];
  tags: string[];
  ctaText: string;
  href: string;
  featured?: boolean;
  isPlaceholder?: boolean;
};

export const projectsList: ProjectListItem[] = [
  {
    id: "siac",
    label: "Sistema de supervisión operativa",
    sector: "PropTech",
    title: "SIAC",
    description:
      "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
    stats: [
      { value: "1.284", label: "Alertas procesadas" },
      { value: "4.2m", label: "Tiempo de respuesta" },
      { value: "98.2%", label: "Tasa de resolución" },
    ],
    tags: ["AI Governance", "Decision Design", "Real-time Data"],
    ctaText: "Explorar sistema",
    href: "/proyectos/siac",
    featured: true,
  },
  {
    id: "sentinel",
    label: "Sistema de coordinación de agentes IA",
    sector: "AI Governance",
    title: "SENTINEL OS",
    description:
      "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
    tags: [
      "Supervisión por excepción",
      "Confianza trazable",
      "Circuit breakers",
      "Decisión correcta",
    ],
    ctaText: "Explorar sistema",
    href: "/proyectos/sentinel-os",
  },
  {
    id: "project-03",
    label: "Categoría del proyecto",
    sector: "Sector",
    title: "Proyecto 03",
    description:
      "Descripción del proyecto en una o dos líneas. Contenido real por agregar.",
    tags: ["Próximamente", "UX/UI", "Plataforma"],
    ctaText: "Ver caso",
    href: "#",
    isPlaceholder: true,
  },
  {
    id: "project-04",
    label: "Categoría del proyecto",
    sector: "Sector",
    title: "Proyecto 04",
    description:
      "Descripción del proyecto en una o dos líneas. Contenido real por agregar.",
    tags: ["Próximamente", "UX/UI", "Plataforma"],
    ctaText: "Ver caso",
    href: "#",
    isPlaceholder: true,
  },
  {
    id: "project-05",
    label: "Categoría del proyecto",
    sector: "Sector",
    title: "Proyecto 05",
    description:
      "Descripción del proyecto en una o dos líneas. Contenido real por agregar.",
    tags: ["Próximamente", "UX/UI", "Plataforma"],
    ctaText: "Ver caso",
    href: "#",
    isPlaceholder: true,
  },
];
