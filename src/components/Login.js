import { useState, useContext } from "react";
import UserContext from "../utils/userContext";

const loggedInUser = () => {
    return true;
};

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    console.log(user)
    return (
      <div className = "flex flex-col items-center">
        {isLoggedIn ? (
          <>
            <h1 className = "mb-4">{user.name} 🟢</h1>
            <button
              onClick = {() => setIsLoggedIn(false)}
              className = "bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick = {() => setIsLoggedIn(true)}
            className = "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300 mt-4"
          >
            Login
          </button>
        )}
      </div>
    );
};

export default Login;