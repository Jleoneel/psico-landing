import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import { FAQS } from "../data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="bg-bg py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber antes de agendar"
        />

        <Accordion items={FAQS} />
      </div>
    </section>
  );
}
