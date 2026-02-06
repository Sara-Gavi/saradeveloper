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
      title: "MVP in React Native for a Community of Women Travelers",
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
        "Explore curiosities about nature through a puzzle-style game developed in React. It features a lightweight interface and applies interactive logic, with potential to keep evolving.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://sara-gavi.github.io/Natura-puzzle/",
    },
    {
      title: "Two Ways to Use a Bike – Case Study",
      imageId: "cyclistic-case-study",
      description:
        "This project follows the complete data analysis process using SQL, Excel and Tableau, helping me develop analytical skills while exploring user behavior in a bike-sharing service and transforming insights into actions.",
      technologies: ["SQL", "BigQuery", "Tableau", "Excel"],
      link: "https://github.com/Sara-Gavi/Cyclistic-Bike-Share-Case-Study",
      cta: "View case study",
    },
    {
      title: "Static Website Hosting Practice on AWS",
      imageId: "mockup-game",
      description:
        "Interactive web game with a retro console-inspired interface, built with Vanilla JavaScript and deployed as a static website on Amazon S3. Collaborative project developed as part of the AWS re/Start training program.",
      technologies: ["Vanilla JavaScript", "AWS S3"],
      link: "https://sara-gavi.github.io/aws-s3-guide/",
      cta: "View online",
    },
    {
      title: "Poke Finder",
      imageId: "poke-finder",
      description:
        "React/JavaScript search application focused on smooth user experience and API consumption.",
      technologies: ["React", "JavaScript", "APIs"],
      link: "https://sara-gavi.github.io/poke-finder/",
    },
  ],

  stack: {
    title: "Stack I Practice With: React, Node, SQL and Cloud (AWS)",
    categories: [
      {
        name: "Frontend & Mobile Development",
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
        aiQueryHint: "frontend and mobile development best practices",
      },
      {
        name: "Backend & APIs",
        icon: LayoutPanelLeft,
        items: ["Node.js", "API consumption", "Firebase", "MongoDB", "MySQL"],
        aiQueryHint: "backend development and API integration",
      },
      {
        name: "Cloud & DevOps",
        icon: Database,
        items: [
          "AWS (EC2, S3, IAM, VPC)",
          "Cloud networking and security fundamentals",
          "Linux command line",
          "Cloud resource management",
        ],
        aiQueryHint: "cloud computing and DevOps fundamentals",
      },
      {
        name: "Data & Analytics",
        icon: BarChart3,
        items: ["SQL", "BigQuery", "Tableau", "Excel", "Google Sheets"],
        aiQueryHint: "data analysis and visualization tools",
      },
      {
        name: "AI-Assisted Development & Automation",
        icon: Bot,
        items: [
          "Prompt engineering",
          "Knowledge management (NotebookLM)",
          "Workflow automation (n8n)",
          "AI-assisted TDD",
          "Security and auditing with AI",
        ],
        aiQueryHint: "using AI to support software development",
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
