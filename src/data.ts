interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "backend",
    title: "Backend Code Connect",
    description: "API backend para una plataforma de codificación colaborativa en tiempo real.",
    tech: ["Node.js", "Express", "MongoDB"],
    url: "https://github.com/yefer03/backend-code.git",
  },
  {
    id: 1,
    category: "backend",
    title: "Websocket Server",
    description: "Servidor WebSocket para comunicación bidireccional en tiempo real.",
    tech: ["Node.js", "WebSocket", "Express"],
    url: "https://github.com/yefer03/Websocket-Server.git",
  },
  {
    id: 2,
    category: "backend",
    title: "CRUD Node.js API",
    description: "API RESTful con autenticación y validación de datos.",
    tech: ["Node.js", "Express", "MongoDB"],
    url: "https://github.com/yefer03/crud_nodejs_backend.git",
  },
  {
    id: 3,
    category: "backend",
    title: "Google Auth Login",
    description: "Sistema de autenticación con Google OAuth y tokens JWT.",
    tech: ["Node.js", "OAuth", "JWT"],
    url: "https://github.com/yefer03/Tokens_Google_Login_Nodejs.git",
  },
  {
    id: 4,
    category: "backend",
    title: "File Upload Service",
    description: "Microservicio de gestión de archivos con soporte multi-formato.",
    tech: ["Node.js", "Express", "Multer"],
    url: "https://github.com/yefer03/Subir_Archivos_Nodejs.git",
  },
  {
    id: 5,
    category: "frontend",
    title: "Frontend Code Connect",
    description: "Editor de código colaborativo en tiempo real con chat integrado.",
    tech: ["React", "Socket.io", "Tailwind"],
    url: "https://github.com/yefer03/Front-Code",
  },
  {
    id: 6,
    category: "frontend",
    title: "Queue With Sockets",
    description: "Sistema de gestión de colas en tiempo real con WebSockets.",
    tech: ["React", "Socket.io", "Material UI"],
    url: "https://github.com/yefer03/Queue-With-Sockets.git",
  },
  {
    id: 7,
    category: "frontend",
    title: "Journal App",
    description: "Aplicación de diario personal con autenticación Firebase.",
    tech: ["React", "Redux", "Firebase"],
    url: "https://github.com/yefer03/08-journal-app.git",
  },
  {
    id: 8,
    category: "frontend",
    title: "Heroes SPA",
    description: "SPA de héroes DC y Marvel con búsqueda y filtrado avanzado.",
    tech: ["React", "React Router", "CSS"],
    url: "https://github.com/yefer03/07-heroes-spa.git",
  },
  {
    id: 9,
    category: "frontend",
    title: "Veterinaria App",
    description: "Sistema de gestión veterinaria con agenda de citas.",
    tech: ["React", "Tailwind CSS"],
    url: "https://github.com/yefer03/react_veterinaria.git",
  },
];
