import { GraduationCap, Award, Briefcase, Compass, BrainCircuit, HeartPulse, Trophy } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const ABOUT_BLOCKS = [
  {
    id: "formacion",
    icon: GraduationCap,
    title: "Formación",
    items: ["Psicólogo Deportivo", "Neuropsicólogo Clínico"],
  },
  {
    id: "certificaciones",
    icon: Award,
    title: "Certificaciones",
    items: [
      "Psicólogo Deportivo CONMEBOL",
      "Certificación en Terapia de Aceptación y Compromiso (ACT)",
      "Rehabilitación Neuropsicológica",
    ],
  },
  {
    id: "experiencia",
    icon: Briefcase,
    title: "Experiencia",
    items: [
      {
        icon: HeartPulse,
        title: "Psicoterapia",
        description:
          "Acompañamiento clínico a adolescentes, adultos y deportistas con un enfoque profesional y cercano.",
      },
      {
        icon: BrainCircuit,
        title: "Rehabilitación Neuropsicológica",
        description:
          "Intervenciones diseñadas para recuperar y potenciar funciones cognitivas de manera integral.",
      },
      {
        icon: Trophy,
        title: "Entrenamiento Mental en Deportistas",
        description:
          "Trabajo con estrategias mentales para mejorar concentración, motivación y rendimiento deportivo.",
      },
    ],
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
        {block.id === "experiencia" ? (
          <div className="grid gap-4">
            {block.items.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <ItemIcon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text">{item.title}</h4>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {block.items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        )}
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
          description="Neuropsicólogo Clínico y Psicoterapeuta certificado en ACT. Me especializo en la atención de adolescentes, adultos y deportistas en formación y profesionales."
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
