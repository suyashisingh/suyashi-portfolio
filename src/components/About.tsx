import { useEffect, useRef } from 'react';
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.1;
        imageRef.current.style.transform = `translateY(${parallax}px) rotate(${scrolled * 0.05}deg)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                My Portfolio
              </h2>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
              <p className="text-lg text-primary mb-6 leading-relaxed">Greetings, I’m Suyashi Singh, a final year IT student at Manipal Institute of Technology. With hands-on experience in Software Development, Machine Learning and Full Stack Development, I enjoy tackling real-world challenges. I'm passionate about technology, leadership, and making a positive impact through my work. Let’s connect!</p>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Having successfully delivered projects to satisfied clients worldwide, I've gained 
                valuable experience collaborating with individuals from various cultures. My journey 
                has taken me from local software development to working with international teams, 
                eventually leading me to work with companies across different domains.
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-600">
              <p className="text-muted-foreground leading-relaxed">
                I am passionate about continuous learning and growth, both in my professional and 
                personal life. Beyond my role as a software developer, I am deeply committed to 
                innovation and actively contribute to advancing technology solutions that make 
                a meaningful impact.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div ref={imageRef} className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 ease-out delay-800">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border-4 border-background shadow-2xl overflow-hidden">
                  <img src="https://i.postimg.cc/gkcBtRgD/DSC04218.jpg" alt="Suyashi Singh" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;