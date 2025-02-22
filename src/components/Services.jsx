import React, { useRef, useEffect } from 'react';
import '../styles/Services.css';
import image from '../assets/image1.png';

const Services = () => {
  const servicesRef = useRef(null);

  const smoothScrollTo = (endY) => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: endY, behavior: 'smooth' });
    } else {
      window.scrollTo(0, endY);
    }
  };
  
  // Función que desplaza a la sección usando la función optimizada.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 50; // Ajusta el offset según tus necesidades
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      smoothScrollTo(offsetPosition);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <div ref={servicesRef} className="services fade">
      <img src={image} alt="Consultando los servicios" className="services__image" />
      <div className="services__content">
        <p>
          Cuanto más sabemos de ti, mejor podemos protegerte. Por eso, te ofrecemos una variedad
          de programas y servicios diseñados para cuidarte a ti y a tus seres queridos. Descubre más
          sobre estos servicios y trabajemos juntos por tu bienestar.
        </p>
        <button className="services__button" onClick={() => scrollToSection('planes')}>
          Ver planes
        </button>
      </div>
    </div>
  );
};

export default Services;