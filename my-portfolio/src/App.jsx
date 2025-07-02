import React,{useState} from 'react';
import './App.css';
import { NavBar } from './sections/NavBar';
import { Hero } from './sections/Hero';
import { Certifications } from './sections/Certifications';
import { Projects } from './sections/Projects';
import { Events } from './sections/Events';
import { Contact } from './sections/Contact';
import { Skills } from './sections/Skills';
import WelcomeModal from './sections/WelcomeModal';
// import SmoothScroll from '../components/SmoothScroll';
import SpiralGalaxy from './components/SpiralGalaxy';
import SplineWithLoader from './components/SplineWithLoader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import ErrorPage from './pages/ErrorPage';






const HomePage = () => {
    const [userName, setUserName] = useState("");
  return (
<>
 <WelcomeModal onSaveName={setUserName} />
  <NavBar/>
    {/* <SmoothScroll> */}
  <section id="Home">
    <SplineWithLoader username={userName}/>
  </section>

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
{/* </SmoothScroll> */}

</>
  )
};

const App=()=>{
  
  return(
     <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<HomePage />}></Route> 
        <Route path="/projects/:slug" element={<DetailsPage />}></Route>
        <Route path="/events/:slug" element={<DetailsPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes> 
    </BrowserRouter> 
  )
}
export default App;