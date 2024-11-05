// CartItem.jsx
import React from "react";

const CartItem = ({ item, updateCart, removeFromCart }) => {
  const { product, quantity } = item;

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    updateCart(product.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  // Verifica la estructura del producto
  console.log("Product:", product);

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div className="cart-item-details">
        <h4>{product.name}</h4>
        <p>Price: ${parseFloat(product.price).toFixed(2)}</p>{" "}
        {/* Asegúrate de que price es un número */}
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
