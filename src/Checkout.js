import { ListItem } from "@material-ui/core";
import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  function returnCheckout(product) {
    return (
      <CheckoutProduct
        id={product.id}
        title={product.title}
        img={product.img}
        rating={product.rating}
        price={product.price}
      />
    );
  }

  return (
    <div className="checkout">
      <div className="checkout_right">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBG_1_NotApproved._TTW_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1 className ="checkout_title">Your Shopping Basket is empty</h1>
            <p>
              You have no items in your basket. To buy one or more items, click
              'Add to basket' next to the item
            </p>
          </div>
        ) : (
          <div>
            <h1 className="checkout_title">Your Shoping Basket</h1>
            {basket.map(returnCheckout)}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
