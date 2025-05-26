
import { motion } from "framer-motion";
import { ArticleCard } from "../components/ArticleCard";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Building Immersive 3D Experiences with Three.js",
      excerpt: "Learn how to create stunning 3D web experiences using Three.js and React Three Fiber.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "3D Development",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Advanced Animation Techniques with Framer Motion",
      excerpt: "Explore advanced animation patterns and best practices for creating smooth, performant animations.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Animation",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Modern React Performance Optimization",
      excerpt: "Discover the latest techniques for optimizing React applications for better performance.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "React",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Creating Interactive Particle Systems",
      excerpt: "Build engaging particle effects that respond to user interactions and mouse movements.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Interactive Design",
      image: "/placeholder.svg"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
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
              Featured Articles
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, 3D graphics,
            and the latest trends in technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Articles;
