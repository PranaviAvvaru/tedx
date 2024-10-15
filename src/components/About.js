import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 text-black py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About TEDx</h2>
        <p className="text-lg leading-relaxed">
          TEDx [College Name] is a local, self-organized event that brings people together to share a TED-like experience. 
          At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection.
        </p>
      </div>

      {/* Media Section */}
      <div className="md:w-1/2 flex justify-center">
        {/* Add an image if needed */}
        {/* <img src="/path-to-about-image.jpg" alt="About TEDx" className="rounded-lg shadow-lg" /> */}
        <div className="w-64 h-64 bg-red-500 flex items-center justify-center text-white text-xl font-bold">
          Image Placeholder
        </div>
      </div>
    </section>
  );
}

export default About;
