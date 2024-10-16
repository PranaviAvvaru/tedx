import React from 'react';
import { motion } from 'framer-motion';
import randomImage from '../assets/images/random.jpg'; // Import another image

const About = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 via-black to-gray-800 text-white py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
        initial={{ opacity: 0, translateY: 20 }} 
        animate={{ opacity: 1, translateY: 0 }} 
        transition={{ duration: 0.6 }} 
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-500">About TEDx</h2>
        <p className="text-lg leading-relaxed mb-4">
          TEDx SV University is a local, self-organized event that brings people together to share a TED-like experience. 
          At a TEDx event, TEDTalks videos and live speakers combine to spark deep discussion and connection.
        </p>
        <p className="text-lg leading-relaxed">
          Join us for an inspiring day filled with innovative ideas, passionate speakers, and engaging discussions.
        </p>
      </motion.div>

      {/* Media Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, delay: 0.2 }} 
      >
        {/* Image Placeholder */}
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-110">
          <img 
            src={randomImage} 
            alt="About TEDx"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
