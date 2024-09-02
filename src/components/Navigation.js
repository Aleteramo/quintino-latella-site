import React from 'react';
import './Navigation.css';

export const Navigation = ({ activeSection }) => {
  return (
    <nav className="navigation">
      <ul>
        {['home', 'about', 'services', 'testimonials', 'contact'].map((section) => (
          <li key={section} className={activeSection === section ? 'active' : ''}>
            <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};