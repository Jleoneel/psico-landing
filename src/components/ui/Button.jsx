const VARIANTS = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  whatsapp:
    "bg-secondary text-white hover:bg-secondary-light shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-text hover:text-primary",
};

/**
 * Botón reutilizable. `as="a"` renderiza un <a>, por defecto renderiza <button>.
 * Variantes: primary, secondary, whatsapp, ghost.
 */
export default function Button({
  children,
  variant = "primary",
  as = "button",
  className = "",
  icon: Icon,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-medium px-6 py-3 text-sm md:text-base transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const classes = `${base} ${VARIANTS[variant] || VARIANTS.primary} ${className}`;

  const Component = as;

  return (
    <Component className={classes} {...props}>
      {Icon && <Icon size={18} aria-hidden="true" />}
      {children}
    </Component>
  );
}
