
import { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Brain, Smartphone } from 'lucide-react';
import RotatingWheel from "./RotatingWheel";
import SectionWrapper from "./SectionWrapper";
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
    icon: <Brain className="h-6 w-6" />,
    featured: true,
    category: "Machine Learning"
  }, {
    title: "AI Text Detector",
    description: "An NLP project detecting AI-generated vs. human-written text using logistic regression, decision trees, and neural networks. Aims to support educators, researchers, and content creators.",
    tech: ["Python", "NLP", "TensorFlow", "Scikit-learn"],
    icon: <Code className="h-6 w-6" />,
    featured: false,
    category: "AI/ML"
  }, {
    title: "EcoStride",
    description: "A mobile app built with Android Studio that helps users track and reduce their carbon footprint. Features eco-tips, goal tracking, and daily challenges to promote sustainable living.",
    tech: ["Android Studio", "Java", "SQLite", "Firebase"],
    icon: <Smartphone className="h-6 w-6" />,
    featured: false,
    category: "Mobile Development"
  }];
  return (
    <SectionWrapper id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Decorative faded wheel, top left, now animated */}
      <RotatingWheel size={170} opacity={10} className="top-9 left-6 md:top-16 md:left-16" />
      <div className="container mx-auto px-6">
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
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out ${project.featured ? 'lg:grid-cols-2' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`bg-card rounded-xl shadow-lg hover:shadow-xl hover-scale transition-all duration-300 border border-border/50 overflow-hidden ${project.featured ? 'grid lg:grid-cols-2 gap-0' : 'p-8'}`}>
                {project.featured}
                <div className={project.featured ? 'p-8' : ''}>
                  {!project.featured && (
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg hover-scale transition" data-tooltip={project.category}>
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-secondary rounded-lg hover-scale transition-colors" data-tooltip="View Source">
                          <Github className="h-5 w-5 text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-secondary rounded-lg hover-scale transition-colors" data-tooltip="Demo / Live">
                          <ExternalLink className="h-5 w-5 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-accent/90 transition" data-tooltip={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* REMOVE the buttons for featured project */}
                  {project.featured && null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Projects;
