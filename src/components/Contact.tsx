
import { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
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

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-t from-primary/5 to-background relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 transform -skew-y-1"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 text-center">
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <Send className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm open for new opportunities - especially ambitious or large projects. 
            However, my inbox is always open. Whether you have a question or just want 
            to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-700 ease-out delay-200">
              <h4 className="text-xl font-bold text-foreground mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <a 
                  href="mailto:suyasisighh@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">suyasisighh@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+917011776326"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91-7011776326</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/suyashisingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/suyashisingh</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/suyashisingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-muted-foreground">github.com/suyashisingh</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-700 ease-out delay-400">
              <h4 className="text-xl font-bold text-foreground mb-8">Send a Message</h4>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Say Hello
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
