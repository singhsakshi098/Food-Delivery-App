import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  //console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid ="resCard" className="m-4 p-4 w-64 h-[360px] bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
      {/* Image */}
      <img
        className="w-full h-40 object-cover rounded-lg"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}
      />

      {/* Content */}
      <div className="mt-3 flex flex-col flex-grow">
        <h4 className="font-bold text-lg truncate">{name}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{(cuisines || []).join(", ")}</p>

        <div className="mt-auto space-y-1 text-sm text-gray-700">
          <p>⭐ {avgRating}</p>
          <p>{costForTwo}</p>
          <p>{resData?.info?.sla?.slaString}</p>
        </div>

        {/* User */}
        <h4 className="mt-2 text-xs text-gray-500">User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
