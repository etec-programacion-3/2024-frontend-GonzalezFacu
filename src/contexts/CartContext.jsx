import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../apiConfig/api";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export { CartContext };

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  // Este useEffect solo se ejecutará una vez al montar el componente
  useEffect(() => {
    fetchCart();
  }, []); // Dependencia vacía, solo se ejecuta una vez

  // Función para cargar el carrito
  const fetchCart = async () => {
    try {
      const response = await api.get("/api/cart/");
      const data = response.data;

      // Si la respuesta es válida, actualizamos el carrito
      if (data && Array.isArray(data) && data[0]) {
        setCart(data[0]);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // Función para agregar productos al carrito
  const addToCart = async (productId, quantity) => {
    try {
      const response = await api.post("/api/cart/add/", {
        product_id: productId,
        quantity,
      });
      setCart(response.data); // Actualizamos el carrito con la respuesta
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Función para actualizar cantidades del carrito
  const updateCart = async (itemId, quantity) => {
    try {
      const response = await api.patch("/api/cart/update/", {
        item_id: itemId,
        quantity,
      });
      const updatedItem = response.data;

      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.id === itemId ? updatedItem : item
        ),
      }));
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = async (itemId) => {
    try {
      await api.delete("/api/cart/remove/", { data: { item_id: itemId } });
      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.filter((item) => item.id !== itemId),
      }));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  // Proveer los valores del contexto
  const value = {
    cart,
    fetchCart, // Esta función no se debe ejecutar repetidamente
    addToCart,
    updateCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
