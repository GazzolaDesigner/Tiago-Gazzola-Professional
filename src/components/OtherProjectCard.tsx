import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { OtherProject } from "@/data/projects";

interface OtherProjectCardProps {
  project: OtherProject;
  index: number;
}

const OtherProjectCard = ({ project, index }: OtherProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-4 flex items-center gap-4"
    >
      {/* Left - Project Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-display font-bold text-foreground">{project.title}</h4>
          <span className="text-muted-foreground text-xs">
            ({project.roles.map(r => r.split(' ').map(w => w[0]).join('')).join(' | ')})
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
          {project.description}
        </p>
        <p className="text-xs text-muted-foreground">
          Team: {project.teamSize} people | Time: {project.timeSpent} | {project.date}
        </p>
      </div>

      {/* Center - Action Buttons */}
      <div className="flex flex-col gap-2">
        <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs">
          <Link to={`/${project.category}/${project.slug}`}>
            Read more
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </Button>
        {project.storeLink && (
          <Button asChild variant="outline" size="sm" className="border-border text-xs">
            <a href={project.storeLink} target="_blank" rel="noopener noreferrer">
              <img className="w-4 h-4 mr-2" src={`svg/${project.storePlatform
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '') // remove accents
                    .replace(/[^a-z0-9]/g, '')}-logo.svg`} />
              View Page
            </a>
          </Button>
        )}
      </div>

      {/* Right - Logo */}
      <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
        <img 
          src={project.logo}
          alt={project.title} 
          className="rounded object-cover"
        />
      </div>
    </motion.div>
  );
};

export default OtherProjectCard;
