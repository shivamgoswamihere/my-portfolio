import React from 'react';
import { NavLink } from 'react-router-dom';
import LineSlideButton from '../components/LineSlideButton'


export const projects = [
  {
    route: "real-estate",
    heading: "Real Estate Web Application",
    description: "A full-stack web application for real estate listings, built with React and Node.js.",
  },
  {
    route: "e-commerce",
    heading: "E-commerce Platform",
    description: "An e-commerce platform with a modern UI, built using Next.js and Tailwind CSS.",
  },
  {
    route: "blog-application",
    heading: "Blog Application",
    description: "A blogging platform with user authentication and CRUD operations, built with MERN stack.",
  },
];


export const Projects = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6 m-auto">Projects</h2>
    <div className="space-y-4">
      {projects.map(proj => (
        <div key={proj.route} className="border p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">{proj.heading}</h3>
          <p className="mb-2">{proj.description}</p>
          {console.log(proj)}
            <NavLink to={`/projects/${proj.route}`}> <LineSlideButton text={"Details"}/></NavLink>
        </div>
      ))}
    </div>
  </section>
);