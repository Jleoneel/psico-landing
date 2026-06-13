import { Activity, BrainCircuit, Trophy } from "lucide-react";

export const SERVICES = [
  {
    id: "psicoterapia-individual",
    icon: Activity,
    title: "Psicoterapia Individual",
    description:
      "Sesiones uno a uno con enfoque en Terapia de Aceptación y Compromiso (ACT), orientadas a resultados sostenibles.",
    benefits: [
      "Plan terapéutico personalizado",
      "Enfoque basado en evidencia científica",
      "Modalidad presencial u online",
    ],
  },
  {
    id: "neuropsicologia-clinica",
    icon: BrainCircuit,
    title: "Neuropsicología Clínica",
    description:
      "Evaluación y rehabilitación de procesos cognitivos: atención, memoria, funciones ejecutivas y más.",
    benefits: [
      "Evaluación neuropsicológica completa",
      "Informes clínicos detallados",
      "Planes de rehabilitación cognitiva",
    ],
  },
  {
    id: "psicologia-deportiva",
    icon: Trophy,
    title: "Psicología Deportiva",
    description:
      "Preparación mental para deportistas: gestión de la presión, concentración y consistencia en la competencia.",
    benefits: [
      "Entrenamiento de habilidades mentales",
      "Trabajo en motivación y enfoque",
      "Acompañamiento pre y post competencia",
    ],
  },
];
