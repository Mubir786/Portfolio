import React from "react";
import "./Main.css"; // external CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            I am Mubir Hussain, a passionate UI/UX and Web Developer. This
            portfolio showcases my journey and projects in the field of design
            and development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {/* <li><a href="#faq">FAQ's</a></li> */}
            <li><a href="#projects">My Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact Me</a></li>
            {/* <li><a href="#privacy">Privacy Policy</a></li> */}
            {/* <li><a href="#terms">Terms & Conditions</a></li> */}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: mubirhussain786@gmail.com</p>
          <p>Phone: +92 3189047747</p>
          <p>Location: Islamabad, Pakistan</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Mubir786/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mubir-hussain-669788250/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 My Portfolio | Designed by Mubir Hussain</p>
      </div>
    </footer>
  );
}
