import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-violet-700">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-pink-800">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          <div className="skill-item bg-white p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            React.js
          </div>
          <div className="skill-item bg-white p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Node.js
          </div>
          <div className="skill-item bg-white p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Express.js
          </div>
          <div className="skill-item bg-white p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            MongoDB
          </div>
          <div className="skill-item bg-white p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            JavaScript
          </div>
          <div className="skill-item bg-white p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            HTML5 & CSS3
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
