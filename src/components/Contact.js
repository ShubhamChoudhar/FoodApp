import React from 'react';

const ContactUs = () => {
  return (
    <div className = "contact-us-container bg-white p-8 rounded-lg shadow-lg">
      <h1 className = "text-3xl font-bold mb-6">Contact Us</h1>
      <p className = "text-gray-700 mb-6">
        We'd love to hear from you! Feel free to reach out if you have any questions, suggestions, or just want to say hello.
      </p>
      <div className = "contact-form">
        <label htmlFor = "name" className = "block text-gray-700 font-semibold mb-2">Your Name:</label>
        <input type = "text" id = "name" name = "name" placeholder = "Your Name" className = "w-80 px-4 py-2 border border-gray-300 rounded-md mb-4" />
  
        <label htmlFor = "email" className = "block text-gray-700 font-semibold mb-2">Your Email:</label>
        <input type = "email" id = "email" name = "email" placeholder = "Your Email" className = "w-80 px-4 py-2 border border-gray-300 rounded-md mb-4" />
  
        <label htmlFor = "message" className = "block text-gray-700 font-semibold mb-2">Your Message:</label>
        <textarea id = "message" name = "message" placeholder = "Type your message here..." className = "w-full h-20 px-4 py-2 border border-gray-300 rounded-md mb-4"></textarea>
  
        <button type = "submit" className = "bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md">Send Message</button>
      </div>
    </div>
  );
  
};

export default ContactUs;