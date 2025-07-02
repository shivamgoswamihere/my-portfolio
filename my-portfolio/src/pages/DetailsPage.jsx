import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../sections/Projects.jsx';
import { events } from '../sections/Events.jsx';
import Aurora from '../components/Aurora.jsx';

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
      <p className="text-lg border-red-500 font-semibold">{detail.long_description}</p>
    </div>

    {/* Description and Media */}
    <div className='flex h-3/10 flex-col lg:flex-row' >
      <div className='shrink-1 w-full lg:w-1/3 h-full text-black gap-2 '>
      {/* Sub Heading 1 and its decription */}
        <div className='mb-2  .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6 my-6 lg:mr-3'>
          <h1 className='text-xl font-bold'>{detail.sub_heading_1}</h1>
          <ul>
            {detail.description_1.map(value=>(
            <li className='font-semibold list-disc'>{value}</li>
            ))}
          </ul>
        </div>

        {/* SUb heading 2 and its description */}
        <div className='mb-2 .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6 my-6 lg:mr-3'>
          <h1 className='text-xl font-bold'>{detail.sub_heading_2}</h1>
          <ul>
            {detail.description_2.map(value=>(
            <li className='font-semibold list-disc'>{value}</li>
            ))}
          </ul>
        </div>


        {/* SUb heading 3 and its description */}
        <div className='mb-2 .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6 my-6 lg:mr-3'>
          <h1 className='text-lg font-bold'>{detail.sub_heading_3}</h1>
           <ul>
            {detail.description_3.map(value=>(
            <li className='font-semibold list-disc'>{value}</li>
            ))}
          </ul>
        </div>

      </div>




      <div className='flex flex-col gap-4 max-w-2xl w-full lg:w-2/3 shrink-0 .backdrop-blur-xl bg-white/25 rounded-xl border border-white/5 p-6 my-6 lg:ml-3'>
        <div ><img src={detail.media[0]} className="w-full max-w-3xl object-contain h-auto"/></div>
        <div><img src={detail.media[1]} className="w-full max-w-3xl object-contain"/></div>
        <div><img src={detail.media[2]} className="w-full max-w-3xl object-cover max-h-full"/></div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default DetailsPage;


