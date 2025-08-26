import React from 'react'
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import SkillsSection from '../Components/SkillsSection';
import ContactSection from '../Components/ContactSection';
import AboutSection from '../Components/AboutSection';
import MyProjects from '../Components/MyProjects';
import Footer from '../Components/Footer';

export default function Portfolio() {
  return (
    <div>
      <Navbar About="About Me" Contact="Contact Me" Projects="My Projects" />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Projects / Skills */}
      <section id="SkillsSection">
        <SkillsSection />
      </section>

      <section id="aboutus">
        <AboutSection />
      </section>

      {/* Contact */}
      <ContactSection />

      <section id="projects">
        <MyProjects />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}
