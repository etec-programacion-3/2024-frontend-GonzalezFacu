import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/layout/Header.css";
import "../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";

function Header() {
  const { isAuthorized } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            GourmetKits
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/planes" className="nav-link">
                Planes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar recetas o ingredientes..."
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>
          <div className="cart-image-container">
            <Link className="cart-button" to="/checkout">
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </Link>
          </div>
          {isAuthorized ? (
            <Link to="/perfil" className="profile-link">
              👤 Mi Perfil
            </Link>
          ) : (
            <Link to="/login" className="login-button">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
