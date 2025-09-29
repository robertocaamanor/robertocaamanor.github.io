// Datos específicos para el CV
export const cvData = {
  // Información de encabezado
  header: {
    title: "Curriculum Vitae",
    lastUpdated: "Actualizado: Septiembre 2025",
    version: "v2.0"
  },
  
  // Educación
  education: [
    {
      id: 1,
      institution: "Instituto Profesional Virginio Gómez",
      degree: "Técnico de Nivel Superior en Computación e Informática",
      period: "2011 - 2014",
      location: "Chile",
      description: "Especialización en TI, Programación y Hardware. Programación, Base de datos, Desarrollo de sistemas, Especificación de Requerimientos, Mantención de Hardware"
    },
    {
      id: 2,
      institution: "Instituto Conosur",
      degree: "Licenciatura en Armado y Mantención de PC e Inglés",
      period: "2015 - 2017",
      location: "Chile",
      description: "Certificación Microsoft. Curso de Armado y Mantención de PC con Certificación Microsoft e Inglés Medio"
    }
  ],
  
  // Certificaciones
  certifications: [
    {
      id: 1,
      name: "React Developer",
      issuer: "Meta",
      date: "2023",
      description: "Certificación en desarrollo con React y ecosystem moderno"
    },
    {
      id: 2,
      name: "Spring Boot Expert",
      issuer: "Oracle",
      date: "2022",
      description: "Certificación en desarrollo backend con Spring Boot"
    },
    {
      id: 3,
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2021",
      description: "Fundamentos de AWS Cloud Computing"
    }
  ],
  
  // Idiomas
  languages: [
    {
      name: "Español",
      level: "Nativo",
      percentage: 100
    },
    {
      name: "Inglés",
      level: "Intermedio",
      percentage: 70
    },
    {
      name: "Portugués",
      level: "Básico",
      percentage: 40
    }
  ],
  
  // Habilidades blandas
  softSkills: [
    "Liderazgo de equipos",
    "Comunicación efectiva",
    "Resolución de problemas",
    "Trabajo en equipo",
    "Adaptabilidad",
    "Pensamiento crítico",
    "Gestión del tiempo",
    "Mentoring"
  ],
  
  // Logros destacados
  achievements: [
    {
      title: "Fundador de TVenserio.com",
      description: "Creación y gestión de plataforma web especializada en industria televisiva con más de 50k usuarios mensuales",
      year: "2018"
    },
    {
      title: "Migración exitosa Mi Banco",
      description: "Lideré la migración de componentes críticos de Mi Pago a Mi Banco en Banco de Chile",
      year: "2024"
    },
    {
      title: "Implementación Microservicios SAG",
      description: "Desarrollo de arquitectura de microservicios para transformación digital en SAG",
      year: "2021"
    }
  ],
  
  // Referencias (opcional)
  references: [
    {
      name: "Disponibles bajo solicitud",
      description: "Referencias profesionales disponibles al contactar directamente"
    }
  ]
};

// Configuración del PDF
export const pdfConfig = {
  format: 'A4',
  orientation: 'portrait',
  unit: 'mm',
  margin: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  }
};