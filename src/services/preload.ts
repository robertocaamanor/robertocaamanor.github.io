import { login } from './api';
import { experienceData } from '../data/experience';
import { projects } from '../data/projects';
import { cvData } from '../data/cv';

const API_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend-api.onrender.com';

export const preloadData = async () => {
  try {
    console.log('🔐 Iniciando precarga de datos...');
    
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.warn('⚠️ Credenciales de admin no configuradas en .env');
      return;
    }

    // Autenticación con timeout
    const authResponse = await Promise.race([
      login(adminEmail, adminPassword),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout de autenticación')), 10000)
      )
    ]) as any;
    
    const token = authResponse.access_token;

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    // Cargar experiencias
    console.log('📋 Cargando experiencias...');
    const existingExperiencesRes = await fetch(`${API_URL}/api/experiences`);
    const existingExperiences = await existingExperiencesRes.json();
    const existingExpCompanies = existingExperiences.map((e: any) => e.company);

    for (const exp of experienceData) {
      if (existingExpCompanies.includes(exp.company)) {
        continue;
      }
      try {
        await fetch(`${API_URL}/api/experiences`, {
          method: 'POST',
          headers,
          body: JSON.stringify(exp)
        });
      } catch (error) {
        console.error(`Error cargando experiencia ${exp.company}:`, error);
      }
    }

    // Cargar proyectos
    console.log('🚀 Cargando proyectos...');
    const existingProjectsRes = await fetch(`${API_URL}/api/projects`);
    const existingProjects = await existingProjectsRes.json();
    const existingProjectTitles = existingProjects.map((p: any) => p.title);

    for (const project of projects) {
      if (existingProjectTitles.includes(project.title)) {
        continue;
      }
      try {
        const projectData = {
          title: project.title,
          description: project.description,
          image: project.image,
          technologies: project.technologies,
          githubUrl: typeof project.github === 'string' ? project.github : project.github?.backend || project.github?.frontend,
          liveUrl: project.demo
        };
        await fetch(`${API_URL}/api/projects`, {
          method: 'POST',
          headers,
          body: JSON.stringify(projectData)
        });
      } catch (error) {
        console.error(`Error cargando proyecto ${project.title}:`, error);
      }
    }

    // Cargar certificaciones
    console.log('🎓 Cargando certificaciones...');
    const existingCertificationsRes = await fetch(`${API_URL}/api/certifications`);
    const existingCertifications = await existingCertificationsRes.json();
    const existingCertIds = existingCertifications.map((c: any) => c.credentialId);

    for (const cert of cvData.certifications) {
      if (existingCertIds.includes(cert.credentialId)) {
        continue;
      }
      try {
        await fetch(`${API_URL}/api/certifications`, {
          method: 'POST',
          headers,
          body: JSON.stringify(cert)
        });
      } catch (error) {
        console.error(`Error cargando certificación ${cert.name}:`, error);
      }
    }

    // Cargar educación
    console.log('🏫 Cargando educación...');
    const existingEducationRes = await fetch(`${API_URL}/api/education`);
    const existingEducation = await existingEducationRes.json();
    const existingEduDegrees = existingEducation.map((e: any) => e.degree);

    for (const edu of cvData.education) {
      if (existingEduDegrees.includes(edu.degree)) {
        continue;
      }
      try {
        await fetch(`${API_URL}/api/education`, {
          method: 'POST',
          headers,
          body: JSON.stringify(edu)
        });
      } catch (error) {
        console.error(`Error cargando educación ${edu.institution}:`, error);
      }
    }

    console.log('✅ Precarga de datos completada');
  } catch (error) {
    console.error('❌ Error en la precarga de datos:', error);
  }
};
