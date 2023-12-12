import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../assets/contants";
import useRestaurant from "../utils/useRestaurantPage";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();

const restaurant = useRestaurant(id);
const restaurantMenu = useRestaurantMenu(id);

const dispatch = useDispatch();

const handleAddItem = (item) => {
  dispatch(addItem(item))
}

return !restaurant ? (
  <ShimmerMenu />
) : (
  <div className = "flex">
    <div className = "bg-white p-8 rounded-lg shadow-lg h-fit ml-2">
      <h1 className = "text-3xl font-bold mb-4">{restaurant.name}</h1>
      <img
        src = {IMG_CDN_URL + restaurant.cloudinaryImageId}
        alt = {restaurant.name}
        className = "w-full h-auto max-w-md rounded-md mb-4" // Adjusted the max-width
      />

      <div className = "flex flex-col">
        <div className = "flex mb-2">
          <span className = "text-gray-700 font-semibold mr-2">Area:</span>
          <span>{restaurant.areaName}</span>
        </div>

        <div className = "flex mb-2">
          <span className = "text-gray-700 font-semibold mr-2">City:</span>
          <span>{restaurant.city}</span>
        </div>

        <div className = "flex mb-2">
          <span className = "text-gray-700 font-semibold mr-2">Cuisines:</span>
          <span>{restaurant.cuisines.join(", ")}</span>
        </div>

        <div className = "flex mb-2">
          <span className = "text-gray-700 font-semibold mr-2">Rating:</span>
          <span>{restaurant.avgRating}</span>
        </div>

        <div className = "flex mb-2">
          <span className = "text-gray-700 font-semibold mr-2">Cost For Two:</span>
          <span>{restaurant.costForTwoMessage}</span>
        </div>
      </div>
    </div>

    <div className = "mt-6 max-w-md mx-auto"> {/* Added max-width and centered the menu */}
      <h3 className = "text-2xl font-bold mb-4">Menu:</h3>
      <ul>
        {restaurantMenu.map((item, index) => (
          <li key = {index} className = "flex justify-between items-center border-b py-2">
            <span className = "flex-grow">{item.name} - 
            <button className = "p-2 m-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-1 rounded-full focus:outline-none focus:ring focus:border-blue-300" 
              onClick = {() => handleAddItem(item)}>Add Item</button></span>
            <span>
              {item.price !== undefined ? ((item.price) / 100).toFixed(2) : ((item.defaultPrice) / 100).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


};

export default RestaurantMenu;
