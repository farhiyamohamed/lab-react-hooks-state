import React from "react";

function Cart({ cartItems }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
