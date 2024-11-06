import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, fetchCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí solo hacemos la llamada inicial para obtener el carrito.
    const getCartData = async () => {
      try {
        await fetchCart(); // Solo se hace una vez al principio
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    // Solo se ejecuta una vez
    getCartData();
  }, []); // Dependencia vacía para que solo se ejecute una vez al inicio

  const calculateTotal = () => {
    if (!cart.items || cart.items.length === 0) return 0;

    return cart.items.reduce((total, item) => {
      if (item.product) {
        return total + item.product.price * item.quantity;
      }
      return total;
    }, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="cart-products">
      <h2>Your Cart</h2>
      <div className="cart-container">
        {cart.items && cart.items.length > 0 ? (
          <div>
            {cart.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="total">
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
