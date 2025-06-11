
const Experience = () => {
  const experiences = [
    {
      company: "Cisco",
      role: "Campus Ambassador",
      period: "December 2024 – Present",
      description: "Representing Cisco on campus, fostering student engagement, and promoting technology-driven initiatives.",
      current: true
    },
    {
      company: "HashStudioz",
      role: "Machine Learning Engineer Intern",
      period: "Summer 2025",
      description: "Developing stock market prediction models using data preprocessing, model training, and evaluation.",
      current: false
    },
    {
      company: "ONGC",
      role: "Project ICE Intern",
      period: "Summer 2024",
      description: "Worked on Project ICE, utilizing ABAP SAP and BTP to enhance system workflows and collaborate with cross-functional teams.",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-1">{exp.role}</h3>
                      <h4 className="text-xl text-primary font-medium">{exp.company}</h4>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                      <span className="text-muted-foreground">{exp.period}</span>
                      {exp.current && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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
