import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../sections/Projects.jsx';
import Aurora from '../components/Aurora.jsx'

const ProjectsPage = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.route === slug);

  if (!project) {
    return <div className="text-center p-10 text-red-500">Project not found!</div>;
  }

  return (<>
  <div className='flex flex-col items-center justify-center h-100vh bg-gradient-to-r from-blue-200 to-purple-200'>
    {/* top effect */}
    
    <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
    

    {/* glass-wrapper */}
      <div className="w-8/10 h-[80vh]  mb-20 text-gray-950 .backdrop-blur-xl bg-white/25 rounded-xl border border-white/10 p-8">
    <section className="p-5">
      <h2 className="text-2xl font-bold mb-4">{project.heading}</h2>
      <p className="text-lg">{project.description}</p>
    </section>
    </div>
    </div>
    </>
  );
};

export default ProjectsPage;


