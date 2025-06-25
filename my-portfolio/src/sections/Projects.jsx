import React from 'react';
import { NavLink } from 'react-router-dom';
import LineSlideButton from '../components/LineSlideButton'


export const projects = [
  {
    route: "brick-n-beams",
    heading: "Brick and Beams",
    short_description: "A full-stack web application for real estate listings, built with React and Node.js.",
    long_description: "Brick and Beams is a full-stack real estate platform built using the MERN stack that allows users to list, browse, and manage property listings. It provides seamless property discovery with advanced search filters and integrated map views. The platform is role-based, catering to buyers, sellers (agents), and admins. It Helps users find properties quickly and effectively. Provides sellers a digital platform to reach buyers and manage listings without needing a third-party broker.",    
    sub_heading_1: "Tech Stack",
    description_1:["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"],
    sub_heading_2:"Features",
    description_2: ["- User Auth with JWT, Create/Edit/Delete listings, Search & filter properties, Admin panel"],
    sub_heading_3: "Github",
    description_3:"Github.com",
    media:""
  },
  {
    route: "e-commerce",
    heading: "E-commerce Platform",
    short_description: "An e-commerce platform with a modern UI, built using Next.js and Tailwind CSS.",
    long_description: "A full-stack web application for real estate listings, built with React and Node.js.",
    sub_heading_1: "Tech Stack",
    description_1:["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"],
    sub_heading_2:"Features",
    description_2: ["- User Auth with JWT, Create/Edit/Delete listings, Search & filter properties, Admin panel"],    
    sub_heading_3: "Github",
    description_3:"Github.com",
    media:""
  },
  {
    route: "blog-application",
    heading: "Blog Application",
    short_description: "A blogging platform with user authentication and CRUD operations, built with MERN stack.",
    long_description: "A full-stack web application for real estate listings, built with React and Node.js.",
    description_1:["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"],
    sub_heading_1: "Tech Stack",
    description_2: ["- User Auth with JWT, Create/Edit/Delete listings, Search & filter properties, Admin panel"],
    sub_heading_2:"Features",
    sub_heading_3: "Github",
    description_3:"Github.com",
    media:""
  },
];


export const Projects = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6 m-auto">Projects</h2>
    <div className="space-y-4">
      {projects.map(proj => (
        <div key={proj.route} className="border p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">{proj.heading}</h3>
          <p className="mb-2">{proj.short_description}</p>
          {console.log(proj)}
            <NavLink to={`/projects/${proj.route}`}> <LineSlideButton text={"Details"}/></NavLink>
        </div>
      ))}
    </div>
  </section>
);