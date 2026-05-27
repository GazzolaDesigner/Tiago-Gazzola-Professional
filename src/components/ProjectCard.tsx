import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RoleTag } from "@/data/projects";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  roles: RoleTag[];
  workPeriod: {
    start: string;
    end: string;
  };
}

const ProjectCard = ({ title, description, image, slug, category, roles, workPeriod }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/${category}/${slug}`}
        className="group block card-gradient rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {description}
          </p>
          
          {/* Role Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {roles.map((role) => (
              <Badge key={role} variant="secondary" className="text-xs">
                {role}
              </Badge>
            ))}
          </div>
          
          {/* Work Period */}
          <div className="flex items-center text-muted-foreground text-xs mb-4">
            <Calendar className="w-3 h-3 mr-1.5" />
            {workPeriod.start} ~ {workPeriod.end}
          </div>
          
          <div className="flex items-center text-primary text-sm font-medium">
            View project
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
