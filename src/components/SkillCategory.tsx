
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: {
    title: string;
    skills: Skill[];
  };
}

export const SkillCategory = ({ category }: SkillCategoryProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-purple-400 font-semibold">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
