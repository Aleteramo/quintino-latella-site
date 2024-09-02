import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Services.css';

export const Services = () => {
  const servicesRef = useRef(null);

  // Definisci l'array dei servizi
  const services = [
    {
      title: "Coaching di fitness e bodybuilding",
      description: "Programmi personalizzati per raggiungere i tuoi obiettivi di forma fisica."
    },
    {
      title: "Personal training",
      description: "Sessioni one-on-one in presenza e online per massimizzare i tuoi risultati."
    },
    {
      title: "Consulenza nutrizionale",
      description: "Piani alimentari su misura per supportare il tuo percorso fitness."
    },
    {
      title: "Programmi di allenamento personalizzati",
      description: "Schede di allenamento create appositamente per le tue esigenze e obiettivi."
    }
  ];

  useEffect(() => {
    gsap.from(servicesRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section id="services" className="services">
      <h2>I Miei Servizi</h2>
      <div ref={servicesRef} className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};