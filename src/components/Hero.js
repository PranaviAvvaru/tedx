import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero bg-black text-white h-screen flex items-center justify-center">
      <div className="hero-content text-center">
        <h1 className="text-5xl font-bold mb-4">TEDx [College Name]</h1>
        <p className="text-xl mb-6">Ideas Worth Spreading</p>
        <Link to="/book-tickets" className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300">
          Register Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
