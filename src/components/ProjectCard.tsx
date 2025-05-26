
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  date?: string;
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transform-style-preserve-3d"
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ padding: "2px" }}
        >
          <div className="w-full h-full bg-gray-800 rounded-xl" />
        </motion.div>

        <div className="relative z-10 p-6">
          {/* Project Image */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Hover overlay with links */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center space-x-4"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.date && (
              <span className="text-xs text-purple-400 font-medium">{project.date}</span>
            )}
          </div>
          <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

          {/* Features */}
          {project.features && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
              <ul className="text-xs text-gray-400 space-y-1">
                {project.features.slice(0, 3).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 3D depth effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            transform: "translateZ(-10px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
