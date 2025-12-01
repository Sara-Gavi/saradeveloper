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
      title: "MVP in React Native for a community of women travelers",
      imageId: "mockup-react-native",
      description:
        "Hands-on experience collaborating on a mobile MVP built with React Native and Firebase. Private project currently in development that creates a collaborative network.",
      technologies: ["React Native", "Expo", "Firebase", "NativeWind"],
      link: "/mobile-mvp",
      cta: "Explore the MVP",
    },
    {
      title: "Natura Puzzle",
      imageId: "natura-puzzle",
      description:
        "Explore curiosities about nature through a puzzle-style game developed in React. It features a lightweight interface and applies interactive logic, with potential to keep evolving",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://sara-gavi.github.io/Natura-puzzle/",
    },
    {
      title: "Poke Finder",
      imageId: "poke-finder",
      description:
        "React/JS search app focused on flawless UX and API consumption.",
      technologies: ["React", "JavaScript", "APIs"],
      link: "https://sara-gavi.github.io/poke-finder/",
    },
  ],
  stack: {
    title: "Stack I Practice With: React, Node, SQL and R",
    categories: [
      {
        name: "Languages & Frameworks",
        icon: Code2,
        items: ["JavaScript", "TypeScript", "React", "React Native", "Node.js"],
        aiQueryHint: "best practices for web development frameworks",
      },
      {
        name: "Frontend & APIs",
        icon: LayoutPanelLeft,
        items: ["HTML", "CSS", "Tailwind", "API consumption"],
        aiQueryHint: "modern frontend development and API integration",
      },
      {
        name: "Databases & DevOps",
        icon: Database,
        items: ["Git", "MySQL", "MongoDB", "Firebase"],
        aiQueryHint: "database management and DevOps workflows",
      },
      {
        name: "Data Tools",
        icon: BarChart3,
        items: ["SQL", "R", "Tableau", "Data Studio", "Google Sheets"],
        aiQueryHint: "data analysis tools and techniques",
      },
      {
        name: "Development + AI (Initial)",
        icon: Bot,
        items: [
          "Prompt Engineering & Knowledge Management (NotebookLM)",
          "Workflow Automation (n8n)",
          "AI-Assisted TDD",
          "Security & Auditing with AI",
        ],
        aiQueryHint: "integrating AI into the development lifecycle",
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
