import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Building custom web applications and AI-powered solutions for clients across various industries. Specializing in React, Python, and machine learning integrations.",
    achievements: [
      "Delivered 10+ successful projects",
      "Integrated AI/ML solutions",
      "95% client satisfaction rate",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Unity Developer",
    company: "Game Development Projects",
    location: "India",
    period: "2022 - 2023",
    description:
      "Developed interactive games and simulations using Unity and C#. Created immersive experiences combining game mechanics with educational content.",
    achievements: [
      "Published 3 game projects",
      "Implemented AI NPCs",
      "Cross-platform deployment",
    ],
    current: false,
  },
  {
    id: 3,
    role: "AI/ML Intern",
    company: "Tech Startup",
    location: "India",
    period: "2022",
    description:
      "Worked on computer vision projects using YOLO and OpenCV. Developed image classification and object detection models for real-world applications.",
    achievements: [
      "Built waste detection system",
      "Improved model accuracy by 20%",
      "Deployed production models",
    ],
    current: false,
  },
  {
    id: 4,
    role: "Web Development Intern",
    company: "Digital Agency",
    location: "India",
    period: "2021",
    description:
      "Gained hands-on experience in frontend development with React and modern CSS. Collaborated with design teams to implement responsive web interfaces.",
    achievements: [
      "Built responsive UIs",
      "Learned React ecosystem",
      "Contributed to 5+ projects",
    ],
    current: false,
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

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
            {"<Experience />"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and growth as a developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary"
                      : "bg-background border-primary/50"
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                />
                {exp.current && (
                  <motion.div
                    className="absolute inset-0 w-4 h-4 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  className="glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                    <Briefcase className="text-primary/50" size={24} />
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                      >
                        <ArrowUpRight size={14} className="text-primary" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-muted-foreground font-mono text-sm">
            {"// The journey continues..."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
