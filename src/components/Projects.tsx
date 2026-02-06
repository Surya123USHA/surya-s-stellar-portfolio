import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, Eye, Cpu, Blocks, Globe, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Waste Sorting System",
    description:
      "An intelligent waste classification system using YOLO object detection integrated with Unity for real-time visualization. Achieves 95%+ accuracy in waste categorization.",
    longDescription:
      "This project combines computer vision with game engine technology to create an interactive waste sorting experience. The system uses YOLOv8 for real-time object detection and Unity for 3D visualization and gamification.",
    image: "/placeholder.svg",
    tags: ["YOLO", "Unity", "Python", "OpenCV", "AI/ML"],
    category: "AI",
    icon: Cpu,
    links: {
      github: "#",
      live: "#",
    },
    features: ["Real-time Detection", "95%+ Accuracy", "Gamified Experience", "Eco-friendly Impact"],
  },
  {
    id: 2,
    title: "Blockchain Supply Chain",
    description:
      "A Hyperledger Fabric-based supply chain management system ensuring transparency and traceability of products from manufacturer to consumer.",
    longDescription:
      "Built on Hyperledger Fabric, this enterprise-grade solution provides immutable tracking of goods throughout the supply chain, smart contract automation, and comprehensive analytics dashboard.",
    image: "/placeholder.svg",
    tags: ["Hyperledger", "Node.js", "Docker", "React", "Blockchain"],
    category: "Blockchain",
    icon: Blocks,
    links: {
      github: "#",
      live: "#",
    },
    features: ["Immutable Records", "Smart Contracts", "Real-time Tracking", "Analytics Dashboard"],
  },
  {
    id: 3,
    title: "Full Stack E-Commerce",
    description:
      "A modern e-commerce platform with real-time inventory, payment integration, and AI-powered product recommendations.",
    longDescription:
      "Complete e-commerce solution featuring Next.js frontend, Python backend, PostgreSQL database, and integration with Stripe for payments. Includes AI-based recommendation engine.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Python", "PostgreSQL", "Stripe", "Redis"],
    category: "Web",
    icon: Globe,
    links: {
      github: "#",
      live: "#",
    },
    features: ["Real-time Inventory", "Payment Gateway", "AI Recommendations", "Admin Dashboard"],
  },
  {
    id: 4,
    title: "Interactive 3D Portfolio",
    description:
      "An immersive 3D portfolio experience built with Three.js and React, featuring interactive elements and smooth animations.",
    longDescription:
      "A creative showcase of work using WebGL and Three.js, featuring custom shaders, physics simulations, and responsive 3D scenes that adapt to user interaction.",
    image: "/placeholder.svg",
    tags: ["Three.js", "React", "WebGL", "GSAP", "TypeScript"],
    category: "Web",
    icon: Globe,
    links: {
      github: "#",
      live: "#",
    },
    features: ["3D Interactions", "Custom Shaders", "Physics Engine", "Responsive Design"],
  },
];

const categories = ["All", "AI", "Blockchain", "Web"];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

      <div className="section-container" ref={containerRef}>
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
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
            {"<Projects />"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI, blockchain, and web development
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                layout
              >
                <motion.div
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer h-full"
                  whileHover={{ y: -5 }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(1000px) rotateY(${
                      x * 5
                    }deg) rotateX(${-y * 5}deg) translateY(-5px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {/* Project image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="p-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={48} className="text-primary" />
                      </motion.div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.links.github}
                          className="p-2 rounded-lg glass-card opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.links.live}
                          className="p-2 rounded-lg glass-card opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View more button */}
                    <motion.button
                      className="flex items-center gap-1 text-sm text-primary font-medium"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ gap: "0.5rem" }}
                    >
                      <Eye size={16} />
                      View Details
                      <ChevronRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <selectedProject.icon size={64} className="text-primary" />
                <button
                  className="absolute top-4 right-4 p-2 glass-card rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedProject.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={selectedProject.links.github}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass-card font-medium hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={18} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.links.live}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
