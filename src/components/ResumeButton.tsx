
import { Download } from "lucide-react";

const RESUME_URL = "/lovable-uploads/Suyashi_Singh_Resume.pdf"; // Place your PDF in lovable-uploads!

const ResumeButton = () => (
  <a
    href={RESUME_URL}
    download
    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 border border-primary/20 font-semibold text-base hover:bg-primary/90 group"
    aria-label="Download Resume"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="h-5 w-5 group-hover:animate-bounce" />
    Download Resume
  </a>
);

export default ResumeButton;
