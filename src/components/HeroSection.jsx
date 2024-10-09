import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Comida fresca y saludable</h1>
        <p className="hero-subtitle">
          Disfruta de recetas cuidadosamente seleccionadas con ingredientes de
          alta calidad.
        </p>
        <p className="hero-description">
          Nos encargamos de ofrecerte kits de comida con productos frescos y de
          origen responsable, directamente a tu puerta.
        </p>
        <button className="hero-button">Explorar planes</button>
      </div>
    </section>
  );
}

export default HeroSection;
