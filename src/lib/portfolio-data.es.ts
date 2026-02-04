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
      title: "MVP en React Native para comunidad de mujeres viajeras",
      imageId: "mockup-react-native",
      description:
        "Experiencia desarrollando un MVP móvil con React Native y Firebase. Proyecto privado en desarrollo que crea una red colaborativa.",
      technologies: ["React Native", "Expo", "Firebase", "NativeWind"],
      link: "/mobile-mvp",
      cta: "Explorar el MVP",
    },
    {
      title: "Natura Puzzle",
      imageId: "natura-puzzle",
      description:
        "Explora curiosidades sobre la naturaleza a través de un juego tipo puzzle desarrollado en React. Presenta una interfaz ligera y aplica lógica interactiva, con potencial para seguir evolucionando. ",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://sara-gavi.github.io/Natura-puzzle/",
    },
    {
      title: "Two Ways to Use a Bike - Case Study",
      imageId: "cyclistic-case-study",
      description:
        "Proyecto de análisis de datos que recorre todo el proceso usando SQL, Excel y Tableau. Me permite desarrollar habilidades analíticas como desarrolladora mientras exploro el comportamiento de usuarios de un servicio de bicicletas compartidas y transformo los insights en acciones.",
      technologies: ["SQL", "BigQuery", "Tableau", "Excel"],
      link: "https://github.com/Sara-Gavi/Cyclistic-Bike-Share-Case-Study",
      cta: "Ver case study",
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
    title: "Stack tecnológico",
    categories: [
      {
        name: "Desarrollo Frontend & Móvil",
        icon: Code2,
        items: [
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "HTML",
          "CSS",
          "Tailwind",
        ],
      },
      {
        name: "Backend & APIs",
        icon: LayoutPanelLeft,
        items: ["Node.js", "Consumo de APIs", "Firebase", "MongoDB", "MySQL"],
      },
      {
        name: "Cloud & DevOps",
        icon: Database,
        items: [
          "AWS (EC2, S3, IAM, VPC)",
          "Fundamentos de redes y seguridad en la nube",
          "Linux (línea de comandos)",
          "Gestión de recursos en la nube",
        ],
      },
      {
        name: "Datos & Analítica",
        icon: BarChart3,
        items: ["SQL", "R", "BigQuery", "Tableau", "Excel", "Google Sheets"],
      },
      {
        name: "Desarrollo asistido por IA & Automatización",
        icon: Bot,
        items: [
          "Ingeniería de prompts",
          "Gestión del conocimiento (NotebookLM)",
          "Automatización de flujos (n8n)",
          "TDD asistido por IA",
          "Seguridad y auditoría con IA",
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
