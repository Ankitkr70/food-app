import { useState, useEffect } from "react";
import { RESTAUTANTS_API } from "../utils/constants";

const useGetRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAUTANTS_API);
    const json = await response.json();
    const { restaurants } =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;
    setAllRestaurants(restaurants);
  };
  return allRestaurants;
};

export default useGetRestaurants;
