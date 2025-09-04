import React from 'react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  logo?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Nxtara",
    position: "Analista Desarrollador",
    period: "may. 2025 - actualidad · 5 meses",
    location: "Gran Santiago, Región Metropolitana de Santiago, Chile · Presencial",
    type: "Jornada completa",
    description: "Desarrollo de nuevas funcionalidades en el sitio web de la tienda de joyerías Timantti, empleando React, Spring Boot, PostgreSQL y GIT. Implementación de blog con publicación de artículos, resolución de QAs e implementación de librerías NPM. Implementación de Google Analytics y Google Tag Manager en la página web oficial de Nxtara para medición de métricas del portal.",
    skills: ["React", "Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Git", "Microsoft Azure", "Google Tag Manager", "Google Analytics"]
  },
  {
    id: 2,
    company: "TVenserio.com",
    position: "CEO y Fundador",
    period: "may. 2018 - actualidad · 7 años 5 meses",
    location: "Chile",
    type: "Profesional independiente",
    description: "CEO, desarrollador y fundador del sitio web especializado en industria televisiva, TVenserio.com",
    skills: ["Emprendimiento", "Desarrollo Web", "Gestión de Contenidos", "SEO"]
  },
  {
    id: 3,
    company: "Banco de Chile",
    position: "Programador full stack",
    period: "jul. 2024 - nov. 2024 · 5 meses",
    location: "Híbrido",
    type: "Jornada completa",
    description: "Migración de componentes de Mi Pago a Mi Banco usando React Native, pruebas unitarias vía Jest, testeo de código con Sonarqube y despliegue con Jenkins.",
    skills: ["Git", "Jenkins", "React Native", "Spring Boot", "Jest", "Sonarqube"]
  },
  {
    id: 4,
    company: "BBR",
    position: "Desarrollador full stack",
    period: "ene. 2022 - jul. 2024 · 2 años 7 meses",
    location: "Las Condes",
    type: "Jornada completa",
    description: "Desarrollador en el área de solución de tienda en Java, Spring Boot, PL/SQL, Oracle, Postgres y VUE.",
    skills: ["JSON", "VueJS", "Google Cloud", "Java", "Spring Boot", "Oracle", "PostgreSQL"]
  },
  {
    id: 5,
    company: "Servicio Agrícola y Ganadero",
    position: "Desarrollador FullStack",
    period: "nov. 2019 - ene. 2022 · 2 años 3 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de proyectos de Transformación Digital para diferentes plataformas usando microservicios NodeJS, SpringBoot (Sidecar), SQL Server, Docker y MongoDB de forma externa para Emergya y Apiux.",
    skills: ["Node.js", "Git", "JSON", "Java", "Docker", "Spring Boot", "SQL Server", "MongoDB"]
  },
  {
    id: 6,
    company: "Indra",
    position: "Desarrollador Spring Boot + Angular 7",
    period: "ago. 2019 - oct. 2019 · 3 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de proyectos usando Angular 7 y Spring Boot.",
    skills: ["Git", "JSON", "Java", "Spring Boot", "Angular"]
  },
  {
    id: 7,
    company: "Ingenia Global",
    position: "Desarrollador PHP",
    period: "nov. 2018 - may. 2019 · 7 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollador de plataformas Planeta SII, Geologica, GORE Tarapacá y Campus Prevención ISL con PHP7, Wordpress, jQuery, CakePHP y MySQL.",
    skills: ["Git", "PHP", "WordPress", "jQuery", "CakePHP", "MySQL"]
  },
  {
    id: 8,
    company: "ABENIS",
    position: "Desarrollador PHP / AngularJS",
    period: "oct. 2018 - nov. 2018 · 2 meses",
    location: "Provincia de Santiago, Chile",
    type: "Outsourcing",
    description: "Desarrollador de proyectos de manera Outsourcing usando PHP + AngularJS para Conicyt usando framework Symfony, Material Design, control de versiones Mercurial y base de datos MySQL, SQL Server y MongoDB.",
    skills: ["PHP", "AngularJS", "Symfony", "Material Design", "Mercurial", "MySQL", "SQL Server", "MongoDB"]
  },
  {
    id: 9,
    company: "HS Soluciones",
    position: "Desarrollador PHP / Laravel 5.6 / VueJS",
    period: "jun. 2018 - sept. 2018 · 4 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollador de Sistema de Gestión Documental para empresa APRO usando Laravel 5.6, VueJS, gestor de paquetes NPM, control de versiones GIT usando Bitbucket y base de datos MySQL.",
    skills: ["Git", "VueJS", "Laravel", "NPM", "Bitbucket", "MySQL"]
  },
  {
    id: 10,
    company: "Nectia",
    position: "Desarrollador y Soporte Front-end",
    period: "mar. 2018 - jun. 2018 · 4 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollador de Plataformas Front-end y conexión de servicios API. Soporte y desarrollo de Plataforma 360 Factoring Security con framework AngularJS y jQuery, backend C# y control de versiones GIT y SVN.",
    skills: ["Git", "AngularJS", "jQuery", "C#", "SVN", "API"]
  },
  {
    id: 11,
    company: "Apiux Tecnología",
    position: "Programador PHP Junior",
    period: "ago. 2017 - dic. 2017 · 5 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de Plataformas para el Ministerio de Desarrollo Social realizando backend con PHP / Laravel 4, frontend con jQuery y Bootstrap, base de datos MySQL y control de versiones SVN.",
    skills: ["Laravel", "PHP", "jQuery", "Bootstrap", "MySQL", "SVN"]
  },
  {
    id: 12,
    company: "R2DA",
    position: "PHP Developer",
    period: "jun. 2017 - jul. 2017 · 2 meses",
    location: "Santiago Centro, Santiago",
    type: "Jornada completa",
    description: "Desarrollo de sistemas de gestión de servicios API REST usando PHP 7 y AngularJS, con base de datos MySQL, gestion de paquetes NPM y control de versiones GIT.",
    skills: ["Git", "AngularJS", "PHP", "MySQL", "NPM", "API REST"]
  },
  {
    id: 13,
    company: "Clubautomotriz.com",
    position: "Desarrollador Wordpress",
    period: "nov. 2016 - ene. 2017 · 3 meses",
    location: "Provincia de Concepción, Chile",
    type: "Freelance",
    description: "Desarrollo y modificación de la plataforma de Clubautomotriz.com en plataforma Wordpress bajo plantilla ClassiPress.",
    skills: ["WordPress", "ClassiPress", "PHP", "Desarrollo Web"]
  },
  {
    id: 14,
    company: "XHOST",
    position: "Programador PHP",
    period: "may. 2016 - jul. 2016 · 3 meses",
    location: "Provincia de Concepción, Chile",
    type: "Jornada completa",
    description: "Realización de una plataforma para Curimapu de Chillan, usando PHP normal, jQuery y maquetado CSS3, base de datos SQL Server y framework Bootstrap.",
    skills: ["PHP", "jQuery", "CSS3", "SQL Server", "Bootstrap"]
  },
  {
    id: 15,
    company: "Colegio Andrés Bello",
    position: "Programador en Práctica",
    period: "feb. 2015 - mar. 2015 · 2 meses",
    location: "Chiguayante",
    type: "Práctica profesional",
    description: "Desarrollador de plataforma ASP.NET MVC 3 de recursos humanos, para lo cual, además utilicé Microsoft SQL Server.",
    skills: ["ASP.NET MVC", "Microsoft SQL Server", "C#", "Recursos Humanos"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experiencia Laboral</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software y tecnología
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experienceData.map((experience) => (
              <div key={experience.id} className="relative mb-12 ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-14 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Experience card */}
                <div className="experience-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold mb-2">
                        {experience.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm mb-3 text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {experience.period}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {experience.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;