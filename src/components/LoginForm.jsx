import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/LoginForm.css";
import LoadingIndicator from "./LoadingIndicator";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsAuthorized } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      setIsAuthorized(true);
      navigate("/");
    } catch (error) {
      alert(error);
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
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
