import React from "react";
import "../../styles/layout/Contact.css";

const Contacto = () => {
  return (
    <div className="contact-page">
      <h1 className="contact_h1">Contacto</h1>
      <h2 className="contact_h2">Estamos aquí para ayudarte</h2>
      <p>
        Si tienes alguna pregunta o necesitas asistencia, no dudes en
        contactarnos a través de los siguientes enlaces:
      </p>
      <ul className="contact-links">
        <li>
          <a href="mailto:info@tuempresa.com">Email: info@tuempresa.com</a>
        </li>
        <li>
          <a href="tel:+1234567890">Teléfono: +1 234 567 890</a>
        </li>
        <li>
          <a href="https://www.tuempresa.com/faq">Preguntas Frecuentes</a>
        </li>
      </ul>

      <h2 className="contact_h2">Preguntas Frecuentes</h2>
      <div className="faq-grid">
        {Array.from({ length: 10 }, (_, index) => (
          <div className="faq-card" key={index}>
            <h3>Pregunta {index + 1}</h3>
            <p>
              Esta es la respuesta a la pregunta número {index + 1}. Aquí puedes
              agregar detalles adicionales.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacto;
