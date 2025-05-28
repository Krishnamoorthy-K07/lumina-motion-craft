
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3, BufferGeometry } from "three";

export const DataStreams = () => {
  const streamsRef = useRef<Group>(null);

  useFrame((state) => {
    if (streamsRef.current) {
      streamsRef.current.children.forEach((child, index) => {
        if (child.rotation) {
          child.rotation.z = state.clock.elapsedTime * (0.5 + index * 0.1);
        }
      });
    }
  });

  const createDataStreamPath = (startRadius: number, endRadius: number, segments: number) => {
    const points: Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const progress = i / segments;
      const radius = startRadius + (endRadius - startRadius) * progress;
      const angle = progress * Math.PI * 4;
      const y = progress * 8 - 4;
      
      points.push(new Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      ));
    }
    return points;
  };

  return (
    <group ref={streamsRef}>
      {/* Spiral data streams */}
      {Array.from({ length: 6 }).map((_, i) => {
        const startRadius = 1 + i * 0.3;
        const endRadius = 3 + i * 0.2;
        const points = createDataStreamPath(startRadius, endRadius, 50);
        const positions = new Float32Array(points.length * 3);
        
        points.forEach((point, index) => {
          positions[index * 3] = point.x;
          positions[index * 3 + 1] = point.y;
          positions[index * 3 + 2] = point.z;
        });
        
        return (
          <mesh key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={positions}
                count={points.length}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              color={i % 2 === 0 ? "#00ffff" : "#ffaa00"} 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        );
      })}

      {/* Floating data cubes */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 4 + Math.sin(i) * 1;
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
            <boxGeometry args={[0.1, 0.1, 0.1]} />
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
    </group>
  );
};
