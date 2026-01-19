import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Shopping App", () => {
  test("toggles dark mode on button click", () => {
    render(<App />);
    const toggleBtn = screen.getByRole("button", { name: /dark mode/i });
    expect(toggleBtn).toBeInTheDocument();

    // Click once → should switch to Light Mode
    fireEvent.click(toggleBtn);
    expect(toggleBtn.textContent.toLowerCase()).toMatch(/light/i);

    // Click again → back to Dark Mode
    fireEvent.click(toggleBtn);
    expect(toggleBtn.textContent.toLowerCase()).toMatch(/dark/i);
  });

  test("filters products by category", () => {
    render(<App />);
    const select = screen.getByRole("combobox");

    // Show only Fruits
    fireEvent.change(select, { target: { value: "Fruits" } });
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.queryByText(/Milk/i)).not.toBeInTheDocument();

    // Show only Dairy
    fireEvent.change(select, { target: { value: "Dairy" } });
    expect(screen.getByText(/Milk/i)).toBeInTheDocument();
    expect(screen.getByText(/Cheese/i)).toBeInTheDocument();
    expect(screen.queryByText(/Apple/i)).not.toBeInTheDocument();
  });

  test("displays message when no products match filter", () => {
    render(<App />);
    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "NonExistingCategory" } });
    expect(screen.getByText(/no products match your filter/i)).toBeInTheDocument();
  });

  test("adds items to cart", () => {
    render(<App />);

    // Cart is empty initially
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByText(/Apple is in your cart/i)).not.toBeInTheDocument();

    // Add Apple
    const appleBtn = screen.getByTestId("product-1").querySelector("button");
    fireEvent.click(appleBtn);
    expect(screen.getByText(/Apple is in your cart/i)).toBeInTheDocument();

    // Add Milk
    const milkBtn = screen.getByTestId("product-2").querySelector("button");
    fireEvent.click(milkBtn);
    expect(screen.getByText(/Milk is in your cart/i)).toBeInTheDocument();
    const handleAddToCart = jest.fn();

render(<ProductCard product={product} onAddToCart={handleAddToCart} />);

  });
});
