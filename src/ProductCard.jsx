import React from "react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card" data-testid={`product-${product.id}`}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
