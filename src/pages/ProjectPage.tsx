import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import ImageGallery from "@/components/ImageGallery";
import { getProjectBySlug } from "@/data/projects";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageSection } from "@/data/types/page";
import { Alert } from "@/components/ui/alert";

/**
 * Importa todos os JSONs de pages no build.
 * A chave SEMPRE será /src/data/pages/<slug>.json
 */
const pages = import.meta.glob("@/data/pages/*.json");

const ProjectPageComponent = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();

  const project = getProjectBySlug(category || "", slug || "");

  const [pageData, setPageData] = useState<PageSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadPageData(slug);
    }
  }, [slug]);

  const renderIcon = (iconName: string, props?: any) => {
    // Garante que a primeira letra seja maiúscula e o resto mantém como está
    const formattedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);

    const IconComponent = LucideIcons[formattedIconName as keyof typeof LucideIcons];

    if (!IconComponent) {
      console.warn(`Ícone "${formattedIconName}" (original: "${iconName}") não encontrado`);
      return null;
    }

    return <IconComponent {...props} />;
  };
  const loadPageData = async (slug: string) => {
    try {
      let module;

      try {
        // Tenta carregar o arquivo específico do slug
        module = await import(`@/data/pages/${slug}.json`);
      } catch (firstError) {
        console.log(`Arquivo ${slug}.json não encontrado, tentando default.json...`);

        try {
          // Fallback para default.json
          module = await import(`@/data/pages/default.json`);
        } catch (secondError) {
          throw new Error(`Nenhum arquivo JSON encontrado para ${slug} nem default.json`);
        }
      }

      // Adiciona um timestamp para forçar recarregamento no desenvolvimento
      if (import.meta.hot) {
        import.meta.hot.accept(() => {
          console.log('JSON file updated, reloading...');
          loadPageData(slug);
        });
      }

      setPageData(module.default as PageSection);
    } catch (err) {
      setError("Failed to load project content");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
    setTimeout(() => {
      if (category) {
        const element = document.getElementById(category);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found.</p>
          <Button onClick={() => navigate("/")}>Back to home</Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading project...</p>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className="mb-8"
            >
              <LucideIcons.ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <Alert variant="destructive">
              {error || "Failed to load project content"}
            </Alert>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case "Hero":
        return (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-video rounded-2xl overflow-hidden mb-8 border border-border"
            >
              <img
                src={`${import.meta.env.BASE_URL}${section.data.image.replace(/^\/+/, "")}`}
                alt={section.data.title}
              />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {section.data.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {section.data.description}
              </p>

              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Ocupations
              </h2>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {section.data.roles.map((role: string) => (
                    <Badge key={role} variant="secondary">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        );

      case "Technologies":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-2">
              {section.data.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        );

      case "GenericSection":
        return (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              {renderIcon(section.data.icon, { className: "w-6 h-6 text-primary" })}
              {section.data.title}
            </h2>
            <div className="space-y-4">
              {section.data.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>
        );

      case "MyRole":
        return (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 p-6 rounded-xl border border-border"
          >
            <h2 className="font-bold mb-2">My Role</h2>
            <p className="text-muted-foreground">
              {section.data.content}
            </p>
          </motion.section>
        );

      case "Gallery":
        return (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <LucideIcons.Images className="w-6 h-6 text-primary" />
              {section.data.title}
            </h2>

            <ImageGallery
              images={section.data.images.map((img: string) =>
                `${import.meta.env.BASE_URL}${img.replace(/^\/+/, "")}`
              )}
              title=""
            />
          </motion.section>
        );

      case "Videos":
        return (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Videos</h2>

            <div className="space-y-6">
              {section.data.videos.map((video: any, index: number) => (
                <YouTubeEmbed
                  key={index}
                  videoId={video.videoId}
                  title={`${video.title}`}
                />
              ))}
            </div>
          </motion.section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className="text-muted-foreground hover:text-foreground"
            >
              <LucideIcons.ArrowLeft className="w-4 h-4 mr-2" />
              Back to {category?.replace("-", " ") || "Home"}
            </Button>
          </motion.div>

          {pageData.map((section, index) => (
            <div key={index}>{renderSection(section, index)}</div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-12"
          >
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className="text-muted-foreground hover:text-foreground"
            >
              <LucideIcons.ArrowLeft className="w-4 h-4 mr-2" />
              Back to {category?.replace("-", " ") || "Home"}
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPageComponent;