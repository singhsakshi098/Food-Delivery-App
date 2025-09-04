import {useState , useEffect} from "react";
import Shimmer from "./shimmer.js";

const RestaurantMenu = () => {

    const [resInfo , setResInfo] = useState(null);
    useEffect (() => {
        fetchMenu();
}, [])

const fetchMenu = async() =>{
    const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.67578170372547&lng=77.5028330142963&restaurantId=1045111&catalog_qa=undefined&submitAction=ENTER"
  );
  const json= await data.json();
  console.log(json);
  setResInfo(json.data);
};
if (resInfo===null) return <Shimmer />;

const infoCard = resInfo?.cards?.find(
  (c) => c?.card?.card?.info
);

const { name, cuisines, costForTwoMessage } =
  infoCard?.card?.card?.info || {};


    
    return (

        <div className="menu">
           <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>


            <ul>
                <li>Biryani</li>
                <li> Burgers</li>
                <li> Diet coke</li>
            </ul>

        </div>
    )
}
export default RestaurantMenu;