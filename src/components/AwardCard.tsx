import { motion } from "framer-motion";
import { ArrowRight, Trophy, Calendar, MapPin, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AwardProject } from "@/data/projects";

interface AwardCardProps {
  project: AwardProject;
  index: number;
}

const AwardCard = ({ project, index }: AwardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="futuristic-card rounded-xl overflow-hidden mx-auto"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Content Side - 4 colunas (Igual ao Showcase) */}
        <div className="lg:w-4/12 p-6 lg:p-8 flex-col justify-center">

          {/* Header with Icon and Title */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="rounded object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground line-clamp-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="text-primary font-medium text-sm">
                  {project.awardType}
                </span>
              </div>
            </div>
          </div>

          {/* Award Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.awards.map((award, i) => (
              <Badge
                key={i}

                className="mt-2 bg-primary/20 text-primary border-0"
              >
                🏆 {award}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="space-y-2 mb-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Event: {project.event}</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Team: {project.teamSize} people</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Status: {project.year}</span>
              </span>
            </div>
          </div>

          {/* Trophys */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.Trophy.map((_, i) => (
              <img src={`${project.Trophy[i]}`} key={i} className="h-28" />
            ))}
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to={`/${project.category}/${project.slug}`}>
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            {project.storeLink && project.storePlatform && (
              <Button asChild variant="outline" size="sm" className="border-border">
                <a href={project.storeLink} target="_blank" rel="noopener noreferrer">
                   <img className="w-4 h-4 mr-2" src={`svg/${project.storePlatform
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '') // remove accents
                    .replace(/[^a-z0-9]/g, '')}-logo.svg`} />
                  View {project.storePlatform} Page
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Image Side - 8 colunas (Igual ao Showcase) */}
        <div className="lg:w-8/12 relative">
          <div className="relative h-64 lg:h-full min-h-[450px]">
            <img
              src={project.gifUrl}
              alt={project.title}
              className="w-full h-full object-contain bg-muted/20"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;