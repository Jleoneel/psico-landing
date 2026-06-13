import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { NAV_LINKS } from "../constants/routes";
import { PROFESSIONAL } from "../constants/contact";
import { getWhatsAppLink } from "../services/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <a
          href="#inicio"
          className="font-display font-semibold text-lg md:text-xl text-primary"
        >
          {PROFESSIONAL.name.split(" ").slice(0, 2).join(" ")}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp">
            Agendar por WhatsApp
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button
            as="a"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            Agendar por WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
}
