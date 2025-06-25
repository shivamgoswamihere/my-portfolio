import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../sections/Projects.jsx';
import { events } from '../sections/Events.jsx';
import Aurora from '../components/Aurora.jsx'
import media from '../components/Icons.js';

const DetailsPage = () => {
  const { slug } = useParams();

  
  let detail = projects.find((p) => p.route === slug);

  if (!detail){
      detail = events.find((p) => p.route === slug);
  }
  // if (project) {
    
  // }

  return (<>
  <div className='flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200'>
    {/* top effect */}
    
    <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
    

    {/* glass-wrapper */}
      <div className="w-8/10 h-8/10  mb-20 text-gray-950 .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6">
      {/* Heading and description */}
    <div className=" flex flex-col .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6">
      <h2 className="text-2xl font-bold mb-2">{detail.heading}</h2>
      <p className="text-lg border-red-500">{detail.long_description}</p>
    </div>

    {/* Description and Media */}
    <div className='flex h-3/10 ' >
      <div className='shrink-1 w-1/3 h-full text-black gap-2 .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6 my-6 mr-3'>
      {/* Sub Heading 1 and its decription */}
        <div className='mb-2'>
          <h1 className='text-lg font-bold'>{detail.sub_heading_1}</h1>
          <ul>
            {detail.description_1.map(value=>(
            <li>{value}</li>
            ))}
          </ul>
        </div>

        {/* SUb heading 2 and its description */}
        <div className='mb-2'>
          <h1 className='text-lg font-bold'>{detail.sub_heading_2}</h1>
          <ul>
            {detail.description_2.map(value=>(
            <li>{value}</li>
            ))}
          </ul>
        </div>


        {/* SUb heading 3 and its description */}
        <div className='mb-2'>
          <h1 className='text-lg font-bold'>{detail.sub_heading_3}</h1>
          <p>{detail.description_3}</p>
        </div>

      </div>
      <div className='grid grid-cols-4 grid-rows-6 flex-grow shrink-0 .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6 my-6 ml-3'>
        <div className='row-span-3 col-span-3 border border-amber-500'><img src={media.css3}/></div>
        <div className='row-span-4 col-span-1 border border-red-500'><img src={media.figma}/></div>
        <div className=' row-span-2 col-span-2 border border-blue-500'><img src={media.git}/></div>
        <div className='row-span-2 border border-green-500'><img src={media.github}/></div>
        <div className='row-span-1 border border-purple-500'><img src={media.react}/></div>
        <div className='row-span-1 border border-gray-500'><img src={media.nodejs}/></div>
        <div className='row-span-1 border border-indigo-500'><img src={media.postman}/></div>
        <div className='col-span-2 border border-amber-500'><img src={media.slack}/></div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default DetailsPage;


