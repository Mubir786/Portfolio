import React from 'react'
import './Main.css';

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h1>My Portfolio</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">{props.About}</a></li>
        <li><a href="#projects">{props.Projects}</a></li>
        <li><a href="#contact">{props.Contact}</a></li>
      </ul>
    </div>
  )
}
