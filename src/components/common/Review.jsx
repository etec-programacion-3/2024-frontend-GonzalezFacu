import { useEffect, useState } from "react";
import React from "react";
import "../../styles/common/Review.css";
import api from "../../apiConfig/api"; // Asegúrate de tener configurada tu instancia de Axios correctamente

function Review() {
  const [reviews, setReviews] = useState([]); // Estado para las reseñas
  const [products, setProducts] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener reseñas
        const reviewsResponse = await api.get("/api/review/");
        setReviews(reviewsResponse.data);

        // Obtener productos
        const productsResponse = await api.get("/api/products/");
        setProducts(productsResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los datos: {error}</div>;

  function StarRating({ rating }) {
    const stars = Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          ★
        </span>
      ));

    return <div className="star-rating">{stars}</div>;
  }

  // Mostrar solo las primeras 3 reseñas
  const limitedReviews = reviews.slice(0, 5);

  return (
    <section className="review">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="review-container">
        {limitedReviews.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.product.image}
              alt={`Producto relacionado con ${review.author}`}
              className="review-image"
            />
            <p className="review-content">"{review.content}"</p>
            <StarRating rating={review.rating} />
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
