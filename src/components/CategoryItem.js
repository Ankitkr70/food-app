import React, { useState } from "react";
import "./CategoryItem.css";
import MenuItem from "./MenuItem";
const CategoryItem = ({ category }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="category">
      <div
        className="category-item-header"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="category-name">
          {category.card.card.title.toUpperCase()} (
          {category.card.card.itemCards.length})
        </div>
        <div className="category-icon">
          <span>{showMenu ? "⬆️" : "⬇️"}</span>
        </div>
      </div>
      {showMenu && (
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
