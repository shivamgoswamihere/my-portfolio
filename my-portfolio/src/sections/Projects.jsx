import React from 'react';

export const Projects = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="space-y-4">
      {[1, 2].map(proj => (
        <div key={proj} className="border p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Project {proj}</h3>
          <p className="mb-2">Project description here.</p>
          <button className="text-blue-600">Details</button>
        </div>
      ))}
    </div>
  </section>
);