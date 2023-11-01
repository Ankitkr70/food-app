const RestaurantItem = ({ resData }) => {
  const { name, cuisines, avgRating, sla } = resData;
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
        <h3 className="res-name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla?.deliveryTime} min</h4>
      </div>
    </div>
  );
};

export default RestaurantItem;
