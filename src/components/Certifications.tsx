import { useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import DecorativeWheel from "./DecorativeWheel";

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const certifications = [
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google",
      date: "Jun 2024",
      status: "No Expiration Date",
      logo: "/lovable-uploads/7e8fbe9a-0fca-4cb1-8088-64636c6a80b7.png",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "Jun 2025",
      status: "No Expiration Date",
      logo: "/lovable-uploads/9d1da5db-2d60-4eaf-ac94-56cb382f4c6f.png",
      color: "from-blue-500 to-purple-600",
      isInfosys: true
    },
    {
      title: "PostgreSQL Developer",
      issuer: "Infosys Springboard",
      date: "May 2025",
      status: "No Expiration Date",
      logo: "/lovable-uploads/9d1da5db-2d60-4eaf-ac94-56cb382f4c6f.png",
      color: "from-blue-600 to-indigo-600",
      isInfosys: true
    },
    {
      title: "Digital Marketing Analytics in Practice",
      issuer: "University of Illinois Urbana-Champaign",
      date: "Apr 2025",
      status: "No Expiration Date",
      logo: "/lovable-uploads/6ebde67e-9174-4a51-a43f-01086be3aa5f.png",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Digital Marketing Analytics in Theory",
      issuer: "University of Illinois Urbana-Champaign",
      date: "Apr 2025",
      status: "No Expiration Date",
      logo: "/lovable-uploads/6ebde67e-9174-4a51-a43f-01086be3aa5f.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Marketing in a Digital World",
      issuer: "University of Illinois Urbana-Champaign",
      date: "Apr 2025",
      status: "No Expiration Date",
      logo: "/lovable-uploads/6ebde67e-9174-4a51-a43f-01086be3aa5f.png",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative faded wheel, bottom right */}
      <DecorativeWheel size={170} opacity={9} className="bottom-9 right-6 md:bottom-16 md:right-16" />
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Licenses & Certifications
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 ${cert.isInfosys ? 'p-1' : 'p-2'}`}>
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-secondary rounded-lg">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Issued {cert.date}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>{cert.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
