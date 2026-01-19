import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, handleAddToCart }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
