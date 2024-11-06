import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext"; // Para usar las funciones de actualización del carrito
import api from "../api"; // Importamos api para realizar la llamada GET
import "../styles/Cart.css";

const CartItem = ({ item }) => {
  const { id, product, quantity } = item;
  const { updateCart, removeFromCart } = useCart();

  const [localQuantity, setLocalQuantity] = useState(quantity);
  const [productImage, setProductImage] = useState(product.image); // Estado para la imagen del producto

  // Función para cargar la imagen del producto cuando se actualice la cantidad o el carrito
  const fetchProductImage = async () => {
    try {
      const response = await api.get(`/api/products/${product.id}`);
      const fetchedProduct = response.data;
      setProductImage(fetchedProduct.image); // Actualizamos la imagen
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Llamada inicial para cargar la imagen cuando se monta el componente
  useEffect(() => {
    if (product && product.id) {
      fetchProductImage();
    }
  }, [product.id]); // Dependencia para que se ejecute si el id del producto cambia

  // Llamada para obtener una nueva imagen cuando se actualice la cantidad
  useEffect(() => {
    fetchProductImage();
  }, [localQuantity]); // Cada vez que se cambie la cantidad, actualizamos la imagen

  const increaseQuantity = async () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    await updateCart(id, newQuantity);
  };

  const decreaseQuantity = async () => {
    if (localQuantity > 1) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      await updateCart(id, newQuantity);
    }
  };

  const removeItem = async () => {
    await removeFromCart(id);
  };

  return (
    <div className="cart-item">
      {/* Cargamos la imagen solo cuando la hemos obtenido */}
      {productImage ? (
        <img
          src={productImage}
          alt={product.name}
          className="cart-item-image"
        />
      ) : (
        <img
          src="../assets/placeholderUserImage.jpg" // Imagen por defecto mientras carga la imagen del producto
          alt="Product placeholder"
          className="cart-item-image"
        />
      )}

      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{localQuantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <button className="remove-item" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
