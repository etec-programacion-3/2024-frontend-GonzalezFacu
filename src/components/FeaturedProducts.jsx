import "../styles/FeaturedProducts.css"; // Asegúrate de tener tu archivo CSS
import React, { useEffect, useState } from "react";
import api from "../api";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products/");
        setProducts(response.data);
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
        <span
          key={index}
          className={index < rating ? "fp-star fp-filled" : "fp-star"}
        >
          ★
        </span>
      ));

    return <div className="fp-star-rating">{stars}</div>;
  }

  // Filtra productos con rating > 4.0 y toma los primeros 3
  const filteredProducts = products
    .filter((product) => product.rating > 4.0)
    .slice(0, 3);

  return (
    <section className="fp-featured-products">
      <h2>Productos Destacados</h2>
      <div className="fp-product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="fp-product-card">
              <img
                src={product.image}
                alt={product.name}
                className="fp-product-image"
              />
              <div className="fp-product-info">
                <h3 className="fp-product-name">{product.name}</h3>
                <p className="fp-product-shortDescription">
                  {product.shortDescription}
                </p>
                <p className="fp-product-price">${product.price}</p>
                <StarRating rating={product.rating} />
                <button className="fp-more-info-button">Más Información</button>
              </div>
            </div>
          ))
        ) : (
          <div>No hay productos destacados disponibles.</div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;
