import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const productsData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" },
  { id: 6, name: "Croissant", category: "Bakery" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const handleAddToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter((product) => product.category === category);

  return (
    <div className={darkMode ? "app dark" : "app light"} style={{ padding: "20px" }}>
      <h1>Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div style={{ margin: "20px 0" }}>
        <label>
          Filter by Category:{" "}
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Dairy">Dairy</option>
            <option value="Fruits">Fruits</option>
            <option value="Bakery">Bakery</option>
          </select>
        </label>
      </div>

      <ProductList products={filteredProducts} handleAddToCart={handleAddToCart} />

      <Cart cartItems={cart} />
    </div>
  );
}

export default App;
