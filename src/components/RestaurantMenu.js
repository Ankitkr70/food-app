import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    console.log(data);
    setResData(data?.data?.cards);
  };

  if (resData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resData[0]?.card?.card?.info;
  const { itemCards } =
    resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu-container">
      <h1 className="res-name">{name}</h1>
      <p>
        {cuisines.join(",")} - Rs. {costForTwoMessage}
      </p>
      <h2>Category</h2>
      <ul className="menu-items">
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {`${item?.card?.info?.name} - 
            ${
              item?.card?.info?.defaultPrice
                ? item?.card?.info?.defaultPrice / 100
                : item?.card?.info?.price / 100
            }`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
