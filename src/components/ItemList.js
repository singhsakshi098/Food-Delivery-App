import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items?.map((item, index) => (
        <div
          data-testid="foodItems"
          key={`${item.card.info.id}-${index}`} // ✅ unique key
          className="w-6/12 bg-gray-200 mx-auto my-6 font-medium p-6 text-lg border-gray-200 border-b-2 flex text-left"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                – ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-15 rounded-lg bg-white shadow-lg m-auto hover:bg-yellow-50"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
