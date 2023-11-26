import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams, useRouteError } from "react-router-dom";
import useGetRestaurantMenuById from "../hooks/useGetRestaurantMenuById";
import "./RestaurantMenu.css";
import CategoryItem from "./CategoryItem";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useGetRestaurantMenuById(resId);
  useEffect(() => {}, []);

  if (resData === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    sla,
    totalRatingsString,
    avgRating,
  } = resData[0]?.card?.card?.info;
  const categories =
    resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c.card.card["@type"].includes(
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="res-info">
          <p className="res-name">{name}</p>
          <div className="res-sub">
            <p>{cuisines.join(",")}</p>
            <p>{`${sla.lastMileTravelString} | ${sla.slaString} | ${costForTwoMessage}`}</p>
          </div>
        </div>
        <div className="res-rating">
          <span>{avgRating}</span>
          <span>{totalRatingsString}</span>
        </div>
      </div>

      <div className="menu-category-container">
        {categories.map((category) => (
          <CategoryItem key={category.card.card.title} category={category} />
        ))}
      </div>
      {/* <ul className="menu-items">
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
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
