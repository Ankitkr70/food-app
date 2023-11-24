import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useGetRestaurantMenuById = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setResData(data?.data?.cards);
  };
  return resData;
};

export default useGetRestaurantMenuById;
