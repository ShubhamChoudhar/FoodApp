// Header
    //     Logo 
    //     Nav Items (Right Side)
    //     Cart
// Body
    //     Search Bar
    //     RestaurantList
    //     RestaurantCard
        //         Image
        //         Name
        //         Rating
        //         Cusines
// Footer 
    //     Links
    //     Copyrights

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";

const AppLayout = () => {
    return(
        <Provider store = {store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
        
   );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body/>
            },

            {
                path: "/about",
                element: <About/>
            },

            {
                path: "/contact",
                element: <Contact/>
            },

            {
                path: "/cart",
                element: <Cart/>
            },

            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router = {appRouter} />);