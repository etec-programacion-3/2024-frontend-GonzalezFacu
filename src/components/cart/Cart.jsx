import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import "../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../../styles/cart/Cart.css";

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
      <h2 className="cart-tittle">Your Cart</h2>
      <div className="cart-container">
        {/* Right Section - Cart Items */}
        <div className="cart-items">
          {cart.items && cart.items.length > 0 ? (
            cart.items.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {/* Left Section - Total */}
        <div className="cart-total">
          <div className="total-payment">
            <h2>Choose your payment method</h2>
            <form action="" className="payment-method">
              <div>
                <input
                  type="radio"
                  id="card"
                  name="payment-method"
                  value="card"
                />
                <i class="fa fa-credit-card fa-3x" aria-hidden="true"></i>
                <label for="card">Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bank-trasfer"
                  name="payment-method"
                  value="bank-trasfer"
                />
                <i class="fa fa-university fa-3x" aria-hidden="true"></i>
                <label for="bank-trasfer">Bank Trasfer</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mercado-pago"
                  name="payment-method"
                  value="mercado-pago"
                />
                <i class="fa fa-handshake-o fa-3x" aria-hidden="true"></i>
                <label for="mercado-pago">Mercado Pago</label>
              </div>
            </form>
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
          <button className="checkout-button">Finalizar compra</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
