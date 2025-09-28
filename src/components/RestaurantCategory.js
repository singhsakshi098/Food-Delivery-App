import React from "react";
import ItemList from "./ItemList.js";

const RestaurantCategory = ({ category, isExpanded, onClick }) => {
  return (
    <div>
      <div className="w-6/12 bg-gray-200 mx-auto my-6 font-bold p-4 shadow-lg text-xl">
        <div className="flex justify-between cursor-pointer" onClick={onClick}>
          <span className="text-lg">
            {category.title} ({category.itemCards.length})
          </span>
          <span>{isExpanded ? "🔽" : "▶️"}</span>
        </div>
      </div>

      {isExpanded && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
