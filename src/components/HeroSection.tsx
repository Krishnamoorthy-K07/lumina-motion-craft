
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [terminalText, setTerminalText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  
  const terminalLines = [
    "krishna@portfolio:~$ whoami",
    "Full-Stack Developer",
    "krishna@portfolio:~$ ls skills/",
    "React.js  Java  SpringBoot  AWS  PostgreSQL",
    "krishna@portfolio:~$ cat experience.txt",
    "3+ years building scalable web applications",
    "krishna@portfolio:~$ _"
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setTerminalText(prev => prev + (prev ? "\n" : "") + terminalLines[currentLine]);
        setCurrentLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-16 overflow-hidden">
      {/* Faint Particles Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-10 w-12 h-12 border border-cyan-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-cyan-400 text-xs font-mono">React</span>
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 w-12 h-12 border border-orange-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm"
        animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        <span className="text-orange-400 text-xs font-mono">Java</span>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 w-12 h-12 border border-green-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm"
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
      >
        <span className="text-green-400 text-xs font-mono">Boot</span>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-12 w-12 h-12 border border-yellow-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm"
        animate={{ y: [0, -9, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, delay: 1.5 }}
      >
        <span className="text-yellow-400 text-xs font-mono">AWS</span>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Krishnamoorthy K
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Full-Stack Developer • Backend Specialist
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-2xl mb-8 max-w-2xl mx-auto"
          style={{
            boxShadow: "0 0 30px rgba(147, 51, 234, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)"
          }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm ml-2">terminal</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6">
            <pre className="text-left text-sm text-green-400 font-mono leading-relaxed whitespace-pre-wrap">
              {terminalText}
            </pre>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/projects"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View Projects
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact"
              className="inline-block px-6 py-3 border border-purple-500/50 rounded-lg text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
