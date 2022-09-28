import React from 'react';

function Project(props) {
  const { project } = props;
  return (
    <div className="project">
      <div className="project-info">
        <div className="project-title">{project.name}</div>
        <div className="project-description">{project.description}</div>

        <div className="link-btns">
          <button>
            <a href={project.codeUrl} target="_blank" rel="noreferrer">
              View Code
              <img
                src="https://i.postimg.cc/4y6B0yLh/arrow-up-right.png"
                alt="arrow"
                className="link-icon"
              />
            </a>
          </button>
          <button>
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Site
              <img
                src="https://i.postimg.cc/4y6B0yLh/arrow-up-right.png"
                alt="arrow"
                className="link-icon"
              />
            </a>
          </button>
        </div>
      </div>
      <div className="project-img-container">
        <img src={project.img} alt="project" />
      </div>
    </div>
  );
}

export default Project;
