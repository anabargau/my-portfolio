import { AnimatePresence, motion } from "motion/react";
import React, { forwardRef, useState } from "react";
import "../styles/projects.css";
import FadeIn from "./FadeIn";
import Project from "./Project";

const Projects = forwardRef((props, ref) => {
  const { projectsArray } = props;
  const [activeProject, setActiveProject] = useState(projectsArray[0]);

  return (
    <section className="work desktop" ref={ref}>
      <FadeIn delay={0.2}>
        <div className="work-title neon-green">My Work</div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="projects-container">
          <div className="projects-titles">
            {projectsArray.map((project) => (
              <div
                className="project-title neon-purple"
                key={`${project.name}-desktop`}
                onClick={() => setActiveProject(project)}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="dot-line"
                  style={{
                    width: activeProject.name === project.name ? "2rem" : "5px",
                    height: "5px",
                    borderRadius:
                      activeProject.name === project.name ? "2px" : "50%",
                    backgroundColor: "var(--color-fuchsia)",
                    boxShadow: "0 0 6px var(--color-fuchsia)",
                  }}
                />
                <span className="title-text">{project.name}</span>
              </div>
            ))}
          </div>
          <div className="projects-info">
            <div className="project-info">
              <AnimatePresence initial={false} mode="wait">
                {projectsArray.map(
                  (project) =>
                    activeProject.name === project.name && (
                      <Project key={project.name} project={project} />
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
});

export default Projects;
