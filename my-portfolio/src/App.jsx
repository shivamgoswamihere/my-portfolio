import React,{useState} from 'react';
import './App.css';
import { NavBar } from './sections/NavBar';
import { Hero } from './sections/Hero';
import { Certifications } from './sections/Certifications';
import { Projects } from './sections/Projects';
import { Events } from './sections/Events';
import { Contact } from './sections/Contact';
import { Skills } from './sections/Skills';
// import WelcomeModal from './sections/WelcomeModal';
import SmoothScroll from './components/SmoothScroll';
import SpiralGalaxy from './components/SpiralGalaxy';
import SplineWithLoader from './components/SplineWithLoader';



const App = () => {
    const [userName, setUserName] = useState("");
  return (
<>
 {/* <WelcomeModal onSaveName={setUserName} /> */}
  <NavBar/>
    <SmoothScroll>
  <section id="Home">
    <SplineWithLoader username={userName}/>
  </section>

  {/* <About/> */}
  <section id="About">
    <SpiralGalaxy username={userName}/>
  </section>

  <section id="Projects">
    <Projects/>
  </section>
  
  <section id="Education">
    <Hero/>
  </section>
  
  <section id="Skills">
      <Skills/>
  </section>
  
  <section id="Events">
    <Events/>
  </section>

  <section id="Certifications">
    <Certifications/>
  </section>
  
  
  <section id="Contact">
    <Contact/>
  </section>
</SmoothScroll>

</>
  )
};

export default App;