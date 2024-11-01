import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Header.css";

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
              <Link to="/comidas-gourmet" className="nav-link">
                Comidas Gourmet
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
