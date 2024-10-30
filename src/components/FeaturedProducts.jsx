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

  // Filtrar productos con rating superior a 4.5
  const filteredProducts = products.filter((product) => product.rating > 4.0);

  return (
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <StarRating rating={product.rating} />
                <button className="more-info-button">Más Información</button>
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
