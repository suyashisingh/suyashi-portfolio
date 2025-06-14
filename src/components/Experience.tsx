
import { useEffect, useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (wheelRef.current) {
        const scrolled = window.pageYOffset;
        const rotation = scrolled * 0.2;
        wheelRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "Cisco",
      role: "Campus Ambassador",
      period: "December 2024 – Present",
      description: "Representing Cisco on campus, fostering student engagement, and promoting technology-driven initiatives.",
      logo: "/lovable-uploads/737e76f8-0be6-4c49-9066-00dcf831c183.png"
    },
    {
      company: "HashStudioz",
      role: "Machine Learning Engineer Intern",
      period: "Summer 2025",
      description: "Developing stock market prediction models using data preprocessing, model training, and evaluation.",
      logo: "/lovable-uploads/e9db56a4-4ad8-4259-87eb-5d49e5b549a3.png"
    },
    {
      company: "ONGC",
      role: "Project ICE Intern",
      period: "Summer 2024",
      description: "Worked with ABAP SAP and BTP to enhance system workflows and collaborate with cross-functional teams.",
      logo: "/lovable-uploads/2570e833-d1ec-463c-a7fa-2f766a6a4504.png"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      {/* Animated steering wheel */}
      <div 
        ref={wheelRef}
        className="absolute top-20 right-10 w-32 h-32 opacity-10 pointer-events-none"
      >
        <div className="w-full h-full border-8 border-primary rounded-full relative">
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-2 left-1/2 w-1 h-6 bg-primary transform -translate-x-1/2"></div>
          <div className="absolute bottom-2 left-1/2 w-1 h-6 bg-primary transform -translate-x-1/2"></div>
          <div className="absolute left-2 top-1/2 w-6 h-1 bg-primary transform -translate-y-1/2"></div>
          <div className="absolute right-2 top-1/2 w-6 h-1 bg-primary transform -translate-y-1/2"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-300"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-md">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground font-medium mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
