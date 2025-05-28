
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
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
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Technology Analyst specializing in Java Spring Boot microservices, 
            cloud technologies, and scalable backend solutions with 3+ years of experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/projects"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                View My Projects
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://drive.google.com/uc?export=download&id=1P4FAdXyjub1XKvs0wGA3lr7cXkJeKlLc"
                download="Krishnamoorthy_K_Resume.pdf"
                className="inline-block px-8 py-4 border-2 border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Premium 3D Elements - Jarvis-like tech interface */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 pointer-events-none"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
          <div className="absolute inset-2 border border-blue-400/40 rounded-full"></div>
          <div className="absolute inset-4 border border-purple-400/50 rounded-full"></div>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-2 left-1/2 w-1 h-6 bg-gradient-to-b from-cyan-400 to-transparent transform -translate-x-1/2"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-16 w-28 h-28 pointer-events-none"
        animate={{ 
          rotate: [360, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-purple-400/30 transform rotate-45"></div>
          <div className="absolute inset-3 border border-pink-400/40 transform rotate-45"></div>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-gradient-to-b from-purple-400 to-transparent transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-gradient-to-t from-pink-400 to-transparent transform -translate-x-1/2"></div>
        </div>
      </motion.div>

      {/* Floating tech nodes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 pointer-events-none"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border border-blue-400/20 rounded-lg transform rotate-12"></div>
          <div className="absolute inset-2 border border-cyan-400/30 rounded-lg transform -rotate-12"></div>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 pointer-events-none"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border border-emerald-400/20 rounded-full"></div>
          <div className="absolute inset-0 border-l-2 border-emerald-400/40 rounded-full"></div>
          <div className="absolute inset-0 border-r-2 border-cyan-400/40 rounded-full"></div>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
