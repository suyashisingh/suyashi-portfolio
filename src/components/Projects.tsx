
const Projects = () => {
  const projects = [
    {
      title: "NIFTY/BANKNIFTY Price Movement Predictor",
      description: "A machine learning-based system predicting price movements of NIFTY 50 and BANKNIFTY using historical data, sentiment analysis, and technical indicators. Features LSTM, XGBoost, Prophet models, with deployment options like Streamlit dashboard, FastAPI REST API, and Telegram bot notifications.",
      technologies: ["Python", "LSTM", "XGBoost", "Prophet", "Streamlit", "FastAPI", "Telegram Bot"],
      featured: true
    },
    {
      title: "AI Text Detector",
      description: "An NLP project detecting AI-generated vs. human-written text using logistic regression, decision trees, and neural networks. Aims to support educators, researchers, and content creators.",
      technologies: ["Python", "NLP", "Logistic Regression", "Decision Trees", "Neural Networks"],
      featured: true
    },
    {
      title: "EcoStride",
      description: "A mobile app built with Android Studio that helps users track and reduce their carbon footprint. Features eco-tips, goal tracking, and daily challenges to promote sustainable living.",
      technologies: ["Android Studio", "Java", "Mobile Development", "UI/UX"],
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-gradient-to-r from-blue-500 to-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Services & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Software Development",
                "ML Engineering", 
                "Data Analysis",
                "Full-Stack Development",
                "Data Engineering",
                "DevOps",
                "Technical Product Management",
                "AI Engineering",
                "BI Analysis",
                "Cloud Engineering",
                "Systems Analysis"
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 text-center border border-border hover:shadow-md transition-shadow duration-200">
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
