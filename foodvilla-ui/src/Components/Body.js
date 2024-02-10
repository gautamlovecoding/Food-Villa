import RestrauntCard from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { RESTAURANT_LIST_URL } from "../constants";
import UserContext from "../utils/userContext";

function filteredData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allResturant, setAllResturants] = useState([]);
  const [filteredResturants, setfilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user, setUser} = useContext(UserContext)
  
  useEffect(() => {
    getResturantList();
  }, []);
  
  async function getResturantList() {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    // Optional Chaining
    setAllResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setfilteredResturants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
      
      //Use online check weather u are online or not..
      const isOnline = useOnline();
      
      if (!isOnline) {
        return <h1>🔴 Offline, please check your internet connection!!</h1>;
      }
      
      
      const handleSearch = () => {
        const data = filteredData(searchText, allResturant);
        setfilteredResturants(data);
      };
      
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };
      
  // not render component (Early return)
  if (!allResturant) return null;


  return allResturant?.length === 0 ? (
    <div className="h-screen flex items-center justify-center mt-10"><Shimmer /></div>
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="p-2 m-2 focus:bg-slate-100"
          placeholder="Search"
          value={searchText}
          onChange={(elem) => {
            setSearchText(elem?.target?.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <button
          className="p-2 m-2 mt-24 bg-rose-200 hover:bg-purple-300 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
        <input value={user.name} onChange={
          e => setUser({
            ...user,
            name: e.target.value
          })
        }></input>
      </div>

      <div className="flex flex-wrap">
        {filteredResturants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.cloudinaryImageId}
            >
              <RestrauntCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
