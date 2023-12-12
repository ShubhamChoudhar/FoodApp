import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RES_LIST_URL } from "../assets/contants.js";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import ErrorImage from "../assets/images/ErrorImage.jpg";

const Search = () => {
  // Searchtxt is a local state variable
  const [searchInput, setSearchInput] = useState(); // To create state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => { 
      //API call
      getRestaurants();
  }, []); // [] is empty.[] is for dependency thing. useeffect is dependent on something or not. If it empty it is not dependent on anything and will be rendered once.

  async function getRestaurants() {
      try {
          const data = await fetch(RES_LIST_URL);
          const json = await data.json();
        //   console.log(json?.data)
          setAllRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurants(json?.data?.success?.cards[3]?.gridWidget.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
          console.error("Error fetching restaurant data:", error);
      }
  }

  const isOnline = useOnline();

  if (!isOnline) {
      return (
          <div className = "flex flex-col items-center justify-center h-screen">
              <div className = "error-container p-8 bg-red-500 text-white rounded-lg shadow-lg">
                  <h1 className = "text-4xl">🔴 Offline</h1>
                  <p className = "mt-4">Please check your Internet connection and try again.</p>
                  {/* You can include an image or any other content related to the offline state */}
                  <img src = {ErrorImage} alt = "Error Image" className = "mt-4" />
              </div>
          </div>
      );
  }

  if(!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0)
  //     return <h1>No matching restaurant</h1>
  

  return (
      filteredRestaurants.length === 0) ? 
      (
          <Shimmer />
      ) :
      (
      <>
          <div className = "p-5 m-5 flex items-center">
              <input 
                  type = "text" 
                  className = "w-80 p-2 m-2 border-b-2 border-blue-500 focus:outline-none" 
                  placeholder = "Search" 
                  value = {searchInput} 
                  onChange = {(e) => {
                      setSearchInput(e.target.value);
                  }}
              />

              <button 
                  className = "p-2 m-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300" 
                  onClick = {() => {
                  //need to filter the data
                  const data = filterData(searchInput, allRestaurants);
                  //update the state
                  setFilteredRestaurants(data);
                  }}>Search
              </button>
          </div>
          <div className = "flex h-auto flex-wrap justify-between">
          {
              filteredRestaurants.map((restaurant) => {
                  return(
                     <Link 
                          to = {"/restaurant/" + restaurant.info.id} 
                          key = {restaurant.info.id}>
                          <RestaurantCard {...restaurant.info} />
                      </Link>
                  )
              })
          }
          </div>
      </>
      
  );
};


export default Search;
