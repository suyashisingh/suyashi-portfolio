const Skills = () => {
  const technicalSkills = {
    "Languages": ["C++", "Python", "Java", "C", "JavaScript", "TypeScript"],
    "Frameworks": ["ReactJS", "NodeJS", "ExpressJS", "FastAPI", "Bootstrap", "Tailwind CSS"],
    "Tools": ["Git", "Docker", "Jupyter Notebook", "RStudio", "Postman", "VS Code", "MS Excel"],
    "Cloud/Databases": ["Firebase", "MongoDB"]
  };

  const coursework = [
    "Coding", "Web Development", "Networking", "Database Management", "Machine Learning"
  ];

  import DecorativeWheel from "./DecorativeWheel";

  return (
    <section id="skills" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Decorative faded wheel, bottom left */}
      <DecorativeWheel size={180} opacity={9} className="bottom-8 left-5 md:bottom-16 md:left-16" />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Skills & Expertise</h2>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="text-xl font-semibold text-primary mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Relevant Coursework</h3>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex flex-wrap gap-3 justify-center">
                {coursework.map((course, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-blue-500/10 to-teal-600/10 text-foreground px-4 py-2 rounded-full font-medium border border-blue-200/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
