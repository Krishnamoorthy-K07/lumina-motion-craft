
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Trailing glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full pointer-events-none z-40 blur-sm"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      />
      
      {/* Outer glow */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full pointer-events-none z-30 blur-md"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />
    </>
  );
};
