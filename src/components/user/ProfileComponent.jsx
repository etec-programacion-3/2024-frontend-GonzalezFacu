import React, { useEffect, useState } from "react";
import api from "../../apiConfig/api"; // Importa la instancia de Axios configurada
import "../../styles/user/ProfilePage.css";
import placeholderUserImage from "../../assets/images/placeholderUserImage.jpg";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  // Cargar los datos del perfil al montar el componente
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await api.get("/api/profile/");
        setFormData((prevData) => ({
          ...prevData,
          firstName: response.data.first_name || "",
          lastName: response.data.last_name || "",
          email: response.data.email || "",
          countryCode: response.data.country_code || "",
          phoneNumber: response.data.phone_number || "",
          street: response.data.street || "",
          city: response.data.city || "",
          state: response.data.state || "",
          zipCode: response.data.zip_code || "",
          country: response.data.country || "",
          profilePicture: response.data.image || placeholderUserImage,
        }));
      } catch (error) {
        console.error("Error al cargar los datos del perfil:", error);
      }
    };
    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para enviar todos los datos, incluyendo los archivos
    const data = new FormData();

    // Agregar los datos del formulario al FormData
    data.append("first_name", formData.firstName);
    data.append("last_name", formData.lastName);
    data.append("email", formData.email);
    data.append("country_code", formData.countryCode);
    data.append("phone_number", formData.phoneNumber);
    data.append("street", formData.street);
    data.append("city", formData.city);
    data.append("state", formData.state);
    data.append("zip_code", formData.zipCode);
    data.append("country", formData.country);
    if (formData.password) {
      data.append("password", formData.password); // Solo agregar contraseña si no está vacía
    }
    if (formData.profilePicture) {
      data.append("image", formData.profilePicture); // Añadir la imagen si se ha cambiado
    }

    try {
      const response = await api.put("/api/profile/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Respuesta de actualización del perfil:", response.data);
      alert("Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      alert("Hubo un error al actualizar el perfil");
    }
  };

  return (
    <div className="profile-page">
      <h2>Perfil de Usuario</h2>
      <div className="profile-content">
        {/* Sección Izquierda: Foto de Perfil */}
        <div className="profile-image-section">
          <img
            src={
              formData.profilePicture instanceof File
                ? URL.createObjectURL(formData.profilePicture)
                : formData.profilePicture
            }
            alt="Foto de perfil"
            className="profile-image"
          />
          <input type="file" id="profilePicture" onChange={handleFileChange} />
        </div>

        {/* Sección Derecha: Información de Perfil */}
        <div className="profile-info-section">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="phone-form-group">
                <label htmlFor="phoneNumber">Número de Teléfono</label>
                <input
                  className="phone-code-number"
                  type="text"
                  id="countryCode"
                  name="countryCode"
                  placeholder="+XX"
                  value={formData.countryCode}
                  onChange={handleChange}
                />
                <input
                  className="phone-number"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="street">Calle y Número</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">Estado/Provincia</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">País</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">Código Postal</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Nueva Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-save">
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
