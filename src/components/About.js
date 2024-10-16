import React from 'react';
import { motion } from 'framer-motion';
import randomImage from '../assets/images/random.jpg'; // Import another image


const About = () => {
  return (
    <section className="bg-gray-100 text-black py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
        initial={{ opacity: 0, translateY: 20 }} // Initial state for animation
        animate={{ opacity: 1, translateY: 0 }} // Animation state
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About TEDx</h2>
        <p className="text-lg leading-relaxed">
          TEDx SV University is a local, self-organized event that brings people together to share a TED-like experience. 
          At a TEDx event, TEDTalks videos and live speakers combine to spark deep discussion and connection.
        </p>
        <p className="mt-4">
          Join us for an inspiring day filled with innovative ideas, passionate speakers, and engaging discussions.
        </p>
      </motion.div>

      {/* Media Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }} // Initial state for animation
        animate={{ opacity: 1, scale: 1 }} // Animation state
        transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
      >
        {/* Image Placeholder */}
        <div className="w-64 h-64 rounded-lg shadow-lg overflow-hidden">
          <img 
            src={randomImage} // Replace with actual image path
            alt="About TEDx"
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
