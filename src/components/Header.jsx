import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <a href="#home" onClick={() => setIsMobile(false)}>Home</a>
        <a href="#Program" onClick={() => setIsMobile(false)}>Program</a>
        <a href="#Why-us" onClick={() => setIsMobile(false)}>Why Us</a>
        <a href="#Plans" onClick={() => setIsMobile(false)}>Plans</a>
        <a href="#Testimonials" onClick={() => setIsMobile(false)}>Testimonials</a>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Header;
