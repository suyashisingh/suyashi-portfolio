
import { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Brain, Smartphone } from 'lucide-react';
import RotatingWheel from "./RotatingWheel";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const projects = [{
    title: "NIFTY/BANKNIFTY Price Movement Predictor",
    description: "A machine learning-based system predicting price movements of NIFTY 50 and BANKNIFTY using historical data, sentiment analysis, and technical indicators. Features LSTM, XGBoost, Prophet models, with deployment options like Streamlit dashboard, FastAPI REST API, and Telegram bot notifications.",
    tech: ["Python", "LSTM", "XGBoost", "Streamlit", "FastAPI"],
    // Distinct icon different from AI Text Detector and mobile
    icon: <Brain className="h-6 w-6" />,
    featured: true,
    category: "Machine Learning",
    // Added dummy links for demonstration; replace with real URLs if you have them
    github: "https://github.com/yourusername/nifty-banknifty-predictor",
    external: "https://nifty-predictor-demo.example.com"
  }, {
    title: "AI Text Detector",
    description: "An NLP project detecting AI-generated vs. human-written text using logistic regression, decision trees, and neural networks. Aims to support educators, researchers, and content creators.",
    tech: ["Python", "NLP", "TensorFlow", "Scikit-learn"],
    icon: <Code className="h-6 w-6" />,
    featured: false,
    category: "AI/ML",
    github: "https://github.com/yourusername/ai-text-detector",
    external: "https://ai-text-detector-demo.example.com"
  }, {
    title: "EcoStride",
    description: "A mobile app built with Android Studio that helps users track and reduce their carbon footprint. Features eco-tips, goal tracking, and daily challenges to promote sustainable living.",
    tech: ["Android Studio", "Java", "SQLite", "Firebase"],
    icon: <Smartphone className="h-6 w-6" />,
    featured: false,
    category: "Mobile Development",
    github: "https://github.com/yourusername/ecostride",
    external: "https://ecostride-demo.example.com"
  }];
  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Decorative RotatingWheel */}
      <RotatingWheel
        size={120}
        opacity={0.09}
        style={{ bottom: 20, right: 12, position: "absolute", zIndex: 0 }}
        className="hidden md:block"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Things I've Worked on, Some of Them
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in software development, machine learning, and mobile app development
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Uniform card format */}
              <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-110 focus:scale-105 border border-border/50 overflow-hidden p-8 flex gap-6 items-start cursor-pointer">
                {/* Icon box */}
                <div className="p-3 md:p-4 bg-primary/10 rounded-lg flex items-center justify-center" style={{ width: 56, height: 56, minWidth: 56, minHeight: 56 }}>
                  {project.icon}
                </div>
                {/* Main info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                    </div>
                    {/* Show GitHub/External links on all projects now, including NIFTY project */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-secondary rounded-lg transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github className="h-5 w-5 text-muted-foreground" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-secondary rounded-lg transition-colors"
                          aria-label="Open external link"
                        >
                          <ExternalLink className="h-5 w-5 text-muted-foreground" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full transition-colors duration-200 transform hover:scale-110 active:scale-115 focus:scale-110 cursor-pointer"
                        tabIndex={0}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

