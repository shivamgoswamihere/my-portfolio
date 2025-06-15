import React, { useState } from 'react';

export const Skills = () => {
  const [showTechnical, setShowTechnical] = useState(true);

  const technicalSkills = [
    { name: 'HTML', image: 'html-logo.png'},
    { name: 'CSS', image: 'css-logo.png' },
    { name: 'JavaScript', image: 'js-logo.png' },
    { name: 'Git', image: 'git-logo.png' },
    { name: 'SQL', image: 'sql-logo.png' },
    { name: 'React', image: 'react-logo.png' },
    { name: 'Node.js', image: 'node-logo.png' },
    { name: 'Express', image: 'express-logo.png' },
    { name: 'MongoDB', image: 'mongodb-logo.png' },
  ];

  const softSkills = [
    { name: 'Team Management', image: 'team-logo.png' },
    { name: 'Leadership', image: 'leadership-logo.png' },
    { name: 'Community Management', image: 'event-logo.png' },
    { name: 'Public Speaking', image: 'mic-logo.png' },
    { name: 'Event Planning', image: 'event-logo.png' },
    { name: 'Problem Solving', image: 'problem-solving-logo.png' },
    { name: 'Communication', image: 'communication-logo.png' },
    { name: 'Adaptability', image: 'adaptability-logo.png' },
    { name: 'Collaboration', image: 'collaboration-logo.png' }
  ];

  const skillsToShow = showTechnical ? technicalSkills : softSkills;

  return (
    <section className="p-10 w-full h-[100vh] flex  justify-center border-2">
        <div className="flex flex-col py-12 align-middle justify-center h-full gap-8">
            <div className="flex align-middle justify-center">
                <h2 className="text-5xl font-semibold">Skills</h2>
            </div>

            <div className="flex items-center gap-6 text-4xl">
        <span className="ml-4 text-xl font-medium">Soft Skills</span>
        <button
          onClick={() => setShowTechnical(!showTechnical)}
          className={`relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-800 ${showTechnical ? 'bg-blue-600' : 'bg-gray-400'}`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${showTechnical ? 'translate-x-8' : 'translate-x-0'}`}
          ></div>
        </button>
        <span className="ml-4 text-xl font-medium">Technical Skills</span>
            </div>

            <div className="flex align-middle justify-center">
                <div>
                {skillsToShow.map(skill => (
                <div key={skill.name} className="flex items-center">
                    <img src={skill.image} alt={skill.name} className="w-8 h-8" />
                    <span className="text-lg">{skill.name}</span>
                </div>
                ))}
                </div>
        </div>
      </div>
    </section>
  );
};