import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { SERVICES } from "../data/services";
import { getWhatsAppLink } from "../services/whatsapp";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useRevealOnScroll();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full flex flex-col gap-5">
        <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center text-primary">
          <Icon size={28} aria-hidden="true" />
        </div>

        <h3 className="font-display text-xl font-semibold text-text">
          {service.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed">
          {service.description}
        </p>

        <ul className="flex flex-col gap-2 mt-1">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-text">
              <Check size={18} className="text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <Button
          as="a"
          href={getWhatsAppLink(`Hola, quiero más información sobre ${service.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          icon={ArrowRight}
          className="mt-auto self-start"
        >
          Agendar
        </Button>
      </Card>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Servicios"
          title="Acompañamiento especializado para cada necesidad"
          description="Tres áreas de especialización con un mismo enfoque: evidencia científica y atención personalizada."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
