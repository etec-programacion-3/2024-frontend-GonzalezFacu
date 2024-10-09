// FeaturedProducts.jsx
import React from "react";
import "../styles/FeaturedProducts.css"; // Asegúrate de que este archivo CSS esté actualizado

const featuredProductsData = [
  {
    id: 1,
    name: "Kits de Cocina Mediterranea",
    price: 29.99,
    image: "https://via.placeholder.com/150", // URL de la imagen
    rating: 4.5, // Puntuación del producto
    description: "Disfruta de una experiencia culinaria mediterránea en casa.",
  },
  {
    id: 2,
    name: "Kits de Sushi",
    price: 34.99,
    image: "https://via.placeholder.com/150", // URL de la imagen
    rating: 5.0, // Puntuación del producto
    description:
      "Crea tus propios rollos de sushi con nuestros kits completos y frescos.",
  },
  {
    id: 3,
    name: "Kits de Pastas Gourmet",
    price: 24.99,
    image: "https://via.placeholder.com/150", // URL de la imagen
    rating: 4.0, // Puntuación del producto
    description:
      "Sumergete en el sabor de la cocina italiana con nuestros kits de pasta gourmet.",
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

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="products-container">
        {featuredProductsData.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <StarRating rating={Math.round(product.rating)} />
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-description">{product.description}</p>
              <button className="more-info-button">Más Información</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
