import React, { forwardRef } from 'react';
import Project from './Project';

const MobileProjects = forwardRef((props, ref) => {
  const { projectsArray } = props; 
  return (
    <section className="work mobile" ref={ref}>
      <div className="work-title neon-green">My Work</div>
      <div className="projects-container">
        {projectsArray.map((project) => (
          <Project key={`${project.name}-mobile`} project={project} />
        ))}
      </div>
    </section>
  );
});

export default MobileProjects;