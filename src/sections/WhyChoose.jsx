import { BrainCircuit, Activity, Laptop, Users, User, Trophy } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const CARDS = [
  {
    id: "evidencia",
    icon: BrainCircuit,
    title: "Atención basada en evidencia científica",
    description:
      "Las estrategias utilizadas se apoyan en conocimientos actualizados y enfoques respaldados por la investigación psicológica.",
  },
  {
    id: "act",
    icon: Activity,
    title: "Terapia de Aceptación y Compromiso (ACT)",
    description:
      "Intervenciones orientadas a desarrollar flexibilidad psicológica y construir una vida alineada con tus valores.",
  },
  {
    id: "modalidad",
    icon: Laptop,
    title: "Atención presencial y online",
    description:
      "Acceso a acompañamiento profesional adaptado a tus necesidades y disponibilidad.",
  },
  {
    id: "multidisciplinario",
    icon: Users,
    title: "Trabajo multidisciplinario",
    description:
      "Coordinación con otros profesionales cuando el proceso requiere una mirada integral para favorecer tu bienestar.",
  },
  {
    id: "personalizada",
    icon: User,
    title: "Atención personalizada",
    description:
      "Cada proceso terapéutico se adapta a la historia, objetivos y necesidades específicas de cada persona.",
  },
  {
    id: "experiencia",
    icon: Trophy,
    title: "Experiencia en psicología clínica y deportiva",
    description:
      "Formación y experiencia aplicadas tanto al bienestar emocional como al rendimiento en contextos deportivos.",
  },
];

export default function WhyChoose() {
  return (
    <section id="por-que" className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-8">
        <SectionHeading
          eyebrow="Por qué elegir"
          title="¿Por qué elegir este enfoque?"
          description="Una atención profesional centrada en tus necesidades, respaldada por formación continua y herramientas basadas en evidencia científica."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, index) => (
            <CardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardItem({ card, index }) {
  const { ref, isVisible } = useRevealOnScroll();
  const Icon = card.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Card className="h-full flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#2F5D73", color: "#ffffff" }}
          >
            <Icon size={20} aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold text-text" style={{ color: "#2F5D73" }}>{card.title}</h4>
            <p className="mt-2 text-sm text-text-secondary">{card.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
