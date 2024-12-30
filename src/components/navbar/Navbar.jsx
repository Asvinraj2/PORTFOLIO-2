import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './navbar.css';
import karthi from './karthik.m.jpg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={karthi} alt="Logo" className="logo-img" />
          <span className="logo-text">KARTHIK</span>
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i> {/* Toggle icon */}
        </div>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" style={{ '--i': 1 }} className="active">Home</a>
          <a href="#about" style={{ '--i': 2 }} className="nav-link">About</a>
          <a href="#projects" style={{ '--i': 3 }} className="nav-link">Projects</a>
          <a href="#achievements" style={{ '--i': 4 }} className="nav-link">Achivements</a>
          <a href="#contact" style={{ '--i': 5 }} className="nav-link">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
