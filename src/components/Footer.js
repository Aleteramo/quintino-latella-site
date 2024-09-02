import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Quintino Latella. Tutti i diritti riservati.</p>
        <div className="social-links">
          <a href="https://instagram.com/quintino_latella" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/quintinolatella" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com/in/quintinolatella" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};