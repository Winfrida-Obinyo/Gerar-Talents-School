import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#" className="logo">Gerar Talents School</a>
      </div>
      <AdditionalLinks />
      <div className="container">
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Athletics</a></li>
          <li><a href="#">Arts</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Alumni</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"><i className="fas fa-search"></i></a></li>

        </ul>
      </div>
    </nav>
  );
};

const AdditionalLinks = () => {
  return (
    <div className="additional-links">
      <ul className="additional-nav-links">
        <ul className="social-media-links">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <li><a href="#">News</a></li>
        <li><a href="#">Parents</a></li>
        <li><a href="#">Alumni</a></li>
        <li><a href="#">Calendar</a></li>
        <li><a href="#">My Gerar Talents School Login <i className="fas fa-lock"></i></a></li>
      </ul>
    </div>
  );
};

export default Navbar;

