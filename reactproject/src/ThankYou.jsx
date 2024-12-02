import React from "react";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation(); // Use location to get the passed state
  const { product } = location.state || {}; // Destructure product from state

  if (!product) {
    return <div>Product data not found!</div>;
  }

  return (
    <div className="container py-5 text-center text-white">
      <h2>Thank You for Your Purchase!</h2>
      <p>We appreciate your order and will process it shortly.</p>

      {/* Display Product Information */}
      <div className="mt-4">
        <h3>You've purchased:</h3>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "200px", marginBottom: "10px" }}
        />
        <h4>{product.name}</h4>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ThankYou;
