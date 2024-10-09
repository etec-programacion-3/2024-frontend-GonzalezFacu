import React from "react";
import "../styles/Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    text: "¡Los kits gourmet son increíbles! Perfectos para cenas especiales.",
    author: "María P.",
    rating: 0, // Calificación de estrellas
    image: "https://via.placeholder.com/100", // Imagen del producto
  },
  {
    id: 2,
    text: "Una experiencia gastronómica fantástica en casa. ¡Lo recomiendo!",
    author: "Juan S.",
    rating: 5, // Calificación de estrellas
    image: "https://via.placeholder.com/100", // Imagen del producto
  },
  {
    id: 3,
    text: "Los ingredientes son de excelente calidad, ¡me encantan!",
    author: "Lucía G.",
    rating: 2, // Calificación de estrellas
    image: "https://via.placeholder.com/100", // Imagen del producto
  },
];

function StarRating({ rating }) {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ★
      </span>
    ));

  return <div className="star-rating">{stars}</div>;
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={`Producto relacionado con ${testimonial.author}`}
              className="testimonial-image"
            />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <StarRating rating={testimonial.rating} />
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
