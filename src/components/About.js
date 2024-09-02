import React from 'react';
import './About.css';
import quintinoImage from '../assets/quintino-muscular.jpg'; // Assicurati che il percorso sia corretto

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Chi Sono</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={quintinoImage} alt="Quintino Latella" />
          </div>
          <div className="about-text">
            <p>Ciao! Sono Quintino Latella, chinesiologo e laureando in nutrizione umana. La mia passione per il fitness e il bodybuilding mi ha portato a sviluppare il Metodo QL, un approccio scientifico e personalizzato per aiutarti a raggiungere i tuoi obiettivi.</p>
            <p>Con anni di esperienza nel campo del fitness e una formazione accademica solida, sono qui per guidarti verso la migliore versione di te stesso.</p>
          </div>
        </div>
      </div>
    </section>
  );
};