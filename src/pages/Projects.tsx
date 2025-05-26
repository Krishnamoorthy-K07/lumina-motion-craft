
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered FAQ Chatbot",
      description: "Intelligent customer support chatbot using GPT-3.5 and Spring Boot, deployed on AWS Lambda for scalability. Features real-time responses and context-aware conversations.",
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
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
    },
    {
      id: 3,
      title: "Legacy System Migration",
      description: "Successfully migrated a 60-year-old C++ monolith to 15+ Java Spring Boot microservices with 95% test coverage and modern DevOps practices.",
      image: "/placeholder.svg",
      technologies: ["Java 11", "Spring Boot", "Docker", "Kubernetes", "Jenkins", "AWS", "JUnit", "Mockito"],
      liveUrl: "#",
      githubUrl: "#",
      date: "November 2023 - Present",
      features: [
        "15+ microservices architecture",
        "95% test coverage with JUnit & Mockito",
        "Containerized with Docker & Kubernetes",
        "CI/CD pipeline with Jenkins",
        "AWS cloud deployment"
      ]
    },
    {
      id: 4,
      title: "Groovy/XSLT Automation Tool",
      description: "Built an automation tool that reduced manual effort by 70% using Groovy and XSLT transformations for data processing and workflow automation.",
      image: "/placeholder.svg",
      technologies: ["Groovy", "XSLT", "Spring Boot", "PostgreSQL", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      date: "February 2022 - November 2023",
      features: [
        "70% reduction in manual effort",
        "Automated data transformations",
        "XSLT template processing",
        "REST API integration",
        "PostgreSQL data persistence"
      ]
    },
    {
      id: 5,
      title: "Spring Boot API Suite",
      description: "Developed 15+ RESTful APIs with Spring Boot featuring optimized SQL queries, third-party integrations, and comprehensive security measures.",
      image: "/placeholder.svg",
      technologies: ["Spring Boot", "Spring Security", "PostgreSQL", "OAuth2", "REST APIs", "SQL Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2022 - 2023",
      features: [
        "15+ RESTful APIs",
        "Optimized PostgreSQL queries",
        "OAuth2 security implementation",
        "Third-party API integrations",
        "Comprehensive error handling"
      ]
    },
    {
      id: 6,
      title: "Microservices DevOps Pipeline",
      description: "Implemented complete DevOps pipeline for microservices using Docker, Kubernetes, Jenkins, and AWS with automated testing and deployment.",
      image: "/placeholder.svg",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Elasticsearch", "Monitoring", "CI/CD"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023 - Present",
      features: [
        "Automated CI/CD pipeline",
        "Container orchestration",
        "Elasticsearch logging",
        "AWS cloud infrastructure",
        "Automated testing & deployment"
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
            A showcase of my latest work featuring enterprise-level backend solutions, 
            AI integrations, and modern microservices architecture.
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
