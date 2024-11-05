// Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext"; // Asegúrate de que la ruta sea correcta
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, totalAmount, updateCart, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateCart={updateCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
      <div className="cart-total">
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
