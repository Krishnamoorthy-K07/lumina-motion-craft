
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
    >
      <HeroSection />
    </motion.div>
  );
};

export default Index;
