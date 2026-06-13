import { Mail } from "lucide-react";
import { PROFESSIONAL, SOCIAL_LINKS } from "../constants/contact";
import { NAV_LINKS } from "../constants/routes";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg font-semibold text-white">
            {PROFESSIONAL.name}
          </span>
          <p className="text-sm">{PROFESSIONAL.title}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
            Navegación
          </h3>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
            Contacto
          </h3>
          <a
            href={`mailto:${PROFESSIONAL.email}`}
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <Mail size={16} aria-hidden="true" />
            {PROFESSIONAL.email}
          </a>
          <div className="flex gap-4 mt-1">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.label} href={social.href} className="text-sm hover:text-white transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
            Legal
          </h3>
          <a href="#" className="text-sm hover:text-white transition-colors">
            Aviso legal
          </a>
          <a href="#" className="text-sm hover:text-white transition-colors">
            Política de privacidad
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-10 pt-6 border-t border-white/10 text-xs text-white/50">
        © {year} {PROFESSIONAL.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
