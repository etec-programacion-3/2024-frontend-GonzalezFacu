// Footer.jsx
import React from "react";
import "../styles/Footer.css"; // Asegúrate de que este archivo CSS esté creado

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-brand">
            <p>GourmetKits ®</p>
          </div>
          <a href="/contacto" className="footer-link">
            Contacto
          </a>
          <a href="/terminos" className="footer-link">
            Términos y Condiciones
          </a>
          <a href="/privacidad" className="footer-link">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
