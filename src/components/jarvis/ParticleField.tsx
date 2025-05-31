
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points } from "three";

export const ParticleField = () => {
  const pointsRef = useRef<Points>(null);

  const particleCount = 1000;
  const particlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < particleCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlePositions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#00ffff" 
        size={0.02} 
        transparent 
        opacity={0.6}
      />
    </points>
  );
};
