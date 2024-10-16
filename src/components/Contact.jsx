import React, { useState } from 'react';
import instance from '../../axios';


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
    
    try {
      const response = await instance.post('/api/v1/contact', formData);

      if (response.status === 200) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 text-center mb-8">Contact</h2>
        <form 
          onSubmit={handleSubmit} 
          className="bg-teal-700 p-6 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange} 
              required 
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange} 
              required 
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange} 
              required 
              rows="4" 
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-700 text-white"
            />
          </div>
          <button 
            type="submit" 
            className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-700 w-full"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-center text-teal-800">Email: <a href="mailto:christeenaanju@example.com" className="text-teal-800 hover:underline">christeenaanju@example.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
