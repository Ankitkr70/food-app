import { CDN_URL } from "../utils/constants";
import "./RestaurantItem.css";
const RestaurantItem = ({ resData }) => {
  const { name, cuisines, avgRating, sla } = resData;
  return (
    <div className="res-item" data-testid="res-item">
      <img
        className="res-img"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <div className="res-item-info">
        <h3 className="res-name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{"⭐  " + avgRating + " - " + sla?.deliveryTime} min </h4>
      </div>
    </div>
  );
};

export const withRestaurantItemBestSeller = (RestaurantItem) => {
  return (props) => {
    return (
      <div className="best-seller-item-container">
        <label className="best-seller">Best Seller</label>
        <RestaurantItem {...props} />
      </div>
    );
  };
};

export default RestaurantItem;
