
import { motion } from "framer-motion";

interface Profile {
  platform: string;
  username: string;
  description: string;
  stats: Record<string, number>;
  url: string;
  icon: string;
  color: string;
}

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full overflow-hidden">
        {/* Background gradient effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
        
        {/* Header */}
        <div className="relative z-10 flex items-center mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${profile.color} rounded-full flex items-center justify-center text-2xl mr-4`}>
            {profile.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {profile.platform}
            </h3>
            <p className="text-gray-400">@{profile.username}</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 mb-6 relative z-10">
          {profile.description}
        </p>
        
        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {Object.entries(profile.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <motion.p 
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {value.toLocaleString()}
              </motion.p>
              <p className="text-xs text-gray-400 capitalize">
                {key}
              </p>
            </div>
          ))}
        </div>
        
        {/* Hover effect overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.a>
  );
};
