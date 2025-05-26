
import { motion } from "framer-motion";
import { SkillCategory } from "../components/SkillCategory";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java 8/11", level: 95 },
        { name: "Groovy", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 80 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "Spring Security", level: 90 },
        { name: "Spring Data", level: 90 },
        { name: "Hibernate", level: 85 },
        { name: "OAuth2/JWT", level: 88 },
        { name: "React JS", level: 80 },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 88 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins", level: 85 },
        { name: "GitHub Actions", level: 80 },
        { name: "Elasticsearch", level: 75 },
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "AWS S3", level: 85 },
      ]
    },
    {
      title: "AI & Integration Tools",
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "Spring AI", level: 80 },
        { name: "Prompt Engineering", level: 82 },
        { name: "Third-party APIs", level: 88 },
      ]
    },
    {
      title: "Architecture & Methodologies",
      skills: [
        { name: "Microservices", level: 95 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Test-Driven Development", level: 88 },
        { name: "Concurrency", level: 85 },
        { name: "System Design", level: 85 },
        { name: "Code Review", level: 90 },
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise in backend development, 
            cloud technologies, and modern software engineering practices.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <SkillCategory category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
