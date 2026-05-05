import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}

export default App;
