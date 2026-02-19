import { aboutContent } from '../data';

const About = () => {
  const techSkills = {
    "Backend": ["Spring Boot", "NodeJS", "ExpressJS", "NestJS", "Laravel"],
    "Frontend": ["React", "Next.js", "VueJS"],
    "Base de datos": ["PostgreSQL", "MongoDB", "SQL Server", "MySQL", "Oracle", "DB2"],
    "CI/CD": ["AWS", "Docker", "Jenkins"],
    "Plataformas": ["Google Gemini", "ChatGPT", "Github", "Figma", "VS Code", "Antigravity"],
    "Automatización": ["Github Actions", "Railway", "Vercel"]
  };

  return (
    <section id="about" className="about-section py-20 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl md:text-5xl font-bold mb-4">
            {aboutContent.title}
          </h2>
          <p className="about-text text-xl max-w-2xl mx-auto">
            {aboutContent.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="about-title text-2xl font-bold mb-8 text-center">Habilidades Técnicas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(techSkills).map(([category, items]) => (
              <div key={category} className="bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
