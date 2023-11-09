import RestaurantItem from "./RestaurantItem";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const filterRestaurant = () => {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4);
    setResList(filteredRes);
  };

  const clearFilterRestauant = () => {
    fetchRes();
  };

  useEffect(() => {
    fetchRes();
  }, []);

  const fetchRes = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    const { restaurants } =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;
    setResList(restaurants);
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }
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
