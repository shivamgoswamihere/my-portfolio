import React from 'react';

export const Events = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Community & Events</h2>
    <div className="space-y-4">
      {[{heading:'Web 3 Community Day', description:'', image: ''},
        {heading:'WOW', description:'', image: ''},
        {heading:'GDSC Lead', description:'', image: ''}
      ].map(event => (
        <div key={event.heading} className="border p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">{event.heading}</h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  </section>
);
