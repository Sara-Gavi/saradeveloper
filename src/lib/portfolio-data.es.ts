import {
  Bot,
  Code2,
  Database,
  BarChart3,
  Github,
  Linkedin,
  LayoutPanelLeft,
} from "lucide-react";

export const portfolioData = {
  projects: [
    {
      title: "Natura Puzzle",
      imageId: "natura-puzzle",
      description:
        "Juego tipo puzzle en React que demuestra lógica compleja e interfaz ligera.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://sara-gavi.github.io/Natura-puzzle/",
    },
    {
      title: "Poke Finder",
      imageId: "poke-finder",
      description:
        "Aplicación de búsqueda en React/JS centrada en una experiencia fluida y consumo de APIs.",
      technologies: ["React", "JavaScript", "APIs"],
      link: "https://sara-gavi.github.io/poke-finder/",
    },
  ],
  stack: {
    title: "Stack con el que practico: React, Node, SQL y R",
    categories: [
      {
        name: "Lenguajes y Frameworks",
        icon: Code2,
        items: ["JavaScript", "TypeScript", "React", "React Native", "Node.js"],
      },
      {
        name: "Frontend y APIs",
        icon: LayoutPanelLeft,
        items: ["HTML", "CSS", "Tailwind", "Consumo de APIs"],
      },
      {
        name: "Bases de datos y DevOps",
        icon: Database,
        items: ["Git", "MySQL", "MongoDB", "Firebase"],
      },
      {
        name: "Herramientas de Datos",
        icon: BarChart3,
        items: ["SQL", "R", "Tableau", "Data Studio", "Google Sheets"],
      },
      {
        name: "Desarrollo + IA (Inicial)",
        icon: Bot,
        items: [
          "Ingeniería de Prompts y Gestión del Conocimiento (NotebookLM)",
          "Automatización de Flujos (n8n)",
          "TDD Asistido por IA",
          "Seguridad y Auditoría con IA",
        ],
      },
    ],
  },
  contact: {
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saragavilan/",
        icon: Linkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com/Sara-Gavi",
        icon: Github,
      },
    ],
  },
};
