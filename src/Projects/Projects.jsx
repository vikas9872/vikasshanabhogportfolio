import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaLaptop, FaGithub } from "react-icons/fa";
import projects from './projects';
import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <div
      id="projects"
      ref={projectsRef}
      className="relative min-h-screen flex flex-col bg-gradient-to-r from-[#b2fefa] to-[#0ed2f7] overflow-hidden pt-16 px-4"
    >
      <div className="text-black font-bold text-4xl md:text-6xl font-roboto-condensed mb-12 text-center">
        PROJECTS
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`transition-all duration-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              delay-[${idx * 120}ms]`}
            style={{
              transitionDelay: `${idx * 120}ms`,
              fontFamily: '"Libertinus Mono", monospace'
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={project.projectpic}
                alt={project.projectname}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontFamily: '"Libertinus Mono", monospace' }}
                >
                  {project.projectname}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontFamily: '"Libertinus Mono", monospace' }}
                >
                  {project.projectdescription}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Button
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  sx={{ fontFamily: '"Libertinus Mono", monospace' }}
                  variant="contained"
                >
                  <FaGithub size={18} className='mr-1' /> GitHub
                </Button>
                <Button
                  size="small"
                  href={project.demoLink}
                  target="_blank"
                  sx={{ fontFamily: '"Libertinus Mono", monospace' }}
                  variant="contained"
                >
                  <FaLaptop size={18} className='mr-1' /> Demo
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
