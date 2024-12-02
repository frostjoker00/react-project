import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

// Product images
import gamingMouseImage from "./assets/product/mouse.jpg";
import gamingKeyboardImage from "./assets/product/keyboard.jpg";
import gpuImage from "./assets/product/gpu.jpg";
import headsetImage from "./assets/product/headset.jpg";
import laptopImage from "./assets/product/laptop.jpg";
import monitorImage from "./assets/product/monitor.jpg"; // Ensure these images exist

const Product = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  // Product data
  const products = [
    { id: 1, name: "Gaming Mouse", image: gamingMouseImage, price: "$40" },
    {
      id: 2,
      name: "Gaming Keyboard",
      image: gamingKeyboardImage,
      price: "$80",
    },
    { id: 3, name: "Monitor", image: monitorImage, price: "$300" },
    { id: 4, name: "GPU", image: gpuImage, price: "$500" },
    { id: 5, name: "Headset", image: headsetImage, price: "$100" },
    { id: 6, name: "Laptop", image: laptopImage, price: "$1200" },
  ];

  // State to manage the quantity of each product
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1; // Start with 1 for each product
      return acc;
    }, {})
  );

  // Handle the change in quantity (increase or decrease)
  const handleQuantityChange = (id, operation) => {
    setQuantities((prevQuantities) => {
      const newQuantity =
        operation === "+"
          ? prevQuantities[id] + 1
          : Math.max(1, prevQuantities[id] - 1); // Ensure quantity doesn't go below 1
      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  // Handle "Buy Now" click
  const handleBuyNow = (product) => {
    navigate("/thank-you", {
      state: { product }, // Pass product data to Thank You page
    });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>

                {/* Quantity Selection */}
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary custom-button"
                    onClick={() => handleQuantityChange(product.id, "-")}
                    disabled={quantities[product.id] <= 1}
                  >
                    -
                  </button>
                  <span className="mx-3">{quantities[product.id]}</span>
                  <button
                    className="btn btn-outline-secondary custom-button"
                    onClick={() => handleQuantityChange(product.id, "+")}
                  >
                    +
                  </button>
                </div>

                {/* Buy Now Button */}
                <button
                  className="btn btn-secondary custom-button mt-3"
                  disabled={quantities[product.id] === 0}
                  onClick={() => handleBuyNow(product)} // Pass product as argument
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
