import React, { useEffect, useState } from 'react';
import projects from './projects';

const Projects = () => {
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

    const section = document.getElementById('projects');
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
      id="projects"
      className="relative h-screen flex justify-center items-center bg-[#f1efec] overflow-hidden pt-16"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Videos/projects.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        {/* Title */}
        <div className="text-black dark:text-white font-bold text-6xl md:text-7xl font-roboto-condensed mb-12 text-center">
          PROJECTS
        </div>

        {/* Timeline */}
        <ol className="border-s border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-s-0 md:border-t w-full max-w-5xl">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className={`transition-all duration-700 ease-in-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } delay-[${index * 150}ms]`}
            >
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:me-0 md:ms-0"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  {project.date}
                </p>
              </div>
              <div className="ms-4 mt-2 pb-5 md:ms-0">
                <h4 className="mb-1.5 text-xl font-semibold text-white">{project.projectname}</h4>
                <img
                  src={project.projectpic}
                  alt={project.projectname}
                  className="rounded-xl mb-4 w-full h-auto max-h-40 object-cover"
                />
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  {project.projectdescription}
                </p>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="inline-block rounded bg-info px-4 py-[6px] text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-info-600 focus:outline-none"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    Source Code
                  </button>
                  <button
                    type="button"
                    className={`inline-block rounded border-2 px-4 py-[6px] text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out ${
                      project.demoLink
                        ? 'border-white text-white hover:bg-white hover:text-black'
                        : 'border-gray-400 text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={() => project.demoLink && window.open(project.demoLink, "_blank")}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Projects;
