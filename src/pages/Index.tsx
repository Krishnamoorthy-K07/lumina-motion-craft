
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { Suspense } from "react";
import { HeroSection } from "../components/HeroSection";
import { ThreeDScene } from "../components/ThreeDScene";
import { CallToAction } from "../components/CallToAction";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* 3D Scene */}
        <div className="h-screen relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <ThreeDScene />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Call to Action */}
        <CallToAction />
      </div>
    </motion.div>
  );
};

export default Index;
