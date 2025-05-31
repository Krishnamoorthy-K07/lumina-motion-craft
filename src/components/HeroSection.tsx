
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi, I'm Krishna 👋 — I build full-stack web apps";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const codeSnippets = [
    "const developer = { name: 'Krishna', stack: 'Full-Stack' };",
    "import React from 'react';",
    "@SpringBootApplication",
    "SELECT * FROM projects WHERE status = 'awesome';",
    "git commit -m 'Added cool feature'",
    "npm install passion-for-coding",
    "const skills = ['React', 'Spring Boot', 'AWS'];",
    "docker build -t my-app ."
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Spring Boot", icon: "🧰" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "TypeScript", icon: "📘" },
    { name: "Java", icon: "☕" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Circuit Board Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20h60v60h-60z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              <circle cx="80" cy="20" r="3" fill="currentColor"/>
              <circle cx="20" cy="80" r="3" fill="currentColor"/>
              <circle cx="80" cy="80" r="3" fill="currentColor"/>
              <path d="M20 20L80 80M80 20L20 80" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-blue-400"/>
        </svg>
      </div>

      {/* Floating Code Snippets */}
      {codeSnippets.map((code, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-cyan-400/40 pointer-events-none select-none"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            y: [null, -50, 50, -30, 20],
            opacity: [0, 0.6, 0.3, 0.6, 0.2],
            rotate: [0, 2, -2, 1, 0]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`
          }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded px-2 py-1 border border-cyan-400/20">
            {code}
          </div>
        </motion.div>
      ))}

      {/* Animated Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.4, 0.2],
            scale: [1, 1.5, 1, 1]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Typewriter Effect */}
          <motion.div 
            className="text-2xl md:text-3xl font-mono text-cyan-400 mb-4 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 w-0.5 h-6 bg-cyan-400"
            />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Krishnamoorthy K
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl">Technology Analyst</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Technology Analyst specializing in Java Spring Boot microservices, 
            cloud technologies, and scalable backend solutions with 3+ years of experience.
          </motion.p>

          {/* Tech Stack Carousel */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30 whitespace-nowrap"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/projects"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border border-purple-400/50"
              >
                View My Projects
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
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://drive.google.com/uc?export=download&id=1P4FAdXyjub1XKvs0wGA3lr7cXkJeKlLc"
                download="Krishnamoorthy_K_Resume.pdf"
                className="inline-block px-8 py-4 border-2 border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Live Code Terminal */}
          <motion.div
            className="max-w-md mx-auto bg-gray-900/80 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4 font-mono text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 ml-2">Terminal</span>
            </div>
            <div className="text-green-400">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
              >
                $ npx create-portfolio
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                className="text-cyan-400"
              >
                ✓ Deploying to Production...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
                className="text-purple-400"
              >
                🚀 Portfolio is live!
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
