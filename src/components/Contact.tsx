import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import DecorativeWheel from "./DecorativeWheel";
import RotatingWheel from "./RotatingWheel";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'service_3qw3g58', // Your service ID
        'template_xo0zewa', // Your template ID
        formRef.current,
        '_iHa2oUG5Rs6ew5Xe' // Your public key
      );
      
      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      formRef.current.reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-t from-primary/5 to-background relative overflow-hidden"
    >
      {/* Decorative faded wheel, bottom left */}
      <RotatingWheel size={180} opacity={11} className="bottom-8 left-6 md:bottom-16 md:left-24" />
      
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
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden fields for additional context */}
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                <input type="hidden" name="reply_to" value="" />
                
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                    onChange={(e) => {
                      // Update the reply_to hidden field
                      const replyToField = formRef.current?.querySelector('input[name="reply_to"]') as HTMLInputElement;
                      if (replyToField) {
                        const emailField = formRef.current?.querySelector('input[name="user_email"]') as HTMLInputElement;
                        replyToField.value = emailField?.value || '';
                      }
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      // Update the reply_to hidden field
                      const replyToField = formRef.current?.querySelector('input[name="reply_to"]') as HTMLInputElement;
                      if (replyToField) {
                        replyToField.value = e.target.value;
                      }
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Say Hello'}
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
