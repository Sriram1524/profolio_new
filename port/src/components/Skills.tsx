import { useEffect, useRef } from "react";
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Terminal, 
  LineChart 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
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

  const skills = [
    {
      title: "Frontend Development",
      description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
      icon: Layout,
      techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML & CSS"]
    },
    {
      title: "Backend Development",
      description: "Building scalable and secure server-side applications and REST APIs.",
      icon: Server,
      techs: ["Node.js", "Express", "Python", "Django", "API Design"]
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database schemas and queries for performance.",
      icon: Database,
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"]
    },
    {
      title: "DevOps & Tooling",
      description: "Setting up CI/CD pipelines and managing deployments across environments.",
      icon: Terminal,
      techs: ["Git", "Docker", "AWS", "GitHub Actions", "Linux"]
    },
    
  ];

  return (
    <section id="skills" className="bg-slate-50">
      <div className="container max-w-screen-xl opacity-0 transition-opacity duration-500" ref={sectionRef}>
        <h2 className="section-title text-navy-dark">
          <span className="section-number">02.</span> Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.title} className="card-hover border max-w-[500px] border-border/60">
              <CardHeader className="pb-2">
                <skill.icon className="h-10 w-10 p-1 rounded-md text-teal bg-navy-dark/10 mb-2" />
                <CardTitle>{skill.title}</CardTitle>
                <CardDescription className="text-slate-dark">{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-full bg-navy-light/10 text-navy font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
