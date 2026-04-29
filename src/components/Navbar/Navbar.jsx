import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-name">Sari Mikander</span>
      <div className="navbar-links">
        <a href="#hero">Hero</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
export default Navbar;