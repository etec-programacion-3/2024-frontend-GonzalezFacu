import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
