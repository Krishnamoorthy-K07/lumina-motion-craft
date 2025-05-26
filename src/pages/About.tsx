
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a passionate full-stack developer with a love for creating immersive digital experiences.
              With expertise in modern web technologies and a keen eye for design, I transform ideas into 
              reality through clean, efficient code and stunning visual interfaces.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              My journey in technology began several years ago, and since then, I've been constantly
              learning and adapting to the ever-evolving landscape of web development. I specialize
              in React, Three.js, and modern animation libraries to create websites that not only
              function perfectly but also provide engaging user experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through articles and tutorials. I believe in the power
              of community and continuous learning to drive innovation in our field.
            </motion.p>
          </div>
          
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">5+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">50+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">20+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
