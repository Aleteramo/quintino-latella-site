import React from 'react';
import './Services.css';

export const Services = () => {
  const services = [
    { title: "Coaching di fitness e bodybuilding", description: "Programmi personalizzati per raggiungere i tuoi obiettivi di forma fisica." },
    { title: "Personal training", description: "Sessioni one-on-one in presenza e online per massimizzare i tuoi risultati." },
    { title: "Consulenza nutrizionale", description: "Piani alimentari su misura per supportare il tuo percorso fitness." },
    { title: "Programmi di allenamento personalizzati", description: "Schede di allenamento create appositamente per le tue esigenze e obiettivi." }
  ];

  return (
    <section id="services" className="services">
      <h2 className="animate-fade-in">I Miei Servizi</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card animate-slide-up">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};