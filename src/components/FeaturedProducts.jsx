// src/components/FeaturedProducts.js
import React, { useEffect, useState } from "react";
import api from "./../api"; // Asegúrate de ajustar la ruta según donde esté tu archivo de configuración
import "./../styles/FeaturedProducts.css";

const FeaturedProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await api.get("/api/productos/");
        setProductos(response.data);
      } catch (error) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="featured-products-container">
        {productos.slice(0, 4).map((product) => (
          <div className="featured-product" key={product.id}>
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
            <a href={`/producto/${product.id}`} className="cta-button">
              Ver Más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
