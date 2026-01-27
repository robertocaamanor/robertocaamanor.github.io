// Experiencia laboral
export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  startDate?: string; // Formato: 'YYYY-MM'
  endDate?: string | null; // null significa 'actualidad'
  location: string;
  type: string;
  description: string;
  skills: string[];
  logo?: string;
}

// Función helper para calcular la duración entre dos fechas
export const calculateDuration = (startDate: string, endDate: string | null = null): string => {
  const start = new Date(startDate + '-01');
  const end = endDate ? new Date(endDate + '-01') : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years > 0 && remainingMonths > 0) {
    return `${years} ${years === 1 ? 'año' : 'años'} ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
  } else if (years > 0) {
    return `${years} ${years === 1 ? 'año' : 'años'}`;
  } else {
    return `${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
  }
};

// Función para formatear el período completo
export const formatPeriod = (startDate: string, endDate: string | null = null): string => {
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
  
  const start = new Date(startDate + '-01');
  const startMonth = months[start.getMonth()];
  const startYear = start.getFullYear();
  
  const duration = calculateDuration(startDate, endDate);
  
  if (endDate === null) {
    return `${startMonth}. ${startYear} - actualidad · ${duration}`;
  }
  
  const end = new Date(endDate + '-01');
  const endMonth = months[end.getMonth()];
  const endYear = end.getFullYear();
  
  return `${startMonth}. ${startYear} - ${endMonth}. ${endYear} · ${duration}`;
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Nxtara",
    position: "Analista Desarrollador",
    period: "", // Se calculará dinámicamente
    startDate: "2025-05",
    endDate: null, // null = actualidad
    location: "Gran Santiago, Región Metropolitana de Santiago, Chile · Presencial",
    type: "Jornada completa",
    description: "Desarrollo de nuevas funcionalidades en el sitio web de la tienda de joyerías Timantti, empleando React, Spring Boot, PostgreSQL y GIT. Implementación de blog con publicación de artículos, resolución de QAs e implementación de librerías NPM. Implementación de Google Analytics y Google Tag Manager en la página web oficial de Nxtara para medición de métricas del portal.",
    skills: ["React", "Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Git", "Microsoft Azure", "Google Tag Manager", "Google Analytics"]
  },

  {
    id: 2,
    company: "Banco de Chile",
    position: "Programador full stack",
    period: "jul. 2024 - nov. 2024 · 5 meses",
    location: "Híbrido",
    type: "Jornada completa",
    description: "Migración de componentes de Mi Pago a Mi Banco usando React Native, pruebas unitarias vía Jest, testeo de código con Sonarqube y despliegue con Jenkins.",
    skills: ["Git", "Jenkins", "React Native", "Spring Boot", "Jest", "Sonarqube"]
  },
  {
    id: 3,
    company: "BBR",
    position: "Desarrollador full stack",
    period: "ene. 2022 - jul. 2024 · 2 años 7 meses",
    location: "Las Condes",
    type: "Jornada completa",
    description: "Desarrollador en el área de solución de tienda en Java, Spring Boot, PL/SQL, Oracle, Postgres y VUE.",
    skills: ["JSON", "VueJS", "Google Cloud", "Java", "Spring Boot", "Oracle", "PostgreSQL"]
  },
  {
    id: 4,
    company: "Servicio Agrícola y Ganadero",
    position: "Desarrollador FullStack",
    period: "nov. 2019 - ene. 2022 · 2 años 3 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de proyectos de Transformación Digital para diferentes plataformas usando microservicios NodeJS, SpringBoot (Sidecar), SQL Server, Docker y MongoDB de forma externa para Emergya y Apiux.",
    skills: ["Node.js", "Git", "JSON", "Java", "Docker", "Spring Boot", "SQL Server", "MongoDB"]
  },
  {
    id: 5,
    company: "Indra",
    position: "Desarrollador Spring Boot + Angular 7",
    period: "ago. 2019 - oct. 2019 · 3 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de proyectos usando Angular 7 y Spring Boot.",
    skills: ["Git", "JSON", "Java", "Spring Boot", "Angular"]
  },
  {
    id: 6,
    company: "Ingenia Global",
    position: "Desarrollador PHP",
    period: "nov. 2018 - may. 2019 · 7 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollador de plataformas Planeta SII, Geologica, GORE Tarapacá y Campus Prevención ISL con PHP7, Wordpress, jQuery, CakePHP y MySQL.",
    skills: ["Git", "PHP", "WordPress", "jQuery", "CakePHP", "MySQL"]
  },
  {
    id: 7,
    company: "ABENIS",
    position: "Desarrollador PHP / AngularJS",
    period: "oct. 2018 - nov. 2018 · 2 meses",
    location: "Provincia de Santiago, Chile",
    type: "Outsourcing",
    description: "Desarrollador de proyectos de manera Outsourcing usando PHP + AngularJS para Conicyt usando framework Symfony, Material Design, control de versiones Mercurial y base de datos MySQL, SQL Server y MongoDB.",
    skills: ["PHP", "AngularJS", "Symfony", "Material Design", "Mercurial", "MySQL", "SQL Server", "MongoDB"]
  },
  {
    id: 8,
    company: "HS Soluciones",
    position: "Desarrollador PHP / Laravel 5.6 / VueJS",
    period: "jun. 2018 - sept. 2018 · 4 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollador de Sistema de Gestión Documental para empresa APRO usando Laravel 5.6, VueJS, gestor de paquetes NPM, control de versiones GIT usando Bitbucket y base de datos MySQL.",
    skills: ["Git", "VueJS", "Laravel", "NPM", "Bitbucket", "MySQL"]
  },
  {
    id: 9,
    company: "Nectia",
    position: "Desarrollador y Soporte Front-end",
    period: "mar. 2018 - jun. 2018 · 4 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollador de Plataformas Front-end y conexión de servicios API. Soporte y desarrollo de Plataforma 360 Factoring Security con framework AngularJS y jQuery, backend C# y control de versiones GIT y SVN.",
    skills: ["Git", "AngularJS", "jQuery", "C#", "SVN", "API"]
  },
  {
    id: 10,
    company: "Apiux Tecnología",
    position: "Programador PHP Junior",
    period: "ago. 2017 - dic. 2017 · 5 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de Plataformas para el Ministerio de Desarrollo Social realizando backend con PHP / Laravel 4, frontend con jQuery y Bootstrap, base de datos MySQL y control de versiones SVN.",
    skills: ["Laravel", "PHP", "jQuery", "Bootstrap", "MySQL", "SVN"]
  },
  {
    id: 11,
    company: "R2DA",
    position: "PHP Developer",
    period: "jun. 2017 - jul. 2017 · 2 meses",
    location: "Santiago Centro, Santiago",
    type: "Jornada completa",
    description: "Desarrollo de sistemas de gestión de servicios API REST usando PHP 7 y AngularJS, con base de datos MySQL, gestion de paquetes NPM y control de versiones GIT.",
    skills: ["Git", "AngularJS", "PHP", "MySQL", "NPM", "API REST"]
  },
  {
    id: 12,
    company: "Clubautomotriz.com",
    position: "Desarrollador Wordpress",
    period: "nov. 2016 - ene. 2017 · 3 meses",
    location: "Provincia de Concepción, Chile",
    type: "Freelance",
    description: "Desarrollo y modificación de la plataforma de Clubautomotriz.com en plataforma Wordpress bajo plantilla ClassiPress.",
    skills: ["WordPress", "ClassiPress", "PHP", "Desarrollo Web"]
  },
  {
    id: 13,
    company: "XHOST",
    position: "Programador PHP",
    period: "may. 2016 - jul. 2016 · 3 meses",
    location: "Provincia de Concepción, Chile",
    type: "Jornada completa",
    description: "Realización de una plataforma para Curimapu de Chillan, usando PHP normal, jQuery y maquetado CSS3, base de datos SQL Server y framework Bootstrap.",
    skills: ["PHP", "jQuery", "CSS3", "SQL Server", "Bootstrap"]
  },
  {
    id: 14,
    company: "Colegio Andrés Bello",
    position: "Programador en Práctica",
    period: "feb. 2015 - mar. 2015 · 2 meses",
    location: "Chiguayante",
    type: "Práctica profesional",
    description: "Desarrollador de plataforma ASP.NET MVC 3 de recursos humanos, para lo cual, además utilicé Microsoft SQL Server.",
    skills: ["ASP.NET MVC", "Microsoft SQL Server", "C#", "Recursos Humanos"]
  }
];

// Textos de la sección de experiencia
export const experienceContent = {
  title: "Experiencia Laboral",
  subtitle: "Mi trayectoria profesional en desarrollo de software y tecnología"
};