import { IMG_CDN_URL } from "../assets/contants.js";

const RestaurantCard = (
    {
        name, 
        cloudinaryImageId, 
        cuisines, 
        avgRatingString, 
        costForTwo, 
        lastMileTravelString,
        locality, 
        deliveryTime
    }
    ) => {
        return (
            <div className="w-[200px] p-2 m-2 shadow-lg rounded-md overflow-hidden transition duration-300 transform hover:scale-105">
              <img src={IMG_CDN_URL + cloudinaryImageId} className="w-full h-32 object-cover rounded-t-md" alt={name} />
              <div className="p-3">
                <h2 className="font-bold text-xl">{name}</h2>
                {/* <h3 className="text-gray-600">{cuisines.join(", ")}</h3> */}
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-green-500">{avgRatingString}</span>
                  {/* <span className="text-gray-500">({reviewsCount} reviews)</span> */}
                </div>
                <p className="text-gray-700 mt-2">{locality}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-700">Cost For Two:</span>
                  <span className="font-bold text-red-500">{costForTwo}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  {/* <span className="text-gray-700">Delivery Time:</span> */}
                  {/* <span className="font-bold">{deliveryTime} mins</span> */}
                </div>
              </div>
            </div>
          );
          
};

export default RestaurantCard;