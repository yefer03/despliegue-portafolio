export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      ".NET / C#",
      ".NET Framework 4.5",
      "ASP.NET Core",
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "REST APIs",
      "SOAP",
      "Clean Architecture",
      "Hexagonal Architecture",
    ],
  },
  {
    title: "Bases de Datos",
    icon: "🗄️",
    skills: [
      "SQL Server",
      "MySQL",
      "MongoDB",
      "Stored Procedures",
      "Diseño de modelos",
      "Optimización de consultas",
    ],
  },
  {
    title: "DevOps & Infraestructura",
    icon: "🚀",
    skills: ["IIS", "Linux", "Git", "GitHub", "Despliegue de aplicaciones"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "JavaScript", "TypeScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    title: "IA & Automatización",
    icon: "🤖",
    skills: [
      "MCPs",
      "Chatbots",
      "Python Scripts",
      "Automatización de navegador",
      "Automatización Windows",
    ],
  },
];
