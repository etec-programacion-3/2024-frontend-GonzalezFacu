import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Header.css";

function Header() {
  const { isAuthorized } = useAuth();
  const [authState, setAuthState] = useState(isAuthorized);

  useEffect(() => {
    setAuthState(isAuthorized);
  }, [isAuthorized]);

  const profileLink = authState ? "/perfil" : "/login";
  const profileText = authState ? "👤 Mi Perfil" : "Login";
  const profileClass = authState ? "profile-link" : "login-button";

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
              <Link to="/kits-internacionales" className="nav-link">
                Kits Internacionales
              </Link>
            </li>
            <li>
              <Link to="/comidas-gourmet" className="nav-link">
                Comidas Gourmet
              </Link>
            </li>
            <li>
              <Link to="/suscripciones" className="nav-link">
                Suscripciones
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="nav-link">
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

          <Link to="/carrito" className="cart-link">
            🛒
            <span className="cart-count">0</span>
          </Link>

          <Link to={profileLink} className={profileClass}>
            {profileText}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
