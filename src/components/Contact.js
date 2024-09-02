import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contattami</h2>
      <p>Per qualsiasi domanda o informazione, non esitare a contattarmi:</p>
      <a href="mailto:aistrategycase@gmail.com" className="cta-button">
        Inviami un'email
      </a>
    </section>
  );
};