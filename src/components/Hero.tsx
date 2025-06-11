
import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

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
        className="fixed w-96 h-96 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-80 pointer-events-none z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          filter: 'blur(40px)',
        }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 p-1">
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
              I'm a skilled software developer and ML engineer with experience in building 
              full-stack applications. My expertise lies in developing applications that 
              cater to the needs of diverse clients, ensuring efficient and user-friendly solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 pt-8">
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

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all duration-200 border border-primary/20"
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
