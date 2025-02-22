import React from 'react'
import wppImg from "../assets/wpp-icon.png"
import '../styles/WhatsAppButton.css'

const WhatsAppButton = () => {
  const whatsappNumber = "3116426370"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
    >
      <div className="whatsapp-container">
        <img 
          src={wppImg}
          alt="WhatsApp"
          width="30"
          height="30"
        />
        <span>Contáctanos</span>
      </div>
    </a>
  )
}

export default WhatsAppButton