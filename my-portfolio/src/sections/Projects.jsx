import React from 'react';
import { NavLink } from 'react-router-dom';
import LineSlideButton from '../components/LineSlideButton';
import ProjectMedia from '../components/ProjectMedia';


export const projects = [
  {
    route: "real-estate-application",
    heading: "Real Estate Application",
    short_description: "A full-stack web application for real estate listings, built with React and Node.js.",
    long_description: "Brick and Beams is a full-stack real estate platform built using the MERN stack that allows users to list, browse, and manage property listings. It provides seamless property discovery with advanced search filters and integrated map views. The platform is role-based, catering to buyers, sellers (agents), and admins. It Helps users find properties quickly and effectively. Provides sellers a digital platform to reach buyers and manage listings without needing a third-party broker.",    
    sub_heading_1: "Tech Stack",
    description_1:["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"],
    sub_heading_2:"Features",
    description_2: ["- User Auth with JWT, Create/Edit/Delete listings, Search & filter properties, Admin panel"],
    sub_heading_3:"User Roles",
    description_3: ["Buyer : Can browse listings, search/filter properties, view property details, and contact sellers.","Seller: Can create, edit, and delete their own property listings, manage listing media (images/videos), and respond to inquiries.", "Admin: Has full control over the platform including managing users, moderating or removing listings, and handling reported content"],
    
    media:ProjectMedia.realestate
  },
  {
    route: "learning-management-system",
    heading: "Learning Management System",
    short_description: "A Learning management system with a modern UI, built using React.js and Tailwind CSS.",
    long_description: "A full-stack web application for Learning Management System, built with React and Node.js.",
    sub_heading_1: "Tech Stack",
    description_1:["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"],
    sub_heading_2:"Features",
    description_2: ["User Auth with JWT", "Course Content Management", "Student Dashboard","Quizzes & Assignments","Video Uploads","Admin panel"], 
    sub_heading_3: "User Roles",
    description_3: ["Learner: Can enroll in, and track courses as well as attempt certification exams", "Examinee: Can attempt certification exams" , "Instructor: Can create/edit courses and upload content", "Admin: Has full control over all users and courses"] ,  
    media:ProjectMedia.lms
  },
  // {
  //   route: "blog-application",
  //   heading: "Blog Application",
  //   short_description: "A blogging platform with user authentication and CRUD operations, built with MERN stack.",
  //   long_description: "A full-stack web application for real estate listings, built with React and Node.js.",
  //   sub_heading_1: "Tech Stack",
  //   description_1:["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"],
  //   sub_heading_2:"Features",
  //   description_2: ["- User Auth with JWT, Create/Edit/Delete listings, Search & filter properties, Admin panel"],
  //   media:[]
  // },
];


export const Projects = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6 m-auto">Projects</h2>
    <div className="space-y-4">
      {projects.map(proj => (
        <div key={proj.route} className="border p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">{proj.heading}</h3>
          <p className="mb-2">{proj.short_description}</p>
            <NavLink to={`/projects/${proj.route}`}> <LineSlideButton text={"Details"}/></NavLink>
        </div>
      ))}
    </div>
  </section>
);