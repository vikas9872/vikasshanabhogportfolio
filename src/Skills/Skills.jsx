import React, { useEffect, useRef, useState } from 'react';
import skills from './Skills.js';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const getCols = () => {
    if (window.innerWidth >= 1024) return 5;
    if (window.innerWidth >= 768) return 4;
    if (window.innerWidth >= 640) return 3;
    return 2;
  };

  const [cols, setCols] = useState(getCols());

  useEffect(() => {
    const handleResize = () => setCols(getCols());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div
      id="skills"
      ref={skillsRef}
      className="relative min-h-screen flex flex-col overflow-hidden pt-16 px-2 sm:px-4"
    >
      <div className="text-black font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center">
        SKILLS
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center w-full max-w-5xl mx-auto">
        {skills.map((skill, idx) => {
          // Animate row by row, like education
          const row = Math.floor(idx / cols);
          return (
            <div
              key={skill.name}
              className={`flex items-center justify-center transition-all duration-700
                ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
                delay-[${row * 120}ms]`}
              style={{
                transitionDelay: `${row * 120}ms`
              }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white group transition-all duration-300">
                <img
                  src={skill.images}
                  alt={skill.name}
                  className="w-[70%] h-[70%] object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

{/* <div className="w-full absolute bottom-0 left-0 text-center text-black font-semibold text-xs sm:text-lg opacity-80 bg-white">
        Made by: Vikas. Shanabhog
      </div> */}