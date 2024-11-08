import { useState } from "react";
import api from "../../apiConfig/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "../../styles/auth/LoginForm.css";
import LoadingIndicator from "../common/LoadingIndicator";

function LoginForm() {
  const [email, setEmail] = useState(""); // Cambia `username` a `email`
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsAuthorized } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post("/api/token/", { email, password }); // Envía `email` en lugar de `username`
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      setIsAuthorized(true);
      navigate("/");
    } catch (error) {
      alert(error.response.data.detail || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Login</h1>
      <input
        className="form-input"
        type="text"
        value={email} // Cambia `username` a `email`
        onChange={(e) => setEmail(e.target.value)} // Cambia `setUsername` a `setEmail`
        placeholder="Email" // Cambia el placeholder a "Email"
        required
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        Login
      </button>
      <div className="form-links">
        <a href="/forgot-password" className="form-link">
          Olvidé mi contraseña
        </a>
        <p>
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="form-link">
            Regístrate
          </a>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
