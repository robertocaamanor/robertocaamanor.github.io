import { skills, aboutContent, personalInfo } from '../data';

const About = () => {

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="about-history-card rounded-2xl p-8 mb-8 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">{aboutContent.historyTitle}</h3>
              <p className="about-history-text leading-relaxed">
                {personalInfo.description.about}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="about-experience-card p-6 rounded-xl text-center transition-all duration-300">
                <div className="about-experience-number text-3xl font-bold mb-2">{personalInfo.yearsExperience}</div>
                <div className="about-text">{aboutContent.experienceLabel}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="about-title text-2xl font-bold mb-8">{aboutContent.skillsTitle}</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="about-text font-medium">{skill.name}</span>
                    <span className="about-text">{skill.level}%</span>
                  </div>
                  <div className="skills-progress-bg rounded-full h-3 transition-colors duration-200">
                    <div 
                      className="skills-progress-fill h-3 rounded-full transition-all duration-1000 ease-out"
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
