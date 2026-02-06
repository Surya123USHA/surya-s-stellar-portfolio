import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Gamepad2, Globe, Server, Cpu, Blocks } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "primary",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "secondary",
    skills: [
      { name: "Python", level: 88 },
      { name: "Flask", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "FastAPI", level: 78 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "accent",
    skills: [
      { name: "YOLO", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "PyTorch", level: 72 },
    ],
  },
  {
    title: "Game Dev",
    icon: Gamepad2,
    color: "primary",
    skills: [
      { name: "Unity", level: 85 },
      { name: "C#", level: 82 },
      { name: "3D Modeling", level: 65 },
      { name: "Game Design", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "secondary",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "Firebase", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Blockchain",
    icon: Blocks,
    color: "accent",
    skills: [
      { name: "Hyperledger", level: 75 },
      { name: "Smart Contracts", level: 70 },
      { name: "Web3", level: 68 },
      { name: "Ethereum", level: 65 },
    ],
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Python", icon: "🐍" },
  { name: "Unity", icon: "🎮" },
  { name: "YOLO", icon: "👁️" },
  { name: "Flask", icon: "🌶️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Blockchain", icon: "🔗" },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[120px]" />

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
            {"<Skills />"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse set of skills spanning frontend, backend, AI/ML, and game development
          </p>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="px-4 py-2 glass-card rounded-full flex items-center gap-2 cursor-default"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
              }}
            >
              <span>{tech.icon}</span>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-card p-6 rounded-2xl group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`p-3 rounded-xl bg-${category.color}/10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`text-${category.color}`} size={24} />
                  </motion.div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${
                            category.color === "primary"
                              ? "from-primary to-primary/60"
                              : category.color === "secondary"
                              ? "from-secondary to-secondary/60"
                              : "from-accent to-accent/60"
                          }`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{
                    boxShadow: `0 0 30px hsl(var(--${category.color}) / 0.2)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground text-sm font-mono">
            {"// Always learning, always growing"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
