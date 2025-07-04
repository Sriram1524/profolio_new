import { useState, useEffect, useRef } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeTab, setActiveTab] = useState("all");

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

  const projects: ProjectProps[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, product search, cart functionality, and secure checkout with Stripe.",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      githubLink: "#",
      liveLink: "#",
      featured: true
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform built with Next.js and GraphQL. Includes features like rich text editing, image uploads, commenting, and user profiles.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "GraphQL", "MongoDB", "AWS S3", "Tailwind"],
      githubLink: "#",
      liveLink: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management app with real-time updates using Socket.io.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
      tags: ["React", "Express", "MongoDB", "Socket.io", "JWT"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that shows current and forecast weather data based on location.",
      tags: ["JavaScript", "Weather API", "CSS", "Responsive Design"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Recipe Finder",
      description: "An app that helps users find recipes based on ingredients they have.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Spoonacular API", "Styled Components"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Real Estate Listings",
      description: "A platform for browsing and filtering real estate properties.",
      tags: ["Vue.js", "Firebase", "Google Maps API"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-first web app for tracking workouts and fitness progress.",
      tags: ["React Native", "Firebase", "Chart.js"],
      githubLink: "#"
    },
    {
      title: "Movie Database",
      description: "A searchable movie database using the TMDB API with user reviews.",
      tags: ["Angular", "TMDB API", "RxJS"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Budget Planner",
      description: "A personal finance app for tracking income, expenses, and savings goals.",
      tags: ["React", "D3.js", "LocalStorage"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "react", name: "React" },
    { id: "node", name: "Node.js" },
    { id: "api", name: "APIs" }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeTab === "all") return true;
    if (activeTab === "react") return project.tags.some(tag => tag.toLowerCase().includes("react"));
    if (activeTab === "node") return project.tags.some(tag => tag.toLowerCase().includes("node"));
    if (activeTab === "api") return project.tags.some(tag => tag.toLowerCase().includes("api"));
    return true;
  });

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects">
      <div className="container max-w-screen-xl opacity-0 transition-opacity duration-500" ref={sectionRef}>
        <h2 className="section-title">
          <span className="section-number">03.</span> My Projects
        </h2>

        <div className="mb-8">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList>
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div>
          {filteredProjects
            .filter(project => project.featured)
            .map((project, index) => (
              <ProjectCard key={`featured-${index}`} {...project} />
            ))}
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {filteredProjects
              .filter(project => !project.featured)
              .slice(0, visibleProjects)
              .map((project, index) => (
                <ProjectCard key={`regular-${index}`} {...project} />
              ))}
          </div>
          
          {visibleProjects < filteredProjects.filter(p => !p.featured).length && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={loadMore} 
                className="bg-transparent border border-teal text-navy-dark hover:bg-teal/10"
              >
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
