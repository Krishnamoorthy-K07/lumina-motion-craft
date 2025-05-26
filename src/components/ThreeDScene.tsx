
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

const FloatingGeometry = ({ position, color, shape }: { position: [number, number, number], color: string, shape: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const renderShape = () => {
    const sharedProps = {
      ref: meshRef,
      position,
    };

    switch (shape) {
      case 'sphere':
        return <Sphere {...sharedProps} args={[1, 32, 32]} />;
      case 'box':
        return <Box {...sharedProps} args={[1.5, 1.5, 1.5]} />;
      case 'torus':
        return <Torus {...sharedProps} args={[1, 0.4, 16, 100]} />;
      default:
        return <Sphere {...sharedProps} args={[1, 32, 32]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group>
        {renderShape()}
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </group>
    </Float>
  );
};

export const ThreeDScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      <FloatingGeometry position={[-3, 2, 0]} color="#8B5CF6" shape="sphere" />
      <FloatingGeometry position={[3, -1, -2]} color="#3B82F6" shape="box" />
      <FloatingGeometry position={[0, 1, 2]} color="#EC4899" shape="torus" />
      <FloatingGeometry position={[-2, -2, 1]} color="#06B6D4" shape="sphere" />
      <FloatingGeometry position={[2, 2, -1]} color="#10B981" shape="box" />
    </>
  );
};
