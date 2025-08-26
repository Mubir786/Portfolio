import React from "react";
import "./Main.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">📩 Contact Me</h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hi? Let’s connect!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message 🚀</button>
        </form>

        {/* Contact Info / Socials */}
        <div className="contact-info">
          <h3>Let’s Connect</h3>
          <p>📧 Email: mubirhussain786@gmail.com</p>
          <p>📱 Phone: +92-3189047747</p>

          <div className="social-links">
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">🌐 GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">🐦 Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
