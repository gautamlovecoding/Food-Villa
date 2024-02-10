import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../utils/cartSlice";
import ShowPopup from "./PopUp";

const RestaurantMenuItem = ({ resturantMenuItem }) => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  
  const addFoodItem = (item) => {
    dispatch(addItem(item?.card?.info));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  return (
    <div className="mx-10">
      <h1 className="text-2xl font-bold mt-10 text-center text-green-700">
        Menu
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {resturantMenuItem?.map((item) => (
          <div
            key={item?.card?.info.id}
            className="relative bg-white p-4 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105"
          >
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-400">
                {item?.card?.info?.name}
              </h2>
              <p className="text-gray-500">{item?.card?.info?.description}</p>
              <p className="text-blue-500">
                ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </div>
            <img
              className="h-20 w-20 mb-2 ml-4 shadow-lg"
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
          </div>
        ))}
      </div>
      {/* Popup for "Added to Cart" */}
      <ShowPopup
        isShowPopup={{ showPopup, setShowPopup, action: "Added to Cart" }}
      />
    </div>
  );
};

export default RestaurantMenuItem;
