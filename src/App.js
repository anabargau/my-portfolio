import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skillset from './components/Skillset';

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Skillset />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
