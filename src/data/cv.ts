import type { CVData, PDFConfig } from '../types';

// Datos específicos para el CV
export const cvData: CVData = {
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
      name: "Curso de FastAPI",
      issuer: "Platzi",
      date: "Septiembre 2025",
      credentialId: "bf74beed-b291-48cc-8b55-1ced4bda7642",
      description: "Desarrollo de APIs modernas con FastAPI y Python"
    },
    {
      id: 2,
      name: "Curso de Git y GitHub",
      issuer: "Platzi",
      date: "Septiembre 2025",
      credentialId: "e2419ef7-da30-4669-9943-4e1f079251f1",
      description: "Control de versiones y colaboración con Git y GitHub"
    },
    {
      id: 3,
      name: "Curso de React Avanzado",
      issuer: "Platzi",
      date: "Septiembre 2025",
      credentialId: "61decb1e-eef7-4300-9cfe-5f148157f152",
      description: "Técnicas avanzadas de desarrollo con React"
    },
    {
      id: 4,
      name: "Curso de Web Apps y Logic Apps en Azure",
      issuer: "Platzi",
      date: "Septiembre 2025",
      credentialId: "bac2d2a4-c4f6-4a38-afaa-0d4d74ef7029",
      description: "Desarrollo y despliegue de aplicaciones en Azure"
    },
    {
      id: 5,
      name: "Curso de Azure DevOps: Flujos de CI/CD",
      issuer: "Platzi",
      date: "Agosto 2025",
      credentialId: "71eac6bd-bd62-4d8d-a467-1bf8fc1c5a32",
      description: "Implementación de pipelines CI/CD con Azure DevOps"
    },
    {
      id: 6,
      name: "Curso de Backend con NestJS",
      issuer: "Platzi",
      date: "Agosto 2025",
      credentialId: "88b4b15a-1cfd-472a-8358-639bbd4a0c54",
      description: "Desarrollo de APIs robustas con NestJS y TypeScript"
    },
    {
      id: 7,
      name: "Curso de React.js con TypeScript",
      issuer: "Platzi",
      date: "Agosto 2025",
      credentialId: "fc23b503-40cf-4641-af4d-39c15024fb60",
      description: "Desarrollo frontend tipado con React y TypeScript"
    },
    {
      id: 8,
      name: "Curso de TypeScript",
      issuer: "Platzi",
      date: "Agosto 2025",
      credentialId: "5b33b44c-a915-444f-b438-8743527ab7b6",
      description: "Fundamentos y características avanzadas de TypeScript"
    },
    {
      id: 9,
      name: "Curso de React.js",
      issuer: "Platzi",
      date: "Julio 2025",
      credentialId: "77d4672b-735d-4ffd-80c0-f0b9a07b59c9",
      description: "Fundamentos de desarrollo con React.js"
    },
    {
      id: 10,
      name: "Curso de Java Spring",
      issuer: "Platzi",
      date: "Mayo 2025",
      credentialId: "cc639603-55f7-4235-a3c1-5d7f06402e71",
      description: "Desarrollo de aplicaciones enterprise con Spring Framework"
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
export const pdfConfig: PDFConfig = {
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