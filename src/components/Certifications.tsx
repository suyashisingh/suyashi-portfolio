
import { useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

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
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      date: "Dec 2024",
      status: "No Expiration Date",
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Meta",
      date: "Nov 2024",
      status: "No Expiration Date", 
      icon: "🌐",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Data Science with Python",
      issuer: "IBM",
      date: "Oct 2024",
      status: "No Expiration Date",
      icon: "🐍",
      color: "from-yellow-500 to-red-500"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "Sep 2024",
      status: "No Expiration Date",
      icon: "☁️",
      color: "from-orange-500 to-pink-500"
    },
    {
      title: "React Development",
      issuer: "Meta",
      date: "Aug 2024",
      status: "No Expiration Date",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Database Management",
      issuer: "Oracle",
      date: "Jul 2024",
      status: "No Expiration Date",
      icon: "🗄️",
      color: "from-red-500 to-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
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
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl mb-4`}>
                    {cert.icon}
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
