export type SkillNode = {
  label: string;
};

export type SkillCluster = {
  title: string;
  nodes: SkillNode[];
};

export const skillClusters: SkillCluster[] = [
  {
    title: "Diseño UX/UI",
    nodes: [
      { label: "Design Thinking" },
      { label: "UX Design" },
      { label: "UI Design" },
      { label: "Interaction Design" },
      { label: "Information Architecture" },
      { label: "Design Systems" },
      { label: "Human-Centered Design" },
      { label: "Prototipado (Figma)" },
    ],
  },
  {
    title: "Investigación & Auditoría",
    nodes: [
      { label: "User Testing" },
      { label: "Card Sorting" },
      { label: "Customer Flow Analysis" },
      { label: "Auditoría de Usabilidad" },
      { label: "Microsoft Clarity" },
      { label: "Hotjar" },
      { label: "Maze" },
      { label: "Optimal Workshop" },
    ],
  },
  {
    title: "Vibe Coding & IA",
    nodes: [
      { label: "Claude Code" },
      { label: "Cursor" },
      { label: "V0" },
      { label: "Framer" },
      { label: "Webflow" },
      { label: "Prototipado funcional con IA" },
    ],
  },
];
