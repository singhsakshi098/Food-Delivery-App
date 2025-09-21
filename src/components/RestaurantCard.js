import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) => {
    const {resData} = props;
    //DESTRUCTING : IS THE WAY BETTER FOR WRITTING INSTEAD OF WRITTING RES.DATA DESTRUCTING IS BETTER
    const {cloudinaryImageId , name, cuisines , avgRating, costForTwo , deliveryTime} = resData.info
    // after writiing this we dont need to write likee{res.Data.info.name} we can now directly write name

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-500">
            <img 
              className="rounded-lg"
              alt="res=logo"
              src=
                  {
                    "https://media-assets.swiggy.com/swiggy/image/upload/"+
                     resData.info.cloudinaryImageId
                }/>

            <h4 className="font-bold py-4 text-lg ">{name}</h4>
            <h5>{cuisines.join(", ")} Minutes</h5>
            <h5>{avgRating}stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{resData?.info?.sla?.slaString}</h5>
    </div>
    )
}

export default RestaurantCard;