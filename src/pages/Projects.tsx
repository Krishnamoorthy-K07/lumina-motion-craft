
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "3D Portfolio Website",
      description: "An immersive portfolio experience with Three.js animations and interactive particles.",
      image: "/placeholder.svg",
      technologies: ["React", "Three.js", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced filtering and payment integration.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AI-Powered Dashboard",
      description: "A modern dashboard with AI insights and real-time data visualization.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Python"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Mobile App UI Kit",
      description: "A comprehensive UI kit for mobile applications with dark mode support.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Expo", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "A modern social media platform with real-time messaging and content sharing.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Task Management Tool",
      description: "A collaborative task management application with team features and analytics.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work featuring cutting-edge technologies and innovative solutions.
            Each project represents a unique challenge and creative approach to problem-solving.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
