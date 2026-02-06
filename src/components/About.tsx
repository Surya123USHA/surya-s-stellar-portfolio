import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Code, Sparkles } from "lucide-react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const education = [
    {
      year: "2020 - 2024",
      title: "Bachelor's in Computer Science",
      institution: "Gojan School of Business and Technology",
      description: "Focused on AI/ML, Software Engineering, and Game Development",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="section-container" ref={containerRef}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-mono mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            {"<About Me />"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual side */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))",
                  padding: "2px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-2xl bg-background" />
              </motion.div>

              {/* Inner content */}
              <div className="absolute inset-2 rounded-xl overflow-hidden glass-card">
                {/* Code visualization */}
                <div className="absolute inset-0 p-6 font-mono text-xs md:text-sm opacity-50">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, staggerChildren: 0.1 }}
                  >
                    {[
                      "class Developer {",
                      "  name = 'Surya';",
                      "  role = 'Full Stack';",
                      "  skills = [",
                      "    'React',",
                      "    'Python',",
                      "    'Unity',",
                      "    'AI/ML'",
                      "  ];",
                      "",
                      "  create() {",
                      "    return magic;",
                      "  }",
                      "}",
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 0.6, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="text-primary/40 mr-2">{i + 1}</span>
                        <span
                          className={
                            line.includes("Surya")
                              ? "text-primary"
                              : line.includes("=")
                              ? "text-secondary"
                              : ""
                          }
                        >
                          {line}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Centered icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="p-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 hsl(var(--primary) / 0.3)",
                        "0 0 30px 10px hsl(var(--primary) / 0.1)",
                        "0 0 0 0 hsl(var(--primary) / 0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Code size={48} className="text-primary" />
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 glass-card rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="text-primary" size={24} />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 p-3 glass-card rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <GraduationCap className="text-secondary" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Passionate <span className="text-primary">Developer</span> & Creator
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a versatile developer with a passion for creating innovative solutions 
                that bridge the gap between cutting-edge technology and real-world applications. 
                With expertise in AI, game development, and full-stack engineering, I bring 
                ideas to life through clean code and creative problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology began with curiosity and has evolved into a 
                dedication to continuous learning and pushing the boundaries of what's 
                possible in software development.
              </p>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Based in", value: "India" },
                { icon: Code, label: "Experience", value: "3+ Years" },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  className="p-4 glass-card rounded-xl"
                  whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.5)" }}
                >
                  <Icon className="text-primary mb-2" size={20} />
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-semibold">{value}</p>
                </motion.div>
              ))}
            </div>

            {/* Education timeline */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                Education
              </h4>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="flex items-center gap-2 text-sm text-primary mb-1">
                    <Calendar size={14} />
                    {edu.year}
                  </div>
                  <h5 className="font-semibold">{edu.title}</h5>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground/70 text-sm mt-1">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
