import React, { useState } from 'react';
import Icons from '../components/Icons'
import ToggleButton from '../components/ToggleButton';

export const Skills = () => {
  const [showTechnical, setShowTechnical] = useState(true);

  const technical ={skills: [
    { name: 'HTML', image: Icons.html5},
    { name: 'CSS', image: Icons.css3 },
    { name: 'JavaScript', image: Icons.js },
    { name: 'React.js', image: Icons.react },
    {name: 'Redux', image: Icons.redux},
    { name: 'Node.js', image: Icons.nodejs },
    { name: 'Express.js', image: Icons.expressjs },
    { name: 'SQL', image: Icons.mysql },
    { name: 'MongoDB', image: Icons.mongodb },
    {name: 'Jest', image: Icons.jest},    
  ],
  
  tools:[
    {name:'VS Code', image: Icons.vscode},
    { name: 'Github', image: Icons.github },
    {name:'Figma', image: Icons.figma},
    {name:'Git', image: Icons.git},
    {name:'Mongoose', image: Icons.mongoose},
    {name:'NPM', image: Icons.npm},
    {name:'Open AI', image: Icons.openai},
    {name:'Postman', image: Icons.postman},
    {name:'Slack', image: Icons.slack},
    
  ]}

  const soft ={ skills: [
    { name: 'Team Management', image: 'team-logo.png' },
    { name: 'Leadership', image: 'leadership-logo.png' },
    { name: 'Community Management', image: 'event-logo.png' },
    { name: 'Public Speaking', image: 'mic-logo.png' },
    { name: 'Event Planning', image: 'event-logo.png' },
    { name: 'Problem Solving', image: 'problem-solving-logo.png' },
    { name: 'Communication', image: 'communication-logo.png' },
    {name:'Adaptability', image: ''},
    { name: 'Collaboration', image: 'collaboration-logo.png' }
  ],
  tools:[
    {name:'VS', image: Icons.vscode},
    {name:'Fima', image: Icons.figma},
    {name:'Get', image: Icons.git},
    {name:'Mongoe', image: Icons.mongoose},
    {name:'NPM', image: Icons.npm},
    {name:'OpAI', image: Icons.openai},
    {name:'Post', image: Icons.postman},
    {name:'Sack', image: Icons.slack},
  ]}

  const skillsToShow = showTechnical ?  technical : soft ;

  return (
    <section className="p-10 w-full flex  justify-center">
      <div className="flex flex-col pt-3 align-middle justify-center w-1/2 gap-4">
          <div className="flex align-middle justify-center">  
              <h2 className="text-3xl font-semibold">Skills</h2>
          </div>

          <div className="flex items-center gap-6 text-2xl align-middle justify-center">
            <span className="ml-4 text-xl font-medium">Technical</span>

            <ToggleButton onClick={() => setShowTechnical(!showTechnical)}/>
            
            <span className="ml-3 text-2xl font-medium">Managerial</span>
          </div>

          <div className="flex align-middle justify-center w-full">
            <div className='gap-4  h-full justify-center items-center  w-5/10'>
            <span className='text-xl font-bold'>T o o l s</span>

            {skillsToShow.tools.map(skill => (
              <div key={skill.name} className="flex justify-between items-center my-5 w-full">
                    
                    <div className="text-lg flex gap-2 w-2/3"><img src={skill.image} alt={skill.name} className="w-8 h-8" /> {skill.name}
                    </div>
                  </div>
                ))}

            </div>
            <div className='gap-4 w-1/3 h-full justify-center items-center'>

              <span className='text-xl font-bold'>S k i l l s</span>
              {skillsToShow.skills.map(skill => (
              
              <div key={skill.name} className="flex justify-between items-center my-5 w-full">
                  <div className="text-lg flex gap-2 justify-self-start justify-start justify-items-start w-full"><img src={skill.image} alt={skill.name} className="w-8 h-8" /> {skill.name}
                  </div>
                  </div>
                   
                ))}

            </div>

          </div>
        </div>
                   
    </section>
  );
};
                  {/* {skillsToShow.tools.map(skill => (
                  <div key={skill.name} className="flex justify-between items-center my-5 w-full">
                    
                    <div className="text-lg flex gap-3 w-2/3"><img src={skill.image} alt={skill.name} className="w-8 h-8" /> {skill.name}
                    </div>
                  </div>
                ))}

                <div className='gap-4 w-full h-full justify-center items-center'>
                {skillsToShow.skills.map(skill => (
                  
                  <div key={skill.name} className="flex justify-between items-center my-5 w-full">
                  <div className="text-lg flex gap-3 justify-self-start justify-start justify-items-start w-1/3"><img src={skill.image} alt={skill.name} className="w-8 h-8" /> {skill.name}
                  </div>
                  </div>
                   
                ))} */}