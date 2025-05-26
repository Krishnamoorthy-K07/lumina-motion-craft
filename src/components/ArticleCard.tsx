
import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <motion.article
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span>{new Date(article.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <motion.div
          className="text-purple-400 font-semibold flex items-center"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Read More
          <span className="ml-2">→</span>
        </motion.div>
      </div>
    </motion.article>
  );
};
