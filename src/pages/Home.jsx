import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <img
            src="path/to/hero-image.jpg"
            alt="Gourmet Kits"
            className="hero-image"
          />
          <div className="hero-text">
            <h1>Descubre Kits Gourmet para Cada Ocasión</h1>
            <a href="/explorar" className="cta-button">
              Explora Nuestros Kits
            </a>
          </div>
        </section>

        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
