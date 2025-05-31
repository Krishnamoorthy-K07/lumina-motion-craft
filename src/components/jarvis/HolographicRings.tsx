
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const HolographicRings = () => {
  const ringsRef = useRef<Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      ringsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={ringsRef}>
      {/* Large outer rings */}
      {[4, 5, 6].map((radius, index) => (
        <mesh key={`outer-${index}`} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.01, 8, 64]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#0044aa" 
            emissiveIntensity={0.2}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Vertical scanning rings */}
      {[3.5, 4.5].map((radius, index) => (
        <mesh key={`vertical-${index}`} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[radius, 0.02, 8, 64]} />
          <meshStandardMaterial 
            color="#ffaa00" 
            emissive="#ff6600" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}

      {/* Diagonal scanning ring */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[5.5, 0.015, 8, 64]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive="#aa0066" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
};
