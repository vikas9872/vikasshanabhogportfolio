import React, { useEffect, useState } from 'react';
import education from './education.js';

const Education = () => {
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

    const section = document.getElementById('education');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="education"
      className="relative min-h-screen flex justify-center items-center bg-[#f1efec] overflow-hidden pt-16"
    >
      <div className='flex flex-col md:flex-row items-center'>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/Videos/education.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

        {/* Title */}
        <div className="relative z-10 text-black dark:text-white font-bold text-4xl md:text-7xl font-roboto-condensed p-10">
          EDUCATION
        </div>

        {/* Timeline */}
        <div className="relative z-10 flex flex-col items-start gap-8 w-full max-w-4xl px-4">
          {education.map((edu, index) => (
            <div key={edu.id} className="flex flex-row items-center gap-4">
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                {/* Line */}
                {index !== education.length - 1 && (
                  <div
                    className={`w-[2px] h-16 bg-gray-400 dark:bg-gray-600 transition-all duration-700 ${isVisible ? 'scale-y-100' : 'scale-y-0'
                      } origin-top`}
                  ></div>
                )}
              </div>

              {/* Content */}
              <div
                className={`flex flex-col gap-2 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <h4 className="text-1xl font-semibold text-black dark:text-white">
                  {edu.name}
                </h4>
                <p className="text-1xl text-gray-700 dark:text-gray-300">
                  {edu.course}
                </p>
                <p className="text-1xl text-gray-500 dark:text-gray-400">
                  {edu.yoc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
