import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import { getWhatsAppLink } from "../services/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-bg pt-12 md:pt-20 pb-16 md:pb-24"
    >
      {/* Forma orgánica de fondo: signature visual sutil, evita gradientes genéricos */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-32 w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full bg-secondary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-24 w-[260px] h-[260px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Columna texto */}
        <div className="flex flex-col gap-6 animate-fade-up">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Neuropsicología · Psicoterapia · Psicología Deportiva
          </span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-text">
            Recupera tu bienestar emocional con acompañamiento profesional
            basado en evidencia científica.
          </h1>

          <p className="text-text-secondary text-base md:text-lg max-w-lg">
            Neuropsicólogo clínico y psicoterapeuta especializado en adolescentes y adultos,
            terapia ACT y psicología deportiva.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              as="a"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              icon={ArrowRight}
            >
              Agenda tu consulta
            </Button>
            <Button as="a" href="#sobre-mi" variant="secondary">
              Conoce mi experiencia
            </Button>
          </div>
        </div>

        {/* Columna foto */}
        <div className="relative flex justify-center md:justify-end animate-fade-in">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Anillo decorativo */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 md:-inset-6 rounded-[2.5rem] border border-secondary/40"
            />
            {/* Placeholder de fotografía profesional */}
            <img
              src="/src/assets/images/Foto.jpg"
              alt="Foto profesional de Dr. Juan Pérez"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
