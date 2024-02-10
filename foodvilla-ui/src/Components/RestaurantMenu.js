import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurantMenu";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantMenuList, resturantMenuItem] = useRestaurant(resId);
  return !restaurantMenuList ? (
    <div className="h-screen flex items-center justify-center mt-10"><Shimmer /></div>
  ) : (
    <div className="p-5 m-28">
      <div className="w-80 bg-center mx-auto shadow-lg bg-pink-50">
        <div className="p-2 text-center">
          <img
            className="h-60 w-80 mb-2 shadow-lg"
            src={IMG_CDN_URL + restaurantMenuList?.cloudinaryImageId}
            alt={restaurantMenuList?.name}
          />
          <h1 className="font-serif font-bold text-xl text-blue-600">
            Restaurant id: {resId}
          </h1>
          <h2 className="text-blue-300">{restaurantMenuList?.name}</h2>
          <h3 className="text-blue-300">{restaurantMenuList?.area}</h3>
          <h3 className="text-blue-300">{restaurantMenuList?.city}</h3>
          <h3 className="text-green-300">
            {restaurantMenuList?.avgRating} stars
          </h3>
          <h3 className="text-red-300">
            {restaurantMenuList?.costForTwoMessage}
          </h3>
        </div>
      </div>
      <RestaurantMenuItem resturantMenuItem={resturantMenuItem} />
    </div>
  );
};

export default RestaurantMenu;
