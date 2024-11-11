import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ProfilePage from "../../components/user/ProfileComponent";
import "../../styles/common/Main.css";

function Perfil() {
  return (
    <section>
      <Header />
      <main className="main">
        <ProfilePage />
      </main>
      <Footer />
    </section>
  );
}

export default Perfil;
