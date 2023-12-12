import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className = "mt-2 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white py-8">
      <div className = "container mx-auto flex flex-wrap justify-between">

      <div className = "w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
        <Link to = "/about" className = "text-2xl font-bold mb-4">About Us</Link>
        <p className = "text-md">Savor the essence of FlavorFiesta, where each dish is a tale of taste and passion. Join us in the joy of exploring delightful flavors that dance on your palate. Welcome to a world where every bite is a celebration!</p>
      </div>

      <div className = "w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0 flex justify-center">
        <div>
          <Link to = "/contact" className = "text-2xl font-bold mb-4">Contact Us</Link>
          <p className = "text-md">Email: help@flavorfiesta.com</p>
          <p className = "text-md">Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className = "w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
        <h2 className = "text-2xl font-bold mb-4">Follow Us</h2>
        <div className = "flex space-x-4 justify-start">
          <Link to = "" className = "icon">
            <FontAwesomeIcon icon = {faFacebook} />
          </Link>
          <Link to = "" className = "icon">
            <FontAwesomeIcon icon = {faTwitter} />
          </Link>
          <Link to = "" className = "icon">
            <FontAwesomeIcon icon = {faInstagram} />
          </Link>
        </div>
      </div>

    </div>

    <div className="border-t border-white mt-8 pt-4 text-center">
      <p className="text-sm">&copy; 2023 Flavor Fiesta. All rights reserved.</p>
    </div>

  </footer>

  );
};

export default Footer;