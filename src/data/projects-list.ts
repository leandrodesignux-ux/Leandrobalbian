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
  video?: string;
};

export const projectsList: ProjectListItem[] = [
  {
    id: "siac",
    label: "Sistema de supervisión operativa",
    sector: "PropTech / Seguridad industrial / IoT",
    title: "SIAC",
    description:
      "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
    stats: [
      { value: "1.284", label: "Alertas procesadas" },
      { value: "4.2m", label: "Tiempo de respuesta" },
      { value: "98.2%", label: "Tasa de resolución" },
    ],
    tags: ["Decision Design", "Real-time Data", "IoT"],
    ctaText: "Explorar sistema",
    href: "/proyectos/siac",
    featured: true,
    video:
      "https://player.vimeo.com/video/1210607707?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0",
  },
  {
    id: "sentinel",
    label: "Sistema de coordinación de agentes IA",
    sector: "AI Governance",
    title: "SENTINEL OS",
    description:
      "Diseño de sistema de coordinación para 50 agentes de IA autónomos con supervisión por excepción y confianza trazable.",
    stats: [
      { value: "50", label: "Agentes coordinados" },
      { value: "6", label: "Estados operativos" },
      { value: "segundos", label: "Tiempo de intervención" },
    ],
    tags: ["AI Governance", "Agentes autónomos", "Human-in-the-loop"],
    ctaText: "Explorar sistema",
    href: "/proyectos/sentinel-os",
    video:
      "https://player.vimeo.com/video/1210619287?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0",
  },
  {
    id: "certifyx",
    label: "Sistema de gestión de certificaciones",
    sector: "Industrial / Compliance",
    title: "CertifyX",
    description:
      "Sistema de gestión de certificaciones y competencias para empresas industriales chilenas.",
    stats: [
      { value: "20", label: "Trabajadores demo" },
      { value: "60", label: "Certificaciones" },
      { value: "8", label: "Páginas" },
    ],
    tags: ["Industrial", "Compliance", "SENCE"],
    ctaText: "Explorar sistema",
    href: "/proyectos/certifyx",
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
