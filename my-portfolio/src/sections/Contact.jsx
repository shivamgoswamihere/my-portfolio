import React from 'react';

export const Contact = () => (

<section className="p-10 w-full flex flex-col items-center">
  <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
  <form
  action="https://formsubmit.co/shivamg1008@gmail.com"
  method="POST"
  className="space-y-4 max-w-md"
>
  <input type="text" name="name" placeholder="Name" className="border w-full p-2 rounded" required />
  <input type="email" name="email" placeholder="Email" className="border w-full p-2 rounded" required />
  <textarea name="message" placeholder="Message" className="border w-full p-2 rounded h-24" required></textarea>

  {/* Optional: prevent spam */}
  <input type="hidden" name="_captcha" value="true" />

  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
</form>
</section>



);