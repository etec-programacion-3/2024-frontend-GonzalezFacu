import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

        <section className="featured">
          <h2>Kits Populares</h2>
          <div className="featured-items">
            <div className="item">
              <img src="path/to/kit-image.jpg" alt="Kit Popular" />
              <h3>Nombre del Kit</h3>
              <p>Descripción breve</p>
              <p>Precio</p>
              <a href="/kit-detalle" className="cta-button">
                Ver Más
              </a>
            </div>
          </div>
        </section>

        <section className="benefits">
          <h2>Beneficios de Nuestros Kits</h2>
          <div className="benefit-items">
            <div className="benefit-item">
              <h3>Beneficio 1</h3>
              <p>Descripción del beneficio.</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>Lo Que Dicen Nuestros Clientes</h2>
          <div className="testimonial-items">
            <div className="testimonial-item">
              <p>"Testimonio del cliente."</p>
              <cite>Nombre del Cliente</cite>
            </div>
          </div>
        </section>

        <section className="special-offers">
          <h2>Ofertas Especiales</h2>
          <div className="offer-items">
            <div className="offer-item">
              <h3>Oferta Especial</h3>
              <p>Detalles de la oferta.</p>
              <a href="/oferta-detalle" className="cta-button">
                Aprovechar Oferta
              </a>
            </div>
          </div>
        </section>

        <section className="recipes">
          <h2>Recetas Populares</h2>
          <div className="recipe-items">
            <div className="recipe-item">
              <img src="path/to/recipe-image.jpg" alt="Receta Popular" />
              <h3>Nombre de la Receta</h3>
              <p>Descripción breve</p>
              <a href="/receta-detalle" className="cta-button">
                Ver Receta
              </a>
            </div>
          </div>
        </section>

        <section className="newsletter">
          <h2>Suscríbete a Nuestro Boletín</h2>
          <form action="/suscripcion" method="post">
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
            />
            <button type="submit" className="cta-button">
              Suscribirse
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
