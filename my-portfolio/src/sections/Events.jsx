import React from 'react';


export const events=[
        {
          route:"web-3-community-day",
          heading:'Web 3 Community Day', 
          description:'', 
          image: ''
        },
        {
          route:"WOW",
          heading:'Wonder Of Wonders', 
          description:'', 
          image: ''
        },
        {
          route:"GDSC-Lead",
          heading:'GDSC Lead', 
          description:'', 
          image: ''
        }]



export const Events = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Community & Events</h2>
    <div className="space-y-4">
      {events.map(event => (
        <div key={event.route} className="border p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">{event.heading}</h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  </section>
);
