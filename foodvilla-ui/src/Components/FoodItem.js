import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { removeItem } from "../utils/cartSlice";
import { useState } from "react";
import ShowPopup from "./PopUp";

const FoodItem = ({
  name,
  description,
  imageId,
  price,
  defaultPrice,
  id,
  count,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveCart = (obj) => {
    // Show the popup
    setShowPopup(true);

    // Hide the popup after a certain time (e.g., 2 seconds)
    setTimeout(() => {
      setShowPopup(false);

      dispatch(removeItem(obj));
    }, 1000);
  };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 mx-10">
      {/* Content Section */}
      <div className="flex-1">
        <h2 className="font-bold text-xl mt-2 mb-1">{name}</h2>
        <h4 className="text-gray-700 text-lg font-bold mb-2">
          ₹{(price || defaultPrice) / 100}
        </h4>
        <p className="text-gray-500 text-sm">{description}</p>
        <button
          className="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium rounded-md text-center bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => handleRemoveCart({ id, count })}
        >
          Remove
        </button>
      </div>
      <p className="text-gray-500 rounded-md bg-green-300 p-4 text-sm mr-7">
        {count}
      </p>
      <img
        className="h-20 w-20 mb-2 rounded-full shadow-lg object-cover"
        src={IMG_CDN_URL + imageId}
        alt={name}
      />

      <ShowPopup
        isShowPopup={{ showPopup, setShowPopup, action: "Removed Item" }}
      />
    </div>
  );
};

export default FoodItem;
