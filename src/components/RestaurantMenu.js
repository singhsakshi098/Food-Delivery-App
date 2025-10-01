import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(0); // first category expanded

  if (resInfo === null) return <Shimmer />;

  const infoCard = resInfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } = infoCard?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const handleCategoryClick = (idx) => {
    setExpandedCategoryIndex(expandedCategoryIndex === idx ? null : idx);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">{cuisines?.join(", ")}</h2>
      <h3 className="font-bold text-lg">{costForTwoMessage}</h3>

      {categories.map((category, idx) => {
        const cat = category?.card?.card;
        if (
          cat?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return null;
        }

        return (
          <RestaurantCategory
            key={idx}
            category={cat}
            isExpanded={expandedCategoryIndex === idx} // controlled by parent
            onClick={() => handleCategoryClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
