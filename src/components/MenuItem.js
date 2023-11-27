import React from "react";
import "./MenuItem.css";
import { CDN_URL } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const MenuItem = ({ menuItem }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(menuItem));
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
        <button
          className="btn btn-add"
          onClick={() => addToCartHandler(menuItem)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
