import React, { useEffect, useState } from "react";
import api from "../api";
import "../styles/ProductCard.css";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products/"); // Ajusta la ruta según tu API
        setProducts(response.data); // Suponiendo que tu API devuelve una lista de productos
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los productos: {error}</div>;

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

  return (
    <section className="featured-products">
      <h2>Nuestro Menú</h2>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product, index) => {
            const isLarge = index % 4 === 3; // La tarjeta grande es cada cuarta (tercera en cero-index)
            return (
              <div
                key={product.id}
                className={`product-card ${isLarge ? "large" : ""}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`product-image ${isLarge ? "large" : ""}`}
                />
                <div className={`product-info ${isLarge ? "large" : ""}`}>
                  <h3 className={`product-name ${isLarge ? "large" : ""}`}>
                    {product.name}
                  </h3>
                  <p
                    className={`product-description ${isLarge ? "large" : ""}`}
                  >
                    {product.description}
                  </p>
                  <p className={`product-price ${isLarge ? "large" : ""}`}>
                    ${product.price}
                  </p>
                  <StarRating rating={product.rating} />
                  <button
                    className={`more-info-button ${isLarge ? "large" : ""}`}
                  >
                    Más Información
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>No hay productos destacados disponibles.</div>
        )}
      </div>
    </section>
  );
}

export default ProductCard;
