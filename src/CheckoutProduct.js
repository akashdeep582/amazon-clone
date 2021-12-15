import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ title, img, id, price, rating }) {
  console.log(title);

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "Remove_from_basket",
      id: id,
    });
  }
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={img} alt="" />
      <div className="product__info">
        <p className="checkout_producttitle">{title}</p>
        <p className="checkout_product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
