import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <section id="home" className="home">
      <h2 className="animate-fade-in">Trasforma il tuo corpo, cambia la tua vita 💪</h2>
      <p className="animate-slide-up">Sei pronto a iniziare il tuo viaggio verso un corpo più sano e forte? Lascia che ti guidi verso i tuoi obiettivi di fitness con programmi personalizzati e supporto costante.</p>
      <a href="#contact" className="cta-button animate-pulse">Inizia la tua trasformazione ora!</a>
    </section>
  );
};