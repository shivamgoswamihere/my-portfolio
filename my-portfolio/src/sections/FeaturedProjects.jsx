import React from 'react';

export const FeaturedProjects = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Featured Project</h2>
    <div className="border p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-2">Project Title</h3>
      <p className="mb-4">Short project description goes here.</p>
      <button className="text-blue-600">View Project</button>
    </div>
  </section>
);