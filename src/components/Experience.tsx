import React from 'react';
import { experienceData, experienceContent } from '../data';

const Experience: React.FC = () => {
  // Función para calcular el período dinámicamente
  const getPeriod = (experience: typeof experienceData[0]) => {
    if (!experience.startDate) {
      return experience.period;
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
      return `${startMonthName}. ${startYearValue} - Presente | ${duration}`;
    }
    
    const endMonthName = months[end.getMonth()];
    const endYearValue = end.getFullYear();
    return `${startMonthName}. ${startYearValue} - ${endMonthName}. ${endYearValue} | ${duration}`;
  };
  
  return (
    <section id="experience" className="experience-section py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{experienceContent.title}</h2>
          <p className="text-lg max-w-2xl mx-auto">
            {experienceContent.subtitle}
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
                          {getPeriod(experience)}
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