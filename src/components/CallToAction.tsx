
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with cutting-edge technology
            and innovative design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start a Project
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="/resume.pdf"
                download
                className="inline-block px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
