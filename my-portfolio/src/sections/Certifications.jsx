import React from 'react';
import {Link} from 'react-router'

export const Certifications = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map(cert => (
        <div key={cert} className="border p-4 text-center rounded-lg">Certification {cert}</div>
      ))}
    </div>
  </section>
);