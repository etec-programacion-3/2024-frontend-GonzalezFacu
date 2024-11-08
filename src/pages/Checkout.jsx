import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Cart from "../components/cart/Cart";

function Checkout() {
  return (
    <div>
      <Header />
      <main>
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
