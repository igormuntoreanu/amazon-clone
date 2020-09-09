import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img20/EoSS/eos_2020_maple_np_770x60._CB406658813_.jpg"
        ></img>
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
