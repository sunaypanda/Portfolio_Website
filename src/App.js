import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import CanvasBackground from './components/ui/CanvasBackground';
import CustomCursor from './components/ui/CustomCursor';
import SystemStatus from './components/ui/SystemStatus';
import './styles/GlobalStyles.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <CanvasBackground />
      <SystemStatus />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
