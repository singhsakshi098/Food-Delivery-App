const ItemList = ({ items }) => {
    
  return (
    <ul>
      {items?.map((item) => (
        <li
          key={item?.card?.info?.id}
          className="w-6/12 bg-gray-200 mx-auto my-6 font-medium p-6 text-lg"
        >
          {item?.card?.info?.name} – ₹
          {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
        </li>
      ))}
    </ul>
    
  );
};

export default ItemList;
