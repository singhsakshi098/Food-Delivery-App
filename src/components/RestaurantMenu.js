import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} =useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  // restaurant info (name, cuisines, cost)
  const infoCard = resInfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } = infoCard?.card?.card?.info || {};

  // categories (menu sections)
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>

      {categories.map((category, idx) => {
        const cat = category?.card?.card;
        if (cat?.["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
          return null;
        }

        return (
          <div key={idx}>
            <h2>{cat.title}</h2>
            <ul>
              {cat.itemCards?.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} – ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
