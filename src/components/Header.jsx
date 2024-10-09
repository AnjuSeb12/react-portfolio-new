import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Anju Sebastian</h1>
     
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="text-white hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="text-white hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>

       
        {isMenuOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4">
            <li><a href="#about" className="text-white hover:text-gray-400" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="text-white hover:text-gray-400" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-400" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-400" onClick={toggleMenu}>Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
