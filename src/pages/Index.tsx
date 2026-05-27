import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import OtherProjectCard from "@/components/OtherProjectCard";
import AwardCard from "@/components/AwardCard";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectsByCategory, getOtherProjectsByCategory, awardProjects } from "@/data/projects";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  const professionalProjects = getProjectsByCategory("professional-projects");
  const gameJams = getProjectsByCategory("game-jams");
  const personalProjects = getProjectsByCategory("personal-projects");
  const otherExperiences = getProjectsByCategory("other-experiences");
  
  const professionalOtherProjects = getOtherProjectsByCategory("professional-projects");
  const gameJamsOtherProjects = getOtherProjectsByCategory("game-jams");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Componente reutilizável para títulos de seção
  const SectionHeader = ({ title, highlight, description }: { title: string, highlight: string, description: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-wider">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      <div className="h-1 w-24 bg-primary/50 mx-auto rounded-full mb-4 blur-[1px]" />
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      
      {/* Professional Projects Section */}
      <section id="professional-projects" className="py-24 relative ">
        {/* Glow de fundo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto">
          <SectionHeader 
            title="Professional" 
            highlight="Projects" 
            description="Games Developed in Professional Studios"
          />
          
          <div className="space-y-12">
            {professionalProjects.map((project, index) => (
              <ProjectShowcase key={project.id} project={project} index={index} />
            ))}
          </div>

          {professionalOtherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 pt-10 border-t border-border/50"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                Additional <span className="text-primary">Professional Projects</span>
              </h3>
              <p className="font-display font-normal text-foreground/60 mb-6 text-center text-base">
                  Smaller projects that still have a reason to be here.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8">
                {professionalOtherProjects.map((project, index) => (
                  <OtherProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Game Jams Section - Fundo alternado (section-alt) */}
      <section id="game-jams" className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Game" 
            highlight="Jams" 
            description="Game Jam Experiments"
          />
          
          <div className="space-y-12">
            {gameJams.map((project, index) => (
              <ProjectShowcase key={project.id} project={project} index={index} />
            ))}
          </div>

          {gameJamsOtherProjects.length > 0 && (
            <div className="mt-20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                More <span className="text-primary">Jam Entries</span>
              </h3>
              <p className="font-display font-normal text-foreground/60 mb-6 text-center text-base">
                  Smaller projects that still have a reason to be here.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {gameJamsOtherProjects.map((project, index) => (
                  <OtherProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="personal-projects" className="py-24">
        <div className="container mx-auto px-4 ">
          <SectionHeader 
            title="Personal" 
            highlight="Work" 
            description="Independent creations developed outside of commercial constraints."
          />
          
          <div className="space-y-12">
            {personalProjects.map((project, index) => (
              <ProjectShowcase key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Experiences Section - Fundo alternado */}
      <section id="other-experiences" className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Community &" 
            highlight="Teaching" 
            description="Mentoring, speaking, and building the game development ecosystem."
          />
          
          <div className="space-y-12">
            {otherExperiences.map((project, index) => (
              <ProjectShowcase key={project.id} project={project} index={index} showSlideshow />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 relative overflow-hidden">
        {/* Efeito de fundo roxo radial para dar destaque aos prêmios */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Awards &" 
            highlight="Recognition" 
            description="Achievements and milestones in my career."
          />
          
          <div className="space-y-6">
            {awardProjects.map((project, index) => (
              <AwardCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary hover:text-white font-display uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Return to Top
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;