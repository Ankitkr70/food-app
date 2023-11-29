import React from "react";
import "./MenuItem.css";
import { CDN_URL } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const MenuItem = ({ menuItem }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(menuItem));
  };
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  const quantity = cartItems.find((item) => item.id === menuItem.id)?.quantity;
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(menuItem));
  };
  return (
    <div className="menu-item-container">
      <div className="menu-item-info">
        <p className="menu-item-name">{menuItem.name}</p>
        <p className="menu-item-price">
          ₹{" "}
          {menuItem.price ? menuItem.price / 100 : menuItem.defaultPrice / 100}
        </p>
        <p className="menu-item-desp">{menuItem.description}</p>
      </div>
      <div className="menu-item-image">
        <img src={CDN_URL + menuItem.imageId} alt="" />
        <div className="add-quantity">
          <span onClick={removeFromCartHandler}>-</span>
          <span>{quantity ? quantity : "ADD"}</span>
          <span onClick={addToCartHandler}>+</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
