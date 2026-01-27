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
    },
    {
      id: 11,
      name: "Curso de Claude AI",
      issuer: "Platzi",
      date: "Enero 2026",
      credentialId: "55227835-a9b1-4c49-b71c-f1c397374616-e0ea33d0-7391-4a1c-978c-e4b16ec63e06",
      description: "Desarrollo con Claude AI y aplicaciones de inteligencia artificial"
    },
    {
      id: 12,
      name: "Curso de Next.js Avanzado",
      issuer: "Platzi",
      date: "Enero 2026",
      credentialId: "9b40cf5b-43ad-4986-8e0e-0bdca0846e2b-d8c78f2d-57ab-4855-8f4f-22e9a74c100c",
      description: "Técnicas avanzadas de desarrollo con Next.js"
    },
    {
      id: 13,
      name: "Curso de Prompt Engineering",
      issuer: "Platzi",
      date: "Enero 2026",
      credentialId: "56c72fb1-90f3-490b-805d-d798a5261790-a3854eb7-9349-4ec7-b0f0-05f7d90a8e90",
      description: "Fundamentos y técnicas avanzadas de Prompt Engineering"
    },
    {
      id: 14,
      name: "Curso de Gemini",
      issuer: "Platzi",
      date: "Diciembre 2025",
      credentialId: "3fa5d447-7bab-45be-a0ba-e75dd4f944dd",
      description: "Desarrollo con Google Gemini API"
    },
    {
      id: 15,
      name: "Curso de Next.js con GraphQL",
      issuer: "Platzi",
      date: "Diciembre 2025",
      credentialId: "8c9dfba7-a77a-4800-9f4e-1dfd2e2d2a20-468c75ec-69bb-4357-8afe-af126c6a58ea",
      description: "Integración de Next.js con GraphQL para APIs modernas"
    },
    {
      id: 16,
      name: "Curso de Windsurf AI",
      issuer: "Platzi",
      date: "Diciembre 2025",
      credentialId: "6079a15d-6678-4059-86b7-8fdeac32ddad",
      description: "Desarrollo con Windsurf AI"
    },
    {
      id: 17,
      name: "Curso de ChatGPT",
      issuer: "Platzi",
      date: "Noviembre 2025",
      credentialId: "6e3666a1-863e-4a5f-a394-c50865a098ab",
      description: "Desarrollo de aplicaciones con ChatGPT API"
    },
    {
      id: 18,
      name: "Curso de GraphQL con Node.js",
      issuer: "Platzi",
      date: "Noviembre 2025",
      credentialId: "b8d940cf-ec5e-45c0-9087-a671020a331a",
      description: "Desarrollo de APIs GraphQL con Node.js"
    },
    {
      id: 19,
      name: "Curso de Java Spring Boot",
      issuer: "Platzi",
      date: "Noviembre 2025",
      credentialId: "3d5fbdbc-41dd-4fb0-a13e-be463ca90672",
      description: "Desarrollo de aplicaciones con Spring Boot"
    },
    {
      id: 20,
      name: "Curso Microsoft Copilot 365. IA Generativa en Microsoft 365",
      issuer: "Udemy",
      date: "Octubre 2025",
      credentialId: "UC-5e6501de-98e0-4394-a377-6f34ddd803c2",
      description: "Inteligencia artificial generativa con Microsoft Copilot en Microsoft 365"
    },
    {
      id: 21,
      name: "Curso de API REST con Javascript",
      issuer: "Platzi",
      date: "Octubre 2025",
      credentialId: "49edcc2e-4624-4635-a1d1-7acd63c2db53",
      description: "Desarrollo de APIs REST con JavaScript"
    },
    {
      id: 22,
      name: "Curso de PostgreSQL",
      issuer: "Platzi",
      date: "Octubre 2025",
      credentialId: "36f491aa-ae2d-4e27-b36d-3e344838a2ae",
      description: "Base de datos relacional con PostgreSQL"
    },
    {
      id: 23,
      name: "Curso de Web Scraping con Python",
      issuer: "Platzi",
      date: "Octubre 2025",
      credentialId: "e1eb3e60-1200-4396-9a36-5cc1cc6d083b",
      description: "Web scraping y extracción de datos con Python"
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
      title: "Implementación Microservicios SAG",
      description: "Desarrollo de arquitectura de microservicios para transformación digital en SAG",
      year: "2021"
    },
    {
      title: "Implementación de e-commerce y blog en Nxtara",
      description: "Desarrollo completo de plataforma e-commerce y blog corporativo utilizando React, Spring Boot, NextJS y PostgreSQL",
      year: "2025"
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