
import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiURL = 'http://localhost:5000/api/contact'; 

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-violet-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-800 text-center mb-8">Contact</h2>
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-900 ">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange} 
              required 
              className="border border-gray-300 rounded-md p-2 w-full  bg-gray-700 text-pink-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange} 
              required 
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-700 text-pink-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange} 
              required 
              rows="4" 
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-700 text-pink-700"
            />
          </div>
          <button 
            type="submit" 
            className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-pink-700 w-full"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-center text-white">Email: <a href="mailto:christeenaanju@example.com" className="text-white hover:underline">christeenaanju@example.com</a></p>
        <p className="text-center text-white">
          LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-white hover:underline">LinkedIn Profile</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
