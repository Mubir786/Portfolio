import React from 'react'
import './Main.css';
export default function HeroSection() {
  return (
    <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Portfolio!</h1>
          {/* <p>Hi, I’m Mubir Hussain — a passionate Computer Science student and aspiring developer.  
                I specialize in building modern, responsive websites and applications using "React, HTML, CSS, and JavaScript".  

                I enjoy designing clean and user-friendly interfaces, solving real-world problems with code,  
                and constantly learning new technologies to grow as a developer.  

                My goal is to create digital experiences that are not only functional but also engaging and impactful.
          </p> */}
          <div className="hero-buttons">
            <button1 className="btn-primary">View Projects</button1>
            <button2 className="btn-secondary"><a href="#contact">Contact Me</a></button2>
          </div>
        </div>
    </div>
  )
}
