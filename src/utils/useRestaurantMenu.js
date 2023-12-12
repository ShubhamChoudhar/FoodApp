import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../assets/contants";

const useRestaurantMenu = (id) => {
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
      }, []);

      async function getRestaurantInfo() {
        try {

            const response = await fetch(RES_MENU_URL + id);
            const json = await response.json();
            // console.log(json?.data);
            const regularCards = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            if (regularCards) {
                const allItemNames = regularCards.slice(1).flatMap((card, i) => {
                  const itemCards = card?.card?.card?.itemCards || [];
                  return itemCards.map((item, j) => item?.card?.info || "Item Name Not Available");
                });
        
                setRestaurantMenu(allItemNames);
                // console.log("All Item Names:", allItemNames);
              } else {
                console.error("Regular cards data not available.");
              }
            } 
            catch (error) {
                console.error("Error fetching restaurant information:", error);
            }
      }

    return restaurantMenu;
    
};

export default useRestaurantMenu;