import React from "react";
import ReactDOM from "react-dom/client";

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
const RestaurantItem = () => {
  return (
    <div className="res-item">
      <img
        className="res-img"
        src="https://imageio.forbes.com/specials-images/dam/imageserve/1058912512/960x0.jpg?height=474&width=711&fit=bounds"
        alt="res-logo"
      />
      <div className="res-name">Burger King</div>
      <div className="res-item-info">
        <h4>Burgers, Fries, Wraps</h4>
        <h3>5 stars</h3>
        <h3>30 min</h3>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-container">
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
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
