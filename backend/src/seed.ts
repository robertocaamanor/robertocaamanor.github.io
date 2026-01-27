import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3001';

// Credenciales de administrador
const ADMIN_EMAIL = 'raristides.caamano@gmail.com';
const ADMIN_PASSWORD = 'R1p4.1991!';

// Datos de experiencia
const experiences = [
  {
    company: "Nxtara",
    position: "Analista Desarrollador",
    period: "may. 2025 - Presente",
    location: "Gran Santiago, Región Metropolitana de Santiago, Chile · Presencial",
    type: "Jornada completa",
    description: "Desarrollo de nuevas funcionalidades en el sitio web de la tienda de joyerías Timantti, empleando React, Spring Boot, PostgreSQL y GIT. Implementación de blog con publicación de artículos, resolución de QAs e implementación de librerías NPM. Implementación de Google Analytics y Google Tag Manager en la página web oficial de Nxtara para medición de métricas del portal.",
    skills: ["React", "Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Git", "Microsoft Azure", "Google Tag Manager", "Google Analytics"]
  },
  {
    company: "Banco de Chile",
    position: "Programador full stack",
    period: "jul. 2024 - nov. 2024 · 5 meses",
    location: "Híbrido",
    type: "Jornada completa",
    description: "Migración de componentes de Mi Pago a Mi Banco usando React Native, pruebas unitarias vía Jest, testeo de código con Sonarqube y despliegue con Jenkins.",
    skills: ["Git", "Jenkins", "React Native", "Spring Boot", "Jest", "Sonarqube"]
  },
  {
    company: "BBR",
    position: "Desarrollador full stack",
    period: "ene. 2022 - jul. 2024 · 2 años 7 meses",
    location: "Las Condes",
    type: "Jornada completa",
    description: "Desarrollador en el área de solución de tienda en Java, Spring Boot, PL/SQL, Oracle, Postgres y VUE.",
    skills: ["JSON", "VueJS", "Google Cloud", "Java", "Spring Boot", "Oracle", "PostgreSQL"]
  },
  {
    company: "Servicio Agrícola y Ganadero",
    position: "Desarrollador FullStack",
    period: "nov. 2019 - ene. 2022 · 2 años 3 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de proyectos de Transformación Digital para diferentes plataformas usando microservicios NodeJS, SpringBoot (Sidecar), SQL Server, Docker y MongoDB de forma externa para Emergya y Apiux.",
    skills: ["Node.js", "Git", "JSON", "Java", "Docker", "Spring Boot", "SQL Server", "MongoDB"]
  },
  {
    company: "Indra",
    position: "Desarrollador Spring Boot + Angular 7",
    period: "ago. 2019 - oct. 2019 · 3 meses",
    location: "Provincia de Santiago, Chile",
    type: "Jornada completa",
    description: "Desarrollo de proyectos usando Angular 7 y Spring Boot.",
    skills: ["Git", "JSON", "Java", "Spring Boot", "Angular"]
  }
];

// Datos de proyectos
const projects = [
  {
    title: "TVenserio.com",
    description: "Sitio web especializado en industria televisiva, música, cultura y espectáculo. Plataforma de contenidos con más de 50k usuarios mensuales, desarrollada con enfoque en SEO y experiencia de usuario.",
    image: "/tvenserio.png",
    technologies: ["WordPress", "SEO", "Adobe InDesign", "Google Analytics", "Elementor"],
    demo: "https://tvenserio.com",
  },
  {
    title: "Caamarchivos",
    description: "Canal y plataforma de televisión del recuerdo que preserva y comparte contenido audiovisual histórico. Incluye edición de video profesional y gestión de redes sociales con diseños creativos.",
    image: "/caamarchivos.png",
    technologies: ["Adobe Premiere", "Adobe Photoshop", "Adobe Illustrator", "Edición de Video", "Gestión de Redes Sociales"],
    demo: "https://www.instagram.com/caamarchivos/",
  },
  {
    title: "Archidrop",
    description: "Programa de escritorio creado con NodeJS, Electron y Typescript que descomprime archivos desde cualquier lugar a Dropbox, usado para fines personales relativos al archivismo.",
    image: "/archidrop-desktop-image.png",
    technologies: ["Node.js", "Typescript", "Electron", "TailwindCSS"],
    github: "https://github.com/robertocaamanor/archidrop-desktop",
  },
  {
    title: "Ordena tu Plata", 
    description: "Aplicación web para el control de finanzas personales que permite a los usuarios gestionar sus ingresos, gastos y presupuestos de manera eficiente y organizada.",
    image: "/ordena-tu-plata.png",
    technologies: ["NestJS", "PostgreSQL", "Next.js", "Prisma ORM", "JWT"],
    github: "https://github.com/robertocaamanor/ordena-tu-plata-backend",
  }
];

// Datos de certificaciones
const certifications = [
  {
    name: "Curso de FastAPI",
    issuer: "Platzi",
    date: "Septiembre 2025",
    credentialId: "bf74beed-b291-48cc-8b55-1ced4bda7642",
    description: "Desarrollo de APIs modernas con FastAPI y Python"
  },
  {
    name: "Curso de Git y GitHub",
    issuer: "Platzi",
    date: "Septiembre 2025",
    credentialId: "e2419ef7-da30-4669-9943-4e1f079251f1",
    description: "Control de versiones y colaboración con Git y GitHub"
  },
  {
    name: "Curso de React Avanzado",
    issuer: "Platzi",
    date: "Septiembre 2025",
    credentialId: "61decb1e-eef7-4300-9cfe-5f148157f152",
    description: "Técnicas avanzadas de desarrollo con React"
  },
  {
    name: "Curso de Web Apps y Logic Apps en Azure",
    issuer: "Platzi",
    date: "Septiembre 2025",
    credentialId: "bac2d2a4-c4f6-4a38-afaa-0d4d74ef7029",
    description: "Desarrollo y despliegue de aplicaciones en Azure"
  },
  {
    name: "Curso de Azure DevOps: Flujos de CI/CD",
    issuer: "Platzi",
    date: "Agosto 2025",
    credentialId: "71eac6bd-bd62-4d8d-a467-1bf8fc1c5a32",
    description: "Implementación de pipelines CI/CD con Azure DevOps"
  }
];

// Datos de educación
const education = [
  {
    institution: "Instituto Profesional Virginio Gómez",
    degree: "Técnico de Nivel Superior en Computación e Informática",
    period: "2011 - 2014",
    location: "Chile",
    description: "Especialización en TI, Programación y Hardware. Programación, Base de datos, Desarrollo de sistemas, Especificación de Requerimientos, Mantención de Hardware"
  },
  {
    institution: "Instituto Conosur",
    degree: "Licenciatura en Armado y Mantención de PC e Inglés",
    period: "2015 - 2017",
    location: "Chile",
    description: "Certificación Microsoft. Curso de Armado y Mantención de PC con Certificación Microsoft e Inglés Medio"
  }
];

async function seed() {
  try {
    console.log('🔐 Iniciando sesión...');
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    });
    
    const token = loginResponse.data.access_token;
    console.log('✅ Sesión iniciada correctamente\n');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    // Seed Experience
    console.log('📋 Cargando experiencias...');
    for (const exp of experiences) {
      try {
        await axios.post(`${API_URL}/experience`, exp, { headers });
        console.log(`  ✓ ${exp.position} en ${exp.company}`);
      } catch (error: any) {
        console.log(`  ✗ Error en ${exp.company}: ${error.response?.data?.message || error.message}`);
      }
    }

    // Seed Projects
    console.log('\n🚀 Cargando proyectos...');
    for (const project of projects) {
      try {
        await axios.post(`${API_URL}/project`, project, { headers });
        console.log(`  ✓ ${project.title}`);
      } catch (error: any) {
        console.log(`  ✗ Error en ${project.title}: ${error.response?.data?.message || error.message}`);
      }
    }

    // Seed Certifications
    console.log('\n🎓 Cargando certificaciones...');
    for (const cert of certifications) {
      try {
        await axios.post(`${API_URL}/certification`, cert, { headers });
        console.log(`  ✓ ${cert.name}`);
      } catch (error: any) {
        console.log(`  ✗ Error en ${cert.name}: ${error.response?.data?.message || error.message}`);
      }
    }

    // Seed Education
    console.log('\n🏫 Cargando educación...');
    for (const edu of education) {
      try {
        await axios.post(`${API_URL}/education`, edu, { headers });
        console.log(`  ✓ ${edu.degree}`);
      } catch (error: any) {
        console.log(`  ✗ Error en ${edu.institution}: ${error.response?.data?.message || error.message}`);
      }
    }

    console.log('\n✨ Seed completado exitosamente!');
  } catch (error: any) {
    console.error('❌ Error durante el seed:', error.response?.data || error.message);
    process.exit(1);
  }
}

seed();
