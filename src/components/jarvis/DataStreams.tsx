
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const DataStreams = () => {
  const streamsRef = useRef<Group>(null);

  useFrame((state) => {
    if (streamsRef.current) {
      streamsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={streamsRef}>
      {/* Simple floating data cubes */}
      {Array.from({ length: 15 }).map((_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 4 + Math.sin(i) * 0.5;
        const height = Math.sin(i * 0.5) * 2;
        
        return (
          <mesh 
            key={`cube-${i}`}
            position={[
              Math.cos(angle) * radius,
              height,
              Math.sin(angle) * radius
            ]}
            rotation={[i, i * 0.5, i * 0.3]}
          >
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#0066aa" 
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </mesh>
        );
      })}

      {/* Simple energy orbs */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 3 + Math.cos(i) * 0.5;
        
        return (
          <mesh 
            key={`orb-${i}`}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 1.5,
              Math.sin(angle * 2) * 0.5
            ]}
          >
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#00ffff" : "#ffaa00"} 
              emissive={i % 2 === 0 ? "#004444" : "#443300"}
              emissiveIntensity={0.8}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};
