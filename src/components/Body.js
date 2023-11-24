import RestaurantItem from "./RestaurantItem";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useGetRestaurants from "../hooks/useGetRestaurants";
import InternetOffline from "./InternetOffline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const onlineStatus = useOnlineStatus();
  const allRestaurants = useGetRestaurants();

  useEffect(() => {
    setResList(allRestaurants);
  }, [allRestaurants]);

  useEffect(() => {
    !searchText && setResList(allRestaurants);
  }, [searchText]);

  const topRatedRestaurant = () => {
    const filteredRes = allRestaurants.filter((res) => res.info.avgRating > 4);
    setResList(filteredRes);
  };

  const clearFilterRestauant = () => {
    setResList(allRestaurants);
  };

  const searchRestaurant = () => {
    const filteredRestaurants = allRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText)
    );
    if (filteredRestaurants && filteredRestaurants.length > 0) {
      setResList(filteredRestaurants);
    }
  };

  if (!onlineStatus) return <InternetOffline />;

  return resList?.length !== 0 ? (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant..."
            className="search-input"
            maxLength={50}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button className="btn" onClick={searchRestaurant}>
            Search
          </button>
        </div>
        <div>
          <button className="top-rated-btn btn" onClick={topRatedRestaurant}>
            Top Rated Restaurants
          </button>
          <button className="all-res-btn btn" onClick={clearFilterRestauant}>
            All Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
            <RestaurantItem resData={res?.info} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
