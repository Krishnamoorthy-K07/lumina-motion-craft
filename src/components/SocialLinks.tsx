
import { motion } from "framer-motion";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: "💼",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "GitHub",
      url: "https://github.com/yourprofile",
      icon: "🐱",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourprofile",
      icon: "🐦",
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourprofile",
      icon: "📸",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/yourchannel",
      icon: "📺",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-white">Connect with me</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-3 p-4 bg-gradient-to-r ${link.color} rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-2xl">{link.icon}</span>
            <span>{link.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
