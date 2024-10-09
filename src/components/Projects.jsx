import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-violet-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-8">Projects</h2>
        
        {/* Responsive Grid for Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 - ShopyTrends */}
          <div className="project bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">ShopyTrends</h3>
            <p className="mb-4 text-gray-700">Capstone Project - E-commerce Shopping Website</p>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://shopytrends.netlify.app/" 
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hosted Link
              </a>
              <a 
                href="https://github.com/AnjuSeb12/frontend_design-testing-shopytrends"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Frontend Code
              </a>
              <a 
                href="https://github.com/AnjuSeb12/backend-shopytrends-design-testing"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Backend Code
              </a>
            </div>
          </div>

          {/* Project 2 - Now Doing */}
          <div className="project bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Now Doing</h3>
            <p className="mb-4 text-gray-700">Ongoing Project</p>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://example.com" 
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hosted Link
              </a>
              <a 
                href="https://github.com/AnjuSeb12/NowDoing"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Code
              </a>
              <a 
                href="https://github.com/AnjuSeb12/backend-shopytrends-design-testing"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Backend Code
              </a>
            </div>
          </div>

          {/* Project 3 - Portfolio Website */}
          <div className="project bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Portfolio Website</h3>
            <p className="mb-4 text-gray-700">Personal Project - Showcasing my projects and skills</p>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://example.com" 
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hosted Link
              </a>
              <a 
                href="https://github.com/AnjuSeb12/Portfolio"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Code
              </a>
              <a 
                href="https://github.com/AnjuSeb12/Portfolio"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
