
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { Sphere } from "@react-three/drei";

interface JarvisBrainProps {
  isInitialized: boolean;
}

export const JarvisBrain = ({ isInitialized }: JarvisBrainProps) => {
  const brainRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);
  const innerRingsRef = useRef<Group>(null);

  useFrame((state) => {
    if (brainRef.current && isInitialized) {
      brainRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }

    if (innerRingsRef.current) {
      innerRingsRef.current.rotation.x = state.clock.elapsedTime * -0.2;
      innerRingsRef.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <group ref={brainRef} position={[0, 0, 0]}>
      {/* Central Core */}
      <Sphere ref={coreRef} args={[0.8, 32, 32]}>
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#0088aa" 
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
          wireframe={false}
        />
      </Sphere>

      {/* Inner energy core */}
      <Sphere args={[0.6, 16, 16]}>
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#00aaff" 
          emissiveIntensity={1.0}
          transparent
          opacity={0.4}
        />
      </Sphere>

      {/* Rotating rings around brain */}
      <group ref={innerRingsRef}>
        {[1.2, 1.5, 1.8, 2.1].map((radius, index) => (
          <mesh key={index} rotation={[Math.PI / 2 * index, 0, 0]}>
            <torusGeometry args={[radius, 0.02, 8, 64]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#0066aa" 
              emissiveIntensity={0.4}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Neural network nodes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2.5;
        return (
          <mesh 
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius * 0.5,
              Math.sin(angle * 2) * 0.3
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial 
              color="#ffaa00" 
              emissive="#ff6600" 
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}

      {/* Simplified connection lines between nodes */}
      {Array.from({ length: 6 }).map((_, i) => {
        const startAngle = (i / 6) * Math.PI * 2;
        const endAngle = ((i + 1) / 6) * Math.PI * 2;
        const radius = 2.5;
        
        const startX = Math.cos(startAngle) * radius;
        const startY = Math.sin(startAngle) * radius * 0.5;
        const endX = Math.cos(endAngle) * radius;
        const endY = Math.sin(endAngle) * radius * 0.5;
        
        const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        
        // Only create cylinder if distance is valid
        if (distance > 0 && !isNaN(distance)) {
          return (
            <mesh 
              key={i} 
              position={[midX, midY, 0]}
              rotation={[0, 0, Math.atan2(endY - startY, endX - startX)]}
            >
              <cylinderGeometry args={[0.005, 0.005, distance, 4]} />
              <meshStandardMaterial 
                color="#00ffff" 
                transparent 
                opacity={0.3}
                emissive="#0066aa"
                emissiveIntensity={0.2}
              />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
};
