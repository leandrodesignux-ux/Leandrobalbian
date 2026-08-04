import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BiografiaSection } from "@/components/sections/Biografia";
import { Stack } from "@/components/sections/Stack";
import { createMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Biografía",
  description:
    "Diseñador UX/UI Senior con más de 7 años de experiencia transformando plataformas complejas en experiencias claras.",
  path: "/biografia",
  image: "/BIOGRAFIA.jpg",
});

const bioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Leandro Balbian",
    jobTitle: "Senior Product Designer",
    url: "https://leandrobalbian.com",
    image: "https://leandrobalbian.com/BIOGRAFIA.jpg",
    description:
      "Diseñador UX/UI Senior con más de 7 años de experiencia transformando plataformas complejas en experiencias claras.",
    knowsAbout: [
      "Diseño UX/UI",
      "Product Design",
      "Design Engineering",
      "Sistemas de diseño",
      "Arquitectura de información",
    ],
    sameAs: [
      "https://www.linkedin.com/in/leodisenofreelance/",
      "https://github.com/leandrodesignux-ux",
    ],
  },
};

export default function BiografiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(bioJsonLd)}
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BiografiaSection />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
