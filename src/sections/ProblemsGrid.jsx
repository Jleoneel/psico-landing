import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { PROBLEMS } from "../data/problems";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function ProblemCard({ problem, index }) {
  const { ref, isVisible } = useRevealOnScroll();
  const Icon = problem.icon;

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
        <h3 className="font-display text-lg font-semibold text-text">
          {problem.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {problem.description}
        </p>
      </Card>
    </div>
  );
}

export default function ProblemsGrid() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="¿Te identificas con esto?"
          title="Áreas en las que puedo acompañarte"
          description="Cada proceso es distinto, pero estos son algunos de los motivos más frecuentes de consulta."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => (
            <ProblemCard key={problem.id} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
