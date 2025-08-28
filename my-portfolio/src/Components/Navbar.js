import React, { useState } from 'react';
import './Main.css';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>

      {/* Hamburger icon for mobile */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#aboutus" onClick={() => setIsOpen(false)}>{props.About}</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>{props.Projects}</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>{props.Contact}</a></li>
      </ul>
    </nav>
  );
}
