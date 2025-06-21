import React from 'react';

export const Contact = () => (

<section className="p-10 w-full flex flex-col items-center">
  <h2 className="text-3xl font-semibold mb-6">Contact</h2>
  <form className="space-y-4 max-w-md">
    <input type="text" placeholder="Name" className="border w-full p-2 rounded" />
    <input type="email" placeholder="Email" className="border w-full p-2 rounded" />
    <textarea placeholder="Message" className="border w-full p-2 rounded h-24"></textarea>
    <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
  </form>
</section>



);