import { useEffect, useRef, useState } from "react";

/**
 * Hook simple de reveal-on-scroll usando IntersectionObserver.
 * Devuelve un ref para asignar al elemento y un booleano `isVisible`.
 * Respeta prefers-reduced-motion (no es necesario gestionarlo aquí,
 * ya que el CSS global anula las transiciones).
 */
export function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
