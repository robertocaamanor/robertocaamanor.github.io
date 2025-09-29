// Información de proyectos
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Archidrop",
    description: "Mantenedor en NodeJS que descomprime archivos desde cualquier lugar a Dropbox, usado para fines personales relativos al archivismo.",
    image: "/archidrop-image.png",
    technologies: ["Node.js"],
    github: "https://github.com/robertocaamanor/archidrop",
  },
  {
    id: 2,
    title: "Ordena tu Plata", 
    description: "Aplicación web para el control de finanzas personales que permite a los usuarios gestionar sus ingresos, gastos y presupuestos de manera eficiente y organizada.",
    image: "/ordena-tu-plata.png",
    technologies: ["NestJS", "PostgreSQL", "Next.js", "Prisma ORM", "JWT"],
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