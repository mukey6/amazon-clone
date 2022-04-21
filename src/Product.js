import React from "react";
import "./Product.css";
export default function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rate">
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
        </div>
      </div>
      <img
        src={image}
        alt="image of book"
      />
      <button>Add to Basket</button>
    </div>
  );
}
