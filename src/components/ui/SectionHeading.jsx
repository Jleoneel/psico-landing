/**
 * Encabezado de sección reutilizable.
 * `eyebrow` es una etiqueta corta opcional sobre el título.
 * `align` controla la alineación (center por defecto).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment} gap-3 ${className}`}>
      {eyebrow && (
        <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-text leading-tight max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
