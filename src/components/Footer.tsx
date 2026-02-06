import { motion } from "framer-motion";
import { ArrowUp, Heart, Code } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="hsl(var(--muted) / 0.3)"
            animate={{
              d: [
                "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
                "M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z",
                "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="group p-4 glass-card rounded-full"
            whileHover={{ y: -5, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="text-primary" size={24} />
            </motion.div>
          </motion.button>
        </div>

        {/* Main footer content */}
        <div className="text-center space-y-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="inline-block text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            {"<Surya />"}
          </motion.a>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mx-auto">
            Crafting digital experiences with passion and precision. 
            Let's build something amazing together.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Surya. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={14} className="text-accent fill-accent" /> and{" "}
              <Code size={14} className="text-primary" />
            </span>
          </div>

          {/* Tech stack */}
          <p className="text-xs text-muted-foreground/60 font-mono">
            React • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
