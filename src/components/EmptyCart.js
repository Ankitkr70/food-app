import React from "react";
import "./EmptyCart.css";
import empty_card_image from "../utils/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="empty-img">
        <img src={empty_card_image} alt="" />
      </div>
      <div className="cart-empty-text">
        <div>Your cart is empty</div>
        <div>You can go to home page to view more restaurants</div>
      </div>

      <Link to="/">
        <button className="btn btn-empty-cart">See All Restaurants</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
