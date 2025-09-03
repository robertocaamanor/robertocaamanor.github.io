const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Spring Boot', level: 90 },
    { name: 'VueJS', level: 88 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Docker', level: 60 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Acerca de mí
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desarrollador apasionado con experiencia en tecnologías modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Mi Historia</h3>
              <p className="text-blue-100 leading-relaxed">
                Soy un desarrollador full stack con más de 8 años de experiencia 
                creando aplicaciones web modernas. Me especializo en React, TypeScript, Spring Boot 
                y Node.js, siempre buscando las mejores prácticas y tecnologías emergentes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Proyectos completados</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
