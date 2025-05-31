
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [terminalText, setTerminalText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  
  const bootSequence = [
    "> Initializing Krishna.exe...",
    "> Loading brain: 100% 🧠",
    "> Deploying code wizardry... ⚙️",
    "> React systems online ⚛️",
    "> Spring Boot engaged ☕",
    "> Connecting to cloud ☁️... AWS handshake complete",
    "> PostgreSQL data nodes synced 🐘",
    "> Welcome to the mind of a full-stack developer 🚀"
  ];

  useEffect(() => {
    if (currentLineIndex < bootSequence.length) {
      const currentLine = bootSequence[currentLineIndex];
      let charIndex = 0;
      
      const typewriter = setInterval(() => {
        if (charIndex < currentLine.length) {
          setTerminalText(prev => {
            const lines = prev.split('\n');
            lines[currentLineIndex] = currentLine.slice(0, charIndex + 1);
            return lines.join('\n');
          });
          charIndex++;
        } else {
          clearInterval(typewriter);
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            if (currentLineIndex + 1 < bootSequence.length) {
              setTerminalText(prev => prev + '\n');
            }
          }, 500);
        }
      }, 50);

      return () => clearInterval(typewriter);
    }
  }, [currentLineIndex]);

  const techIcons = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Java", icon: "☕", color: "from-orange-400 to-red-400" },
    { name: "Spring Boot", icon: "🧰", color: "from-green-400 to-emerald-400" },
    { name: "AWS", icon: "☁️", color: "from-yellow-400 to-orange-400" },
    { name: "PostgreSQL", icon: "🐘", color: "from-purple-400 to-pink-400" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0">
        {/* Circuit Board Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <defs>
              <pattern id="circuit-advanced" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20h60v60h-60z" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="20" cy="20" r="2" fill="currentColor"/>
                <circle cx="80" cy="80" r="2" fill="currentColor"/>
                <path d="M20 20L50 50L80 20M20 80L80 80" stroke="currentColor" strokeWidth="0.5"/>
                <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-advanced)" className="text-purple-400"/>
          </svg>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              opacity: [0.2, 0.8, 0.4, 0.2],
              scale: [1, 1.5, 1, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Neon Light Streaks */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
          animate={{ x: [window.innerWidth + 100, -100] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating 3D Code Cubes */}
      {["React", "Java", "AWS", "Spring", "PostgreSQL"].map((tech, index) => (
        <motion.div
          key={tech}
          className="absolute perspective-1000"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.7, 
            scale: 1,
            rotateY: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, delay: index * 0.5 }
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${20 + (index % 2) * 60}%`
          }}
        >
          <div className="w-16 h-16 transform-style-preserve-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white font-mono text-xs">
              {tech}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-6xl mx-auto text-center">
            {/* Holographic Name Panel */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative inline-block">
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.5)",
                      "0 0 40px rgba(139, 92, 246, 0.8)",
                      "0 0 20px rgba(139, 92, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Krishna
                  </span>
                </motion.h1>
                
                {/* Holographic border effect */}
                <div className="absolute inset-0 border-2 border-purple-500/30 rounded-lg transform rotate-1 -z-10"></div>
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-lg transform -rotate-1 -z-10"></div>
              </div>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full-Stack Developer & Code Architect
              </motion.p>
            </motion.div>

            {/* Terminal Window */}
            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-cyan-400/40 shadow-2xl shadow-cyan-400/20">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/50">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-4 font-mono text-sm">krishna@portfolio:~$</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <pre className="text-green-400 whitespace-pre-wrap min-h-[200px]">
                    {terminalText}
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-cyan-400"
                    >
                      _
                    </motion.span>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              className="flex justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`relative group cursor-pointer`}
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, delay: index * 0.2 },
                    rotateY: { duration: 8, repeat: Infinity, delay: index * 0.5 }
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {tech.icon}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </div>
                  
                  {/* Glowing ring effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-50`}
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/projects"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Explore Projects
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact"
                  className="inline-block px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center pb-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-gray-400 text-sm ml-3 mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </div>
  );
};
