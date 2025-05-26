
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
      {/* Main cursor - larger and more visible */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full pointer-events-none z-50 shadow-lg"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Inner bright core */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[51] shadow-sm"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      />
      
      {/* Trailing glow - more visible */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-gradient-to-br from-purple-400/40 to-blue-400/40 rounded-full pointer-events-none z-40 blur-sm"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      />
      
      {/* Outer glow - enhanced */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full pointer-events-none z-30 blur-md"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
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
