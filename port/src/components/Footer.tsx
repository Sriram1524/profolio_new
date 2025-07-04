
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-8 text-slate border-t border-slate/20">
      <div className="container text-center">      
        <div className="mt-6 text-xs font-mono">
          <a 
            href="#home" 
            className="inline-block py-2 px-3 hover:text-teal transition-colors"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
