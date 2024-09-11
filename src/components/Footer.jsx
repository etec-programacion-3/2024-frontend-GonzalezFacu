import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 GourmetKits. Todos los derechos reservados.</p>
      <ul className="footer-list">
        <li>
          <Link to="/contacto" className="footer-link">
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/terminos" className="footer-link">
            Términos de Servicio
          </Link>
        </li>
        <li>
          <Link to="/privacidad" className="footer-link">
            Política de Privacidad
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
