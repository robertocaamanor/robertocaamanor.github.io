const Projects = () => {
  const projects = [
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
      title: "Nxtara Login",
      description: "Colaboración en el sistema de autenticación para superadministradores y creación de blog, desarrollado con tecnologías modernas para una experiencia segura y escalable.",
      image: "/nxtara-login.png",
      technologies: ["Next.js", "Prisma ORM", "PostgreSQL", "JWT"],
    },
  ] as Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    demo?: string; // Propiedad opcional
  }>;

  return (
    <section id="projects" className="projects-section py-20 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="projects-title text-4xl md:text-5xl font-bold mb-4">
            Mis Proyectos
          </h2>
          <p className="about-text text-xl max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/30 transition-all duration-300 overflow-hidden group border"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="project-title text-xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="project-description mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-600 dark:bg-blue-600 dark:text-blue-100 text-sm px-3 py-1 rounded-full transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 nav-link transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 nav-link transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
