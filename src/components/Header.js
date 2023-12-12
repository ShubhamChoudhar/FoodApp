import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/FlavorFiestaLogo.jpg';
import Login from './Login';
import { useSelector } from 'react-redux';

const Navbar = () => (
  <Link to="/">
    <img className = "h-24 p-2" alt = "Logo" src = {Logo} />
  </Link>
);

const Header = () => {
  const cartItems = useSelector(store => store.cart.items);
  return (
    <div className = "bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white p-4 shadow-lg rounded-sm flex justify-between items-center mb-2">
      <Navbar />

      <div className = "nav-items">
        <ul className = "flex space-x-4">
          <li>
            <Link to = "/" className = "hover:text-gray-300 text-lg">Home</Link>
          </li>
          <li>
            <Link to = "/about" className = "hover:text-gray-300 text-lg">About</Link>
          </li>
          <li>
            <Link to = "/contact" className = "hover:text-gray-300 text-lg">Contact</Link>
          </li>
          <li>
            <Link to = "/cart" className = "hover:text-gray-300 text-lg">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <Login />
    </div>
  );
};

export default Header;