
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

const JarvisOrb = () => {
  const groupRef = useRef<Group>(null);
  const innerOrbRef = useRef<Mesh>(null);
  const outerRingRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (innerOrbRef.current) {
      innerOrbRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      innerOrbRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = state.clock.elapsedTime * -0.4;
      outerRingRef.current.rotation.z = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central glowing orb */}
      <mesh ref={innerOrbRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#00d4ff" 
          emissive="#0066cc" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Outer rotating ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#004d4d" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 12, 50]} />
        <meshStandardMaterial 
          color="#0099ff" 
          emissive="#003366" 
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Vertical ring */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.8, 0.08, 14, 60]} />
        <meshStandardMaterial 
          color="#66ccff" 
          emissive="#002244" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
};

const FloatingTechNode = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group position={[3, 0, 0]}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#ff6600" 
          emissive="#cc3300" 
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
          wireframe={false}
        />
      </mesh>
      
      {/* Surrounding wireframe */}
      <mesh>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial 
          color="#ffaa00" 
          transparent
          opacity={0.3}
          wireframe={true}
        />
      </mesh>
    </group>
  );
};

const TechMatrix = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-3, 1, -1]}>
      {/* Central dodecahedron */}
      <mesh>
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial 
          color="#9900ff" 
          emissive="#4400aa" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Orbiting elements */}
      {[0, 1, 2, 3].map((i) => (
        <mesh 
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2) * 2,
            Math.sin((i * Math.PI) / 2) * 2,
            0
          ]}
        >
          <tetrahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial 
            color="#ff00ff" 
            emissive="#660066" 
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export const Simple3DScene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6600" />
      <pointLight position={[0, 10, -10]} intensity={0.7} color="#9900ff" />
      
      <JarvisOrb />
      <FloatingTechNode />
      <TechMatrix />
    </>
  );
};
