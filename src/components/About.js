import React from 'react';
import './About.css';

export const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="animate-fade-in">Chi Sono</h2>
      <div className="about-content">
        <img src="/path/to/quintino-image.jpg" alt="Quintino Latella" className="about-image animate-slide-in-left" />
        <div className="about-text animate-slide-in-right">
          <p>Ciao! Sono Quintino Latella, chinesiologo e laureando in nutrizione umana. La mia passione per il fitness e il bodybuilding mi ha portato a sviluppare il Metodo QL, un approccio scientifico e personalizzato per aiutarti a raggiungere i tuoi obiettivi.</p>
          <p>Con anni di esperienza nel campo del fitness e una formazione accademica solida, sono qui per guidarti verso la migliore versione di te stesso.</p>
        </div>
      </div>
    </section>
  );
};