import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart - {cartItems.length}</li>
        </ul>
        <button
          className="btn"
          onClick={() => setBtnText(btnText === "Login" ? "Logout" : "Login")}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
