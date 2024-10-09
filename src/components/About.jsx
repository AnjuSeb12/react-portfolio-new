import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import resumeFile from "../../src/assets/resume.pdf"; // Replace with the path to your resume file

const About = () => {
  return (
    <section id="about" className="py-16 bg-violet-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <motion.h2 
            className="text-3xl font-bold text-pink-800 mb-4" // Changed text color to dark pink for contrast
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-white mb-4" // Changed text color for better visibility
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            I'm Anju Sebastian, a Full Stack Web Developer skilled in both front-end and back-end technologies. I have experience in creating dynamic and responsive applications, and I'm passionate about developing efficient solutions to real-world problems.
          </motion.p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/AnjuSeb12" // Replace with your GitHub profile link
              className="text-pink-800 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/anju-sebastian-vs" // Replace with your LinkedIn profile link
              className="text-pink-800 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center">
          {/* Project Link Element */}
          <h3 className="text-xl font-semibold text-pink-800 mb-2">Capstone Project: ShopyTrends</h3>
          <a 
            href="https://shopytrends.netlify.app/" // Replace with the actual project link
            className="text-pink-800 underline hover:text-pink-700 text-lg"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
          
          {/* Resume Download Section */}
          <div className="mt-6">
            <a 
              href={resumeFile} // Link to the resume file
              className="bg-pink-800 text-white py-2 px-4 rounded-md hover:bg-pink-700"
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
