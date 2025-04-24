import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Project(props) {
  const { project } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false)
    const img = new Image();
    img.src = project.img;
    img.onload = () => setImgLoaded(true)
  }, [])

  return (
    <motion.div
      className="project-info"
      initial={{ opacity: 0, x: 50 }}
      animate={{  opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-img-container">
        {imgLoaded && (
          <motion.img
            src={project.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </div>

      <div className="project-description">{project.description}</div>

      <div className="link-btns">
        {
          project.codeUrl && 
          <motion.button
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
             <motion.div
              className="fill-bg"
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <a href={project.codeUrl} target="_blank" rel="noreferrer">
              View Code
              <img
                src="https://i.postimg.cc/4y6B0yLh/arrow-up-right.png"
                alt="arrow"
                className="link-icon"
              />
            </a>
          </motion.button>
        }
        {
          project.liveUrl &&
          <motion.button
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
           <motion.div
              className="fill-bg"
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            /> 
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Site
              <img
                src="https://i.postimg.cc/4y6B0yLh/arrow-up-right.png"
                alt="arrow"
                className="link-icon"
              />
            </a>
          </motion.button>
        }
      </div>
    </motion.div>
  );
}

export default Project;
