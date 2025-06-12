import React,{useState} from 'react';
import './App.css';
import { NavBar } from './sections/NavBar';
import { Hero } from './sections/Hero';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Certifications } from './sections/Certifications';
// import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Events } from './sections/Events';
import { Contact } from './sections/Contact';
import WelcomeModal from './sections/WelcomeModal';
import SmoothBackground from './components/SmoothBackground';
import SmoothScroll from './components/SmoothScroll';
import SpiralGalaxy from './components/SpiralGalaxy';
import SplineWithLoader from './components/SplineWithLoader';
// import Spline from '@splinetool/react-spline';



const App = () => {
    const [userName, setUserName] = useState("");
  return (
<>
 <WelcomeModal onSaveName={setUserName} />
<NavBar/>
 <SplineWithLoader username={userName}/>

{/* <SmoothScroll> */}
  <SpiralGalaxy username={userName}/>
  {/* <About/> */}
  <Hero/>
  <FeaturedProjects/>
  <Certifications/>
  <SmoothBackground
        colors={['#0f0c29',
      '#302b63',
      '#24243e',
      '#1b1a2f',
      '#3a0ca3',
      '#000814']}
        duration={4000}
      >
  </SmoothBackground>
  <Projects/>
  <Events/>
  <SmoothBackground colors={[ '#2c003e', '#3a0ca3', '#4361ee', '#2c5364']}>
    {/* Your portfolio content */}
    <Contact/>
  </SmoothBackground>
{/* </SmoothScroll> */}

</>
  )
};

export default App;