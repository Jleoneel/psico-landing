import { PROFESSIONAL, WHATSAPP_DEFAULT_MESSAGE } from "../constants/contact";

/**
 * Construye una URL de WhatsApp con mensaje predefinido.
 * Centralizado para que toda la app use el mismo número y formato,
 * y para facilitar la migración futura a un sistema de agenda real.
 */
export function getWhatsAppLink(customMessage) {
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${PROFESSIONAL.whatsappNumber}?text=${encoded}`;
}
