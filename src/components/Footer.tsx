import { Linkedin, Gamepad2, Download } from "lucide-react";
import EmailCopy from "./EmailCopy";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-gradient mb-2">
              Tiago Gazzola
            </h3>
            <p className="text-muted-foreground text-sm">
              Producer | Game Designer | Level Designer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://gazzola.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              title="Itch.io"
            >
              <Gamepad2 className="w-5 h-5" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              title="Download CV"
            >
              <Download className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tiago-gazzola/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <EmailCopy variant="footer" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Tiago Gazzola
          <span className="block mt-1">
            Developed by Gabriel Bulcão —{" "}
            <a
              href="mailto:gabrielfilipe.bz@gmail.com"
              className="hover:text-primary transition-colors"
            >
              gabrielfilipe.bz@gmail.com
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
