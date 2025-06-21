import React from 'react';
import "./sections-css/Hero.style.css";
import RainbowFillButton from '../components/RainbowFillButton';


export const Hero = () => (

  <div className="w-full h-screen animated-gradient text-white flex flex-col items-center text-center justify-center">
      <div className='.backdrop-blur-md bg-white/5 rounded-xl border border-white/10 p-8'>
  
    <h1 className="text-2xl font-bold mb-4 max-w-2xl">MERN Stack Developer & Community Builder</h1>
    <p className="text-lg mb-6 max-w-2xl">
      I craft clean, responsive web apps and love sharing what I learn. Always exploring new tech, building in public, and growing with the dev community.
    </p>
    <div className="flex justify-center"><RainbowFillButton text="Explore My Work" /></div>
        </div>
        </div>
);





