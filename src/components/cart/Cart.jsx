import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import "../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import CheckoutOverlay from "./CheckoutOverlay";
import "../../styles/cart/Cart.css";

const Cart = () => {
  const { cart, fetchCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

  useEffect(() => {
    const getCartData = async () => {
      try {
        await fetchCart();
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    getCartData();
  }, []);

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
        <div className="cart-items">
          {cart.items && cart.items.length > 0 ? (
            cart.items.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
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
                  checked={selectedPaymentMethod === "card"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                />
                <i className="fa fa-credit-card fa-3x" aria-hidden="true"></i>
                <label htmlFor="card">Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bank-transfer"
                  name="payment-method"
                  value="bank-transfer"
                  checked={selectedPaymentMethod === "bank-transfer"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                />
                <i className="fa fa-university fa-3x" aria-hidden="true"></i>
                <label htmlFor="bank-transfer">Bank Transfer</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mercado-pago"
                  name="payment-method"
                  value="mercado-pago"
                  checked={selectedPaymentMethod === "mercado-pago"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                />
                <i className="fa fa-handshake-o fa-3x" aria-hidden="true"></i>
                <label htmlFor="mercado-pago">Mercado Pago</label>
              </div>
            </form>
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
          <button
            className="checkout-button"
            onClick={() => setShowOverlay(true)}
          >
            Continuar con el Pago
          </button>
          {showOverlay && (
            <CheckoutOverlay
              onClose={() => setShowOverlay(false)}
              selectedPaymentMethod={selectedPaymentMethod}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
