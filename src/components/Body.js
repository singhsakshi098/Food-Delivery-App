import RestaurantCard from "./RestaurantCard.js";
import resObj from "../utils/mockData";
import {useState } from "react";
import React, { useEffect } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";


const Body = () => {
    // local state variable : this is the superpowerful react variable
    //we can also write the state variable here in body itself
    //AFTER REMOVING RESoBJ FROM BEEOW BRACKET NOW I DONT NEED THE MOCK DAATA BECAUSE DATA IS DIRECTLY COMING FROM APIAND
    //WE MAKE USEState([]) because initially we dont have nay data
     const [listOfRestaurant, setListOfRestaurant] = useState([]);
     const [filteredRestaurant, setFilteredRestaurant] = useState([]);
     const [searchText , setsearchText] = useState("");
     // when we write  or whenever state cariable update , react triggers re-consiliation cycle (re-renders the component)
     // multiple time it re -renders the component and how fast it is happening; react is finding older virtual dom and newer virtual dom
     console.log("Body-rendered", listOfRestaurant);;

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67578170372547&lng=77.5028330142963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
        const json = await data.json();
        console.log("API Response:", json);

         const restaurants =
            json?.data?.cards?.find(
              (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

              setListOfRestaurant(restaurants);         
            };
        // CONDITIONAL RENDERING : rendering on basis of condition
        // instead of writtin glike this we can write the conditon using ternary operator
        // if (listOfRestaurant.length===0){
        //     return (
        //         <Shimmer />
        //     )
        // };
        //ternnary operator

        const onlineStatus= useOnlineStatus();
        if(onlineStatus===false) return <h1>LOoks Like You Are Offlinee!! 
          <br></br>  Check your internet connection</h1>

          const { loggedInUser , setUserName } = useContext(UserContext);

     return listOfRestaurant.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 font-bold ">
                    <input type="text" className="border border-black " value= {searchText} onChange={(e) => {
                            setsearchText(e.target.value);
                    }}/>
                    <button className ="px-4 py-2 bg-green-300 m-4 rounded-lg hover:bg-green-700 text-white "
                     onClick={() => {
                 console.log(searchText);

    const filtered = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setListOfRestaurant(filtered);
  }}
      >   Search</button>
                </div>
                <div>
                  <div className="flex gap-4 justify-center my-8">
                  <button className = " bg-gray-300 px-4 py-2  text-black font-bold m-4 rounded-lg hover:bg-gray-500"
                    onClick={() => {
                     const filteredList = listOfRestaurant.filter(
                      (res) => res.info.avgRating > 4.5);
               setListOfRestaurant(filteredList); // update state
          }}>
               Top Rated Restaurant</button>

                </div>
               </div>
              <div className="search w-4 p-4 flex items-center">
                  <label>UserName</label>
                  <input  className="border border-black p-2"
                  value={loggedInUser}
                  onChange = {(e) =>setUserName(e.target.value)}/>
                </div>
                
            </div>
            <div className="flex flex-wrap">
               {listOfRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id}
                 to = {"/restaurants/"+restaurant.info.id}>
                  <RestaurantCard resData={restaurant} />              
                 </Link>
                  ))}
            </div>
        </div>
    );
};

export default Body;