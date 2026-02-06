import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Code2, Cpu, Gamepad2, Brain, Database, Sparkles } from "lucide-react";

const roles = ["Full Stack Developer", "AI Engineer", "Unity Developer", "Problem Solver"];

const floatingIcons = [
  { Icon: Code2, delay: 0, x: "10%", y: "20%" },
  { Icon: Cpu, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Gamepad2, delay: 1, x: "75%", y: "70%" },
  { Icon: Brain, delay: 1.5, x: "5%", y: "65%" },
  { Icon: Database, delay: 2, x: "90%", y: "45%" },
  { Icon: Sparkles, delay: 2.5, x: "15%", y: "40%" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 grid-bg" style={{ y }} />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, x, y: posY }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/30"
          style={{ left: x, top: posY }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.5,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: delay + 0.5, duration: 0.5 },
            scale: { delay: delay + 0.5, duration: 0.5 },
            y: { delay: delay + 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 section-container text-center"
        style={{ opacity }}
      >
        {/* Greeting */}
        <motion.p
          className="text-primary font-mono text-sm md:text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {"<Welcome to my world />"}
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block gradient-text glow-text mt-2">Surya</span>
        </motion.h1>

        {/* Typewriter roles */}
        <motion.div
          className="h-8 md:h-10 mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -40, -80, -120, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.45, 0.7, 1],
            }}
          >
            {roles.map((role, index) => (
              <div
                key={index}
                className="h-8 md:h-10 flex items-center justify-center text-lg md:text-2xl text-muted-foreground font-light"
              >
                <span className="text-primary mr-2">{">"}</span>
                {role}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Crafting innovative digital experiences with cutting-edge technology.
          Specializing in AI, Unity, and Full Stack Development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 rounded-full font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <span className="relative text-primary-foreground flex items-center gap-2">
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Mail, href: "#contact", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-xs font-mono">Scroll Down</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
