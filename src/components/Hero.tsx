
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-600 p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                S
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent">
              Suyashi Singh
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Passionate about technology and innovation. Software Developer | ML Engineer | Full-Stack Developer
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Final-year IT student at Manipal Institute of Technology, driven by a desire to lead and make a positive impact through technology.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com/in/suyashisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/suyashisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Let's Connect!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
