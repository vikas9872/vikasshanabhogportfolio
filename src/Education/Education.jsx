import React, { useEffect, useRef, useState } from 'react';
import education from './education';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (educationRef.current) observer.observe(educationRef.current);
    return () => {
      if (educationRef.current) observer.unobserve(educationRef.current);
    };
  }, []);

  return (
    <div
      id="education"
      ref={educationRef}
      className="relative min-h-screen flex flex-col overflow-hidden pt-16 px-2 sm:px-4"
    >
      <div className="text-black font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-roboto-condensed mb-8 sm:mb-12 text-center">
        EDUCATION
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 items-center">
        {education.map((item, idx) => (
          <div
            key={item.id}
            className={`flex items-center w-full max-w-xs sm:max-w-xl transition-all duration-700 ease-out
              ${isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-20 opacity-0 scale-90'}
              delay-[${idx * 120}ms] hover:scale-105`}
            style={{
              transitionDelay: `${idx * 120}ms`
            }}
          >
            {/* Round image */}
            <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg overflow-hidden`}>
              <img
                src={item.school}
                alt={item.name}
                className="w-full h-full object-cover rounded-full transition-transform duration-500"
              />
            </div>
            {/* Rectangle content with gap */}
            <div className="flex-1 ml-2 sm:ml-4 bg-white rounded-r-full shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-col justify-center border-l-4 border-white transition-transform duration-500">
              <div className="text-base sm:text-lg md:text-2xl font-bold text-black">{item.name}</div>
              <div className="text-xs sm:text-sm md:text-md text-gray-700">{item.course}</div>
              <div className="text-xs sm:text-sm text-gray-500">{item.yoc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;