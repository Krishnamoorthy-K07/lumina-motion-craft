
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

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
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#0088aa" 
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner energy core */}
      <mesh>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#00aaff" 
          emissiveIntensity={1.0}
          transparent
          opacity={0.4}
        />
      </mesh>

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

      {/* Neural network nodes - simplified */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
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
    </group>
  );
};
