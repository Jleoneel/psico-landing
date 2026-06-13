import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../services/whatsapp";

/**
 * Botón flotante de WhatsApp, fijo en la esquina inferior derecha.
 * Visible en todo momento como "ancla de conversión" persistente.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta por WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary-light hover:scale-105 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
