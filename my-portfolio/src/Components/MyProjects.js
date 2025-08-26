import React from "react";
import "./Main.css";
import { FaGithub } from "react-icons/fa";

export default function MyProjects() {
  const projects = [
    {
      name: "Air Line Management System",
      description: "Data Structure & Algorithm project based on C++.",
      tech: ["C++"],
      github: "https://github.com/Mubir786/DSA_3rd_Semester_Project.git"
    },
    {
      name: "YumYum-Campus-Bites-Food-Application",
      description: "Project \"YumYum-Campus-Bites-Food-Application\" is a GUI based Application which is basically based on the concept of OOP in Java. It is also the concept of Java swings.",
      tech: ["Java", "Java Swing"],
      github: "https://github.com/Mubir786/YumYum-Campus-Bites-Food-Application.git"
    },
    {
      name: "Calculator",
      description: "This Calculator is designed by HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Mubir786/Calculator-.git"
    },
    {
      name: "Animated-Signin-Design",
      description: "This web Design Animated Signin is based on HTML and CSS",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Mubir786/Animated-Signin-Design.git"
    },
    {
      name: "Portfolio Website",
      description: "A one page portfolio website based on React as well as Javascript and CSS.",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/Mubir786/portfolio-website.git"
    }
  ];

  return (
    <div className="project-section" id="projects">
      <h2 className="section-title">🚀 My Projects</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <button 
              className="github-btn"
              onClick={() => window.open(project.github, "_blank")}
            >
              <FaGithub size={20} /> View on GitHub
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
