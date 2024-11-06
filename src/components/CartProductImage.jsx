import React from "react";

const CartProductImage = ({ imageUrl, altText }) => {
  const defaultImage = "../assets/placeholderUserImage.jpg"; // Imagen predeterminada

  return (
    <img
      src={imageUrl || defaultImage}
      alt={altText || "Product Image"}
      className="cart-item-image"
    />
  );
};

export default CartProductImage;
