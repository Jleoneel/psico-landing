import { Star } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen quienes han confiado en este proceso"
          description="Espacio reservado para testimonios reales de pacientes, publicados con su autorización."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} hoverable={false} className="flex flex-col gap-4 border-dashed">
              <div className="flex gap-1 text-secondary" aria-hidden="true">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-secondary text-sm italic leading-relaxed">
                {testimonial.quote}
              </p>
              <span className="font-display text-sm font-medium text-text">
                {testimonial.name}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
