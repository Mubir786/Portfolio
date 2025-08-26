import React from 'react'
import './Main.css';

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        
        <div className="skill-card">
          <div className="skill-front">
            <h3>⚛️ React</h3>
          </div>
          <div className="skill-back">
            <p>
              Experienced in building modern, responsive web apps using React,
              hooks, and reusable components.
            </p>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-front">
            <h3>CSS </h3>
          </div>
          <div className="skill-back">
            <p>
              Skilled in designing beautiful interfaces with CSS, Flexbox, and
              Grid. Love creating responsive designs.
            </p>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-front">
            <h3>JavaScript</h3>
          </div>
          <div className="skill-back">
            <p>
              Proficient in writing interactive, dynamic, and optimized code
              using modern ES6+ features.
            </p>
          </div>
        </div>

         <div className="skill-card">
          <div className="skill-front">
            <h3>HTML</h3>
          </div>
          <div className="skill-back">
            <p>
              Strong foundation in semantic HTML5, accessibility, and structuring  
              web pages for responsive and SEO-friendly layouts.
            </p>
          </div>
        </div>

         <div className="skill-card">
          <div className="skill-front">
            <h3>UI/UX Designing</h3>
          </div>
          <div className="skill-back">
            <p>
              Skilled in designing clean and user-friendly interfaces.  
              I focus on creating designs that are visually appealing,  
              intuitive, and provide a smooth user experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
