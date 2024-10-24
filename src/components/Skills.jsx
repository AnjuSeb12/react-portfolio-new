import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-green-400">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     
          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Frontend Development
            </h3>
            <p className="text-sm">
              HTML5, CSS3, JavaScript, React.js, Redux (State Management Tool), Recoil(State Management Tool), Tailwind CSS, React Bootstrap
            </p>
          </div>

      
          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Backend Development
            </h3>
            <p className="text-sm">
              Express.js, Node.js, RESTful APIs
            </p>
          </div>

       
          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Database
            </h3>
            <p className="text-sm">
              MongoDB, MySQL
            </p>
          </div>

          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Testing
            </h3>
            <p className="text-sm">
            Postman for API testing ,Manual Testing
            </p>
          </div>
          

          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Version Control
            </h3>
            <p className="text-sm">
              Git, GitHub
            </p>
          </div>

    
          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Frameworks & Tools
            </h3>
            <p className="text-sm">
              MERN Stack , Postman , Thunder Client
            </p>
          </div>

          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Deployment
            </h3>
            <p className="text-sm">
            Netlify , Render
            </p>
          </div>

          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
             Media Management
            </h3>
            <p className="text-sm">
            Cloudinary
            </p>
          </div>
          <div className="skill-card transition-transform duration-300 hover:scale-105 max-w-xs mx-auto bg-gradient-to-r from-green-900 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Soft Skills
            </h3>
            <p className="text-sm">
            Communication , Time Management , Problem-Solving , Adaptability , Collaboration and Feedback Integration , Debugging and Troubleshooting , Self-Directed Project Management , Team Work
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
