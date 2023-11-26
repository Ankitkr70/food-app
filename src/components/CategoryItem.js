import React from "react";
import "./CategoryItem.css";
import MenuItem from "./MenuItem";
const CategoryItem = ({ category, onClick, showItem }) => {
  return (
    <div className="category">
      <div className="category-item-header" onClick={onClick}>
        <div className="category-name">
          {category.card.card.title.toUpperCase()} (
          {category.card.card.itemCards.length})
        </div>
        <div className="category-icon">
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
      </div>
      {showItem && (
        <div className={"category-item-list"}>
          {category?.card?.card?.itemCards.map((item) => (
            <MenuItem key={item.card.info.id} menuItem={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
