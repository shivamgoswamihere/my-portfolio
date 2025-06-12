import React from 'react';
import ShivamDP from '../assets/Shivam-DP.jpg'; // Adjust the path as necessary

export const About = () => (
  <section className="p-10 data-scroll-section">
    {/* <h2 className="text-3xl font-semibold mb-6 ">About</h2> */}
    <div className="flex flex-col md:flex-row items-center gap-48">
      <div className="flex-1 mb-6 md:mb-0 md:mr-10">
        <div className="text-lg mb-4 w-2xs"><p className='text-4xl'>I'm Shivam</p>
          Just a curious dev on a mission to turn coffee into code and bugs into features. I live for clean UI, smooth logic, and that sweet “it finally works” moment. Let's make the web less boring, one line at a time.</div>
        <div className="flex space-x-4">
          {['React', 'Node.js', 'MongoDB', 'Express.js'].map(skill => (
            <span key={skill} className="bg-gray-700 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
      <div className="w-80 h-80 rounded-full">
        <img src={ShivamDP} alt="Shivam's Profile" className="w-full h-full object-cover shadow-[0px_0px_70px_rgba(0,0,0,0.25)] rounded-full hover:shadow-gray-500/50 transition-shadow duration-300 ease-in-out" />
      </div>
    </div>
  </section>
);