/**
 * Tarjeta base reutilizable. Pensada para "Problemas que atiende",
 * servicios, testimonios, etc. `hoverable` añade elevación al hover.
 */
export default function Card({ children, className = "", hoverable = true }) {
  const hover = hoverable
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm ${hover} ${className}`}
    >
      {children}
    </div>
  );
}
