import React, { useEffect, useState } from "react";
import placeholderUserImage from "../assets/placeholderUserImage.jpg";
import api from "../api";
import "../styles/ProductCard.css";
import ProductModal from "./ProductModal";
import { useCart } from "../contexts/CartContext"; // Asegúrate de importar el contexto del carrito

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]); // Estado para las reseñas
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Obtener funciones del CartContext
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductsAndReviews = async () => {
      try {
        const productResponse = await api.get("/api/products/");
        setProducts(productResponse.data);

        const reviewResponse = await api.get("/api/review/");
        setReviews(reviewResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndReviews();
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

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Establece el producto seleccionado
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Cierra el modal
  };

  // Función para manejar la adición al carrito
  const handleAddToCart = (product) => {
    addToCart(product, 1); // Llama a la función addToCart del contexto
  };

  return (
    <section className="menu-products">
      <h2>Nuestro Menú</h2>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product, index) => {
            const isLarge = index % 4 === 3;

            // Filtra las reseñas para el producto actual
            const productReviews = reviews
              .filter((review) => review.product.id === product.id)
              .slice(0, 3); // Limitar a 3 reseñas

            return (
              <div
                key={product.id}
                className={`product-card ${isLarge ? "large" : ""}`}
                onClick={() => handleCardClick(product)} // Agrega el evento de clic aquí
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`product-image ${isLarge ? "large" : ""}`}
                />
                <div className={`product-info ${isLarge ? "large" : ""}`}>
                  <h3 className={`product-name ${isLarge ? "large" : ""}`}>
                    {product.name}
                  </h3>
                  <p
                    className={`product-description ${isLarge ? "large" : ""}`}
                  >
                    {isLarge ? product.description : product.shortDescription}
                  </p>
                  <p className={`product-price ${isLarge ? "large" : ""}`}>
                    ${product.price}
                  </p>
                  <StarRating rating={product.rating} />
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que el modal se abra al hacer clic en "Agregar al carrito"
                      handleAddToCart(product.id);
                    }}
                    className="add-to-cart-button"
                  >
                    Agregar al Carrito
                  </button>
                  {isLarge && (
                    <div className="product-reviews">
                      {productReviews.length > 0 ? (
                        productReviews.map((review) => (
                          <div key={review.id} className="review-item">
                            <img
                              src={placeholderUserImage}
                              alt={review.author}
                              className="review-author-image"
                            />
                            <p className="review-content">"{review.content}"</p>
                            <StarRating rating={parseFloat(review.rating)} />
                            <p className="review-author">- {review.author}</p>
                          </div>
                        ))
                      ) : (
                        <p>No hay reseñas disponibles.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>No hay productos disponibles.</div>
        )}
      </div>
      {selectedProduct && (
        <>
          <div
            className={`product-modal-overlay ${
              selectedProduct ? "active" : ""
            }`}
            onClick={handleCloseModal}
          ></div>
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        </>
      )}
    </section>
  );
}

export default ProductCard;
