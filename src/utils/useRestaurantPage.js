import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../assets/contants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        try {
          const response = await fetch(RES_MENU_URL + id);
          const json = await response.json();

          console.log(json?.data);
    
          setRestaurant(json?.data?.cards[2]?.card?.card?.info);
          
        } 
        catch (error) {
          console.error("Error fetching restaurant information:", error);
        }
      }

      return restaurant;
};

export default useRestaurant;