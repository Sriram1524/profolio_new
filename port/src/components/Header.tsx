import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-navy-dark bg-opacity-95 shadow-md backdrop-blur-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-teal">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-teal font-mono">{`0${index + 1}.`}</span>{" "}
              {link.name}
            </a>
          ))}
          <a
            href="/resume112.pdf" // Correct relative path
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent border border-teal text-teal hover:bg-teal/10">
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-teal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] right-0 h-screen w-3/4 bg-navy-dark bg-opacity-95 backdrop-blur-sm shadow-lg z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg nav-link"
              >
                <span className="text-teal font-mono">{`0${index + 1}.`}</span>{" "}
                {link.name}
              </a>
            ))}
            <a
              href="/resume_06 .pdf" // Correct relative path
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-transparent border border-teal text-teal hover:bg-teal/10">
                Resume
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;