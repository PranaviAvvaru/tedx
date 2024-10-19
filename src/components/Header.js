import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white fixed top-0 mb-16 left-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Text-based Logo */}
        <div className="logo">
          <Link to="/" className="flex flex-col">
            <div className="flex items-center space-x-2">
              {/* "TED" in red */}
              <span className="text-red-600 font-bold text-xl">TED-X</span>
              
              {/* "SriVenkateswaraU" in white */}
              <span className="text-white font-bold text-xl">SriVenkateswaraU</span>
            </div>
            {/* Subtitle text */}
            
          </Link>
        </div>

        {/* Hamburger Icon for small screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            <li><Link to="/speakers" className="hover:text-red-500">Speakers</Link></li>
            <li><Link to="/schedule" className="hover:text-red-500">Schedule</Link></li>
            <li><Link to="/partners" className="hover:text-red-500">Partners</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-black text-white shadow-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link to="/" className="hover:text-red-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-500">About</Link></li>
              <li><Link to="/speakers" className="hover:text-red-500">Speakers</Link></li>
              <li><Link to="/schedule" className="hover:text-red-500">Schedule</Link></li>
              <li><Link to="/partners" className="hover:text-red-500">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
