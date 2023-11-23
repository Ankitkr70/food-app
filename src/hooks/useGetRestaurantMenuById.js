import { useState, useEffect } from "react";

const useGetRestaurantMenuById = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    console.log(data);
    setResData(data?.data?.cards);
  };
  return resData;
};

export default useGetRestaurantMenuById;
