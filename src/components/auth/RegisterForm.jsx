import { useState } from "react";
import api from "../../apiConfig/api";
import { useNavigate } from "react-router-dom";
import "../../styles/auth/RegisterForm.css"; // Asegúrate de que tu CSS refleje los cambios
import LoadingIndicator from "../common/LoadingIndicator";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden!");
      setLoading(false);
      return;
    }

    try {
      await api.post("/api/register/", {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });
      alert("Registro exitoso! Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (error) {
      alert(
        "Error durante el registro: " +
          (error.response?.data?.detail || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1 className="form-title">Registrar</h1>
      <input
        className="form-input"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        className="form-input"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Apellido"
        required
      />
      <input
        className="form-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo Electrónico"
        required
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      <input
        className="form-input"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirmar Contraseña"
        required
      />
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit" disabled={loading}>
        Registrar
      </button>
    </form>
  );
}

export default RegisterForm;
