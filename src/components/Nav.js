import React from 'react';

function Nav(props) {
  const { aboutRef, storyRef, skillsetRef, projectsRef, contactRef } = props;

  function scrollAbout() {
    aboutRef.current.scrollIntoView();
  }

  function scrollStory() {
    storyRef.current.scrollIntoView();
  }
  function scrollSkillset() {
    skillsetRef.current.scrollIntoView();
  }
  function scrollProjects() {
    projectsRef.current.scrollIntoView();
  }
  function scrollContact() {
    contactRef.current.scrollIntoView();
  }

  return (
    <nav className="nav">
      <button onClick={scrollAbout}>about</button>
      <button onClick={scrollStory}>story</button>
      <button onClick={scrollSkillset}>skillset</button>
      <button onClick={scrollProjects}>projects</button>
      <button onClick={scrollContact}>contact</button>
    </nav>
  );
}

export default Nav;
