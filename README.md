# Landing Page — Joan Jeremer Rodríguez Ramos

Landing page profesional (marca personal) para Neuropsicólogo Clínico, Psicoterapeuta ACT y Psicología Deportiva. Construida con **React + Vite + Tailwind CSS v4**.

## Cómo correr el proyecto

```bash
npm install
npm run dev      # desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar build de producción
```

## Pendientes antes de publicar

1. **Número de WhatsApp**: editar `src/constants/contact.js` → `whatsappNumber` (formato internacional sin "+", ej: `5939XXXXXXXX`).
2. **Fotografía profesional**: reemplazar el placeholder en `src/sections/Hero.jsx` (bloque "Placeholder de fotografía profesional") con la imagen real, colocada en `src/assets/images/`.
3. **Email y redes sociales**: actualizar en `src/constants/contact.js`.
4. **Testimonios**: reemplazar los placeholders en `src/data/testimonials.js` con testimonios reales y autorizados.
5. **Dominio/SEO**: actualizar URLs en `index.html` (canonical, Open Graph), `public/robots.txt` y `public/sitemap.xml` con el dominio definitivo. Generar y subir `og-image.jpg` (1200x630px).
6. **Legal**: completar las páginas/secciones de Aviso Legal y Política de Privacidad (actualmente enlaces placeholder `#` en el Footer).

## Estructura del proyecto

```
src/
├── assets/          # imágenes e iconos
├── components/      # Navbar, WhatsAppButton, y componentes UI (Button, Card, Accordion, Badge, SectionHeading)
├── layouts/          # MainLayout (Navbar + Footer + WhatsApp FAB)
├── pages/            # Home.jsx
├── sections/         # Hero, ProblemsGrid, Services, AboutMe, ProcessSteps, Testimonials, FAQ, CTAFinal, Footer
├── data/             # Contenido de tarjetas, servicios, FAQ, etc. (fácil de editar sin tocar componentes)
├── constants/        # Contacto, navegación
├── services/         # whatsapp.js — generador centralizado de links de WhatsApp
└── hooks/            # useRevealOnScroll — animaciones de aparición al hacer scroll
```

Esta arquitectura está preparada para escalar hacia futuras fases (agenda de citas, portal de pacientes, blog, dashboard) reutilizando los mismos componentes UI y el sistema de tokens definido en `src/index.css`.

## Sistema de diseño

- **Colores**: definidos como tokens en `src/index.css` (`@theme`) — `primary` (#2F5D73), `secondary` (#8AA399), `bg`, `surface`, `text`, `text-secondary`, `border`.
- **Tipografía**: `font-display` (Poppins) para títulos, `font-sans` (Inter) para texto.
- **Accesibilidad**: contraste AA, navegación por teclado (focus visible), HTML semántico, `prefers-reduced-motion` respetado.
