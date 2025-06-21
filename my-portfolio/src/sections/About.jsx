import React from 'react';
import ShivamDP from '../assets/Shivam-DP.jpg'; // Adjust the path as necessary
import RotatingText from '../components/RotatingText.jsx'

export const About = () => (
  <section className="p-10 data-scroll-section">
    {/* <h2 className="text-3xl font-semibold mb-6 ">About</h2> */}
    <div className="flex flex-col md:flex-row items-center gap-48">
      <div className="flex-1 mb-6 md:mb-0 md:mr-10">
        <div className="text-lg mb-4 w-2xs">
          <p className='text-4xl flex'><p>I'm  Shivam</p>
            {/* <RotatingText
              texts={['Shivam', 'Developer', 'Community Builder', 'Human!']}
              mainClassName="px-2 sm:px-2 md:px-4 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg bg-black text-white font-semibold"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />  */}
          </p>
          A curious dev on a mission to turn coffee into code and bugs into features. I live for clean UI, smooth logic, and that sweet “it finally works” moment. Let's make the web less boring, one line at a time.</div>
          <div className="flex space-x-4">
            {[{icon:"https://phosphoricons.com?q=linkedin&color=d1c7c7&size=52&weight=duotone", account:"Linkedin", link:"https://linkedin.com/shivamgoswami-"},
            {icon:"https://phosphoricons.com?q=linkedin&color=d1c7c7&size=52&weight=duotone", account:"Twitter", link:"https://twitter.com/ShivamGoswami_"},
            {icon:"https://phosphoricons.com?q=linkedin&color=d1c7c7&size=52&weight=duotone", account:"Hashnode", link:"https://hashnode.com/@shivamgoswami"},
            {icon:"https://phosphoricons.com?q=linkedin&color=d1c7c7&size=52&weight=duotone", account:"Extra", link:"https://linkedin.com/shivamgoswami-"}
            ].map(skill => (
              <span key={skill.account} className="bg-gray-700 px-3 py-1 rounded-full">
                <a href={skill.link}>
                  <img src={skill.icon} alt="" />
                  <span>
                    {skill.account}
                  </span>
                </a>
              </span>
          ))}
        </div>
      </div>
      <div className="w-80 h-80 rounded-full">
        <img src={ShivamDP} alt="Shivam's Profile" className="w-full h-full object-cover shadow-[0px_0px_70px_rgba(0,0,0,0.25)] rounded-full hover:shadow-gray-500/50 transition-shadow duration-300 ease-in-out" />
      </div>
    </div>
  </section>
);