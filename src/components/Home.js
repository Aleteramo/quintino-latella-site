import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSpring, animated } from 'react-spring';
import Typed from 'typed.js';
import './Home.css';

export const Home = () => {
  const typedRef = useRef(null);

  const parallaxProps = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-50px)' },
    config: { duration: 2000 },
  });

  useEffect(() => {
    const options = {
      strings: ['Trasforma il tuo corpo', 'Cambia la tua vita'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    gsap.from('.home-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="container">
        <animated.div style={parallaxProps} className="home-image">
          <img src="/path/to/quintino-image.jpg" alt="Quintino Latella" />
        </animated.div>
        <div className="home-content">
          <h1 className="home-title">
            <span ref={typedRef}></span>
          </h1>
          <p className="home-subtitle">
            Sei pronto a iniziare il tuo viaggio verso un corpo più sano e forte?
          </p>
          <a href="#contact" className="btn">Inizia la tua trasformazione ora!</a>
        </div>
      </div>
    </section>
  );
};