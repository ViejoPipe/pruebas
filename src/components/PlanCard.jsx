import React from 'react';
import '../styles/PlanCard.css';

const PlanCard = ({ title, image, paragraph, borderColor }) => {
  // Define el número de WhatsApp en formato internacional (sin símbolo +)
  const whatsappNumber = "573147401115"; // Ejemplo: 57 (Colombia) + número
  // Crea el mensaje a enviar
  const message = encodeURIComponent(`Hola, estoy interesado en el plan ${title}. ¿Podrías asesorarme por favor?`);
  // Genera el enlace de WhatsApp usando la API
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      id="card" 
      style={{ borderTop: `10px solid ${borderColor}` }}
    >
      <div id="image-container">
        <img src={image} alt="Plan Image" id="image" />
      </div>
      <div id="title-container">
        <h2 id="title">{title}</h2>
      </div>
      <div id="paragraph-container">
        <p id="paragraph">{paragraph}</p>
      </div>
    </a>
  );
};

export default PlanCard;