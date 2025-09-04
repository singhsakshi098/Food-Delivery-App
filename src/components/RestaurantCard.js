import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) => {
    const {resData} = props;
    //DESTRUCTING : IS THE WAY BETTER FOR WRITTING INSTEAD OF WRITTING RES.DATA DESTRUCTING IS BETTER
    const {cloudinaryImageId , name, cuisines , avgRating, costForTwo , deliveryTime} = resData.info
    // after writiing this we dont need to write likee{res.Data.info.name} we can now directly write name

    return (
        <div className="res-card">
            <img 
            className="res-image"
            alt="res=logo"
            src=
            {
                "https://media-assets.swiggy.com/swiggy/image/upload/"+
                 resData.info.cloudinaryImageId
            }
            />

            <h4>{name}</h4>
            <h5>{cuisines.join(", ")} Minutes</h5>
             <h5>{avgRating}stars</h5>
             <h5>{costForTwo}</h5>
            <h5>{resData?.info?.sla?.slaString}</h5>

        
       
    </div>
    )
}

export default RestaurantCard;