/**
 * Badge/chip pequeño. Usado en "Sobre mí" para certificaciones,
 * y reutilizable para futuras etiquetas (estado de citas, etc).
 */
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-bg border border-border px-3 py-1 text-xs md:text-sm font-medium text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
