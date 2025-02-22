import React from 'react';
import '../styles/Footer.css';
import logo1 from '../assets/Logo-SURA-blanco 1.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo1} alt="Logo SURA" className="footer-logo" />
      <div className="left-column">
        <p><strong>Soporte Comercial:</strong></p>
        <p>Ariel Palomo Chavarro</p>
        <p>Phone: 18001024376 / +91 11 4057 8489</p>
        <p>Email: <strong>support@heroibil.com</strong></p>
      </div>
      <div className="vertical-line"></div>
      <div className="right-column">
        <p>Ariel Palomo Chavarro.</p>
        <p>Ariel como esta.</p>
      </div>
    </div>
  );
};

export default Footer;
