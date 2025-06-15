
import { useState, useEffect } from 'react';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Cursor Following Circle */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-br from-accent/60 via-primary/40 to-primary/0 pointer-events-none z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          filter: 'blur(40px)',
        }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://i.postimg.cc/gkcBtRgD/DSC04218.jpg" 
                  alt="Suyashi Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              G'day, I'm{' '}
              <span className="block">
                Suyashi Singh,
              </span>
              <span className="text-primary text-4xl md:text-5xl block mt-2">
                I build things for the digital world
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Final year IT student @ MIT Manipal. Passionate about software dev, ML, and full-stack projects. Interested in secure systems, product design, and building meaningful tech experiences.
            </p>

            {/* Social & Resume Links */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 pt-8 gap-4 sm:gap-0">
              {/* Social */}
              <div className="flex space-x-6">
                <a
                  href="https://github.com/suyashisingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/suyashisingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              {/* View Resume */}
              <div className="flex items-center mt-4 sm:mt-0">
                <a
                  href="/lovable-uploads/00a8e0c6-3d0a-48a9-9575-de6f9ca88093.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg text-base font-medium hover:bg-primary/90 hover:text-primary-foreground transition-all duration-200 border border-secondary/30 shadow hover:shadow-md
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="View Resume"
                >
                  <Download className="w-5 h-5" /> View Resume
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all duration-200 border border-primary/20 shadow-lg hover:shadow-xl
                transform transition-transform active:scale-110 hover:scale-105 focus:scale-105"
                style={{ willChange: "transform" }}
              >
                Contact me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

