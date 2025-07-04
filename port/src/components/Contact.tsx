import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-navy-dark text-slate-light">
      <div className="container max-w-screen-xl opacity-0 transition-opacity duration-500" ref={sectionRef}>
        <h2 className="section-title">
          <span className="section-number">04.</span> Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-light">Let's Connect</h3>
            <p className="mb-6">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
              Currently looking for new opportunities, my inbox is always open.
            </p>
            
            <div className="space-y-4 mt-8">
              <a 
                href="mailto:hello@example.com" 
                className="flex items-center gap-4 text-slate-light hover:text-teal transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>sriramchowdary1524@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Sriram1524" className="text-slate hover:text-teal transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/sriramchowdary2005/" className="text-slate hover:text-teal transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="#" className="text-slate hover:text-teal transition-colors">
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-navy rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-mono text-slate">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-navy-light/10 border-slate/30 text-slate-light focus:border-teal placeholder:text-slate-dark/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-mono text-slate">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-navy-light/10 border-slate/30 text-slate-light focus:border-teal placeholder:text-slate-dark/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-mono text-slate">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="min-h-[120px] bg-navy-light/10 border-slate/30 text-slate-light focus:border-teal placeholder:text-slate-dark/50"
                />
              </div>
              
              <Button type="submit" className="bg-transparent border border-teal text-teal hover:bg-teal/10 w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
