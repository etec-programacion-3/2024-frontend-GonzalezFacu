// src/components/Productos.js
import React, { useEffect, useState } from "react";
import api from "./../api"; // Ajusta la ruta según la estructura de tu proyecto

const Productos = () => {
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
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ maxWidth: "200px" }} // Ajusta el tamaño de la imagen
            />
            <p>Precio: ${producto.precio}</p> {/* Formato de precio */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
