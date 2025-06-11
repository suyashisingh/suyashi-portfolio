
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
              <div className="space-y-4 text-left">
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <a href="mailto:suyasisighh@gmail.com" className="block text-primary hover:underline">
                    suyasisighh@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">Phone:</span>
                  <a href="tel:+917011776326" className="block text-primary hover:underline">
                    +91-7011776326
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="space-y-4 text-left">
                <div>
                  <span className="text-muted-foreground">LinkedIn:</span>
                  <a 
                    href="https://linkedin.com/in/suyashisingh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline"
                  >
                    linkedin.com/in/suyashisingh
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">GitHub:</span>
                  <a 
                    href="https://github.com/suyashisingh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline"
                  >
                    github.com/suyashisingh
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <a
            href="mailto:suyasisighh@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
