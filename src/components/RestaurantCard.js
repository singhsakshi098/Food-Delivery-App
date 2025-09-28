import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  // DESTRUCTURING for convenience
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData.info;

  // ✅ Get loggedInUser from context
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-500">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}
      />

      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h5>{cuisines.join(", ")} Minutes</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{resData?.info?.sla?.slaString}</h5>

      {/* ✅ Now loggedInUser is defined */}
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
