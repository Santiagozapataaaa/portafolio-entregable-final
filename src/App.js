import Navbar from './components/js/Navbar';
import Aboutme from './components/js/Aboutme'
import Projects from './components/js/Projects';
import Contact from './components/js/Contact';
import Skills from './components/js/Skills';

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
