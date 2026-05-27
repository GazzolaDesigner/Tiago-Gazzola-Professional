import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/data/projects";
import { ArrowLeft, Briefcase, Gamepad2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const categoryInfo: Record<string, { title: string; description: string; icon: any }> = {
  "professional-projects": {
    title: "Professional Projects",
    description: "Games developed at studios and companies in the industry.",
    icon: Briefcase,
  },
  "personal-projects": {
    title: "Personal Projects",
    description: "Indie projects and creative experiments developed on my own.",
    icon: Gamepad2,
  },
  "game-jams": {
    title: "Game Jams",
    description: "Games created in limited time during game jam events.",
    icon: Trophy,
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const info = categoryInfo[category || ""];
  const projects = getProjectsByCategory(category || "");
  const Icon = info?.icon || Briefcase;

  if (!info) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="w-7 h-7" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {info.title}
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {info.description}
            </p>
          </motion.div>

          {/* Projects Grid */}
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  slug={project.slug}
                  category={category || ""}
                  roles={project.roles}
                  workPeriod={project.workPeriod}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                <Icon className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                No projects yet
              </h3>
              <p className="text-muted-foreground">
                Projects in this category will be added soon.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
