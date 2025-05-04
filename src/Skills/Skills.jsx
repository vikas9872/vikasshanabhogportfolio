import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import skills from './skills';

function SkillPoints() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const radius = 3;

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        return (
          <group key={skill.id} position={[x, y, z]}>
            {/* Skill name */}
            <Text
              fontSize={0.35}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>

            {/* Connected point */}
            <mesh position={[0, -0.4, 0]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function SkillCloud() {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row justify-center items-center bg-[#f1efec] overflow-hidden pt-16" id='skills'>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full px-4">
        {/* Title */}
        <div className="text-black dark:text-white font-bold text-6xl md:text-7xl font-roboto-condensed text-center">
          SKILLS
        </div>
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Videos/skills.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

      {/* Canvas */}
      <div className="relative flex justify-center items-center z-20 w-[100%] h-[100%]">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <OrbitControls enableZoom={false} />
          <SkillPoints />
        </Canvas>
      </div>
    </div>
  );
}
