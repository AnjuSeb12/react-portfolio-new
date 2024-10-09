// src/components/Footer.jsx
import React from 'react';
import Contact from './Contact'; // Import the Contact component

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-2xl font-bold text-center mb-6">Stay Connected</h2> */}
        <Contact />
        <p className="text-center mt-6">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
