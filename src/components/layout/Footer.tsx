import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-secondary md:flex-row">
        <p>© {new Date().getFullYear()} Leandro Balbian. Todos los derechos reservados.</p>
        <p>Portfolio en construcción.</p>
      </Container>
    </footer>
  );
}
