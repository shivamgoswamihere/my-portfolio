import React from 'react';
import {Link} from 'react-router'

export const Certifications = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[{heading:"Accenture Virtual Internship", decription:'', image:''},
        {heading:" Oracle Cloud Infrastructure Associate ", decription:'', image:''},
        {heading:"Remote Work and Virtual Collaboration Propfessional", decription:'', image:''},
        {heading:"Project Management Fundamentals", decription:'', image:''}
      ].map(cert => (
        <div key={cert.heading} className="border p-4 text-center rounded-lg">{cert.heading}</div>
      ))}
    </div>
  </section>
);