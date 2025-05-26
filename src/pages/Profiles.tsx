
import { motion } from "framer-motion";
import { ProfileCard } from "../components/ProfileCard";

const Profiles = () => {
  const profiles = [
    {
      platform: "GitHub",
      username: "yourprofile",
      description: "Open source contributions and personal projects",
      stats: { repositories: 42, followers: 256, stars: 189 },
      url: "https://github.com/yourprofile",
      icon: "🐱",
      color: "from-gray-600 to-gray-800"
    },
    {
      platform: "CodePen",
      username: "yourprofile",
      description: "Creative coding experiments and UI components",
      stats: { pens: 28, followers: 134, likes: 312 },
      url: "https://codepen.io/yourprofile",
      icon: "✏️",
      color: "from-green-600 to-green-800"
    },
    {
      platform: "Stack Overflow",
      username: "yourprofile",
      description: "Helping the developer community with answers",
      stats: { reputation: 1250, answers: 45, questions: 12 },
      url: "https://stackoverflow.com/users/yourprofile",
      icon: "📚",
      color: "from-orange-600 to-orange-800"
    },
    {
      platform: "LeetCode",
      username: "yourprofile",
      description: "Solving algorithmic challenges and coding problems",
      stats: { solved: 156, ranking: 8543, contests: 23 },
      url: "https://leetcode.com/yourprofile",
      icon: "🧩",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      platform: "Dev.to",
      username: "yourprofile",
      description: "Writing technical articles and tutorials",
      stats: { posts: 18, followers: 89, reactions: 456 },
      url: "https://dev.to/yourprofile",
      icon: "📝",
      color: "from-purple-600 to-purple-800"
    },
    {
      platform: "Dribbble",
      username: "yourprofile",
      description: "UI/UX design showcase and creative inspiration",
      stats: { shots: 34, followers: 167, likes: 523 },
      url: "https://dribbble.com/yourprofile",
      icon: "🎨",
      color: "from-pink-600 to-pink-800"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      exit={{ opacity: 0, rotateX: -90 }}
      transition={{ duration: 0.6 }}
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
              Coding Profiles
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with me across various platforms where I share code, solve problems,
            and contribute to the developer community.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProfileCard profile={profile} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profiles;
