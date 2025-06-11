
const About = () => {
  const education = [
    {
      institution: "Manipal Institute of Technology, Karnataka",
      degree: "B.Tech (Expected 2026)",
      description: "Information Technology"
    },
    {
      institution: "Amity International School, Mayur Vihar",
      degree: "12th Boards",
      score: "93.2%"
    },
    {
      institution: "Amity International School, Noida",
      degree: "10th Boards",
      score: "93.6%"
    }
  ];

  const softSkills = [
    "Effective Communication",
    "Creative Problem Solving", 
    "Leadership",
    "Time Management",
    "Teamwork"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">About Me</h2>
          
          {/* Bio */}
          <div className="mb-16">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Suyashi Singh, a final-year IT student at Manipal Institute of Technology, Karnataka 
                (graduating 2026). With hands-on experience in software development, machine learning, and 
                full-stack development, I enjoy tackling real-world challenges. I'm passionate about technology, 
                leadership, and making a positive impact through my work.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow duration-200">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{edu.institution}</h4>
                  <p className="text-primary font-medium mb-1">{edu.degree}</p>
                  {edu.score && <p className="text-muted-foreground">Score: {edu.score}</p>}
                  {edu.description && <p className="text-muted-foreground">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Core Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-blue-500/10 to-teal-600/10 rounded-lg p-4 text-center border border-blue-200/20"
                >
                  <span className="text-foreground font-medium">{skill}</span>
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
