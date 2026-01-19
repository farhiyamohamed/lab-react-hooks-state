import React from "react";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "10px",
        width: "150px",
        textAlign: "center",
      }}
    >
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <button onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
