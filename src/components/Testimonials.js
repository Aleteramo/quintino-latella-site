import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
  const testimonials = [
    { name: "Marco", text: "Grazie a Quintino ho trasformato il mio fisico in soli 6 mesi. Il suo approccio personalizzato fa davvero la differenza!", image: "/path/to/marco-image.jpg" },
    { name: "Laura", text: "Il Metodo QL mi ha aiutato non solo a perdere peso, ma anche a ritrovare fiducia in me stessa. Quintino è un coach eccezionale!", image: "/path/to/laura-image.jpg" },
    { name: "Giovanni", text: "Ho provato molti programmi di fitness, ma nessuno è come quello di Quintino. I risultati parlano da soli!", image: "/path/to/giovanni-image.jpg" }
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <h2>Testimonianze</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card" ref={el => cardsRef.current[index] = el}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};