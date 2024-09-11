import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Section found: ${sectionId}`);
      const yOffset = -60; // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      console.log(`Scrolling to Y position: ${y}`);
      window.scrollTo({top: y, behavior: 'smooth'});
      setIsMenuOpen(false);
    } else {
      console.error(`Section not found: ${sectionId}`);
    }
  };

  // Chiudi il menu quando la finestra viene ridimensionata
  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navigation">
      <div className="nav-logo">Quintino Latella</div>
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        {isMenuOpen ? '×' : '+'}
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('about')}>About</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('services')}>Services</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('bmi-calculator')}>BMI Calculator</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('testimonials')}>Testimonials</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
      </ul>
    </nav>
  );
};