export type Project = {
  label: string;
  title: string;
  description: string;
  stats?: { value: string; label: string }[];
  tags: string[];
  status?: string;
  cta: string;
  href: string;
  video?: string;
};

export const projects: Project[] = [
  {
    label: "Sistema de supervisión operativa",
    title: "SIAC",
    description:
      "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
    stats: [
      { value: "1.284", label: "Alertas procesadas" },
      { value: "4.2m", label: "Tiempo de respuesta" },
      { value: "98.2%", label: "Tasa de resolución" },
    ],
    tags: ["PropTech", "Seguridad industrial", "IoT"],
    cta: "Explorar sistema",
    href: "/proyectos/siac",
    video:
      "https://player.vimeo.com/video/1210607707?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0",
  },
  {
    label: "Sistema de coordinación de agentes IA",
    title: "SENTINEL OS",
    description:
      "Diseño de sistema de coordinación para 50 agentes de IA autónomos con supervisión por excepción y confianza trazable.",
    stats: [
      { value: "50", label: "Agentes coordinados" },
      { value: "6", label: "Estados operativos" },
      { value: "segundos", label: "Tiempo de intervención" },
    ],
    tags: ["AI Governance", "Agentes autónomos", "Human-in-the-loop"],
    cta: "Explorar sistema",
    href: "/proyectos/sentinel-os",
    video:
      "https://player.vimeo.com/video/1210619287?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0",
  },
  {
    label: "Sistema de gestión de certificaciones",
    title: "CertifyX",
    description:
      "Sistema de gestión de certificaciones y competencias para empresas industriales chilenas.",
    stats: [
      { value: "20", label: "Trabajadores demo" },
      { value: "60", label: "Certificaciones" },
      { value: "8", label: "Páginas" },
    ],
    tags: ["Industrial", "Compliance", "SENCE"],
    cta: "Explorar sistema",
    href: "/proyectos/certifyx",
    video:
      "https://player.vimeo.com/video/1210853466?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0",
  },
];
