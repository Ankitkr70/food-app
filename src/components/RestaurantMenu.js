import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams, useRouteError } from "react-router-dom";
import useGetRestaurantMenuById from "../hooks/useGetRestaurantMenuById";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useGetRestaurantMenuById(resId);

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
