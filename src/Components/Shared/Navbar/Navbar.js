import React, { useState } from 'react';
import logo from "../../../Assets/images/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`header ${isActive ? 'nav-active' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} width="205" height="40" alt="logo image" />
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`} >
          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link">How it works</a>
            </li>

            <li>
              <a href="#" className="navbar-link">Our Work</a>
            </li>

            <li>
              <a href="#" className="navbar-link">Pricing</a>
            </li>

            <li>
              <a href="#" className="navbar-link">About Us</a>
            </li>
          </ul>
        </nav>

        <a href="#" className="btn btn-secondary">Try it now</a> 
        <button
          className={`nav-open-btn ${isActive ? 'active' : ''}`}
          aria-label="toggle menu" 
          onClick={toggleNavbar}
        > 
          {
            isActive ?  <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
          }
        </button>

        <div
          className={`overlay ${isActive ? 'active' : ''}`} 
          onClick={toggleNavbar}   
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
