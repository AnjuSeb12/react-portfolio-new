
import React from 'react';
import { motion } from 'framer-motion';
import resumeFile from "../../src/assets/resume.pdf";

const About = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-center">
        <div className="md:w-1/2">
          <motion.h2 
            className="text-3xl font-bold text-teal-500 mb-4"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-white mb-4" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            I'm Anju Sebastian, a Full Stack Web Developer skilled in both front-end and back-end technologies. I have experience in creating dynamic and responsive applications, and I'm passionate about developing efficient solutions to real-world problems.
          </motion.p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/AnjuSeb12"
              className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white py-2 px-4 rounded transition duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/anju-sebastian-vs" 
              className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white py-2 px-4 rounded transition duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center">
          {/* Project Link Element */}
          <h3 className="text-xl font-semibold text-teal-500 mb-2">Capstone Project: ShopyTrends</h3>
          <a 
            href="https://shopytrends.netlify.app/" // Replace with the actual project link
            className="border border-teal-500 text-teal-500 underline hover:bg-teal-500 hover:text-white text-lg py-2 px-4 rounded transition duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
          
          {/* Resume Download Section */}
          <div className="mt-6">
            <a 
              href={resumeFile} // Link to the resume file
              className="bg-blue-500 text-teal-500 py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
              download // This attribute prompts a download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
