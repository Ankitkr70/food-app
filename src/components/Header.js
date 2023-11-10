import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
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
