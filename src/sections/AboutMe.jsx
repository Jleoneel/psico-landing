import { GraduationCap, Award, Briefcase, Compass } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const ABOUT_BLOCKS = [
  {
    id: "formacion",
    icon: GraduationCap,
    title: "Formación",
    items: ["Psicología Clínica", "Neuropsicología", "Terapia ACT"],
  },
  {
    id: "certificaciones",
    icon: Award,
    title: "Certificaciones",
    items: ["Terapia de Aceptación y Compromiso", "Psicología Deportiva", "Formación continua"],
  },
  {
    id: "experiencia",
    icon: Briefcase,
    title: "Experiencia",
    items: ["Atención a adultos profesionales", "Evaluación neuropsicológica", "Acompañamiento a deportistas"],
  },
  {
    id: "enfoque",
    icon: Compass,
    title: "Enfoque profesional",
    items: ["Basado en evidencia científica", "Psicoterapia contextual", "Trato cercano y personalizado"],
  },
];

function AboutBlock({ block, index }) {
  const { ref, isVisible } = useRevealOnScroll();
  const Icon = block.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Card className="h-full flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="font-display text-lg font-semibold text-text">{block.title}</h3>
        <div className="flex flex-wrap gap-2">
          {block.items.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Un enfoque profesional, cercano y basado en evidencia"
          description="Mi formación combina neuropsicología clínica, psicoterapia contextual y psicología deportiva, siempre orientada a resultados sostenibles para adultos profesionales."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_BLOCKS.map((block, index) => (
            <AboutBlock key={block.id} block={block} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
