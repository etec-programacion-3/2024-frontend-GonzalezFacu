import "../styles/layout/Home.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FeaturedProducts from "../components/products/FeaturedProducts";
import Review from "../components/common/Review";
import HeroSection from "../components/layout/HeroSection";
import WhyUs from "../components/layout/WhyUs";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <WhyUs />
        <Review />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
