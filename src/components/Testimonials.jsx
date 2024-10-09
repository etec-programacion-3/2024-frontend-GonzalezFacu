// Testimonials.jsx
import React from "react";
import "../styles/Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    text: "¡Los kits gourmet son increíbles! Perfectos para cenas especiales.",
    author: "María P.",
    image: "https://via.placeholder.com/100", // URL de la imagen (reemplaza con la URL de la imagen real)
  },
  {
    id: 2,
    text: "Una experiencia gastronómica fantástica en casa. ¡Lo recomiendo!",
    author: "Juan S.",
    image: "https://via.placeholder.com/100", // URL de la imagen (reemplaza con la URL de la imagen real)
  },
  {
    id: 3,
    text: "Los ingredientes son de excelente calidad, ¡me encantan!",
    author: "Lucía G.",
    image: "https://via.placeholder.com/100", // URL de la imagen (reemplaza con la URL de la imagen real)
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="testimonial-image"
            />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
