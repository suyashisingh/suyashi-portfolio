
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 px-2">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="flex-shrink-0 space-y-2 text-center md:text-left">
          <p className="text-lg font-bold text-primary">Suyashi Singh</p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()}. Built with passion and React.<br />
            Designed for impact, coded for excellence.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="mailto:suyashi.singh@email.com" className="hover:text-primary transition group" aria-label="Email">
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/suyashisingh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition group">
              <Github className="h-5 w-5 group-hover:-rotate-12 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/suyashisingh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition group">
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <nav className="flex gap-5 text-sm text-muted-foreground mt-1">
            <a href="#about" className="hover:text-primary transition story-link">About</a>
            <a href="#skills" className="hover:text-primary transition story-link">Skills</a>
            <a href="#projects" className="hover:text-primary transition story-link">Projects</a>
            <a href="#contact" className="hover:text-primary transition story-link">Contact</a>
          </nav>
          <p className="text-xs text-muted-foreground mt-2">suyashi.singh@email.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
