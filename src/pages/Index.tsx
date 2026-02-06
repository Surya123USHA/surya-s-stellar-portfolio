import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GuideMascot from "@/components/GuideMascot";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable default cursor on desktop
    if (!("ontouchstart" in window)) {
      document.body.style.cursor = "none";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            
            <main className="relative">
              {/* Background noise overlay */}
              <div className="fixed inset-0 noise-overlay pointer-events-none z-0" />
              
              {/* Sections */}
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Gallery />
              <Experience />
              <Contact />
            </main>
            
            <Footer />
            
            {/* Guide Mascot Helper */}
            <GuideMascot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
