import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispath = useDispatch();
  function handleAdd(item) {
   const response = addItem(item);
   console.log("response",response);
    dispath(response);
    console.log("handle add function called");

  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b text-left flex justify-between "
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <img
            className="w-25 h-25 rounded-md"
            src={CDN_URL + "/" + item.card.info.imageId}
          />
          <button
            onClick = {()=>handleAdd(item)}
            className="m-2 p-1 border-2 bg-black text-white absolute right-117 rounded-lg cursor-pointer"
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
