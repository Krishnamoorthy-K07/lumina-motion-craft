
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java 8/11", "Groovy", "SQL", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring Security", "Spring Data", "Hibernate", "OAuth2/JWT", "React JS"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Elasticsearch"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS S3"]
    },
    {
      title: "AI & Integration Tools",
      skills: ["OpenAI API", "Spring AI", "Prompt Engineering", "Third-party APIs"]
    },
    {
      title: "Architecture & Methodologies",
      skills: ["Microservices", "Agile/Scrum", "Test-Driven Development", "Concurrency", "System Design", "Code Review"]
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
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </motion.h2>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:from-purple-500/30 hover:to-blue-500/30 hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
