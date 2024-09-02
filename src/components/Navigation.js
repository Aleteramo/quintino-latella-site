import React, { useState } from 'react';
import './Navigation.css';
import backgroundImage from '../assets/quintino-muscular.jpg';


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};