import React from 'react';
import {Link} from 'react-router'

export const Certifications = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[{heading:"Accenture Virtual Internship", link:'https://www.linkedin.com/in/shivamgoswami-/details/certifications/'},
        {heading:" Oracle Cloud Infrastructure Associate ", link:'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1E1F7BAC5F66667EF107CC718BE721B3F45539EA491287BFB008BD99313D44FC'},
        {heading:"Remote Work and Virtual Collaboration", link:'https://www.credly.com/badges/93e880f5-c85a-4629-8243-d8cd3457a8d4?source=linked_in_profile'},
        {heading:"Project Management Fundamentals", link:'https://hellopm.co/certificate/?certificate_id=BXMWSH&utm_source=m13_resources_email&medium=email'}
      ].map(cert => (
        <div key={cert.heading} className="border p-4 text-center rounded-lg hover:bg-gray-900"><a href={cert.link}> {cert.heading}</a></div>
      ))}
    </div>
  </section>
);