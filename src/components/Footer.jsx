
import React from 'react';
import Contact from './Contact'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
       
        <Contact />
        <p className="text-center mt-6">
          &copy; {new Date().getFullYear()} anjusebastian. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
