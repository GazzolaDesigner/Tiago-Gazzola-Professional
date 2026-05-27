import { motion } from "framer-motion";
import profileImage from "@/assets/profile-placeholder.jpg";
import { Linkedin, Gamepad2, Download, Mail, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

function calculateYears(): string {
  const start = new Date(2019, 0); // <--- COLOCAR A DATA DE INICIO DA SUA EXPERIENCIA ANO, E INDICE DO MES NO CASO 0 => JANEIRO, 11 => DEZEMBRO
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  const anniversary = new Date(
    start.getFullYear() + years,
    start.getMonth(),
    start.getDate()
  );

  if (anniversary > now) {
    years--;
  }

  if (years <= 0) {
    return "less than 1 year";
  }

  return years === 1 ? "1 year" : `${years} years`;
}


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center hero-gradient relative overflow-hidden pt-20 pb-20">
      {/* Subtle futuristic background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative"
          >
            <div className="w-72 h-72 avatar rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto">
              <img
                src={profileImage}
                alt="Tiago Gazzola"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name, Title, Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Tiago Gazzola
            </h1>
            <p className="font-display text-2xl text-gradient font-bold tracking-wider">
              Producer | Game Designer | Level Designer
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Passionate game creator who brings focus, dedication, and precision to every project. I work side by side with my team to stay aligned and push each game toward its highest potential.            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="flex items-center justify-center sm:justify-start gap-4 bg-card/50 backdrop-blur-sm rounded-xl p-4 bg-transparent">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display text-xl font-bold text-foreground">+15</p>
                <p className="text-sm text-muted-foreground">Game Projects</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-4 bg-card/50 backdrop-blur-sm rounded-xl p-4  bg-transparent">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-display text-xl font-bold text-foreground">50.000.000+</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-4 bg-card/50 backdrop-blur-sm rounded-xl p-4  bg-transparent">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Timer className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-display text-xl font-bold text-foreground">{calculateYears()}</p>
                <p className="text-sm text-muted-foreground">of Experience</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 justify-center"
          >
            <Button
              variant="outline"
              asChild
              size="lg"
              className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50"

            >
              <a href="https://gazzola.itch.io/" target="_blank" rel="noopener noreferrer">
                <img className="w-4 h-4 mr-2" src="svg/itchio-logo.svg" />
                Itch.io
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </a>

            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              <a href="https://www.linkedin.com/in/tiago-gazzola/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              <a href="mailto:tgazzola.professional@outlook.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;