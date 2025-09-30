// Información de proyectos
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string | { backend?: string; frontend?: string; };
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TVenserio.com",
    description: "Sitio web especializado en industria televisiva, música, cultura y espectáculo. Plataforma de contenidos con más de 50k usuarios mensuales, desarrollada con enfoque en SEO y experiencia de usuario.",
    image: "/tvenserio.png",
    technologies: ["WordPress", "SEO", "Adobe InDesign", "Google Analytics", "Elementor"],
    demo: "https://tvenserio.com",
  },
  {
    id: 2,
    title: "Caamarchivos",
    description: "Canal y plataforma de televisión del recuerdo que preserva y comparte contenido audiovisual histórico. Incluye edición de video profesional y gestión de redes sociales con diseños creativos.",
    image: "/caamarchivos.png",
    technologies: ["Adobe Premiere", "Adobe Photoshop", "Adobe Illustrator", "Edición de Video", "Gestión de Redes Sociales"],
    demo: "https://www.instagram.com/caamarchivos/",
  },
  {
    id: 3,
    title: "Archidrop",
    description: "Mantenedor en NodeJS que descomprime archivos desde cualquier lugar a Dropbox, usado para fines personales relativos al archivismo.",
    image: "/archidrop-image.png",
    technologies: ["Node.js"],
    github: "https://github.com/robertocaamanor/archidrop",
  },
  {
    id: 4,
    title: "Ordena tu Plata", 
    description: "Aplicación web para el control de finanzas personales que permite a los usuarios gestionar sus ingresos, gastos y presupuestos de manera eficiente y organizada.",
    image: "/ordena-tu-plata.png",
    technologies: ["NestJS", "PostgreSQL", "Next.js", "Prisma ORM", "JWT"],
    github: {
      backend: "https://github.com/robertocaamanor/ordena-tu-plata-backend",
      frontend: "https://github.com/robertocaamanor/ordena-tu-plata-frontend"
    }
  }
  // {
  //   id: 3,
  //   title: "Nxtara Login",
  //   description: "Colaboración en el sistema de autenticación para superadministradores y creación de blog, desarrollado con tecnologías modernas para una experiencia segura y escalable.",
  //   image: "/nxtara-login.png",
  //   technologies: ["Next.js", "Prisma ORM", "PostgreSQL", "JWT"],
  // }
];

// Textos de la sección de proyectos
export const projectsContent = {
  title: "Mis Proyectos",
  subtitle: "Una selección de mis trabajos más recientes y destacados",
  codeLabel: "Código",
  demoLabel: "Demo"
};