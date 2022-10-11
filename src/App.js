import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div> 
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
