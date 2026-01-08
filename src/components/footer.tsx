import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-primary-foreground"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M12 9v13" />
                  <path d="M8 22h8" />
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold">
                Belleza spa
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu refugio de belleza y bienestar en el corazón de la ciudad.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tratamientos Faciales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cuidado Corporal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Masajes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Aromaterapia
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Compañía</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Belleza spa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
