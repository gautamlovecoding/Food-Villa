import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantMenuList, setrestaurantMenuList] = useState(null);
  const [resturantMenuItem, setResturantMenuItem] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const menuData = await data.json();
    setrestaurantMenuList(menuData?.data?.cards[0]?.card?.card?.info);
    setResturantMenuItem(menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  }
  return [restaurantMenuList, resturantMenuItem];
};

export default useRestaurantMenu;
