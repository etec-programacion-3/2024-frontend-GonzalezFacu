import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import Review from "../components/Review";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <Review />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
