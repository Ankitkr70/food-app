import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL, VEG, NON_VEG } from "../utils/constants";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return (
      acc +
      item.quantity * (item.price ? item.price / 100 : item.defaultPrice / 100)
    );
  }, 0);
  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="cart">
      <div className="address-container">Add Address</div>
      <div className="cart-items-container">
        <div className="cart-item-img">
          <img src={CDN_URL + cartItems[0]?.imageId} alt="" />
          <div>
            {" "}
            <p>Food looks Deliciuos</p>
            <p>Enjoy your meal</p>
          </div>
          <div className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
            Clear
          </div>
        </div>
        <div className="cart-items-wrapper">
          {cartItems.map((item) => {
            return (
              <div className="cart-items">
                <div className="cart-left">
                  <div className="veg-nonveg">
                    {item.itemAttribute.vegClassifier === "VEG" ? (
                      <img src={VEG} />
                    ) : (
                      <img src={NON_VEG} />
                    )}
                  </div>
                  <div className="cart-item-name">{item.name}</div>
                </div>
                <div className="cart-right">
                  <div className="add-quantity">
                    <span onClick={() => removeFromCartHandler(item)}>-</span>
                    <span>{item.quantity ? item.quantity : "-"}</span>
                    <span onClick={() => addToCartHandler(item)}>+</span>
                  </div>
                  <div className="cart-item-price">
                    ₹ {item.price ? item.price / 100 : item.defaultPrice / 100}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-price">
          <span>TO PAY</span>
          <span> ₹ {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
