import ItemList from "./ItemList.js";

const RestaurantCategory = ({ category }) => {
  return (
    <div>
      <h2 className="w-6/12 bg-gray-200 mx-auto my-6 font-bold p-6 text-xl ">
        {category.title}
      </h2>
      <ItemList items={category.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
