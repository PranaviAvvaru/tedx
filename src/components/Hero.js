import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero bg-black text-white h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}>
        <div className="bg-black bg-opacity-50 h-full w-full"></div>
      </div>
      
      <motion.div 
        className="hero-content text-center relative z-10"
        initial={{ opacity: 0, translateY: 20 }} // Initial state for animation
        animate={{ opacity: 1, translateY: 0 }} // Animation state
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">TEDx SV University</h1>
        <p className="text-xl mb-6 drop-shadow-md">Unchated Waters</p>
        <Link to="/select-seats" className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-lg transform hover:scale-105">
          Register Now
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;
