import React from "react";
import "../styles/ProductCard.css";

function ProductCard() {
  const items = [
    { id: 1, title: "Tarjeta 1", description: "Descripción breve" },
    { id: 2, title: "Tarjeta 2", description: "Descripción breve" },
    { id: 3, title: "Tarjeta 3", description: "Descripción breve" },
    {
      id: 4,
      title: "Tarjeta Grande",
      description: "Descripción larga",
      large: true,
    },
    { id: 5, title: "Tarjeta 4", description: "Descripción breve" },
    { id: 6, title: "Tarjeta 5", description: "Descripción breve" },
    { id: 7, title: "Tarjeta 4", description: "Descripción breve" },
    { id: 8, title: "Tarjeta 5", description: "Descripción breve" },
    { id: 9, title: "Tarjeta 4", description: "Descripción breve" },
    {
      id: 10,
      title: "Tarjeta Grande 2",
      description: "Descripción larga",
      large: true,
    },
  ];

  return (
    <section className="product">
      <h2>Explora Nuestro Menú</h2>
      <div className="product-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`product-card ${item.large ? "large" : ""}`}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
