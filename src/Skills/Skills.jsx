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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {[0, 1, 2].map((colIndex) => (
            <div
              key={colIndex}
              className="flex flex-col items-center gap-8"
            >
              {skills
                .filter((_, i) => i % 3 === colIndex)
                .map((skill, index, arr) => (
                  <div key={index} className="flex flex-row items-center gap-4 relative">
                    {/* Timeline Dot and Line */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-black"></div>
                      {index !== arr.length - 1 && (
                        <div
                          className={`w-[2px] h-10 md:h-16 bg-white transition-all duration-700 ${
                            isVisible ? 'scale-y-100' : 'scale-y-0'
                          } origin-top`}
                        ></div>
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={`flex items-center gap-4 p-4 border border-white bg-white/10 rounded-xl backdrop-blur-md transition-opacity duration-700 h-[60px] md:h-[80px] w-[180px] md:w-[200px] ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={skill.images}
                        alt={skill.name}
                        className="h-12 w-12 object-contain"
                      />
                      <span className="text-white text-md md:text-lg font-medium">
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

