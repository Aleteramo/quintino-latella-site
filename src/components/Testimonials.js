import React, { useEffect } from 'react';
import './Testimonials.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
  const testimonials = [
    { name: "Marco", text: "Grazie a Quintino ho trasformato il mio fisico in soli 6 mesi. Il suo approccio personalizzato fa davvero la differenza!", image: "/path/to/marco-image.jpg" },
    { name: "Laura", text: "Il Metodo QL mi ha aiutato non solo a perdere peso, ma anche a ritrovare fiducia in me stessa. Quintino è un coach eccezionale!", image: "/path/to/laura-image.jpg" },
    { name: "Giovanni", text: "Ho provato molti programmi di fitness, ma nessuno è come quello di Quintino. I risultati parlano da soli!", image: "/path/to/giovanni-image.jpg" }
  ];

  useEffect(() => {
    gsap.from('.testimonials h2', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.testimonials',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from('.testimonial-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonial-grid',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <section className="testimonials">
      <h2>Testimonianze</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};