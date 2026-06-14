import SectionHeading from "../components/ui/SectionHeading";
import { PROCESS_STEPS } from "../data/process";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function ProcessStep({ step, index, isLast }) {
  const { ref, isVisible } = useRevealOnScroll();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center flex-1`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Línea conectora (desktop) */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] right-[-50%] h-px bg-border"
        />
      )}

      <div className="relative z-10 flex flex-col items-center gap-2 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center">
          <Icon size={24} aria-hidden="true" />
        </div>
        <span className="font-display text-xs font-semibold text-secondary tracking-[0.2em]">
          {step.number}
        </span>
      </div>

      <div className="md:max-w-[200px]">
        <h3 className="font-display text-lg font-semibold text-text mb-1">
          {step.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tu proceso de atención, paso a paso"
          description="Un camino claro desde el primer contacto hasta el seguimiento de tus avances."
        />

        <div className="flex flex-col md:flex-row gap-10 md:gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
