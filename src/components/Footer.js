import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Links */}
        <div className="social-media flex space-x-6 mb-6 md:mb-0">
          {/* Uncomment and replace with actual social media icons */}
          {/* <a href="#"><img src="path-to-social-icon" alt="Facebook" className="w-6 h-6" /></a> */}
          {/* <a href="#"><img src="path-to-social-icon" alt="Instagram" className="w-6 h-6" /></a> */}
          {/* <a href="#"><img src="path-to-social-icon" alt="Twitter" className="w-6 h-6" /></a> */}
          <a href="#" className="hover:text-red-500">Facebook</a>
          <a href="#" className="hover:text-red-500">Instagram</a>
          <a href="#" className="hover:text-red-500">Twitter</a>
        </div>

        {/* Copyright Section */}
        <p className="text-center md:text-left text-sm">
          &copy; 2024 TEDx [College Name]. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
