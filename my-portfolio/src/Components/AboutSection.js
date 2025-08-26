import React from 'react';
import './Main.css';
import myPic from './1000061829.jpg'; // Replace with your actual image path

export default function AboutSection() {
  return (
    <section id="about" className="about-container">
      <div className="about-image">
        <img src={myPic} alt="Mubir Hussain" />
      </div>
      <div className="about-text">
        <h2>Hello, I'm <span>Mubir Hussain</span></h2>
        <h3>UI/UX Designer & Frontend Developer</h3>
        <p>
          I'm passionate about creating clean, modern, and user-friendly 
          designs that focus on both aesthetics and usability.  
          With experience in UI/UX design and web development, 
          I bring ideas to life with creativity and attention to detail.
        </p>
        <button className="btn">Download CV</button>
      </div>
    </section>
  );
}
