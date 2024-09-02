import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui inseriremo la logica per inviare i dati del form
    console.log('Form submitted:', formData);
    // Reindirizza al modulo Google
    window.location.href = 'https://forms.gle/your-google-form-link';
  };

  return (
    <section id="contact" className="contact">
      <h2 className="animate-fade-in">Contattami</h2>
      <form onSubmit={handleSubmit} className="contact-form animate-slide-up">
        <input
          type="text"
          name="name"
          placeholder="Il tuo nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="La tua email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Il tuo messaggio"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="cta-button">Invia Messaggio</button>
      </form>
    </section>
  );
};