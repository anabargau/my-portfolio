import { motion, useScroll, useTransform } from "framer-motion";
import React, { forwardRef } from 'react';
import '../styles/story.css';

const Story = forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section className="story" ref={ref}>
      <motion.div className="story-title neon-purple" style={{ opacity }}>My Story</motion.div>
      <motion.div className="story-content" style={{ opacity }}>
        I've always loved building things — it started back in high school when I got into coding and competed in programming competitions. Life took me on a different path for a while, but my passion for tech never really went away. <br />
        When I found my way back to coding, I jumped in with both feet. I tackled project after project through <strong><a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">'The Odin Project'</a></strong>, sticking with it no matter how tough it got. I’m the kind of person who thrives on challenges — the harder it is, the more motivated I am to figure it out. <br />
        My background taught me how to stay focused under pressure, work fast without cutting corners, and keep pushing when things get difficult. I'm a fast learner, a hard worker, and someone who’s always looking for ways to get better.  <br />
        For the past two years, I’ve been working as a full-stack developer, sharpening my skills and building real-world projects. I'm passionate about clean code, creative solutions, and bringing energy and persistence to every team I join.
      </motion.div>
    </section>
  );
});

export default Story;
