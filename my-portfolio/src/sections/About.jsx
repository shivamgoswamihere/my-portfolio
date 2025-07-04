import React from 'react';
import ShivamDP from '../assets/Shivam-DP.jpg'; // Adjust the path as necessary
import RotatingText from '../components/RotatingText.jsx'

export const About = () => (
  <section className="data-scroll-section">
    {/* <h2 className="text-3xl font-semibold mb-6 ">About</h2> */}
    <div className="flex flex-col md:flex-row items-center self-center">
      <div className="flex-1 mb-6 md:mb-0 md:mr-10">
        <div className="text-lg mb-4 w-2xs">
          <div className='text-2xl flex gap-3 items-center'>I'm
            <RotatingText
              texts={['Shivam', 'Developer', 'Community Builder', 'Human!']}
              mainClassName="px-2 sm:px-2 md:px-4 text-black overflow-hidden py-0.5 sm:py-0.5 md:py-1 justify-center rounded-lg bg-black text-2xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            /> 
          </div>
          A curious dev on a mission to turn coffee into code and bugs into features. I live for clean UI, smooth logic, and that sweet “it finally works” moment. Let's make the web less boring, one line at a time.
          <div className="flex space-x-4">
            {[{icon:"https://phosphoricons.com?q=linkedin&color=d1c7c7&size=52&weight=duotone", account:"Linkedin", link:"https://linkedin.com/shivamgoswami-"},
            {icon:"https://phosphoricons.com?q=linkedin&color=d1c7c7&size=52&weight=duotone", account:"Twitter", link:"https://twitter.com/ShivamGoswami_"},
            {icon:"https://phosphoricons.com?q=linkedin&color=d1c7c7&size=52&weight=duotone", account:"Hashnode", link:"https://hashnode.com/@shivamgoswami"}            
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
      </div>
      <div className="w-2/3 md:w-1/3 rounded-full">
        <img src={ShivamDP} alt="Shivam's Profile" className="w-2/3 md:w-full md:h-full object-cover shadow-[0px_0px_70px_rgba(0,0,0,0.25)] rounded-full hover:shadow-gray-500/50 transition-shadow duration-300 ease-in-out ml-15" />
      </div>
    </div>
  </section>
);