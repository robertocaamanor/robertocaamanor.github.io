import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { 
  personalInfo, 
  experienceData, 
  cvData
} from '../data';
import Header from './Header';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  TrophyIcon,
  ChatBubbleBottomCenterTextIcon,
  PrinterIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
const CV: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `CV_${personalInfo.fullName.replace(/\s+/g, '_')}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0.4in;
      }
      
      @media print {
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        body {
          font-size: 12px !important;
          line-height: 1.4 !important;
        }
        
        .print-break {
          page-break-before: always !important;
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        
        .print-avoid-break {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        .print-hide {
          display: none !important;
        }
        
        .experience-item {
          margin-bottom: 12px !important;
          padding: 8px 0 !important;
        }
        
        .section-spacing {
          margin-bottom: 16px !important;
        }
        
        h3 {
          margin-bottom: 8px !important;
          margin-top: 16px !important;
        }
        
        .cv-content {
          font-size: 11px !important;
        }
        
        /* Forzar colores de fondo */
        .bg-gradient-to-r {
          background: linear-gradient(to right, #1e3a8a, #1d4ed8) !important;
          color: white !important;
        }
        
        .bg-blue-50 {
          background-color: #eff6ff !important;
        }
        
        .bg-gray-50 {
          background-color: #f9fafb !important;
        }
      }
    `
  });

  const formatPeriod = (period: string) => {
    return period.replace('·', '|').replace('actualidad', 'Presente');
  };

  const getPeriod = (experience: typeof experienceData[0]) => {
    if (!experience.startDate) {
      return formatPeriod(experience.period);
    }

    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
    
    // Crear fechas de manera más explícita para evitar problemas de zona horaria
    const [startYear, startMonth] = experience.startDate.split('-').map(Number);
    const start = new Date(startYear, startMonth - 1, 1); // Mes es 0-indexed
    
    let end: Date;
    if (experience.endDate) {
      const [endYear, endMonth] = experience.endDate.split('-').map(Number);
      end = new Date(endYear, endMonth - 1, 1);
    } else {
      end = new Date();
    }
    
    // Calcular duración
    let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    let duration = '';
    if (years > 0 && remainingMonths > 0) {
      duration = `${years} ${years === 1 ? 'año' : 'años'} ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
    } else if (years > 0) {
      duration = `${years} ${years === 1 ? 'año' : 'años'}`;
    } else {
      duration = `${totalMonths} ${totalMonths === 1 ? 'mes' : 'meses'}`;
    }
    
    // Formatear período
    const startMonthName = months[start.getMonth()];
    const startYearValue = start.getFullYear();
    
    if (!experience.endDate) {
      return `${startMonthName}. ${startYearValue} | Presente | ${duration}`;
    }
    
    const endMonthName = months[end.getMonth()];
    const endYearValue = end.getFullYear();
    return `${startMonthName}. ${startYearValue} | ${endMonthName}. ${endYearValue} | ${duration}`;
  };

  const getMainSkills = () => {
    return experienceData
      .slice(0, 5)
      .flatMap(exp => exp.skills)
      .reduce((acc: Record<string, number>, skill) => {
        acc[skill] = (acc[skill] || 0) + 1;
        return acc;
      }, {});
  };

  const topSkills = Object.entries(getMainSkills())
    .sort(([, a], [, b]) => b - a)
    .slice(0, 12)
    .map(([skill]) => skill);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header para navegación */}
      <Header />
      
      <div className="pt-20 pb-8">
        {/* Controles de descarga */}
        <div className="max-w-4xl mx-auto mb-6 px-4 print-hide animate-fade-in">
          <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center hover:shadow-md transition-shadow duration-300">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Curriculum Vitae</h1>
              <p className="text-gray-600">Versión para descarga e impresión</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <PrinterIcon className="w-5 h-5" />
                Imprimir
              </button>
              {/* Botón de descarga del PDF del CV en /public */}
              <a
                href="/Curriculum vitae - Roberto Caamaño Riquelme.pdf"
                download={`CV_${personalInfo.fullName.replace(/\s+/g, '_')}.pdf`}
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Descargar CV en PDF"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 14a1 1 0 011-1h3v2H5v1a1 1 0 01-1 1H3v-3zm6-9a1 1 0 00-1 1v5H6l4 4 4-4h-2V6a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>      {/* CV Content */}
      <div 
        ref={componentRef}
        className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none print:max-w-none"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <img 
                  src={`/${personalInfo.profileImage}`} 
                  alt={personalInfo.fullName}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-28 h-28 rounded-full bg-white/30 flex items-center justify-center text-4xl font-bold">
                        ${personalInfo.fullName.split(' ').map(n => n[0]).join('')}
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.fullName}</h1>
              <h2 className="text-xl text-blue-100 mb-4">{personalInfo.profession}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-blue-200" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4 text-blue-200" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-blue-200" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeAltIcon className="w-4 h-4 text-blue-200" />
                  <span>GitHub: robertocaamanor</span>
                </div>
              </div>
            </div>
            
            <div className="text-right text-sm text-blue-100">
              <div>{cvData.header.lastUpdated}</div>
              <div className="text-xs">{cvData.header.version}</div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Perfil Profesional */}
          <section className="mb-8 print-avoid-break cv-section">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Perfil Profesional
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.description.about} Con {personalInfo.yearsExperience} años de experiencia 
              en el desarrollo de software, he formnado parte de varios proyectos de transformación digital.
            </p>
          </section>

          {/* Skills Grid */}
          <section className="mb-8 print-avoid-break cv-section">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Habilidades Técnicas Principales
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {topSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center skill-item hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Experiencia Laboral - Principales */}
          <section className="mb-6 section-spacing">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Experiencia Laboral Reciente
            </h3>
            <div className="space-y-3">
              {experienceData.slice(0, 3).map((exp) => (
                <div key={exp.id} className="print-avoid-break cv-item">
                  <div className="border-l-4 border-blue-600 pl-4 py-2 experience-item hover:border-blue-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">{exp.position}</h4>
                        <div className="flex items-center gap-2 text-blue-700 font-medium mb-1">
                          <BuildingOfficeIcon className="w-4 h-4" />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 text-right">
                        <div className="flex items-center gap-1 justify-end mb-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="text-xs">{getPeriod(exp)}</span>
                        </div>
                        <div className="text-xs">{exp.location}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-xs mb-2 leading-relaxed cv-content">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experiencia Laboral Adicional - Segunda Página */}
          <section className="mb-6 section-spacing print-break">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Experiencia Laboral Adicional
            </h3>
            <div className="space-y-2">
              {experienceData.slice(3, 8).map((exp) => (
                <div key={exp.id} className="print-avoid-break cv-item">
                  <div className="border-l-4 border-blue-500 pl-3 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{exp.position}</h4>
                        <div className="flex items-center gap-1 text-blue-700 text-xs mb-1">
                          <BuildingOfficeIcon className="w-3 h-3" />
                          <span>{exp.company}</span>
                          <span className="text-gray-500">• {exp.location}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 text-right ml-2">
                        <CalendarIcon className="w-3 h-3 inline mr-1" />
                        {getPeriod(exp)}
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-700 leading-relaxed mb-2 cv-content">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.slice(0, 8).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded text-xs border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 8 && (
                        <span className="text-xs text-gray-500 italic">
                          +{exp.skills.length - 8} más
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Resto de experiencias de forma más compacta */}
            {experienceData.length > 8 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Experiencia Adicional:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {experienceData.slice(8, 15).map((exp) => (
                    <div key={exp.id} className="text-xs bg-gray-50 p-2 rounded border-l-2 border-gray-300">
                      <div className="font-medium text-gray-900">{exp.position}</div>
                      <div className="text-gray-700">{exp.company}</div>
                      <div className="text-gray-500">{getPeriod(exp).split('|')[0].trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Tercera página */}
          <div className="print-break">
            {/* Educación */}
            <section className="mb-6 print-avoid-break section-spacing">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                Educación
              </h3>
              <div className="space-y-3">
                {cvData.education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-green-600 pl-4 print-avoid-break relative group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{edu.degree}</h4>
                        <div className="flex items-center gap-2 text-green-700 text-sm">
                          <AcademicCapIcon className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <p className="text-xs text-gray-600 cv-content leading-tight">{edu.description}</p>
                      </div>
                      <div className="text-xs text-gray-600 text-right ml-2">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="text-xs">{edu.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certificaciones */}
            <section className="mb-6 print-avoid-break section-spacing">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                Certificaciones
              </h3>
              <div className="grid gap-2">
                {cvData.certifications.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 p-3 rounded-lg print-avoid-break relative group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{cert.name}</h4>
                        <p className="text-blue-600 font-medium text-sm">{cert.issuer}</p>
                        <p className="text-xs text-gray-600 cv-content mb-1">{cert.description}</p>
                        {'credentialId' in cert && cert.credentialId && (
                          <p className="text-xs text-gray-500 font-mono">
                            ID: {cert.credentialId}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Logros Destacados */}
            <section className="mb-6 print-avoid-break section-spacing">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                Logros Destacados
              </h3>
              <div className="space-y-2">
                {cvData.achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-yellow-500 pl-4 print-avoid-break">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <TrophyIcon className="w-4 h-4 text-yellow-600" />
                          <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 cv-content leading-tight">{achievement.description}</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{achievement.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Grid de Idiomas y Habilidades Blandas */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Idiomas */}
              <section className="print-avoid-break">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-2">
                  Idiomas
                </h3>
                <div className="space-y-2">
                  {cvData.languages.map((lang, index) => (
                    <div key={index} className="print-avoid-break">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 text-sm">{lang.name}</span>
                        <span className="text-xs text-gray-600">{lang.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full language-progress"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Habilidades Blandas */}
              <section className="print-avoid-break">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-2">
                  Habilidades Blandas
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {cvData.softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ChatBubbleBottomCenterTextIcon className="w-3 h-3 text-blue-600" />
                      <span className="text-xs text-gray-700 cv-content">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="border-t-2 border-gray-200 pt-6 text-center text-sm text-gray-600">
              <p className="mb-2">
                <strong>Referencias profesionales disponibles bajo solicitud</strong>
              </p>
              <p>
                Este documento fue generado automáticamente el {new Date().toLocaleDateString('es-ES')} desde el portafolio web de {personalInfo.fullName}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Versión digital disponible en: robertocaamanor.github.io
              </p>
            </footer>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CV;