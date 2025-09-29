import React, { useRef } from 'react';
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
  DocumentArrowDownIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';

const CV: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `CV_${personalInfo.fullName.replace(/\s+/g, '_')}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
          print-color-adjust: exact;
        }
        
        .print-break {
          page-break-before: always;
        }
        
        .print-avoid-break {
          page-break-inside: avoid;
        }
        
        .print-hide {
          display: none !important;
        }
      }
    `
  });

  const formatPeriod = (period: string) => {
    return period.replace('·', '|').replace('actualidad', 'Presente');
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
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                Descargar PDF
              </button>
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
              en el desarrollo de software, he liderado proyectos de transformación digital y 
              he sido fundador de mi propia startup tecnológica.
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

          {/* Experiencia Laboral */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
              Experiencia Laboral
            </h3>
            <div className="space-y-6">
              {experienceData.slice(0, 8).map((exp, index) => (
                <div key={exp.id} className={`${index > 3 ? 'print-break' : ''} print-avoid-break cv-item`}>
                  <div className="border-l-4 border-blue-600 pl-4 experience-item hover:border-blue-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{exp.position}</h4>
                        <div className="flex items-center gap-2 text-blue-700 font-medium">
                          <BuildingOfficeIcon className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 sm:text-right">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{formatPeriod(exp.period)}</span>
                        </div>
                        <div className="text-xs">{exp.location}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.slice(0, 6).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 6 && (
                        <span className="text-xs text-gray-500">
                          +{exp.skills.length - 6} más
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Segunda página */}
          <div className="print-break">
            {/* Educación */}
            <section className="mb-8 print-avoid-break">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                Educación
              </h3>
              <div className="space-y-4">
                {cvData.education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-green-600 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                        <div className="flex items-center gap-2 text-green-700">
                          <AcademicCapIcon className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <p className="text-sm text-gray-600">{edu.description}</p>
                      </div>
                      <div className="text-sm text-gray-600 text-right">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
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
            <section className="mb-8 print-avoid-break">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                Certificaciones
              </h3>
              <div className="grid gap-4">
                {cvData.certifications.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                        <p className="text-blue-600 font-medium">{cert.issuer}</p>
                        <p className="text-sm text-gray-600">{cert.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Logros Destacados */}
            <section className="mb-8 print-avoid-break">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                Logros Destacados
              </h3>
              <div className="space-y-4">
                {cvData.achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-yellow-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <TrophyIcon className="w-4 h-4 text-yellow-600" />
                          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">{achievement.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Grid de Idiomas y Habilidades Blandas */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Idiomas */}
              <section className="print-avoid-break">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                  Idiomas
                </h3>
                <div className="space-y-3">
                  {cvData.languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">{lang.name}</span>
                        <span className="text-sm text-gray-600">{lang.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full language-progress"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Habilidades Blandas */}
              <section className="print-avoid-break">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                  Habilidades Blandas
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {cvData.softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{skill}</span>
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
                Este documento fue generado automáticamente el {new Date().toLocaleDateString('es-ES')} 
                desde el portafolio web de {personalInfo.fullName}
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