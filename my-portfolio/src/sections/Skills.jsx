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
    { name: 'Team Management', image: '' },
    { name: 'Leadership', image: '' },
    { name: 'Community Management', image: '' },
    { name: 'Public Speaking', image: '' },
    { name: 'Event Planning', image: '' },
    { name: 'Problem Solving', image: 'problem-' },
    { name: 'Time Management', image: '' },
    { name: 'Communication', image: '' },
    {name:'Adaptability', image: ''},
    { name: 'Collaboration', image: '' }
  ],
  tools:[
    {name:'Figma', image: Icons.figma},
    {name:'OpenAI', image: Icons.openai},
    {name:'Slack', image: Icons.slack},
    {name:'Canva', image: Icons.canva},
    {name:'Notion', image: Icons.notion},
    {name:'Gemini', image: Icons.gemini}
  ]}

  const skillsToShow = showTechnical ?  technical : soft ;

  return (
    <section className="p-10 w-full flex  justify-center">
      <div className="flex flex-col pt-3 align-middle justify-center w-1/2 gap-4">
          <div className="flex align-middle justify-center">  
              <h2 className="text-3xl font-semibold">Skills</h2>
          </div>

          <div className=" flex flex-col md:flex-row md:items-center md:text-2xl md:align-middle md:justify-center">
            <span className="ml-4 text-xl font-medium">Technical</span>

            <ToggleButton onClick={() => setShowTechnical(!showTechnical)}/>
            
            <span className="ml-3 text-2xl font-medium">Managerial</span>
          </div>

          <div className="flex flex-col md:flex-row align-middle justify-center w-full">
            <div className=' h-full self-center justify-center  items-center  w-5/10'>
            <span className='text-xl font-bold'>Tools</span>

            {skillsToShow.tools.map(skill => (
              <div key={skill.name} className="flex justify-between items-center my-5 w-full">
                    
                    <div className="text-lg flex gap-2 w-2/3"><img src={skill.image} alt={skill.name} className="w-8 h-8" /> {skill.name}
                    </div>
                  </div>
                ))}

            </div>

            <div className=' w-1/3 h-full self-center justify-center items-center'>

              <span className='text-xl font-bold'>Skills</span>
              {skillsToShow.skills.map(skill => (
              
              <div key={skill.name} className="flex justify-between items-center my-5 w-full">
                  <div className="text-lg flex gap-2 justify-self-start justify-start justify-items-start w-full h-8">{showTechnical && <img src={skill.image} alt={skill.name} className="w-8 h-full" />} {skill.name}
                  </div>
                  </div>
                   
                ))}

            </div>

          </div>
        </div>
                   
    </section>
  );
};
                  