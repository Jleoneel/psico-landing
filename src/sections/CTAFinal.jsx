import { MessageCircle } from "lucide-react";
import Button from "../components/ui/Button";
import { getWhatsAppLink } from "../services/whatsapp";

export default function CTAFinal() {
  return (
    <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-3xl"
      />
      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center flex flex-col items-center gap-6">
        <h2 className="font-display text-2xl md:text-4xl font-semibold text-white leading-tight">
          Dar el primer paso también es parte del proceso.
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl">
          Si sientes que es momento de cuidar tu bienestar emocional, escríbeme
          y conversemos sobre cómo puedo acompañarte.
        </p>
        <Button
          as="a"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          icon={MessageCircle}
          className="text-base md:text-lg px-8 py-4"
        >
          Agenda tu consulta por WhatsApp
        </Button>
      </div>
    </section>
  );
}
