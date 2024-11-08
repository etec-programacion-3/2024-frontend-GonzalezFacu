import React from "react";
import "../../styles/products/ProductModal.css"; // Asegúrate de tener el CSS aquí

function ProductModal({ product, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.name} className="modal-image" />
        <div className="modal-info">
          <h3 className="modal-product-name">{product.name}</h3>
          <p className="modal-product-description">{product.description}</p>
          <p className="modal-product-price">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
