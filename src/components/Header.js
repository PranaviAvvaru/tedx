import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* <img src="/tedx-logo.png" alt="TEDx Logo" /> */}
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/partners">Partners</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
