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
    label: "Sistema de optimización industrial",
    title: "SIAC",
    description:
      "Un operador. 1.284 alertas. 24 críticas. Diseñado para que la decisión tome segundos.",
    stats: [
      { value: "1.284", label: "Alertas procesadas" },
      { value: "4.2m", label: "Tiempo de respuesta" },
      { value: "98.2%", label: "Tasa de resolución" },
    ],
    tags: ["AI Governance", "Decision Design", "Data Analysis"],
    cta: "Explorar sistema",
    href: "/proyectos/siac",
    video:
      "https://player.vimeo.com/video/1210607707?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0",
  },
  {
    label: "Sistema de coordinación de agentes IA",
    title: "SENTINEL OS",
    description:
      "Un humano coordinando 50 agentes de IA autónomos. La interfaz que hace eso posible.",
    status: "Sistema en producción",
    tags: [
      "Supervisión por excepción",
      "Confianza trazable",
      "Circuit breakers",
      "Decisión correcta",
    ],
    cta: "Explorar sistema",
    href: "/proyectos/sentinel-os",
  },
];
