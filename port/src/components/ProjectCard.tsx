
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubLink,
  liveLink,
  featured = false
}: ProjectProps) => {
  if (featured) {
    return (
      <div className="grid md:grid-cols-12 gap-4 md:gap-8 my-16">
        <div className="md:col-span-7 relative group">
          <a 
            href={liveLink || githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative z-10 h-60 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden"
          >
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover object-center rounded-lg border border-slate/10 bg-navy-light/10 group-hover:border-teal/30 transition-all duration-300"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center bg-navy-light/10 rounded-lg">
                <FolderGit2 size={48} className="text-teal" />
              </div>
            )}
            <div className="absolute inset-0 bg-navy-dark opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
          </a>
        </div>
        
        <div className="md:col-span-5 flex flex-col justify-center">
          <p className="font-mono text-teal mb-1 text-sm">Featured Project</p>
          <h3 className="text-2xl font-bold mb-4 text-navy-dark">{title}</h3>
          
          <div className="relative z-10">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="text-slate-dark">{description}</p>
            </div>
          </div>
          
          <ul className="flex flex-wrap gap-3 mb-6">
            {tags.map((tag) => (
              <li key={tag} className="text-xs px-2 py-1 rounded-full bg-navy-light/10 text-navy-dark font-medium">
                {tag}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy-dark hover:text-teal transition-colors"
              aria-label={`View source code for ${title}`}
            >
              <Github size={20} />
            </a>
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-navy-dark hover:text-teal transition-colors"
                aria-label={`View live site for ${title}`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Regular card for non-featured projects
  return (
    <Card className="card-hover overflow-hidden h-full flex flex-col bg-white border border-border/60 hover:border-teal/30 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <FolderGit2 className="h-6 w-6 text-teal" />
          <div className="flex gap-4">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label={`View source code for ${title}`}
            >
              <Github size={18} />
            </a>
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label={`View live site for ${title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <CardTitle className="text-navy-dark">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      {image && (
        <CardContent className="pt-2 px-6">
          <div className="h-40 rounded-md overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </CardContent>
      )}
      
      <CardFooter className="mt-auto pt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-navy-light/10 text-navy-dark font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
