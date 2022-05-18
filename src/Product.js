import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
export default function Product({ id, title, price, image, rating }) {
  const [{basket}, dispatch]=useStateValue()
  console.log('>>>>basketb', basket)
  const addToBasket =() =>{
      dispatch({
        type:'ADD_TO_BASKET',
          item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
          }
      })
  }
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
