
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered FAQ Chatbot",
      description: "Intelligent customer support chatbot using GPT-3.5 and Spring Boot, deployed on AWS Lambda for scalability. Features real-time responses and context-aware conversations.",
      image: "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?w=600&h=400&fit=crop&crop=center",
      technologies: ["Spring Boot", "OpenAI GPT-3.5", "AWS Lambda", "AWS EC2", "React.js", "JWT Auth"],
      liveUrl: "#",
      githubUrl: "#",
      date: "March 2025",
      features: [
        "GPT-3.5 integration for intelligent responses",
        "AWS Lambda deployment for auto-scaling", 
        "Real-time chat interface",
        "Context-aware conversation handling"
      ]
    },
    {
      id: 2,
      title: "AI-Powered Calorie Tracker",
      description: "Food image analysis application using Spring AI for calorie estimation. Features JWT authentication, AWS S3 integration, and a fully animated dark-themed UI.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop&crop=center",
      technologies: ["Spring Boot", "Spring AI", "AWS EC2", "AWS S3", "React.js", "JWT", "Image Processing"],
      liveUrl: "#",
      githubUrl: "#",
      date: "February 2025",
      features: [
        "AI-powered food image recognition",
        "Automatic calorie calculation",
        "Secure JWT authentication",
        "AWS S3 image storage",
        "Animated dark theme UI"
      ]
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
            A showcase of my latest AI-powered applications featuring enterprise-level backend solutions 
            and modern microservices architecture.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
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

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://github.com/Krishnamoorthy-K07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
