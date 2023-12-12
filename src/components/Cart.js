import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../assets/contants";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
  
    const handleClearCart = () => {
      dispatch(clearCart());
    };
  
    const handleRemoveItem = (index) => {
      dispatch(removeItem(index));
    };
  
    return (
        <div className = "m-2">
            <div className = "flex justify-between items-center">
                <h1 className = "font-bold p-2 m-2">Cart Items</h1>
                <button
                    className = "p-2 m-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-1 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                </button>
            </div>

            <div>
                {cartItems.map((item, index) => (
                <div key = {index} className = "flex items-center border-b mb-4 pb-4">
                    <div className = "flex items-center">
                        <img
                            src = {IMG_CDN_URL + item.imageId}
                            alt = "Food Image"
                            className = "w-full h-auto max-w-md rounded-md mr-4"
                        />

                        <div className = "flex flex-col">
                            <span className = "text-lg font-semibold">{item.name}</span>
                            <span className = "text-md">Description - {item.description}</span>
                            <span>
                                Price - {item.price !== undefined ? ((item.price) / 100).toFixed(2) : ((item.defaultPrice) / 100).toFixed(2)}
                            </span>
                            <button
                                className="m-1 p-2 w-fit bg-blue-500 hover:bg-blue-600 text-white rounded-full focus:outline-none focus:ring focus:border-blue-300"
                                onClick={() => {
                                handleRemoveItem(index);
                                }}
                            >
                                Remove Item
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <h1 className="text-2xl font-bold mt-4">
                Total Price - $
                {cartItems.reduce(
                (total, item) =>
                    total + (item.price !== undefined ? item.price : item.defaultPrice) / 100, 0).toFixed(2)}
            </h1>
        </div>
    );
  };  

export default Cart;