import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

  return (
    <header className={`bg-black p-4 fixed top-0 left-0 w-full z-10 transition-opacity duration-1000 ease-in-out ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}>
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-teal-700 text-2xl font-extrabold ">Anju Sebastian</h1>
     
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="text-white hover:text-teal-500">About</a></li>
          <li><a href="#skills" className="text-white hover:text-teal-500">Skills</a></li>
          <li><a href="#projects" className="text-white hover:text-teal-500">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-teal-500">Contact</a></li>
        </ul>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
            <li>
              <a 
                href="#about" 
                className="text-white hover:bg-teal-500 hover:rounded transition duration-300 py-2 px-4" 
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-white hover:bg-teal-500 hover:rounded transition duration-300 py-2 px-4" 
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-white hover:bg-teal-500 hover:rounded transition duration-300 py-2 px-4" 
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-white hover:bg-teal-500 hover:rounded transition duration-300 py-2 px-4" 
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
