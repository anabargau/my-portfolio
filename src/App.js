import React, { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Story from './components/Story';

function App() {
  const aboutRef = useRef(null);
  const storyRef = useRef(null);
  const skillsetRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app">
      <Nav
        aboutRef={aboutRef}
        skillsetRef={skillsetRef}
        storyRef={storyRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <About ref={aboutRef} />
      <Story ref={storyRef} />
      <Skillset ref={skillsetRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
