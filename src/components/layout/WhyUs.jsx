import React from "react";
import "../../styles/layout/WhyUs.css"; // Asegúrate de tener un archivo de estilos para esto
import { Link } from "react-router-dom";

function WhyUs() {
  const reasons = [
    {
      icon: "🍃",
      title: "Frescura Garantizada",
      description:
        "Nuestros ingredientes son frescos y de la mejor calidad, seleccionados diariamente.",
    },
    {
      icon: "⏱️",
      title: "Fácil y Rápido",
      description:
        "Prepara platos deliciosos en menos de 30 minutos con nuestras recetas fáciles de seguir.",
    },
    {
      icon: "🍽️",
      title: "Variedad en el Menú",
      description:
        "Ofrecemos una amplia variedad de platos para todos los gustos y preferencias dietéticas.",
    },
    {
      icon: "🌍",
      title: "Sostenible",
      description:
        "Nos preocupamos por el medio ambiente y utilizamos empaques sostenibles.",
    },
  ];

  return (
    <section className="why-us">
      <h2>¿Por qué nosotros?</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
      <Link to="/menu" className="explore-menu-button">
        Explora nuestro menu
      </Link>
    </section>
  );
}

export default WhyUs;
