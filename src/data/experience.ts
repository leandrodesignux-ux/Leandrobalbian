export type TimelineEntry = {
  period: string;
  title: string;
  sector: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2024-2025",
    title: "SIAC",
    sector: "PropTech",
    description:
      "Rediseño de plataforma de monitoreo para 20.347 activos críticos en tiempo real.",
  },
  {
    period: "2024-2025",
    title: "Sentinel OS",
    sector: "AI Governance",
    description:
      "Diseño del sistema de supervisión para agentes IA autónomos en entornos enterprise.",
  },
  {
    period: "2023-2024",
    title: "SQM",
    sector: "Minería",
    description:
      "Sistema de gestión de certificaciones para trabajadores en operaciones industriales.",
  },
  {
    period: "2022-2023",
    title: "Mi SQM",
    sector: "App Mobile",
    description:
      "Rediseño de experiencia digital para trabajadores de la minera más grande de Chile.",
  },
];

export const stats: Stat[] = [
  { value: "7+", label: "Años de experiencia en sistemas complejos" },
  { value: "24+", label: "Proyectos entregados en producción" },
  {
    value: "4",
    label: "Industrias: PropTech · FinTech · Minería · Educación",
  },
  {
    value: "95%",
    label: "Tasa de retención de usuarios en plataformas rediseñadas",
  },
];

export const skills = [
  "Figma",
  "Framer",
  "Claude",
  "Cursor",
  "Design Systems",
  "AI Governance",
  "Vibe Coding",
  "Research UX",
];

export const sectors = [
  "PropTech",
  "FinTech",
  "Minería",
  "Banca digital",
  "Gobierno IA",
];
