import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
import ShowPopup from "./PopUp";

const Cart = () => {
  const [showPopup, setShowPopup] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Show the popup
    setShowPopup(true);

    // Hide the popup after a certain time (e.g., 2 seconds)
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    dispatch(clearCart());
  };

  return (
    <div className="mt-32 mb-20 mx-4">
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {cartItems.map((item, index) => (
          <FoodItem key={index} {...item} />
        ))}
      </div>
      <ShowPopup
        isShowPopup={{ showPopup, setShowPopup, action: "Cart Cleared" }}
      />
    </div>
  );
};

export default Cart;
