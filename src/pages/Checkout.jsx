import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Cart from "../components/cart/Cart";
import "../styles/layout/Main.css";

function Checkout() {
  return (
    <div>
      <Header />
      <main className="main">
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
