
import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect() => {
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
      company: "HashStudioz",
      position: "Machine Learning Engineer Intern",
      location: "Remote",
      duration: "Summer 2025",
      description: "Developing stock market prediction models using data preprocessing, model training, and evaluation techniques.",
      highlight: "ML Engineering"
    },
    {
      company: "ONGC",
      position: "Software Development Intern",
      location: "Onsite",
      duration: "Summer 2024",
      description: "Worked on Project ICE, utilizing ABAP SAP and BTP to enhance system workflows and collaborate with cross-functional teams.",
      highlight: "ABAP SAP"
    },
    {
      company: "Cisco",
      position: "Campus Ambassador",
      location: "MIT, Karnataka",
      duration: "December 2024 – Present",
      description: "Representing Cisco on campus, fostering student engagement, and promoting technology-driven initiatives.",
      highlight: "Leadership"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            My Work Experiences
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-700 ease-out border-l-4 border-primary pl-8 pb-8`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {exp.position} @ {exp.company}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {exp.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <div className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 ease-out delay-600">
              <div className="relative">
                <div 
                  ref={wheelRef}
                  className="w-64 h-64 border-8 border-primary/20 rounded-full relative"
                >
                  {/* Steering wheel spokes */}
                  <div className="absolute inset-8 border-4 border-primary/40 rounded-full">
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full flex items-center justify-center">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  {/* Wheel rim details */}
                  <div className="absolute top-0 left-1/2 w-2 h-8 bg-primary/60 -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-8 bg-primary/60 -translate-x-1/2"></div>
                  <div className="absolute left-0 top-1/2 w-8 h-2 bg-primary/60 -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-8 h-2 bg-primary/60 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
