
import { motion } from "framer-motion";
import { SkillCategory } from "../components/SkillCategory";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Three.js", level: 85 },
        { name: "Framer Motion", level: 92 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 82 },
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
              My Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and tools.
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
