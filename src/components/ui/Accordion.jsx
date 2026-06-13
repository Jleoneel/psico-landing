import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Acordeón accesible (un item abierto a la vez).
 * `items` = [{ id, question, answer }]
 */
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-border rounded-2xl bg-surface overflow-hidden"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              id={`faq-trigger-${item.id}`}
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5 font-display font-medium text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 md:px-6 pb-4 md:pb-5 text-text-secondary text-sm md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
