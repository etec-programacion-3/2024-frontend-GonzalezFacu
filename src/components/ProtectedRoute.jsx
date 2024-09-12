import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Componente para proteger rutas
function ProtectedRoute({ children }) {
  const { isAuthorized } = useAuth(); // Obtener el estado de autorización del contexto

  if (isAuthorized === null) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se verifica la autenticación
  }

  // Si el usuario está autorizado, mostrar el contenido protegido; si no, redirigir a la página de login
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
