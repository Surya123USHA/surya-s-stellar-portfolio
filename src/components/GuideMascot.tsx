import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle, Sparkles, HelpCircle, Code, Lightbulb, Rocket } from "lucide-react";

const helpTopics = [
  {
    icon: Code,
    title: "My Skills",
    message: "Surya is skilled in React, Next.js, Unity, AI/ML, Python, and Blockchain! Pretty cool, right? 🚀",
  },
  {
    icon: Lightbulb,
    title: "Projects",
    message: "Check out the Projects section to see amazing work like AI Waste Sorting and Blockchain apps! ✨",
  },
  {
    icon: Rocket,
    title: "Contact",
    message: "Want to work together? Scroll down to the Contact section or click the Let's Talk button! 💌",
  },
  {
    icon: HelpCircle,
    title: "Navigation",
    message: "Use the navigation bar at the top to jump to any section instantly! Super easy! 🎯",
  },
];

const GuideMascot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<typeof helpTopics[0] | null>(null);
  const [isWaving, setIsWaving] = useState(true);

  const handleTopicClick = (topic: typeof helpTopics[0]) => {
    setSelectedTopic(topic);
    setTimeout(() => setSelectedTopic(null), 4000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Help panel */}
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-72 glass-card p-4 rounded-2xl mb-2"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold gradient-text">How can I help?</span>
              </div>
              <motion.button
                className="p-1 rounded-full hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={16} className="text-muted-foreground" />
              </motion.button>
            </div>

            {/* Topics */}
            <div className="space-y-2">
              {helpTopics.map((topic, index) => (
                <motion.button
                  key={topic.title}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all text-left"
                  onClick={() => handleTopicClick(topic)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <topic.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {topic.title}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Message bubble */}
            <AnimatePresence>
              {selectedTopic && (
                <motion.div
                  className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="text-sm text-foreground">{selectedTopic.message}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot button */}
      <motion.button
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-lg"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsWaving(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isOpen
            ? "0 0 30px hsl(var(--primary) / 0.5)"
            : "0 0 20px hsl(var(--primary) / 0.3)",
        }}
      >
        {/* Inner circle with mascot */}
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
          {/* Cute mascot face */}
          <div className="relative">
            {/* Face base */}
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
              animate={{ rotate: isOpen ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Eyes */}
              <div className="flex gap-2 mb-1">
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scaleY: isWaving ? [1, 0.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: isWaving ? Infinity : 0,
                    repeatDelay: 2,
                  }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scaleY: isWaving ? [1, 0.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: isWaving ? Infinity : 0,
                    repeatDelay: 2,
                    delay: 0.1,
                  }}
                />
              </div>
              
              {/* Mouth */}
              <motion.div
                className="absolute bottom-2 w-3 h-1.5 rounded-full bg-accent"
                animate={{
                  scaleX: isOpen ? 1.2 : 1,
                }}
              />
            </motion.div>

            {/* Sparkle decorations */}
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <Sparkles className="w-3 h-3 text-primary" />
            </motion.div>
          </div>
        </div>

        {/* Notification badge when closed */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            <MessageCircle size={10} className="text-white" />
          </motion.div>
        )}

        {/* Floating animation rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button>

      {/* Tooltip when hovering (not open) */}
      <AnimatePresence>
        {!isOpen && isWaving && (
          <motion.div
            className="absolute bottom-20 right-0 px-3 py-2 rounded-xl glass-card text-sm whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <span className="text-foreground">👋 Need help? Click me!</span>
            <div className="absolute bottom-0 right-6 w-3 h-3 bg-card rotate-45 translate-y-1.5 border-r border-b border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuideMascot;
