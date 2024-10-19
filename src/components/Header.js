import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu on item selection
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="logo">
          <h1 className="text-2xl font-bold">TEDx</h1>
        </div>
        <nav>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            <li><Link to="/speakers" className="hover:text-red-500">Speakers</Link></li>
            <li><Link to="/schedule" className="hover:text-red-500">Schedule</Link></li>
            <li><Link to="/partners" className="hover:text-red-500">Partners</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="transition transform hover:scale-110 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400"> {/* Change color here */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400"> {/* Change color here */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

        </nav>

        {/* Mobile Menu */}
        <ul
          className={`absolute bg-black bg-opacity-80 top-full left-0 w-full md:hidden space-y-2 p-4 text-lg text-white transition-transform duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'
            }`}
        >
          <li><Link to="/" className="block hover:text-red-500" onClick={handleMenuItemClick}>Home</Link></li>
          <li><Link to="/about" className="block hover:text-red-500" onClick={handleMenuItemClick}>About</Link></li>
          <li><Link to="/speakers" className="block hover:text-red-500" onClick={handleMenuItemClick}>Speakers</Link></li>
          <li><Link to="/schedule" className="block hover:text-red-500" onClick={handleMenuItemClick}>Schedule</Link></li>
          <li><Link to="/partners" className="block hover:text-red-500" onClick={handleMenuItemClick}>Partners</Link></li>
          <li><Link to="/contact" className="block hover:text-red-500" onClick={handleMenuItemClick}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
