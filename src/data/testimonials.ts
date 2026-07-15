export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatar?: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Teníamos operadores perdiendo minutos críticos entre alertas duplicadas y pantallas que no priorizaban nada. Leandro rediseñó la arquitectura de información de SIAC para que la decisión correcta tomara segundos. Hoy el tiempo de respuesta en casos críticos se redujo y el equipo dejó de depender de la memoria individual.",
    name: "Lucas Ibáñez",
    role: "Head of Operations",
    rating: 5.0,
    initials: "LI",
    featured: true,
  },
  {
    quote:
      "Nuestra intranet tenía toda la información, pero nadie la usaba. Los equipos repetían procesos en Excel paralelos. Leandro auditó los flujos, eliminó pasos redundantes y diseñó una interfaz que el 80% del adoptó en la primera semana sin capacitación forzada.",
    name: "Andrés Fuentes",
    role: "Product Lead",
    rating: 5.0,
    initials: "AF",
  },
  {
    quote:
      "Teníamos una plataforma interna que los vendedores evitaban. Cada cierre de mes era un caos de correos y versiones descuadradas. Leandro identificó los 3 flujos que realmente movían la operación y los reconstruyó. Ahora los errores de cierre bajaron y los nuevos vendedores se autogestionan mucho más rápido.",
    name: "Francisco Ramírez",
    role: "Operations Manager",
    rating: 4.5,
    initials: "FR",
  },
  {
    quote:
      "El sistema de certificaciones para trabajadores de campo estaba fragmentado en 4 herramientas diferentes. Leandro unificó la experiencia en una sola plataforma y simplificó los flujos de aprobación. Hoy reducimos el tiempo administrativo y la rotación de personal nuevo bajó notablemente.",
    name: "Marcela Rojas",
    role: "HR & Compliance Director",
    rating: 5.0,
    initials: "MR",
  },
];
