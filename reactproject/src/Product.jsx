import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import gamingMouseImage from "./assets/product/mouse.jpg";
import gamingKeyboardImage from "./assets/product/keyboard.jpg";
import gpuImage from "./assets/product/gpu.jpg";
import headsetImage from "./assets/product/headset.jpg";
import laptopImage from "./assets/product/laptop.jpg";
import monitorImage from "./assets/product/monitor.jpg";

const Product = () => {
  const navigate = useNavigate();

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

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, operation) => {
    setQuantities((prevQuantities) => {
      const newQuantity =
        operation === "+"
          ? prevQuantities[id] + 1
          : Math.max(1, prevQuantities[id] - 1);
      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  const handleBuyNow = (product) => {
    navigate("/thank-you", {
      state: { product },
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

                <button
                  className="btn btn-secondary custom-button mt-3"
                  disabled={quantities[product.id] === 0}
                  onClick={() => handleBuyNow(product)}
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
