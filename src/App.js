import React, { useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import MobileNav from './components/MobileNav';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Story from './components/Story';
import './styles/global.css';

function App() {
  const aboutRef = useRef(null);
  const storyRef = useRef(null);
  const skillsetRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app">
      <MobileNav
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
