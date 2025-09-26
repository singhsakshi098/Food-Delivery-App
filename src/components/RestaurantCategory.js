import React, { useState } from "react";
import ItemList from "./ItemList.js";

const RestaurantCategory = ({ category}) => {
  const [showItems, setShowItems] = useState(false);
  

    const handleClick =() => {
      console.log("Clicked");
      setShowItems(!showItems);
    }
  return (
    <div>
      <div className="w-6/12 bg-gray-200 mx-auto my-6 font-bold p-4 shadow-lg text-xl ">
       <div className="flex-justify-between cursor-pointer" onClick ={handleClick}>
          <span className="text-lg">
            {category.title} {category.itemCards.length} 
          </span> 
            <span> 🔽 </span>
          </div>
        </div>
      
      { showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
