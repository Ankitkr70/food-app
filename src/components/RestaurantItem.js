import { CDN_URL } from "../utils/constants";

const RestaurantItem = ({ resData }) => {
  const { name, cuisines, avgRating, sla } = resData;
  return (
    <div className="res-item">
      <img
        className="res-img"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <div className="res-item-info">
        <h3 className="res-name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla?.deliveryTime} min</h4>
      </div>
    </div>
  );
};

export default RestaurantItem;
