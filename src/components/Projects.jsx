

import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="project bg-black text-white p-6 rounded-lg shadow-md border border-green-400 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-teal-700">ShopyTrends</h3>
            <p className="mb-4 text-gray-400">ShopyTrends is an e-commerce platform focused on dress shopping, featuring responsive design and seamless navigation. It includes User, Seller, and Admin modules, utilizing React.js, Tailwind CSS,CSS3,React Bootstrap and Redux for the frontend, with Express.js,Restful APIs and MongoDB for the backend. The project is deployed on Netlify and Render, with Cloudinary for image storage.</p>
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

          <div className="project bg-black text-white p-6 rounded-lg shadow-md border border-green-400 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-teal-700">Portfolio</h3>
            <p className="mb-4 text-gray-400">Personal Project - Showcasing my projects and skills.Implemented using React.js,Tailwind CSS and CSS3 for the Frontend, Express.js for the Backend, and MongoDB for dynamic data management.</p>
            
            <div className="flex flex-col space-y-2">
              <a 
                href="https://portfolio-anju.netlify.app/" 
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hosted Link
              </a>
              <a 
                href="https://github.com/AnjuSeb12/react-portfolio-new"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Frontend Code
              </a>
              <a 
                href="https://github.com/AnjuSeb12/backend-portanju"
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Backend Code
              </a>
            </div>
          </div>

          <div className="project bg-black text-white p-6 rounded-lg shadow-md border border-green-400 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-teal-700">TimelyCraft</h3>
            <p className="mb-4 text-gray-400">This project focused on designing the user front page of an E-Commerce website with a Responsive and user-friendly layout. Utilizing HTML5, CSS3, and JavaScript, it showcases products in an engaging manner while enhancing user experience through interactivity and visual appeal.</p>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://anjuseb12.github.io/Watch-Ecommerce-new-tem/" 
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hosted Link
              </a>
              <a 
                href="https://github.com/AnjuSeb12/Watch-Ecommerce-new-tem"
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
