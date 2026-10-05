import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

export default function Scene() {
  const groupRef = useRef();
  const materialRef = useRef();
  const lineMaterialRef = useRef();
  
  // Create Neural Network nodes and connections
  const { positions, linePositions } = useMemo(() => {
    const count = 300; // 300 nodes for the network
    const pts = [];
    const positionsArr = new Float32Array(count * 3);
    
    // Distribute nodes in a sprawling 3D cluster
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      
      positionsArr[i * 3] = x;
      positionsArr[i * 3 + 1] = y;
      positionsArr[i * 3 + 2] = z;
      
      pts.push(new THREE.Vector3(x, y, z));
    }
    
    // Connect nodes that are close to each other
    const linePts = [];
    for(let i=0; i<count; i++) {
      let connections = 0;
      for(let j=i+1; j<count; j++) {
        const dist = pts[i].distanceTo(pts[j]);
        if(dist < 3.5 && connections < 4) { // Max 4 connections per node to avoid clutter
          linePts.push(pts[i].x, pts[i].y, pts[i].z);
          linePts.push(pts[j].x, pts[j].y, pts[j].z);
          connections++;
        }
      }
    }
    
    return { 
      positions: positionsArr, 
      linePositions: new Float32Array(linePts) 
    };
  }, []);

  const baseColor = useMemo(() => new THREE.Color("#d4af37"), []); // Gold
  const targetColor = useMemo(() => new THREE.Color("#a14a38"), []); // Rust color

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      setScrollProgress(scrollY / maxScroll);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slowly rotate the entire network
    groupRef.current.rotation.x -= delta / 40;
    groupRef.current.rotation.y -= delta / 50;

    // Slight parallax based on mouse
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 1.5, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 1.5, 0.05);

    if (materialRef.current && lineMaterialRef.current) {
      // Shift colors based on scroll
      materialRef.current.color.lerpColors(baseColor, targetColor, scrollProgress);
      lineMaterialRef.current.color.lerpColors(baseColor, targetColor, scrollProgress);
      
      // Move through the network as we scroll down
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 6 - scrollProgress * 12, 0.05);
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      {/* Network Nodes */}
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          ref={materialRef}
          transparent
          color="#d4af37"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Network Synapses (Lines) */}
      <lineSegments frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            array={linePositions} 
            itemSize={3} 
            count={linePositions.length / 3} 
          />
        </bufferGeometry>
        <lineBasicMaterial 
          ref={lineMaterialRef}
          attach="material" 
          color="#d4af37" 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
