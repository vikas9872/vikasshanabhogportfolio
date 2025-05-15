import React, { useEffect, useState } from 'react';
import skills from './Skills.js';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="skills"
      className="relative min-h-screen flex justify-center items-center bg-[#f1efec] overflow-hidden pt-16"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Videos/skills.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        {/* Title */}
        <div className="text-white font-bold text-6xl md:text-7xl font-roboto-condensed mb-12 text-center">
          SKILLS
        </div>

        {/* Timeline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[0, 1, 2].map((colIndex) => (
            <div
              key={colIndex}
              className="relative border-l-2 border-white"
            >
              {skills
                .filter((_, i) => i % 3 === colIndex)
                .map((skill, i) => (
                  <div
                    key={i}
                    className={`relative mb-10 transition-all duration-700 ease-in-out transform ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    } delay-[${(colIndex * 3 + i) * 150}ms]`}
                  >
                    {/* Dot */}
                    <div className="absolute left-[-6px] top-[18px] h-3 w-3 rounded-full bg-white border-2 border-black z-20"></div>

                    {/* Card */}
                    <div className="ml-3 bg-white/10 border border-white rounded-xl p-4 flex items-center justify-center gap-4 backdrop-blur-md">
                      <img
                        src={skill.images}
                        alt={skill.name}
                        className="h-12 w-12 object-contain"
                      />
                      <span className="text-white font-medium text-lg">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
