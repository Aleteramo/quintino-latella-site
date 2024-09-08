import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Services.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BMICalculator from './BMICalculator';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
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
    gsap.from('.services h2', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.services',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <section className="services">
      <h2>I Miei Servizi</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bmi-calculator-container">
        <h3>Calcolatore BMI e Fabbisogno Calorico</h3>
        <BMICalculator />
      </div>
    </section>
  );
};