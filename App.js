import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./data";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"
          alt="logo-img"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantItem = ({ resData }) => {
  return (
    <div className="res-item">
      <img
        className="res-img"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <div className="res-item-info">
        <h3 className="res-name">{resData.name}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRating} stars</h4>
        <h4>{resData.sla.deliveryTime} min</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-container">
        <RestaurantItem resData={resData[0]?.info} />
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
