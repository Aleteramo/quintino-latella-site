import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSpring, animated, config } from 'react-spring';
import Typed from 'typed.js';
import './Home.css';
import backgroundImage from '../assets/quintino-writing.jpg';

export const Home = () => {
  const typedRef = useRef(null);
  const contentRef = useRef(null);

  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
    config: config.molasses,
  }));

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

    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    setSpringProps({ opacity: 1, transform: 'translateY(0px)' });

    return () => {
      typed.destroy();
    };
  }, [setSpringProps]);

  return (
    <section id="home" className="home" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="overlay">
        <animated.div style={parallaxProps} className="parallax-bg"></animated.div>
        <div className="container">
          <animated.div style={springProps} className="home-content" ref={contentRef}>
            <h1 className="home-title">
              <span ref={typedRef}></span>
            </h1>
            <p className="home-subtitle">
              Sei pronto a iniziare il tuo viaggio verso un corpo più sano e forte?
            </p>
            <animated.a 
              href="https://docs.google.com/forms/d/1DNV4ILY1yXnH-Vbkdhk5ZdRSRA0RkFT4sX8rT8HbN9E/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={useSpring({
                from: { opacity: 0, transform: 'scale(0.8)' },
                to: { opacity: 1, transform: 'scale(1)' },
                delay: 1000,
              })}
            >
              Inizia la tua trasformazione ora!
            </animated.a>
          </animated.div>
        </div>
      </div>
    </section>
  );
};