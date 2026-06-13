import { CalendarCheck, ClipboardList, Compass, LineChart } from "lucide-react";

export const PROCESS_STEPS = [
  {
    id: "agenda",
    number: "01",
    icon: CalendarCheck,
    title: "Agenda",
    description: "Escríbeme por WhatsApp y coordinamos el día y la modalidad de tu primera sesión.",
  },
  {
    id: "evaluacion",
    number: "02",
    icon: ClipboardList,
    title: "Evaluación",
    description: "Exploramos juntos tu situación actual para entender el contexto y definir objetivos claros.",
  },
  {
    id: "intervencion",
    number: "03",
    icon: Compass,
    title: "Intervención",
    description: "Trabajamos con herramientas basadas en evidencia, adaptadas a tu ritmo y tus necesidades.",
  },
  {
    id: "seguimiento",
    number: "04",
    icon: LineChart,
    title: "Seguimiento",
    description: "Evaluamos avances de forma continua y ajustamos el proceso para sostener los resultados.",
  },
];
