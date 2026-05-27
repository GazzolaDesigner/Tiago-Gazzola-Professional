import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CategorySectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient?: "primary" | "accent";
}

const CategorySection = ({ title, description, icon: Icon, link, gradient = "primary" }: CategorySectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={link}
        className={`group block p-8 rounded-2xl card-gradient border border-border hover:border-${gradient === "primary" ? "primary" : "accent"}/50 transition-all duration-300`}
      >
        <div className={`w-14 h-14 rounded-xl ${gradient === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <div className="flex items-center text-primary font-medium">
          Explore
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CategorySection;
