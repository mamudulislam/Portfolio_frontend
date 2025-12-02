import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} scale={2}>
      <MeshDistortMaterial
        color="#06b6d4" // Primary cyan
        attach="material"
        distort={0.5} // Strength, 0 disables the effect (default=1)
        speed={2} // Speed (default=1)
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] absolute top-0 left-0 -z-10 opacity-60 overflow-hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <AnimatedSphere />
        </Float>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
      </Canvas>
      
      {/* Gradient Overlay for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
    </div>
  );
};

export default Hero3D;