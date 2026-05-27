import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Users, Clock, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
  showSlideshow?: boolean;
}

const ProjectShowcase = ({ project, index, showSlideshow = false }: ProjectShowcaseProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const calculateWorkPeriod = (start: string, end: string): string => {
    // Caso: período em dias (ex: "7d", "40 dias", "15 days")
    const daysMatch = end.match(/(\d+)\s*(d|dia|dias|day|days)$/i);
    if (daysMatch) {
      const days = Number(daysMatch[1]);
      return `${days} day${days > 1 ? 's' : ''}`;
    }

    let endMonth: number;
    let endYear: number;

    if (end.toLowerCase() === 'current') {
      const now = new Date();
      endMonth = now.getMonth() + 1; // 0-based
      endYear = now.getFullYear();
    } else {
      // Lógica padrão: mês/ano informado
      [endMonth, endYear] = end.split('/').map(Number);
    }

    const [startMonth, startYear] = start.split('/').map(Number);

    const totalMonths =
      (endYear - startYear) * 12 + (endMonth - startMonth);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];

    if (years > 0) {
      parts.push(`${years} year${years > 1 ? 's' : ''}`);
    }

    if (months > 0) {
      parts.push(`${months} month${months > 1 ? 's' : ''}`);
    }

    return parts.join(' and ');
  };

  const tools = project.content.technologies;
  const timeSpentCalculated = project.workPeriod
    ? calculateWorkPeriod(project.workPeriod.start, project.workPeriod.end)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="futuristic-card rounded-xl overflow-hidden mx-auto"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Text Content Side - 4 colunas */}
        <div className="lg:w-4/12 p-4 lg:p-6">
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
              {/* Role tags below title */}
              <div className="flex flex-wrap gap-1 mt-1">
                {project.roles.map((role, idx) => (
                  <span key={role} className="text-muted-foreground text-sm">
                    {role}{idx < project.roles.length - 1 ? " |" : ""}
                  </span>
                ))}
              </div>
              {project.company && (
                <Badge className="mt-2 bg-primary/20 text-primary border-0">
                  {project.company}
                </Badge>
              )}
            </div>
          </div>

          {/* Tools badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.length > 0 && tools.slice(0, 4).map((tool) => (
              <Badge key={tool} variant="outline" className="text-xs bg-muted/50">
                {tool}
              </Badge>
            ))}
            {tools.length > 4 && (
              <Badge variant="outline" className="text-xs bg-muted/50">
                +{tools.length - 4} more
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
            {project.fullDescription || project.description}
          </p>

          {/* Meta info with icons */}
          <div className="space-y-2 mb-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Team: {project.teamSize || 1} people</span>
              </span>
            </div>
            {project.workPeriod.start != "" && (<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>
                  Time Spent: {timeSpentCalculated} (
                  {project.workPeriod.start}
                  {(project.workPeriod.end?.match(/^\d{2}\/\d{4}$/) ||
                    project.workPeriod.end?.toLowerCase() === 'current') && (
                      <> - {project.workPeriod.end}</>
                    )}
                  )
                </span>
              </span>
            </div>)}
            {project.timeSpent && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Project Size: {project.timeSpent}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Status: {project.projectStatus || "Released"}</span>
                </span>
              </div>
            )}
          </div>

          {/* Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">What I Worked On:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.responsibilities.slice(0, 3).map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span className="line-clamp-2">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to={`/${project.category}/${project.slug}`}>
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            {project.storeLink && project.storePlatform && (
              <div className="flex flex-col items-center gap-1">
                <Button asChild variant="outline" size="sm" className="border-border">
                  <a href={project.storeLink} target="_blank" rel="noopener noreferrer">
                    <img
                      className="w-4 h-4 mr-2"
                      src={`svg/${project.storePlatform
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/[^a-z0-9]/g, "")}-logo.svg`}
                    />
                    View {project.storePlatform} Page
                  </a>
                </Button>

                <small className="text-xs text-muted-foreground text-center">
                  {project.storeLinkDetail ?? ""}
                </small>
              </div>
            )}
          </div>
        </div>

        {/* GIF/Image Side - 8 colunas */}
        <div className="lg:w-8/12 relative">
          {showSlideshow && images.length > 1 ? (
            <div className="relative h-64 lg:h-full min-h-[450px]">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain bg-muted/20"
              />
              {/* Slideshow controls */}
              <div className="absolute inset-0 flex items-center justify-between p-2">
                <button
                  onClick={prevImage}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImageIndex ? "bg-primary" : "bg-background/60"
                      }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="relative h-64 lg:h-full min-h-[450px]">
              <img
                src={project.gifUrl || project.images[0]}
                alt={project.title}
                className="w-full h-full object-contain bg-muted/20"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;