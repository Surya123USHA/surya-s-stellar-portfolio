import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"typing" | "compiling" | "done">("typing");
  const name = "SURYA";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    // Typing animation for name
    let nameIndex = 0;
    const typeInterval = setInterval(() => {
      if (nameIndex <= name.length) {
        setDisplayedName(name.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(typeInterval);
        setPhase("compiling");
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (phase === "compiling") {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setPhase("done");
            setTimeout(onComplete, 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [phase, onComplete]);

  const codeLines = [
    "import { Developer } from 'surya';",
    "const skills = ['React', 'AI', 'Unity'];",
    "await portfolio.initialize();",
    "console.log('Welcome!');",
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Glow orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-secondary/20 blur-[80px] translate-x-32"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10 text-center">
          {/* Main name display */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block">
              <span className="text-6xl md:text-8xl font-bold tracking-wider">
                <span className="gradient-text">{displayedName}</span>
                <motion.span
                  className="inline-block w-1 h-14 md:h-20 bg-primary ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </span>
            </div>
          </motion.div>

          {/* Code compilation effect */}
          <motion.div
            className="glass-card p-6 max-w-md mx-auto mb-8 text-left font-mono text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase !== "typing" ? 1 : 0.3, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                className="text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: progress > index * 25 ? 1 : 0.3,
                  x: 0,
                }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-primary/60 mr-2">{index + 1}</span>
                <span className={progress > index * 25 ? "text-foreground" : ""}>
                  {line}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-64 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span className="font-mono">
                {phase === "typing" ? "Initializing..." : "Compiling..."}
              </span>
              <span className="font-mono">{Math.min(100, Math.round(progress))}%</span>
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(100, progress)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
