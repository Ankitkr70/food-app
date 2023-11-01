import RestaurantItem from "./RestaurantItem";
import { resData } from "../utils/data";
import { useState } from "react";
const Body = () => {
  const [resList, setResList] = useState(resData);
  const filterRestaurant = () => {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4);
    setResList(filteredRes);
  };

  const clearFilterRestauant = () => {
    setResList(resData);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="top-rated-btn btn" onClick={filterRestaurant}>
          Top Rated Restaurants
        </button>
        <button className="all-res-btn btn" onClick={clearFilterRestauant}>
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantItem resData={res?.info} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
