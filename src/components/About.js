import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import backgroundImage from '../assets/quintino-muscular.jpg';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const textContainerRef = useRef(null);

  useEffect(() => {
    gsap.from(textContainerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "top bottom-=100",
        end: "bottom top",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section id="about" className="about">
      <img src={backgroundImage} alt="Quintino Latella" className="about-image" />
      <div className="about-content">
        <animated.div ref={textContainerRef} className="about-text-container">
          <h2>Chi Sono</h2>
          <p>Ciao! Sono Quintino Latella, chinesiologo e laureando in nutrizione umana. La mia passione per il fitness e il bodybuilding mi ha portato a sviluppare il Metodo QL, un approccio scientifico e personalizzato per aiutarti a raggiungere i tuoi obiettivi.</p>
          <p>Con anni di esperienza nel campo del fitness e una formazione accademica solida, sono qui per guidarti verso la migliore versione di te stesso.</p>
        </animated.div>
      </div>
    </section>
  );
};