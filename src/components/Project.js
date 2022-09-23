import React from 'react';

function Project(props) {
  const { liveUrl, codeUrl, js, name, description } = props;
  return (
    <div className="project">
      <div className="project-info">
        <div className="project-title">{name}</div>
        <div className="project-description">{description}</div>
      </div>
      <div className="link-btns">
        <button>
          <a href={codeUrl} target="_blank" rel="noreferrer">
            View Code
          </a>
          <img
            src="https://gistcdn.githack.com/anabargau/b1f176374d30e4ad3c54f68f0c11110e/raw/8d04d9f0eedc7872fbd07a39dc8dcdb313722ea5/arrow.svg"
            alt="arrow"
            className="link-icon"
          />
        </button>
        {js ? (
          <button>
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live Site
            </a>
            <img
              src="https://gistcdn.githack.com/anabargau/b1f176374d30e4ad3c54f68f0c11110e/raw/8d04d9f0eedc7872fbd07a39dc8dcdb313722ea5/arrow.svg"
              alt="arrow"
              className="link-icon"
            />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
